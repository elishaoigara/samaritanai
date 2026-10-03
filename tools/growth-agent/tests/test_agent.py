import importlib.util
import os
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
from datetime import datetime, timezone, timedelta
spec=importlib.util.spec_from_file_location('growth',Path(__file__).resolve().parents[1]/'server.py')
a=importlib.util.module_from_spec(spec);spec.loader.exec_module(a)

class AgentTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory();a.DATA=Path(self.tmp.name);a.DB=a.DATA/'test.sqlite3'
        self.env=patch.dict(os.environ,{},clear=True);self.env.start();a.init()
    def tearDown(self):self.env.stop();self.tmp.cleanup()
    def post(self):return a.mutation('posts',{'title':'Website tips','caption':'Make enquiries easy.','channel':'instagram','format':'image','image_url':'https://example.com/image.jpg'})
    def ready(self):
        os.environ.update(IG_ACCESS_TOKEN='test-token',IG_USER_ID='123',IG_API_VERSION='v99.0',ENABLE_LIVE_PUBLISHING='true')
        a.configure({'paused':False})
    def test_plan_persists_labelled_templates(self):
        c=a.mutation('campaigns',{'name':'Website launch','audience':'Retailers','offer':'Websites'})
        result=a.campaign_plan(c['id']);self.assertEqual(result['origin'],'template');self.assertEqual(len(a.records('posts')),4)
        a.init();self.assertEqual(len(a.records('posts')),4)
        self.assertTrue(all(p['status']=='draft' for p in a.records('posts')))
    def test_edit_revokes_approval(self):
        p=self.post();a.approve(p['id']);p=a.mutation('posts',{'id':p['id'],'caption':'Changed claim'})
        self.assertEqual(p['status'],'draft');self.assertIsNone(p['approved_hash'])
    def test_paused_blocks_provider(self):
        p=self.post();a.approve(p['id'])
        with patch.object(a,'ig') as ig:
            with self.assertRaisesRegex(ValueError,'paused'):a.publish(p['id'])
            ig.assert_not_called()
    def test_successful_publish_only_once(self):
        self.ready();p=self.post();a.approve(p['id'])
        with patch.object(a,'ig',side_effect=[{'id':'container'},{'status_code':'FINISHED'},{'id':'published'}]) as ig:
            self.assertEqual(a.publish(p['id'])['status'],'published')
            with self.assertRaises(ValueError):a.publish(p['id'])
            self.assertEqual(ig.call_count,3)
    def test_unknown_outcome_never_retried(self):
        self.ready();p=self.post();a.approve(p['id'])
        with patch.object(a,'ig',side_effect=[{'id':'container'},{'status_code':'FINISHED'},ValueError('timeout')]):
            with self.assertRaises(ValueError):a.publish(p['id'])
        self.assertEqual(a.get('posts',p['id'])['status'],'needs_check')
        with self.assertRaises(ValueError):a.approve(p['id'])
        with self.assertRaises(ValueError):a.mutation('posts',{'id':p['id'],'caption':'retry'})
    def test_daily_limit_reserves_uncertain_outcomes(self):
        self.ready();a.configure({'max_daily_posts':1})
        p=self.post();p.update(status='needs_check',attempted_at=a.now());a.save('posts',p)
        other=self.post();a.approve(other['id'])
        with self.assertRaisesRegex(ValueError,'Daily'):a.publish(other['id'])
    def test_suppression_and_duplicate_handles(self):
        l=a.mutation('leads',{'name':'Real business','handle':'@Example','stage':'do_not_contact','follow_up':'2020-01-01'})
        with self.assertRaisesRegex(ValueError,'suppressed'):a.lead_draft(l['id'])
        self.assertEqual(a.report()['due_followups'],[])
        with self.assertRaisesRegex(ValueError,'already exists'):a.mutation('leads',{'name':'Duplicate','handle':'example'})
    def test_daily_run_idempotent(self):
        a.mutation('leads',{'name':'Business','follow_up':'2020-01-01'})
        a.agent_run();a.agent_run();self.assertEqual(len(a.records('tasks')),1)
    def test_autonomy_requires_owner_and_only_schedules_approved(self):
        with self.assertRaises(ValueError):a.configure({'mode':'autonomous'})
        self.ready();a.configure({'mode':'autonomous','autonomous_authorised':True,'max_daily_posts':1})
        p=self.post();a.approve(p['id']);q=self.post();a.approve(q['id']);draft=self.post()
        a.auto_schedule();p=a.get('posts',p['id']);q=a.get('posts',q['id'])
        self.assertNotEqual(p['scheduled_at'][:10],q['scheduled_at'][:10])
        self.assertEqual(p['approved_hash'],a.post_hash(p))
        self.assertNotIn('scheduled_at',a.get('posts',draft['id']))
    def test_future_schedule_not_published_early(self):
        self.ready();p=self.post();p=a.mutation('posts',{'id':p['id'],'scheduled_at':(datetime.now(timezone.utc)+timedelta(days=1)).isoformat()});a.approve(p['id'])
        with self.assertRaisesRegex(ValueError,'not arrived'):a.publish(p['id'])
    def test_restart_locks_in_flight_post(self):
        p=self.post();p['status']='publishing';a.save('posts',p);a.init();self.assertEqual(a.get('posts',p['id'])['status'],'needs_check')
    def test_invalid_ai_output_writes_no_posts(self):
        c=a.mutation('campaigns',{'name':'Test'})
        with patch.object(a,'generate',return_value=({'strategy':'s','posts':[{'title':'ok','caption':'ok'},{}]},'ai')):
            with self.assertRaises(ValueError):a.campaign_plan(c['id'])
        self.assertEqual(a.records('posts'),[])
    def test_private_urls_rejected(self):
        for u in ['http://example.com','https://127.0.0.1/a','https://localhost/a','https://user:pass@example.com/a','javascript:alert(1)']:
            with self.assertRaises(ValueError):a.safe_url(u)
    def test_research_without_key_honest_failure(self):
        with self.assertRaisesRegex(ValueError,'BRAVE_SEARCH'):a.research({'query':'businesses'})
    def test_ai_failure_does_not_claim_template_success(self):
        os.environ.update(GROQ_API_KEY='test',GROQ_MODEL='test')
        with patch.object(a,'remote_json',side_effect=ValueError('provider failed')):
            with self.assertRaisesRegex(ValueError,'AI drafting failed'):a.compose({'brief':'Website tips'})
        self.assertEqual(a.records('posts'),[]);self.assertEqual(a.records('runs')[0]['status'],'failed')
if __name__=='__main__':unittest.main()
