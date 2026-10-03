# Samaritan Growth Desk

A private, local-first marketing operations agent for Samaritan AI & Software. Python 3.10+; no third-party packages. Stored separately from the public Next.js website. This is a runnable first version, not a fully connected marketing service.

## Start

```bash
cd tools/growth-agent
python3 server.py
```

Windows: double-click `start.bat`, or run `python server.py` (or `py server.py`). macOS/Linux can run `./start.sh`. Open the printed `http://127.0.0.1:8787` address and enter the password shown in the terminal. Keep the process running for scheduled work. The server binds only to the local computer. It does not run inside Vercel.

Set `GROWTH_PASSWORD` before startup to retain your password across restarts. Otherwise a new random password is printed at each startup. Sessions expire after eight hours. Never expose this HTTP server through a public tunnel. Remote hosting requires HTTPS, production authentication, secret management, backups and a durable worker; these are not included.

## What works

- Campaign briefs, weekly plans and content drafts linked to campaigns.
- AI generation through Groq when configured, with clear template mode otherwise.
- Instagram, Facebook and LinkedIn copy; blog/email drafts and Reel scripts for manual export.
- Branded JPEG creative generation and download in the browser.
- Public web research through Brave Search when configured. Results retain source links; no claim that missing search results prove no website exists.
- Prospect pipeline, website verification notes, deduplication by Instagram username, deal values, follow-up dates and do-not-contact suppression.
- Personal introduction drafts and replies to manually pasted incoming enquiries. No cold-DM sending.
- Content approval; edits invalidate approval. Calendar publishing and autonomous scheduling of explicitly approved content.
- Instagram single-image publishing adapter using Instagram Login credentials, with media processing, daily caps and uncertain-outcome handling.
- Daily internal agent run creates due follow-up tasks and a report; daily run is idempotent.
- Dashboard, activity log, manual deal reports and JSON export. SQLite persists data across restarts.

## Deliberate connection boundaries

No social accounts, AI providers or research services are connected by default. The Settings badges show configuration presence, not verified connection health. There is no fake OAuth button. Account authorisation must be performed through the provider's developer setup; tokens are configured server-side.

Direct publishing supports Instagram single-image posts only. Carousels, Reels uploads, Stories, Facebook/LinkedIn publishing, social analytics ingestion, automatic DM inbox/webhooks, email delivery and paid advertising execution are not implemented. Their content can be drafted, but the UI must not represent them as connected channels. Lead/revenue reports use manually recorded information, not payment verification or automatic attribution. No automatic website scraping, email harvesting or unrestricted Instagram discovery.

## Connect AI and research

Environment variables are read at startup. `.env.example` documents them but is not loaded automatically.

macOS/Linux:

```bash
export GROQ_API_KEY='your-key'
export GROQ_MODEL='a-current-json-capable-model'
export BRAVE_SEARCH_API_KEY='your-search-key'
python3 server.py
```

PowerShell:

```powershell
$env:GROQ_API_KEY = 'your-key'
$env:GROQ_MODEL = 'a-current-json-capable-model'
$env:BRAVE_SEARCH_API_KEY = 'your-search-key'
python server.py
```

Groq receives the supplied brand brief and the relevant campaign/prospect context when you request a draft; avoid adding unnecessary personal or confidential data. Daily AI call limits count failed attempts too. Provider credits and billing are your responsibility. Template mode is deterministic and clearly labelled; it does not simulate AI research or claim to have tailored content intelligently. Research runs only when requested.

## Connect Instagram

Use a Professional account and Meta's **Instagram API with Instagram Login**. Obtain your own account ID and authorised token with the required content-publishing permission through Meta's current developer setup. App review/access requirements depend on your app and accounts. This app does not implement an OAuth callback or manage token renewal.

Set `IG_USER_ID`, `IG_ACCESS_TOKEN`, and a currently supported `IG_API_VERSION` such as the version shown in your Meta dashboard. Set `ENABLE_LIVE_PUBLISHING=true` only when ready. No API version or token is guessed. Secrets never go into browser storage or exports.

1. Create/edit a post with channel `instagram`, format `image`, and caption.
2. Download the generated JPEG or use your own suitable image. Host it at a public HTTPS URL that Meta can fetch; put that URL in the post. The agent itself does not upload image files to public storage.
3. Review and approve the exact post. Edits reset approval.
4. Resume publishing in the app.
5. Use **Publish now**, or select Calendar mode and set a schedule. Browser local times are stored in UTC. Daily limits reset on UTC boundaries.
6. Autonomous mode additionally assigns times to approved, unscheduled image posts. It never auto-approves fresh AI content. Owner authorisation is required in Settings. This is bounded autonomy, not unsupervised end-to-end generation and publication.

Publishing is paused on first installation. A pause stops future requests, not an already in-flight provider request. An ambiguous publication response or restart during publishing becomes `needs_check`; it is never blindly retried. Check Instagram directly. After confirming the result, create a new draft only if the original was not published. Failed pre-publication posts must be approved again. Daily limits count uncertain outcomes.

Provider docs:
- https://console.groq.com/docs/openai
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/content-publishing
- https://api-dashboard.search.brave.com/app/documentation/web-search/get-started

## Data and backups

`data/growth.sqlite3` stores campaigns, drafts, prospects, tasks, settings and logs, and is ignored by Git. JSON export excludes environment secrets. Exported prospect information remains private business data: store it securely. For a complete restorable backup, stop the server and copy the entire `data` directory; restore that directory while the server is stopped. JSON export is for portability and inspection; there is currently no JSON import UI.

The server has local password authentication, same-origin mutation checks, host validation, a restrictive browser policy, server-side validation, suppressed-lead checks and read-only audit records. It is a single-owner local application, not a hardened multi-tenant service. Anyone with OS access to your files can read the database.

## Test

```bash
python3 -m unittest discover -s tools/growth-agent/tests -v
```

Tests use temporary databases and mocked external providers. They must never publish real posts or send messages.
