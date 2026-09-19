import { PageHero, Eyebrow, Icon } from "@/components/ui";
import ContactForm from "@/components/contact-form";
export const metadata = {
  title: "Let’s talk",
  description:
    "Tell Samaritan AI about your business, your idea or a workflow you want to improve. Start a practical conversation.",
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const query = await searchParams;
  const interest =
    typeof query.interest === "string" ? query.interest.slice(0, 200) : "";
  return (
    <>
      <PageHero
        label="Let’s start a conversation"
        title="What could work better?"
      >
        <p>
          A repetitive task. An ambitious idea. A customer experience you want
          to improve. We’d love to hear about it.
        </p>
      </PageHero>
      <section className="container contact-layout">
        <aside>
          <Eyebrow>Your first step</Eyebrow>
          <h2>
            Bring the challenge.
            <br />
            We’ll bring curiosity.
          </h2>
          <p>
            You don’t need a technical brief. A clear description of your
            business and the problem is a great place to start.
          </p>
          <ol className="contact-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Tell us what’s on your mind</h3>
                <p>
                  Share your goal, current tools and any timeline you have in
                  mind.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>We explore the fit</h3>
                <p>
                  We review your enquiry and reply with questions or a suggested
                  conversation.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Agree a sensible next step</h3>
                <p>
                  A discovery session, an audit or a focused project proposal.
                </p>
              </div>
            </li>
          </ol>
          <div className="contact-location">
            <Icon name="globe" />
            <div>
              <strong>Based in Nairobi, Kenya</strong>
              <p>
                Remote-friendly collaboration.
                <br />
                East African ambition.
              </p>
            </div>
          </div>
        </aside>
        <ContactForm initialInterest={interest} />
      </section>
    </>
  );
}
