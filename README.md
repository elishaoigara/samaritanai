# Samaritan AI & Software

A complete responsive company website for Samaritan AI, built with Next.js App Router, React, TypeScript and Lucide icons. Prepared for Vercel.

## Run locally

Use Node.js 22 or newer.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. `npm run build` produces the production build; `npm start` runs it. `npm run typecheck` checks TypeScript.

## Deploy to Vercel

1. Import `elishaoigara/samaritanai` into Vercel.
2. Keep the **Next.js** framework preset and repository root directory. Use Node.js 22 or 24.
3. Keep the default build command (`npm run build`) and output settings. No custom output directory is needed.
4. Add the environment variables below in the Vercel project settings.
5. Deploy `main`. Connect your custom domain when ready, update `NEXT_PUBLIC_SITE_URL`, then redeploy.

| Variable               | Purpose                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Your actual public URL, including `https://`. Used for metadata and the sitemap. If omitted on Vercel, the project production URL is used. |
| `RESEND_API_KEY`       | Server-only Resend key for enquiry delivery.                                                                                               |
| `CONTACT_FROM_EMAIL`   | Sender address on a domain verified in Resend, e.g. `Samaritan AI <website@your-verified-domain>`; replace with your real sender.          |
| `CONTACT_TO_EMAIL`     | The real inbox that should receive enquiries.                                                                                              |

Do not prefix email credentials with `NEXT_PUBLIC_`. No database is required. No contact address, phone number, custom domain, incorporation status or certification has been invented.

The contact form validates in the browser and on the server. It only displays success after the email provider accepts the message. Without the email settings it returns a clear unavailable state, preserves entered details and lets the visitor download their enquiry. Configure these values **before inviting public enquiries**, and make one authorised end-to-end test from the deployed domain. Delivery acceptance does not guarantee inbox placement; check your Resend delivery logs.

The endpoint includes same-origin checking, bounded request size, a honeypot, consent validation, field limits, timeouts and a best-effort per-instance throttle (5 sends / 10 minutes / IP). Serverless instances do not share the throttle: configure a Vercel Firewall rate-limit rule for `POST /api/contact` before a public marketing launch. The throttle temporarily holds IP addresses in memory and logs no enquiry contents. Do not treat this as a distributed abuse-prevention service.

## Pages

- Home: positioning, workflow preview, services, local context, industries, process, starting prices and FAQs.
- Solutions: 21 service areas, each with its own detail page.
- Industries: retail, SACCOs, education, healthcare, hospitality, logistics, NGOs and enterprise/public sector.
- Product roadmap: SACCO Core, School, Clinic, Stay, Fleet and Chama, explicitly marked planned.
- Pricing: three assistant tiers, filterable service catalogue, specialist scope and cost notes.
- About: mission, principles and the founder.
- What’s possible: six illustrative use cases, not invented customer case studies.
- Demo: interactive, scripted retail, clinic and hospitality journeys; no AI API or live business actions.
- Contact: interest-prefilled enquiry form and server-side email route.
- Privacy, website terms, a custom 404, robots.txt and sitemap.xml.

## Content and brand

Content is adapted from the supplied August 2026 company blueprint and the accompanying launch discussion. Public prices remain **indicative**, not binding quotations. Internal market forecasts, financial projections, hiring targets and private operating plans are deliberately not published.

Edit `lib/content.ts` for services, industries, planned products, pricing and FAQs. Page-specific narrative lives in `app/`. Shared UI is in `components/`. Design tokens, desktop/mobile layouts and reduced-motion support are in `app/globals.css` and `app/theme.css`. The original simple monogram is in `public/icon.svg`.

The site does not claim paid customers, deployment results, partnerships, legal registration, regulatory certification or product availability that the source files do not establish. Product pilots and specialist compliance work need separate scope and confirmation.

The demo is intentionally scripted and labelled; refresh clears it. There is no live chatbot, payment initiation, booking engine, customer login or newsletter subscription. These require separate production systems and credentials.

The visual theme uses cobalt-blue accents, soft pearl-blue panels and off-white backgrounds, with editorial layouts and squared components. Typography is self-hosted DM Sans and Space Grotesk. Font licenses are in `public/fonts/`. No advertising or analytics scripts are included.

## Launch checklist

- Confirm final public service scope and indicative prices.
- Set the actual domain and all email-delivery environment variables.
- Verify the sender domain and test receipt of an authorised enquiry.
- Review privacy/website terms against your actual registered business and operating practices.
- Configure the contact endpoint’s production firewall limit.
- Add genuine case studies, contact channels and social accounts when available.

## Verification

Production build and TypeScript validation are the main build gates. Browser checks cover desktop/mobile rendering, internal links, pricing filters, demo scenarios/reset, mobile navigation, enquiry prefill and honest API failure states. Live email receipt requires your configured delivery credentials and is not claimed by local checks.

### Expanded business solutions

The service catalogue in `lib/content.ts` now covers 21 solution areas, with business-goal tags for the searchable `/solutions` explorer. The catalogue also generates detail pages, sitemap entries, related solutions and contact-form suggestions. New custom services use proposal-based pricing; sector products remain a separate planned roadmap.

The homepage includes an interactive, explicitly illustrative workflow preview (sales, operations and customer service). Its figures and cards do not represent live customer activity. `app/business.css` contains the responsive visual refinement over the existing base theme, retaining cobalt and pearl surfaces.

### Marketing & Customer Growth

`/solutions/marketing-growth` groups seven services: email/WhatsApp campaigns, loyalty rewards, referrals, feedback/reviews, AI content workflows, campaign landing pages and marketing dashboards. Each has a detail page, a marketing goal tag, a sitemap entry and a contact suggestion. They are custom project offerings with proposal-based pricing; no campaign sending, publishing or customer tracking is enabled by adding these pages.

## Planned domain: samaritandigital.com

The public brand remains **Samaritan AI & Software**. The header/footer descriptor and search titles retain that AI identity. `lib/site.ts` centralises the brand and URL used by page canonicals, Open Graph URLs, the sitemap and robots.txt.

The domain is planned, not verified as purchased or connected. The code continues to use the existing Vercel production URL until `NEXT_PUBLIC_SITE_URL` is set. Do not set production to localhost or an unconnected domain. No redirect forces visitors onto an unpurchased domain, and no mailbox is assumed to exist.

After purchase:

1. In Vercel, open the **samaritanai project → Settings → Domains**. Add `samaritandigital.com` and `www.samaritandigital.com` to this project.
2. Use the DNS records displayed for that project. Wait for valid domain configuration and HTTPS. Preserve existing mail records if present.
3. Choose `samaritandigital.com` as the primary address and configure the `www` domain to redirect to it in Vercel.
4. Set **Production** `NEXT_PUBLIC_SITE_URL=https://samaritandigital.com` and redeploy. For Preview, use the existing deployment configuration until ready; do not copy the localhost example into Production.
5. Verify the home page and a solution detail page, their self-referencing canonical URLs, `/sitemap.xml` and `/robots.txt`. Submit the sitemap through a verified Search Console property when ready.
6. Set up the chosen mailbox provider separately. Configure Resend's verified sender and the real recipient inbox for the enquiry form, then perform an authorised delivery test.

If a different domain is selected, change the production URL setting and the planned-domain documentation. Relative navigation and contact API requests require no changes. Official setup guide: https://vercel.com/docs/domains/working-with-domains/add-a-domain
