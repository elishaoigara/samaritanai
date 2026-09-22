export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  description: string;
  features: string[];
  price: string;
  recurring?: string;
  label: string;
  outcome: string;
  deliverables: string[];
  goals: string[];
};
export const solutionGoals = [
  { id: "all", name: "All solutions" },
  { id: "sell", name: "Grow sales" },
  { id: "marketing", name: "Marketing & growth" },
  { id: "serve", name: "Serve customers" },
  { id: "operate", name: "Simplify operations" },
  { id: "understand", name: "Make better decisions" },
  { id: "build", name: "Build & launch" },
];
export const services: Service[] = [
  {
    slug: "ai-agents",
    goals: ["serve", "sell"],
    name: "AI agents & assistants",
    short: "Good conversations. Better business.",
    icon: "messages",
    description:
      "Help customers get answers, discover your services and take the next step, on WhatsApp and your website.",
    features: [
      "English and Swahili knowledge-based answers",
      "Lead qualification, bookings and order enquiries",
      "Human handover for sensitive or complex requests",
      "CRM updates, conversation review and improvement",
    ],
    price: "65,000",
    recurring: "12,000",
    label: "Flagship offer",
    outcome:
      "Give your team more time for the conversations that need a human.",
    deliverables: [
      "A scoped assistant trained on approved business information",
      "Channel setup and agreed business integrations",
      "A tested handover path and clear escalation rules",
      "A launch guide, team training and an ongoing care plan",
    ],
  },
  {
    slug: "automation",
    goals: ["operate"],
    name: "Business automation",
    short: "Less busywork. More progress.",
    icon: "workflow",
    description:
      "Connect your tools and turn repetitive, manual processes into reliable workflows your team can actually use.",
    features: [
      "Invoice and document extraction with human review",
      "Customer follow-ups and lead routing",
      "M-Pesa, accounting, ERP and CRM integrations",
      "Internal reporting and document search",
    ],
    price: "80,000",
    label: "2–4 week sprints",
    outcome:
      "Start with one frustrating process. Make it work better from end to end.",
    deliverables: [
      "A map of the current process and its bottlenecks",
      "A fixed-scope implementation plan and acceptance criteria",
      "An automated workflow with error handling and review points",
      "Documentation, team handover and a support option",
    ],
  },
  {
    slug: "software",
    goals: ["build", "sell"],
    name: "Websites & custom software",
    short: "Built around how you work.",
    icon: "code",
    description:
      "From a clear, fast business website to a custom portal, online store or internal application, build a digital foundation that fits.",
    features: [
      "Business websites and corporate portals",
      "E-commerce with M-Pesa and delivery integrations",
      "Web applications, customer portals and MVPs",
      "Mobile-friendly UX, performance and SEO foundations",
    ],
    price: "45,000",
    label: "From websites to platforms",
    outcome:
      "Give customers a better experience and your business room to grow.",
    deliverables: [
      "Agreed user journeys, designs and project scope",
      "A responsive, accessible website or application",
      "Tested integrations and deployment setup",
      "Source-code handover terms and maintenance options",
    ],
  },
  {
    slug: "data",
    goals: ["understand"],
    name: "Data & decision intelligence",
    short: "Turn scattered data into clarity.",
    icon: "chart",
    description:
      "Bring your business information together so you can see what is happening and make better-informed decisions.",
    features: [
      "Sales, cash-flow, stock and branch dashboards",
      "Data cleanup, migrations and warehouses",
      "Demand, revenue and inventory forecasting",
      "Custom machine learning and anomaly detection",
    ],
    price: "120,000",
    label: "Decisions, with context",
    outcome: "Understand your numbers before you decide what happens next.",
    deliverables: [
      "A review of data availability, quality and access",
      "Agreed metrics and a connected dashboard or model",
      "Validation against your source records",
      "Documentation of limitations and practical team training",
    ],
  },
  {
    slug: "advisory",
    goals: ["understand", "build"],
    name: "AI advisory & training",
    short: "A confident first step into AI.",
    icon: "compass",
    description:
      "Work out where AI can help, what your team needs and which opportunities are worth investing in first.",
    features: [
      "AI-readiness audits and implementation roadmaps",
      "Executive briefings and strategy workshops",
      "Practical, role-based team bootcamps",
      "Data governance and compliance implementation support",
    ],
    price: "25,000",
    label: "Start with a clear plan",
    outcome: "Move from AI curiosity to a practical, prioritised action plan.",
    deliverables: [
      "A review of workflows, data and organisational readiness",
      "Prioritised opportunities with scope and cost considerations",
      "A practical roadmap and responsible-use guidance",
      "Hands-on learning matched to your team’s roles",
    ],
  },
  {
    slug: "managed-services",
    goals: ["operate", "build"],
    name: "Support & managed services",
    short: "Keep improving after launch.",
    icon: "shield",
    description:
      "Keep your software useful, supported and up to date, with a care plan that matches your operations.",
    features: [
      "Application maintenance and security updates",
      "Hosting and cloud cost management",
      "Assistant content reviews and improvements",
      "Performance, SEO and analytics reporting",
    ],
    price: "",
    label: "Ongoing partnership",
    outcome:
      "A launch is a starting point. Make sure your tools keep working for you.",
    deliverables: [
      "A documented support scope and escalation process",
      "Agreed service windows and response targets",
      "Maintenance, monitoring and review schedules",
      "A prioritised improvement backlog",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce & online stores",
    short: "Make your next sale easier.",
    icon: "cart",
    goals: ["sell", "build"],
    description:
      "Give customers a clear path from discovering your products to checkout, payment and delivery.",
    label: "Sell online",
    outcome:
      "Connect your catalogue, checkout and fulfilment in one customer journey.",
    features: [
      "Product catalogues, search and mobile storefronts",
      "M-Pesa and card payment integrations",
      "Order management and delivery status updates",
      "Abandoned checkout follow-ups with customer consent",
    ],
    deliverables: [
      "Store design and agreed catalogue setup",
      "Checkout integration with payment-provider test scenarios",
      "Order handling and fulfilment workflows",
      "Store management training and launch checklist",
    ],
    price: "",
  },
  {
    slug: "pos-inventory",
    name: "POS & inventory systems",
    short: "Know what is selling. Know what is in stock.",
    icon: "store",
    goals: ["sell", "operate"],
    description:
      "Bring checkout, product records, stock movements and branch reporting into a system built around your retail operations.",
    label: "Retail operations",
    outcome:
      "Give cashiers, stock teams and managers a shared view of the business.",
    features: [
      "Cashier checkout and receipt workflows",
      "Stock receiving, adjustments and low-stock alerts",
      "Role-based staff and branch access",
      "Sales, returns and inventory reporting",
    ],
    deliverables: [
      "A review of devices, connectivity and checkout needs",
      "Product import and opening-stock validation",
      "Tested sales, returns and stock-movement scenarios",
      "Cashier training and an agreed rollout plan",
    ],
    price: "",
  },
  {
    slug: "crm-sales",
    name: "CRM & sales workflows",
    short: "Keep good opportunities moving.",
    icon: "users",
    goals: ["sell", "operate"],
    description:
      "Organise leads, customer history and follow-ups so your team can see who needs attention and what happens next.",
    label: "Customer relationships",
    outcome:
      "Build a sales process your team can follow without relying on scattered notes.",
    features: [
      "Lead capture from forms and approved channels",
      "Sales pipelines, ownership and task reminders",
      "Quotes, proposal tracking and follow-up workflows",
      "Pipeline dashboards and customer activity history",
    ],
    deliverables: [
      "A mapped sales process and agreed pipeline stages",
      "CRM configuration or a scoped custom workspace",
      "Cleaned lead import and permission setup",
      "Team training and reporting definitions",
    ],
    price: "",
  },
  {
    slug: "booking",
    name: "Bookings & service scheduling",
    short: "Make time for better service.",
    icon: "calendar",
    goals: ["serve", "operate"],
    description:
      "Help customers request appointments while your team manages availability, confirmations and changes in one place.",
    label: "Appointments & reservations",
    outcome: "Turn back-and-forth scheduling into a clear booking journey.",
    features: [
      "Appointment and reservation request flows",
      "Staff availability and calendar integrations",
      "Confirmation, reminder and cancellation workflows",
      "Booking deposits where payment integration is agreed",
    ],
    deliverables: [
      "Booking rules and customer journey design",
      "Calendar and notification setup",
      "Tests for conflicting bookings, cancellations and time zones",
      "Staff handover and booking administration guide",
    ],
    price: "",
  },
  {
    slug: "payments",
    name: "Payments & reconciliation",
    short: "Connect each payment to the right record.",
    icon: "wallet",
    goals: ["sell", "operate"],
    description:
      "Connect approved payment providers to your orders and records, with clear checks for pending, failed and successful payments.",
    label: "Connected payments",
    outcome: "Spend less time matching transactions across separate systems.",
    features: [
      "M-Pesa and card checkout integrations",
      "Payment status, receipts and refund request workflows",
      "Reconciliation with order or invoice records",
      "Exception queues and accounting exports",
    ],
    deliverables: [
      "Provider access and payment-flow review",
      "Verified callbacks and duplicate-event handling",
      "Sandbox tests for failure and reconciliation scenarios",
      "Operations guide and agreed reconciliation reports",
    ],
    price: "",
  },
  {
    slug: "portals",
    name: "Customer & partner portals",
    short: "Give people a simpler way to work with you.",
    icon: "layout",
    goals: ["serve", "build"],
    description:
      "Create a secure place for customers, members or partners to submit requests, share documents and track progress.",
    label: "Self-service experiences",
    outcome:
      "Replace repeated status enquiries with a clear view of the next step.",
    features: [
      "Customer, supplier or member accounts",
      "Requests, document uploads and status tracking",
      "Role-based access and activity records",
      "Internal review and notification workflows",
    ],
    deliverables: [
      "User roles and permission model",
      "Portal design and agreed workflow implementation",
      "Access-control and file-handling checks",
      "Administrator training and handover documentation",
    ],
    price: "",
  },
  {
    slug: "knowledge",
    name: "Knowledge & document systems",
    short: "Put your business knowledge within reach.",
    icon: "book",
    goals: ["serve", "operate"],
    description:
      "Help staff find approved answers, organise documents and keep shared knowledge useful as your business changes.",
    label: "Team knowledge",
    outcome:
      "Make it easier to find the right information and see where it came from.",
    features: [
      "Searchable policies, guides and internal documents",
      "AI answers with references to approved sources",
      "Document intake, tagging and review workflows",
      "Access permissions and content ownership",
    ],
    deliverables: [
      "Source review and document preparation",
      "Search or assistant setup with source references",
      "Answer-quality checks and access testing",
      "A content review process and administrator training",
    ],
    price: "",
  },
  {
    slug: "people-operations",
    name: "People & admin workflows",
    short: "Give your team a smoother working day.",
    icon: "briefcase",
    goals: ["operate"],
    description:
      "Simplify recruitment administration, employee onboarding and routine requests with clear ownership and approval steps.",
    label: "People & administration",
    outcome:
      "Bring everyday team requests into a process people can understand.",
    features: [
      "Application intake and interview scheduling",
      "Onboarding checklists and document collection",
      "Leave, expense and equipment request workflows",
      "Approval queues and staff administration reports",
    ],
    deliverables: [
      "A map of roles, requests and approval paths",
      "Forms, workflow configuration and notifications",
      "Permission testing and human review checkpoints",
      "Administrator training and process documentation",
    ],
    price: "",
  },
  {
    slug: "customer-campaigns",
    name: "Email & WhatsApp campaigns",
    short: "Stay in touch with a purpose.",
    icon: "messages",
    description:
      "Build opt-in customer messaging around useful moments: a welcome, a relevant promotion or a reason to return.",
    features: [
      "Audience segments and recorded messaging preferences",
      "Welcome, promotional and re-engagement sequences",
      "Unsubscribe and opt-out handling across agreed channels",
      "Delivery and engagement reporting where providers support it",
    ],
    deliverables: [
      "A campaign plan with agreed audiences and send triggers",
      "Channel setup, templates and consent checks",
      "Test sends to approved test recipients and suppression checks",
      "Team training, message approval steps and reporting setup",
    ],
    goals: ["marketing", "sell"],
    price: "",
    label: "Marketing & customer growth",
    outcome: "Stay in touch with a purpose.",
  },
  {
    slug: "loyalty-rewards",
    name: "Loyalty & rewards systems",
    short: "Give customers a reason to return.",
    icon: "gift",
    description:
      "Create a rewards programme that fits your margins and gives customers a clear view of the benefits they can earn.",
    features: [
      "Points, membership tiers and repeat-purchase benefits",
      "Voucher issuance, expiry and redemption rules",
      "Customer reward balances and transaction history",
      "POS or online-store connections with duplicate-event checks",
    ],
    deliverables: [
      "Agreed earning, redemption and refund-adjustment rules",
      "Customer and administrator reward workflows",
      "Tests for expiry, duplicate claims and reversed purchases",
      "Staff training and a programme management guide",
    ],
    goals: ["marketing", "sell"],
    price: "",
    label: "Marketing & customer growth",
    outcome: "Give customers a reason to return.",
  },
  {
    slug: "referral-programmes",
    name: "Referral programmes",
    short: "Make recommendations easier to reward.",
    icon: "users",
    description:
      "Help customers introduce your business to others with traceable referrals and rewards your team can review.",
    features: [
      "Referral links or codes and campaign tracking",
      "Qualifying purchase or enquiry rules",
      "Reward approval, fulfilment and status tracking",
      "Duplicate, self-referral and suspicious-claim review",
    ],
    deliverables: [
      "An agreed referral journey and qualification rules",
      "Referral tracking connected to the chosen customer journey",
      "An approval queue and reward audit trail",
      "Programme instructions and reporting handover",
    ],
    goals: ["marketing", "sell"],
    price: "",
    label: "Marketing & customer growth",
    outcome: "Make recommendations easier to reward.",
  },
  {
    slug: "customer-feedback",
    name: "Customer feedback & reviews",
    short: "Listen well. Make the next experience better.",
    icon: "feedback",
    description:
      "Collect useful feedback after a purchase or appointment and route issues to the people who can resolve them.",
    features: [
      "Post-purchase and post-appointment surveys",
      "Consistent review requests without filtering by sentiment",
      "Complaint routing, ownership and follow-up reminders",
      "Feedback themes and satisfaction reporting",
    ],
    deliverables: [
      "Survey design and agreed request timing",
      "Feedback collection and staff notification workflows",
      "A response process for concerns and unresolved requests",
      "Reporting setup and team handover",
    ],
    goals: ["marketing", "sell"],
    price: "",
    label: "Marketing & customer growth",
    outcome: "Listen well. Make the next experience better.",
  },
  {
    slug: "ai-content",
    name: "AI content workflows",
    short: "From a blank page to a reviewed draft.",
    icon: "pen",
    description:
      "Help your team prepare product descriptions, newsletters and social content using your brand guidelines and approved information.",
    features: [
      "Reusable prompts and brand voice guidance",
      "Product descriptions, social posts and newsletter drafts",
      "Editorial review, revision and approval queues",
      "Content calendars and scoped publishing connections",
    ],
    deliverables: [
      "A brand and approved-source review",
      "Drafting templates for agreed content formats",
      "Human approval steps and checks for unsupported claims",
      "Team training and a content-quality checklist",
    ],
    goals: ["marketing", "sell"],
    price: "",
    label: "Marketing & customer growth",
    outcome: "From a blank page to a reviewed draft.",
  },
  {
    slug: "campaign-pages",
    name: "Campaign landing pages",
    short: "Give every campaign a clear destination.",
    icon: "layout",
    description:
      "Build focused pages for a promotion, event or launch, with a clear message and a useful next step for visitors.",
    features: [
      "Mobile-friendly campaign and product-launch pages",
      "Lead forms, event registrations or booking connections",
      "Campaign-source capture and agreed conversion events",
      "Page-speed, accessibility and form-flow checks",
    ],
    deliverables: [
      "A campaign brief, page structure and agreed copy",
      "Responsive design and implementation",
      "Tested forms, thank-you states and lead delivery",
      "Analytics setup around agreed measurement and consent choices",
    ],
    goals: ["marketing", "sell"],
    price: "",
    label: "Marketing & customer growth",
    outcome: "Give every campaign a clear destination.",
  },
  {
    slug: "marketing-dashboards",
    name: "Marketing performance dashboards",
    short: "See what your marketing leads to.",
    icon: "chart",
    description:
      "Bring campaign costs, enquiries and sales records together so you can assess performance with the available evidence.",
    features: [
      "Connected campaign, website and CRM reporting",
      "Cost per enquiry and conversion reporting",
      "Repeat-purchase and customer-retention views",
      "Source coverage, attribution limits and data-quality checks",
    ],
    deliverables: [
      "Agreed metrics, source access and attribution assumptions",
      "A dashboard with scoped data connections",
      "Validation against source records and missing-data checks",
      "Team walkthrough and a reporting maintenance plan",
    ],
    goals: ["marketing", "sell"],
    price: "",
    label: "Marketing & customer growth",
    outcome: "See what your marketing leads to.",
  },
];
export const marketingServices = services.filter((service) =>
  service.goals.includes("marketing"),
);
export const industries = [
  {
    name: "Retail & growing businesses",
    icon: "store",
    pain: "Enquiries pile up. Stock lives in spreadsheets. Follow-ups get missed.",
    solution:
      "Connect your storefront, customer conversations, payments and everyday reporting.",
    examples: [
      "WhatsApp sales assistant",
      "M-Pesa checkout",
      "Stock and sales dashboard",
    ],
  },
  {
    name: "SACCOs & cooperatives",
    icon: "landmark",
    pain: "Members need answers while your team manages records, loans and reporting.",
    solution:
      "Explore member self-service, payment reconciliation and reporting workflows with clear human oversight.",
    examples: [
      "Member enquiries",
      "Collections reconciliation",
      "Reporting workflows",
    ],
  },
  {
    name: "Schools & colleges",
    icon: "graduation",
    pain: "Fee tracking, admissions and parent communication take time away from education.",
    solution:
      "Make routine administration easier and give families a simpler way to get information.",
    examples: [
      "Admissions assistant",
      "Fee reconciliation",
      "Parent communication",
    ],
  },
  {
    name: "Clinics & healthcare",
    icon: "heart",
    pain: "Front-desk enquiries, queues and stock records compete for your staff’s attention.",
    solution:
      "Improve administrative workflows while keeping clinical decisions with qualified professionals.",
    examples: [
      "Appointment enquiries",
      "Patient scheduling",
      "Pharmacy stock reports",
    ],
  },
  {
    name: "Hospitality & travel",
    icon: "hotel",
    pain: "Guests ask questions across time zones and booking information is spread across tools.",
    solution:
      "Support guest enquiries, direct booking journeys and day-to-day property operations.",
    examples: [
      "Multilingual concierge",
      "Booking enquiries",
      "Operations dashboard",
    ],
  },
  {
    name: "Logistics & fleets",
    icon: "truck",
    pain: "Vehicle, driver and maintenance information is difficult to see in one place.",
    solution:
      "Connect tracking data with maintenance workflows and practical fleet reporting.",
    examples: [
      "Tracking integrations",
      "Maintenance reminders",
      "Route analysis",
    ],
  },
  {
    name: "NGOs & development",
    icon: "globe",
    pain: "Field information needs to become reliable reports without repeated manual entry.",
    solution:
      "Build field data collection, monitoring and evaluation tools around your programme.",
    examples: [
      "Field data applications",
      "M&E dashboards",
      "Programme reporting",
    ],
  },
  {
    name: "Enterprise & public sector",
    icon: "building",
    pain: "Complex service workflows and disconnected records slow down delivery.",
    solution:
      "Begin with scoped discovery and a pilot before planning a wider digital rollout.",
    examples: [
      "Service enquiry assistants",
      "Records digitisation",
      "System integrations",
    ],
  },
  {
    name: "Property & real estate",
    icon: "building",
    pain: "Property enquiries, viewing requests and tenant messages are spread across conversations.",
    solution:
      "Connect listings, enquiries, viewing schedules and maintenance requests in one practical workflow.",
    examples: [
      "Property enquiry CRM",
      "Viewing bookings",
      "Tenant service portals",
    ],
  },
  {
    name: "Professional services",
    icon: "briefcase",
    pain: "Client onboarding, proposals and project updates repeatedly interrupt billable work.",
    solution:
      "Give clients a clearer way to start work, share documents and see progress.",
    examples: ["Client onboarding", "Proposal follow-ups", "Project portals"],
  },
  {
    name: "Agriculture & distribution",
    icon: "leaf",
    pain: "Orders, stock movements and supplier records can be difficult to reconcile across locations.",
    solution:
      "Explore mobile-friendly collection records, distribution workflows and stock reporting.",
    examples: ["Supplier records", "Order tracking", "Stock dashboards"],
  },
  {
    name: "Construction & field teams",
    icon: "tool",
    pain: "Site updates, materials requests and approvals move through disconnected messages.",
    solution:
      "Bring field reporting, materials requests and project visibility into an agreed digital workflow.",
    examples: ["Site reporting", "Materials approvals", "Project dashboards"],
  },
];
export const products = [
  {
    name: "Samaritan SACCO Core",
    for: "For member-first cooperatives",
    icon: "landmark",
    description:
      "A planned platform for members, deposits, shares, loans, collections and reporting.",
    features: [
      "Member self-service",
      "M-Pesa collections",
      "Reporting workflows",
    ],
    setup: "150,000–400,000",
    subscription: "25,000–80,000 / month, or per-member pricing",
  },
  {
    name: "Samaritan School",
    for: "For connected school communities",
    icon: "graduation",
    description:
      "A planned home for admissions, fees, exams and parent communication.",
    features: [
      "Fee reconciliation",
      "Admissions and records",
      "Parent updates",
    ],
    setup: "80,000–250,000",
    subscription: "30–60 / student / term; minimum 15,000 / term",
  },
  {
    name: "Samaritan Clinic",
    for: "For simpler practice administration",
    icon: "heart",
    description:
      "A planned administrative platform for registration, queues, stock and payments.",
    features: ["Patient administration", "Pharmacy stock", "Payment workflows"],
    setup: "100,000–350,000",
    subscription: "15,000–50,000 / facility / month",
  },
  {
    name: "Samaritan Stay",
    for: "For thoughtful guest experiences",
    icon: "hotel",
    description:
      "A planned platform connecting booking journeys, housekeeping and guest enquiries.",
    features: ["Booking engine", "Guest concierge", "Property operations"],
    setup: "150,000–400,000",
    subscription: "15,000–40,000 / property / month",
  },
  {
    name: "Samaritan Fleet",
    for: "For operations on the move",
    icon: "truck",
    description:
      "A planned layer for tracking integrations, route analysis and vehicle maintenance.",
    features: [
      "Tracking connections",
      "Maintenance planning",
      "Fleet insights",
    ],
    setup: "60,000–150,000",
    subscription: "8,000–15,000 / vehicle / month",
  },
  {
    name: "Samaritan Chama",
    for: "For groups building together",
    icon: "users",
    description:
      "A planned lightweight platform for group records, contributions and communication.",
    features: ["Contribution tracking", "Member records", "Group updates"],
    setup: "30,000–80,000",
    subscription: "3,000–8,000 / month",
  },
];
export const pricing = [
  {
    category: "AI & automation",
    name: "WhatsApp AI assistant",
    starter: "65,000 + 12,000/mo",
    growth: "140,000 + 22,000/mo",
    enterprise: "350,000+ + 45,000+/mo",
  },
  {
    category: "AI & automation",
    name: "Multi-channel assistant",
    starter: "200,000 + 25,000/mo",
    growth: "450,000 + 40,000/mo",
    enterprise: "900,000+ / custom",
  },
  {
    category: "AI & automation",
    name: "Workflow automation sprint",
    starter: "80,000",
    growth: "150,000–250,000",
    enterprise: "350,000+",
  },
  {
    category: "AI & automation",
    name: "Document / invoice automation",
    starter: "120,000 / process",
    growth: "250,000–400,000",
    enterprise: "600,000+",
  },
  {
    category: "AI & automation",
    name: "M-Pesa / ERP / accounting integration",
    starter: "90,000",
    growth: "180,000–350,000",
    enterprise: "500,000+",
  },
  {
    category: "Web & software",
    name: "Business website",
    starter: "45,000–65,000",
    growth: "90,000–150,000",
    enterprise: "200,000–400,000+",
  },
  {
    category: "Web & software",
    name: "E-commerce",
    starter: "120,000–180,000",
    growth: "250,000–450,000",
    enterprise: "600,000–1,200,000",
  },
  {
    category: "Web & software",
    name: "Web application / portal / MVP",
    starter: "350,000–600,000",
    growth: "800,000–1,800,000",
    enterprise: "2,000,000–5,000,000+",
  },
  {
    category: "Web & software",
    name: "SEO / performance retainer",
    starter: "20,000/mo",
    growth: "35,000–60,000/mo",
    enterprise: "80,000/mo",
  },
  {
    category: "Data & intelligence",
    name: "BI dashboard pack",
    starter: "120,000–180,000",
    growth: "250,000–450,000",
    enterprise: "600,000–1,200,000",
  },
  {
    category: "Data & intelligence",
    name: "Data cleanup & warehouse",
    starter: "200,000–350,000",
    growth: "400,000–900,000",
    enterprise: "1,000,000–1,500,000",
  },
  {
    category: "Data & intelligence",
    name: "Forecasting pilot",
    starter: "150,000–250,000",
    growth: "350,000–650,000",
    enterprise: "900,000+",
  },
  {
    category: "Data & intelligence",
    name: "Custom machine learning",
    starter: "400,000–900,000",
    growth: "1,000,000–2,500,000",
    enterprise: "3,000,000+",
  },
  {
    category: "Advisory & training",
    name: "AI-readiness audit",
    starter: "25,000–45,000",
    growth: "60,000",
    enterprise: "120,000+ / multi-site",
  },
  {
    category: "Advisory & training",
    name: "Executive AI briefing",
    starter: "80,000–150,000 / half-day",
    growth: "Up to 12 participants",
    enterprise: "Custom scope",
  },
  {
    category: "Advisory & training",
    name: "AI strategy workshop",
    starter: "180,000–350,000",
    growth: "1–2 days",
    enterprise: "Custom scope",
  },
  {
    category: "Advisory & training",
    name: "Team AI bootcamp",
    starter: "25,000–45,000 / person",
    growth: "Minimum 8 participants",
    enterprise: "Custom programme",
  },
];
export const faqs = [
  [
    "I’m not sure where to start. Can you help?",
    "Yes. Start with a conversation about the work that takes up your time. If the opportunity needs deeper investigation, an AI-readiness audit gives you a scoped roadmap before you invest in a build.",
  ],
  [
    "Do I need to replace the systems I already use?",
    "Usually, the starting point is your existing tools. We assess the available APIs, data quality and access permissions, then recommend integrations or a phased change where needed.",
  ],
  [
    "Can an assistant use English and Swahili?",
    "English and Swahili are core to our assistant offering. We test the agreed languages against your business content. Additional language or voice requirements are scoped separately.",
  ],
  [
    "Can you integrate WhatsApp and M-Pesa?",
    "Yes, these are core integration areas. Delivery depends on your business account setup, provider approval and API access. Usage limits and third-party charges are confirmed in your proposal.",
  ],
  [
    "How long does a project take?",
    "A fixed-scope automation sprint is typically planned for 2–4 weeks. Other projects depend on their scope, content, integrations and approvals. Your proposal includes a delivery schedule and milestones.",
  ],
  [
    "What happens when the AI does not know an answer?",
    "We design assistants to work from approved information, acknowledge uncertainty and hand over when a request falls outside the agreed scope. AI output still needs testing and ongoing review.",
  ],
  [
    "Are the sector platforms available to buy today?",
    "The sector platforms are a product roadmap, not generally available subscriptions. You can discuss becoming a design partner. Availability, pilot scope and commercial terms are agreed individually.",
  ],
  [
    "What happens after launch?",
    "We agree a handover and support plan before launch. Ongoing care can cover maintenance, security updates, hosting, assistant content review and future improvements. Service levels are defined in your agreement.",
  ],
];
