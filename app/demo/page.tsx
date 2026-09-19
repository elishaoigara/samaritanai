import { PageHero } from "@/components/ui";
import AssistantDemo from "@/components/assistant-demo";
export const metadata = {
  title: "Explore the assistant demo",
  description:
    "Try a scripted preview of English and Swahili customer journeys for retail, clinic administration and hospitality.",
};
export default function Demo() {
  return (
    <>
      <PageHero
        label="A small preview of what’s possible"
        title="Meet your next helpful colleague."
      >
        <p>
          Explore how an assistant could support your customers and your team.
          Pick a scenario and try a conversation.
        </p>
      </PageHero>
      <section className="container demo-section">
        <AssistantDemo />
      </section>
    </>
  );
}
