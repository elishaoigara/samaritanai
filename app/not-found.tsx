import { PageHero, Button } from "@/components/ui";
export default function NotFound() {
  return (
    <PageHero label="404 · A small detour" title="This page isn’t here.">
      <p>Let’s get you back to something useful.</p>
      <div className="button-row">
        <Button href="/">Back to Samaritan AI</Button>
        <Button href="/solutions" secondary>
          Explore our solutions
        </Button>
      </div>
    </PageHero>
  );
}
