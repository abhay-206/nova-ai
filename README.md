https://abhay-206.github.io/nova-ai/

# NOVA — AI Productivity SaaS

> **Build Better. Work Smarter.**

NOVA is a modern AI-powered productivity and collaboration platform designed for ambitious teams. It combines project management, AI automation, real-time collaboration, workflow automation, analytics, and intelligent insights into one futuristic workspace.

The website is built as a premium SaaS landing page using **React + Vite**, with a dark luxury visual system, glassmorphism UI, smooth animations, and interactive 3D scenes powered by **Three.js**.

---

## ✨ Overview

NOVA is designed to demonstrate how a high-end AI SaaS product website can combine:

* Modern React architecture
* Responsive SaaS design
* Interactive 3D visuals
* AI-focused branding
* Smooth page navigation
* Micro-interactions
* Animated statistics
* Pricing interactions
* FAQ accordions
* Testimonials
* Theme switching
* Mobile navigation
* Demo modal interactions
* Performance-conscious animation

The goal is to provide a polished, production-style frontend experience rather than a simple static landing page.

---

# 🚀 Features

## AI Productivity

NOVA presents an intelligent workspace designed around AI-assisted productivity.

### AI Task Automation

Automates repetitive tasks and helps teams organize their work more efficiently.

### Smart Project Management

Provides project visibility, task organization, deadlines, ownership, and progress tracking.

### Real-Time Collaboration

Connects conversations, documents, tasks, and decisions in one workspace.

### AI Insights

Transforms workspace activity into useful recommendations and project-health insights.

### Workflow Automation

Allows repetitive business processes to be connected through intelligent workflows.

### Advanced Analytics

Provides dashboards and metrics to help teams understand performance and make better decisions.

---

# 🎨 Design System

NOVA uses a **dark luxury / futuristic AI** visual direction.

### Primary Palette

| Purpose              | Color     |
| -------------------- | --------- |
| Primary Background   | `#08070b` |
| Secondary Background | `#0d0b11` |
| Surface              | `#151118` |
| Primary Accent       | `#8b5cf6` |
| Secondary Accent     | `#a855f7` |
| Pink Accent          | `#fb7185` |
| Coral Accent         | `#ff6b5f` |
| Primary Text         | `#fafafa` |
| Secondary Text       | `#b8b1bd` |
| Muted Text           | `#817987` |

The interface uses:

* Electric violet gradients
* Coral highlights
* Glassmorphism
* Soft borders
* Large rounded corners
* Subtle shadows
* Ambient gradients
* 3D lighting
* Animated cards
* Premium typography

---

# 🧱 Tech Stack

## Core

* **React 19**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**

## Animation

* **Framer Motion**

Used for:

* Page transitions
* Button interactions
* Navigation animation
* Card reveals
* Mobile menu
* Modal transitions
* Micro-interactions

## 3D

* **Three.js**
* **React Three Fiber**
* **React Three Drei**

Used for:

* Hero 3D scene
* Floating orbs
* Floating UI cards
* Particle field
* 3D dashboard
* Product visualization
* Dynamic lighting

## Icons

* **Lucide React**

---

# 📦 Installation

## 1. Clone the project

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd nova-ai-saas
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Start the development server

```bash
npm run dev
```

The Vite development server will start locally.

Open the URL shown in your terminal, normally:

```text
http://localhost:5173
```

---

# 🛠 Available Scripts

## Development

```bash
npm run dev
```

Starts the Vite development server.

---

## Production Build

```bash
npm run build
```

Creates an optimized production build inside:

```text
dist/
```

---

## Preview Production Build

```bash
npm run preview
```

Runs the generated production build locally.

---

# 📁 Project Structure

```text
nova-ai-saas/
│
├── public/
│   ├── favicon.svg
│   └── og-image.svg
│
├── src/
│   │
│   ├── assets/
│   │   ├── nova-logo.svg
│   │   ├── dashboard-grid.svg
│   │   └── noise.svg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustedBy.jsx
│   │   ├── Features.jsx
│   │   ├── Product.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Statistics.jsx
│   │   ├── Solutions.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── DemoModal.jsx
│   │   └── BackToTop.jsx
│   │
│   ├── components3d/
│   │   ├── HeroScene.jsx
│   │   ├── FloatingOrb.jsx
│   │   ├── FloatingCard.jsx
│   │   ├── ParticleField.jsx
│   │   ├── Dashboard3D.jsx
│   │   ├── ProductScene.jsx
│   │   └── SceneLighting.jsx
│   │
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── GlassCard.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── SolutionCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── PricingCard.jsx
│   │   └── FAQItem.jsx
│   │
│   ├── data/
│   │   └── data.js
│   │
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useScrollPosition.js
│   │   ├── useCountUp.js
│   │   ├── useIntersection.js
│   │   └── useReducedMotion.js
│   │
│   ├── utils/
│   │   ├── scroll.js
│   │   ├── animations.js
│   │   └── performance.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# 🧩 Component Architecture

The application is divided into several layers.

## Page Components

The main landing page sections are located in:

```text
src/components/
```

Examples:

```text
Navbar
Hero
Features
Product
HowItWorks
Statistics
Solutions
Testimonials
Pricing
FAQ
CTA
Footer
```

Each component owns the UI and interaction for its specific section.

---

# 🎛 UI Components

Reusable UI primitives are stored in:

```text
src/ui/
```

These components include:

* Buttons
* Glass cards
* Section headings
* Feature cards
* Solution cards
* Testimonial cards
* Pricing cards
* FAQ items

This keeps the page components smaller and makes the visual system easier to maintain.

---

# 🌌 3D Architecture

All 3D elements are isolated inside:

```text
src/components3d/
```

This separation keeps Three.js logic independent from the normal React UI.

## HeroScene

The main 3D hero environment.

It combines:

* ParticleField
* FloatingOrb
* FloatingCard
* Dashboard3D
* SceneLighting
* Environment lighting
* Perspective camera

---

## FloatingOrb

Creates animated 3D spheres using:

```text
MeshDistortMaterial
```

The orbs slowly rotate and float to create depth.

---

## FloatingCard

Creates floating 3D UI cards displaying metrics such as:

```text
AI AUTOMATION
2.5M+

TEAM OUTPUT
+40%
```

---

## ParticleField

Generates a lightweight particle environment around the main 3D scene.

The particle system uses additive blending to create an atmospheric AI-style background.

---

## Dashboard3D

Creates the main 3D product dashboard.

It contains:

* Project health
* Productivity metrics
* Bar charts
* Activity indicators
* AI status
* Floating animation

---

## ProductScene

Provides a second 3D visualization for the Product section.

The 3D scene uses React Three Fiber and Drei components to keep the implementation declarative and React-friendly.

---

# 🧠 Data-Driven Architecture

Most website content is stored in:

```text
src/data/data.js
```

This includes:

* Navigation
* Hero metrics
* Trusted companies
* Features
* Product highlights
* How It Works steps
* Statistics
* Solutions
* Testimonials
* Pricing
* FAQs
* Footer links
* Dashboard projects
* Dashboard activity

This means content can be changed without rewriting the component structure.

For example:

```js
export const features = [
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Task Automation",
    description: "...",
    metric: "2.5M+",
    metricLabel: "tasks automated",
  },
];
```

The `Features` component maps over this data to render the UI.

---

# 🧭 Navigation

The navbar provides navigation to:

```text
Features
Product
Solutions
Pricing
FAQ
```

Navigation uses section IDs and smooth scrolling.

For example:

```text
#features
#product
#solutions
#pricing
#faq
```

The navigation utility is located at:

```text
src/utils/scroll.js
```

---

# 📱 Responsive Design

NOVA is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive behavior includes:

### Desktop

* Full navigation
* Large hero layout
* 3D dashboard
* Multi-column grids

### Tablet

* Reduced 3D complexity
* Adjusted spacing
* Responsive grids

### Mobile

* Mobile navigation
* Simplified 3D rendering
* Single-column sections
* Touch-friendly controls
* Responsive typography
* Reduced animation workload

---

# 🌓 Theme System

NOVA includes a light/dark theme system.

Theme state is handled through:

```text
src/hooks/useTheme.js
```

The theme is stored in:

```text
localStorage
```

using:

```text
nova-theme
```

The application supports:

```text
dark
light
```

The theme is applied using:

```html
data-theme="dark"
```

or:

```html
data-theme="light"
```

CSS variables automatically update the visual system.

---

# 🎬 Animation System

Framer Motion is used for interface animations.

Animation utilities are stored in:

```text
src/utils/animations.js
```

Available animation presets include:

* `fadeUp`
* `fadeIn`
* `scaleIn`
* `slideLeft`
* `slideRight`
* `staggerContainer`

Animations are intentionally subtle and short to maintain a premium feel without making the interface distracting.

---

# ♿ Accessibility

The project includes accessibility considerations such as:

* Semantic HTML
* Button elements for interactive controls
* Accessible navigation labels
* `aria-label`
* `aria-expanded`
* Keyboard-friendly interactions
* Visible interactive states
* Reduced-motion support
* Proper form labels
* Avoiding unnecessary clickable `<div>` elements

---

# 🧘 Reduced Motion

The project detects the user's system preference for reduced motion.

Hook:

```text
src/hooks/useReducedMotion.js
```

It checks:

```css
prefers-reduced-motion: reduce
```

When reduced motion is enabled, animations and visual effects can be reduced to provide a more accessible experience.

---

# ⚡ Performance

Performance is an important part of the project because NOVA contains 3D content.

The project includes performance utilities in:

```text
src/utils/performance.js
```

The 3D scenes use several optimization strategies:

* High-performance WebGL preference
* Responsive device pixel ratio
* Reduced particle counts
* Lower animation quality on mobile
* Reduced motion support
* Frustum culling
* Lightweight geometry
* Limited animation frequency
* RequestAnimationFrame-based scroll handling

---

# 📊 Animated Statistics

The statistics section uses:

```text
src/hooks/useCountUp.js
```

It animates numerical values when the section becomes visible.

Example:

```text
10,000+
2.5M+
98%
40%
```

The animation uses `requestAnimationFrame` and easing for a smooth counting effect.

---

# 💬 Testimonials

The Testimonials section contains customer stories from fictional NOVA customers.

Current examples include:

* Sarah Mitchell
* Daniel Carter
* Emily Johnson

The testimonial component is designed to support a carousel-style experience.

---

# 💳 Pricing

NOVA includes three pricing tiers:

## Starter

Designed for individuals and small teams.

## Pro

Designed for growing teams.

## Enterprise

Designed for larger organizations requiring advanced controls and support.

Pricing supports:

```text
Monthly
Annual
```

The annual option provides discounted pricing.

---

# ❓ FAQ

The FAQ section uses an accordion interface.

Users can expand and collapse individual questions.

Questions cover:

* What NOVA is
* AI automation
* Remote teams
* Enterprise support
* Plan changes
* Product demos

---

# 🎥 Demo Experience

The project includes a reusable:

```text
DemoModal.jsx
```

The modal can be opened from:

* Navbar
* Hero
* Pricing
* CTA

The selected pricing plan can also be passed into the modal.

---

# 📈 Back To Top

The project includes:

```text
BackToTop.jsx
```

The button appears after the user scrolls down the page and smoothly returns the user to the top.

---

# 📨 Newsletter

The footer includes a newsletter subscription UI.

The form currently provides the frontend interaction only.

To connect it to a real email service, the form can later be integrated with:

* Resend
* Mailchimp
* ConvertKit
* SendGrid
* A custom backend API

---

# 🔐 Environment Variables

The current frontend does not require environment variables for the basic landing page.

If APIs or external services are added later, create:

```text
.env
```

Example:

```env
VITE_API_URL=https://api.example.com
```

Never commit secrets to Git.

---

# 🏗 Production Build

Before deployment, run:

```bash
npm run build
```

Vite will generate:

```text
dist/
```

To test the production build locally:

```bash
npm run preview
```

---

# ☁️ Deployment

The project can be deployed to most modern frontend hosting platforms.

Common options include:

* Vercel
* Netlify
* Cloudflare Pages
* GitHub Pages
* Firebase Hosting

The build command is:

```bash
npm run build
```

The deployment directory is:

```text
dist
```

---

# 🧪 Recommended Development Workflow

When modifying the project:

### 1. Start the development server

```bash
npm run dev
```

### 2. Make changes

Modify the relevant component or data file.

### 3. Check the browser console

Make sure there are no:

```text
ReferenceError
TypeError
SyntaxError
```

### 4. Test interactions

Check:

* Navigation
* Mobile menu
* Theme toggle
* Buttons
* Demo modal
* Pricing toggle
* FAQ accordion
* Testimonials
* Back-to-top button

### 5. Test responsive layouts

Test at:

```text
Desktop
Tablet
Mobile
```

### 6. Build before deployment

```bash
npm run build
```

---

# 🐛 Troubleshooting

## React is not defined

If JSX produces:

```text
ReferenceError: React is not defined
```

make sure the project uses the Vite React plugin:

```js
import react from "@vitejs/plugin-react";
```

and:

```js
plugins: [react()]
```

---

## Missing export from data.js

Example:

```text
does not provide an export named 'heroMetrics'
```

Make sure the corresponding export exists inside:

```text
src/data/data.js
```

For example:

```js
export const heroMetrics = [];
```

---

## TrustedBy charAt error

If you see:

```text
company.charAt is not a function
```

`TrustedBy.jsx` expects `trustedCompanies` to contain strings.

Correct:

```js
export const trustedCompanies = [
  "VERTEX",
  "ORBIT",
  "LUMINA",
  "CLOUDCORE",
  "NEXA",
  "FLOWBASE",
];
```

---

## 3D import errors

Make sure these dependencies are installed:

```bash
npm install three @react-three/fiber @react-three/drei
```

---

# 📦 Dependencies

The project uses the following major packages:

```text
react
react-dom
vite
framer-motion
lucide-react
three
@react-three/fiber
@react-three/drei
```

---

# 🔮 Future Improvements

The current NOVA project is primarily a frontend SaaS experience.

Possible future additions include:

* Real authentication
* User accounts
* Backend API
* Database integration
* AI chat assistant
* Real project management
* Real-time collaboration
* Team invitations
* Payment integration
* Stripe subscriptions
* Real analytics
* Email newsletter backend
* CMS integration
* API integrations
* OAuth login
* Enterprise SSO
* Notifications
* Persistent user workspaces

---

# 🎯 Design Principles

The project follows several design principles:

### Clarity

Content should remain easy to understand despite the futuristic visual style.

### Depth

3D elements provide visual depth without taking attention away from the primary content.

### Consistency

Colors, spacing, typography, cards, buttons, and interaction patterns use a consistent design language.

### Performance

Animations should enhance the experience rather than make the website feel slow.

### Accessibility

Interactive elements should remain usable with keyboard navigation, screen readers, and reduced-motion preferences.

### Responsiveness

The experience should remain polished across screen sizes.

---

# 📜 License

This project is intended as a frontend SaaS website project and demonstration.

If this project is being used commercially, add the appropriate license and ownership information here.

---

# 👨‍💻 Development

Built with:

**React + Vite + Three.js + Framer Motion**

Designed for:

**AI productivity · SaaS · Collaboration · Automation · Modern teams**

---

## NOVA

> **Build Better. Work Smarter.**
