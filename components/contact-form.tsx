"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Download } from "lucide-react";
export default function ContactForm({
  initialInterest,
}: {
  initialInterest: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [brief, setBrief] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setBrief(
      `Samaritan AI — Project enquiry\n\nName: ${data.name}\nEmail: ${data.email}\nBusiness: ${data.company}\nInterest: ${data.interest}\nBudget: ${data.budget}\n\n${data.message}`,
    );
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error || "Your enquiry could not be sent. Please try again.",
        );
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Your enquiry could not be sent. Please try again.",
      );
      setStatus("error");
    }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "samaritan-project-brief.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  if (status === "success")
    return (
      <div className="contact-success" role="status">
        <CheckCircle2 size={42} />
        <h2>Your enquiry is on its way.</h2>
        <p>
          Thank you for telling us about your business. We’ll review your
          message and reply to the email you provided.
        </p>
        <button
          className="button button-outline"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </button>
      </div>
    );
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-heading">
        <h2>Tell us a little about your idea.</h2>
        <p>Fields marked * are required.</p>
      </div>
      <div className="form-grid">
        <label>
          Your name *
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Full name"
          />
        </label>
        <label>
          Email address *
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@yourbusiness.com"
          />
        </label>
      </div>
      <label>
        Business or organisation
        <input
          name="company"
          autoComplete="organization"
          maxLength={160}
          placeholder="Your business name"
        />
      </label>
      <label>
        What can we help with?
        <input
          name="interest"
          list="interests"
          defaultValue={initialInterest}
          maxLength={200}
          placeholder="Choose a service or describe your idea"
        />
        <datalist id="interests">
          {[
            "AI agents & assistants",
            "Business automation",
            "Websites & custom software",
            "Data & decision intelligence",
            "AI advisory & training",
            "Support & managed services",
            "Product design partnership",
            "Not sure yet",
          ].map((x) => (
            <option key={x} value={x} />
          ))}
        </datalist>
      </label>
      <label>
        Indicative budget
        <select name="budget" defaultValue="Not decided yet">
          <option>Not decided yet</option>
          <option>Under KES 100,000</option>
          <option>KES 100,000–300,000</option>
          <option>KES 300,000–1,000,000</option>
          <option>Over KES 1,000,000</option>
        </select>
      </label>
      <label>
        What would you like to improve? *
        <textarea
          name="message"
          rows={5}
          required
          minLength={20}
          maxLength={5000}
          placeholder="Tell us about your business, the challenge and what a better outcome would look like. (At least 20 characters.)"
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I agree to Samaritan AI using these details to respond to my enquiry,
          as explained in the <a href="/privacy">privacy notice</a>. *
        </span>
      </label>
      <p className="fine-print">
        Please don’t include passwords, payment details, patient records or
        other sensitive information.
      </p>
      {status === "error" && (
        <div className="form-error" role="alert">
          <p>{error}</p>
          <button type="button" onClick={download}>
            <Download size={16} /> Save your enquiry as a text file
          </button>
        </div>
      )}
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending your enquiry…" : "Send enquiry"}
        <ArrowUpRight size={18} />
      </button>
      <p className="fine-print">
        A conversation comes first. Submitting this form does not commit you to
        a project.
      </p>
    </form>
  );
}
