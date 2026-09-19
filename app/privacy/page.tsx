import { PageHero } from "@/components/ui";
export const metadata = { title: "Privacy notice" };
export default function Privacy() {
  return (
    <>
      <PageHero label="Your information" title="Privacy, in plain language.">
        <p>
          This notice explains how the Samaritan AI website handles information
          you choose to share.
        </p>
      </PageHero>
      <article className="container prose">
        <h2>Enquiries</h2>
        <p>
          The contact form asks for your name, email, optional business details,
          area of interest, budget and a message. We use the information to
          respond to your enquiry and discuss a possible project. Please do not
          submit sensitive personal information or credentials.
        </p>
        <h2>Where information goes</h2>
        <p>
          When email delivery is configured, enquiries pass through our website
          hosting provider, Vercel, and email provider, Resend, to our receiving
          inbox. These providers may process data outside Kenya. We do not sell
          enquiry information or use this form to enrol you in a marketing list.
        </p>
        <h2>Demo conversations</h2>
        <p>
          The assistant demo is scripted and runs in your browser. Its messages
          are not submitted to an AI provider or saved by the application.
          Refreshing the page clears the conversation.
        </p>
        <h2>Technical information</h2>
        <p>
          This website does not add advertising trackers, analytics scripts or
          non-essential tracking cookies. The enquiry endpoint temporarily holds
          an IP address in server memory to limit repeated sends. Our hosting
          and email providers may process technical logs to operate their
          services and protect against misuse.
        </p>
        <h2>Retention and requests</h2>
        <p>
          Enquiry information is used for responding and any subsequent business
          correspondence. You can request access, correction or deletion by
          replying to our correspondence or sending a request through the
          contact form. Retention for a contracted project will be addressed in
          the project agreement.
        </p>
        <h2>Project data is separate</h2>
        <p>
          This public website is not a place to upload client records. Any
          future work involving customer, employee, financial or health data
          requires a separately agreed scope, access controls and data-handling
          arrangements.
        </p>
        <p>
          <a href="/contact">Contact us about your information →</a>
        </p>
      </article>
    </>
  );
}
