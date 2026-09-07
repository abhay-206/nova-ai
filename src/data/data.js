import {
  Activity,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  Megaphone,
  MessageSquare,
  MousePointer2,
  Network,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

/* =========================
   NAVIGATION
========================= */

export const navItems = [
  { id: "features", label: "Features" },
  { id: "product", label: "Product" },
  { id: "solutions", label: "Solutions" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

/* =========================
   HERO
========================= */

export const heroMetrics = [
  {
    value: "10K+",
    label: "Teams building with NOVA",
  },
  {
    value: "2.5M+",
    label: "Tasks automated",
  },
  {
    value: "98%",
    label: "Customer satisfaction",
  },
];

/* =========================
   TRUSTED COMPANIES
========================= */

export const trustedCompanies = [
  "VERTEX",
  "ORBIT",
  "LUMINA",
  "CLOUDCORE",
  "NEXA",
  "FLOWBASE",
];
/* =========================
   FEATURES
========================= */

export const features = [
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Task Automation",
    description:
      "Let NOVA handle repetitive work, organize tasks, and turn natural language into productive workflows.",
    metric: "2.5M+",
    metricLabel: "tasks automated",
  },
  {
    id: "project-management",
    icon: BriefcaseBusiness,
    title: "Smart Project Management",
    description:
      "Plan projects, assign ownership, track progress, and keep every deadline visible from one intelligent workspace.",
    metric: "40%",
    metricLabel: "faster execution",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Bring conversations, documents, tasks, and decisions together so your team always works from the same context.",
    metric: "24/7",
    metricLabel: "team visibility",
  },
  {
    id: "insights",
    icon: Gauge,
    title: "AI Insights",
    description:
      "Turn your team's activity into useful recommendations, project health signals, and actionable insights.",
    metric: "98%",
    metricLabel: "visibility",
  },
  {
    id: "workflow",
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Connect everyday processes with intelligent automations that keep work moving without constant manual follow-up.",
    metric: "3x",
    metricLabel: "less busywork",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Understand performance with clear dashboards, real-time reporting, and data that helps leaders make better decisions.",
    metric: "10K+",
    metricLabel: "teams analyzed",
  },
];

/* =========================
   PRODUCT
========================= */

export const productHighlights = [
  {
    icon: Sparkles,
    title: "AI-powered workspace",
    description:
      "Give your team an intelligent workspace that understands context and helps turn ideas into action.",
  },
  {
    icon: Activity,
    title: "Live project health",
    description:
      "See what's moving, what's blocked, and where your team needs attention before problems become delays.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-ready",
    description:
      "Built with security, permissions, reliability, and scalability in mind for modern organizations.",
  },
];

/* =========================
   HOW IT WORKS
========================= */

export const howItWorksSteps = [
  {
    number: "01",
    icon: MousePointer2,
    title: "Create your workspace",
    description:
      "Set up your NOVA workspace and bring your team into one connected environment.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Bring work together",
    description:
      "Connect projects, tasks, documents, conversations, and the tools your team already uses.",
  },
  {
    number: "03",
    icon: Bot,
    title: "Let AI organize it",
    description:
      "NOVA analyzes your workflow and helps prioritize tasks, surface risks, and automate repetitive work.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Move faster",
    description:
      "Spend less time managing work and more time creating meaningful results with your team.",
  },
];

/* =========================
   STATISTICS
========================= */

export const statistics = [
  {
    value: 10000,
    suffix: "+",
    label: "Teams using NOVA",
    icon: Users,
  },
  {
    value: 2.5,
    suffix: "M+",
    label: "Tasks automated",
    decimals: 1,
    icon: Zap,
  },
  {
    value: 98,
    suffix: "%",
    label: "Customer satisfaction",
    icon: Target,
  },
  {
    value: 40,
    suffix: "%",
    label: "Faster execution",
    icon: Gauge,
  },
];

/* =========================
   SOLUTIONS
========================= */

export const solutions = [
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Move from idea to execution faster with an AI workspace designed for lean, ambitious teams.",
  },
  {
    icon: Megaphone,
    title: "Marketing Teams",
    description:
      "Coordinate campaigns, content, launches, and creative workflows without losing momentum.",
  },
  {
    icon: Code2,
    title: "Software Teams",
    description:
      "Connect product planning, engineering execution, and team collaboration in one place.",
  },
  {
    icon: Globe2,
    title: "Remote Teams",
    description:
      "Create clarity across locations with shared context, transparent projects, and async-friendly workflows.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Agencies",
    description:
      "Manage multiple clients, projects, deadlines, and approvals while keeping your team aligned.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise",
    description:
      "Scale intelligent productivity across departments with security, control, and advanced analytics.",
  },
];

/* =========================
   TESTIMONIALS
========================= */

export const testimonials = [
  {
    quote:
      "NOVA completely changed how our team operates. We spend less time managing tasks and more time doing the work that actually matters.",
    name: "Sarah Mitchell",
    role: "VP of Operations",
    company: "Vertex Labs",
    initials: "SM",
  },
  {
    quote:
      "The biggest difference is visibility. Everyone knows what matters, what is blocked, and what needs to happen next.",
    name: "Daniel Carter",
    role: "Head of Product",
    company: "Orbit Systems",
    initials: "DC",
  },
  {
    quote:
      "NOVA feels like adding another intelligent teammate to the organization. The automation alone has saved us countless hours.",
    name: "Emily Johnson",
    role: "Marketing Director",
    company: "Lumina",
    initials: "EJ",
  },
];

/* =========================
   PRICING
========================= */

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "For individuals and small teams getting started.",
    monthlyPrice: 12,
    annualPrice: 9,
    currency: "$",
    popular: false,
    features: [
      "Up to 5 team members",
      "AI task automation",
      "Basic project management",
      "Real-time collaboration",
      "5 GB file storage",
      "Basic analytics",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams that want to move faster.",
    monthlyPrice: 29,
    annualPrice: 24,
    currency: "$",
    popular: true,
    features: [
      "Unlimited team members",
      "Advanced AI automation",
      "Advanced project management",
      "AI insights",
      "Workflow automation",
      "100 GB file storage",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For organizations that need scale and control.",
    monthlyPrice: null,
    annualPrice: null,
    currency: "",
    popular: false,
    features: [
      "Everything in Pro",
      "Enterprise security",
      "Advanced permissions",
      "Custom workflows",
      "Dedicated support",
      "Unlimited storage",
      "Advanced reporting",
      "Custom integrations",
    ],
  },
];

/* =========================
   FAQ
========================= */

export const faqs = [
  {
    question: "What is NOVA?",
    answer:
      "NOVA is an AI-powered productivity platform that brings projects, tasks, collaboration, automation, and insights into one intelligent workspace.",
  },
  {
    question: "Can NOVA automate repetitive tasks?",
    answer:
      "Yes. NOVA can help automate repetitive workflows, organize tasks, surface important information, and reduce manual coordination.",
  },
  {
    question: "Is NOVA suitable for remote teams?",
    answer:
      "Absolutely. NOVA is designed to keep distributed teams aligned through shared projects, real-time collaboration, centralized context, and transparent workflows.",
  },
  {
    question: "Does NOVA support enterprise teams?",
    answer:
      "Yes. The Enterprise plan is designed for organizations that need advanced security, permissions, reporting, custom workflows, and dedicated support.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can upgrade or change your plan as your team's needs evolve. The exact billing terms would depend on your subscription.",
  },
  {
    question: "Does NOVA offer a demo?",
    answer:
      "Yes. You can use the Book a Demo or Watch Demo actions throughout the website to open the demo experience.",
  },
];

/* =========================
   FOOTER
========================= */

export const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Product", href: "#product" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Startups", href: "#solutions" },
      { label: "Marketing Teams", href: "#solutions" },
      { label: "Software Teams", href: "#solutions" },
      { label: "Enterprise", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    label: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "GitHub",
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
];

/* =========================
   DASHBOARD
========================= */

export const dashboardProjects = [
  {
    name: "Website Redesign",
    progress: 82,
    status: "On track",
    statusType: "success",
  },
  {
    name: "AI Launch Campaign",
    progress: 64,
    status: "In progress",
    statusType: "active",
  },
  {
    name: "Mobile App v2",
    progress: 47,
    status: "Needs attention",
    statusType: "warning",
  },
  {
    name: "Q4 Growth Strategy",
    progress: 91,
    status: "On track",
    statusType: "success",
  },
];

export const dashboardActivity = [
  {
    icon: CheckCircle2,
    title: "Campaign brief approved",
    time: "2 min ago",
  },
  {
    icon: Bot,
    title: "NOVA automated 12 tasks",
    time: "18 min ago",
  },
  {
    icon: MessageSquare,
    title: "New team discussion",
    time: "34 min ago",
  },
  {
    icon: LineChart,
    title: "Weekly report generated",
    time: "1 hr ago",
  },
  {
    icon: Settings2,
    title: "Workflow updated",
    time: "2 hrs ago",
  },
];