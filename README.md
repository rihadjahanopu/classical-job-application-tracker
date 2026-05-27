<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/briefcase.svg" alt="JobTracker Logo" width="80" height="80">
  <h1 align="center">JobTracker</h1>
  <p align="center">
    <strong>A Premium, Classical Job Application Tracking Dashboard</strong>
  </p>
  <p align="center">
    Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.
  </p>
  <div align="center">
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15.x-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react" alt="React" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-12.x-f04b86?style=flat-square&logo=framer" alt="Framer Motion" /></a>
    <a href="#"><img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License: MIT"></a>
  </div>
</div>

<hr />

## 📖 Table of Contents

1. [Overview](#-overview)
2. [Key Features](#-key-features)
3. [Technology Stack](#-technology-stack)
4. [Component Architecture](#-component-architecture)
5. [State Management & Data Flow](#-state-management--data-flow)
6. [Getting Started](#-getting-started)
7. [Available Scripts](#-available-scripts)
8. [UI/UX Design Philosophy](#-uiux-design-philosophy)
9. [Roadmap](#-roadmap)
10. [Contributing](#-contributing)
11. [License](#-license)

---

## 🚀 Overview

**JobTracker** is a sleek, highly interactive, and visually stunning web application designed to help professionals manage their job application pipeline. Instead of relying on messy spreadsheets, JobTracker provides a centralized dashboard to track applications, schedule interviews, log rejections, and analyze success rates—all wrapped in a premium, buttery-smooth user interface.

It is designed to be easily extensible, deeply customizable, and serves as an excellent starting point for any SaaS (Software as a Service) tracking dashboard.

---

## Live Link

[JobTracker](https://classical-job-application-tracker.vercel.app/)

## ✨ Key Features

- **Interactive Dashboard Overview**: Visualize your entire job search pipeline at a glance with animated statistics, pipeline conversion rates, and real-time counters.
- **Dynamic Kanban/List Hybrid View**: Filter and track jobs effortlessly across multiple states (`Not Applied`, `Interview`, `Rejected`) with advanced sorting mechanics.
- **Premium Fluid Animations**: Powered by `Framer Motion`. Every scroll, hover, and state change triggers a mathematically precise, tactile layout animation.
- **Dark/Light Mode Ready**: Native support for modern operating system themes out of the box, utilizing Tailwind's powerful `dark:` class variant.
- **Responsive Architecture**: Impeccable design scales perfectly from ultra-wide 4K desktop monitors down to mobile devices.
- **Modern Landing Pages**: Includes highly polished landing sections (Hero, Features, Testimonials, Pricing, FAQ, and Newsletter) designed for high conversion rates.
- **Browser-Native Persistence**: Operates entirely client-side, storing state locally without the immediate need for a backend database.

---

## 🛠️ Technology Stack

| Technology | Purpose | Documentation |
| :--- | :--- | :--- |
| **Next.js 15+** | React framework for production-grade SSR, App Router architecture, and built-in optimization. | [Next.js Docs](https://nextjs.org/docs) |
| **React 18+** | Core UI library for building component-based interfaces and managing interactive states. | [React Docs](https://react.dev/) |
| **TypeScript** | Strongly typed programming language ensuring type safety and improved Developer Experience (DX). | [TS Docs](https://www.typescriptlang.org/docs/) |
| **Tailwind CSS 3+**| Utility-first CSS framework for rapid, highly customizable UI development without leaving the HTML. | [Tailwind Docs](https://tailwindcss.com/docs) |
| **Framer Motion** | Production-ready motion library for React handling complex layout transitions and scroll reveals. | [Framer Docs](https://www.framer.com/motion/) |
| **Lucide React** | Beautiful, consistent, and lightweight open-source icon toolkit. | [Lucide Docs](https://lucide.dev/) |

---

## 🏗️ Component Architecture

The project is structured with scalability in mind. Components are highly modular and decoupled:

```bash
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root application layout (Metadata, Fonts, Global Providers)
│   │   ├── page.tsx           # Main Entry Point (Dashboard + Landing Sections)
│   │   └── globals.css        # Global Tailwind Directives & CSS Variables
│   ├── components/            # Reusable UI Components
│   │   ├── FAQSection.tsx     # Animated accordion dropdowns for common questions
│   │   ├── FeaturesSection.tsx# Grid layout highlighting core product capabilities
│   │   ├── Footer.tsx         # Modern, dynamic footer with hover states and glow effects
│   │   ├── HeroSection.tsx    # Primary call-to-action (CTA) and value proposition
│   │   ├── HowItWorksSection.tsx # Step-by-step visual workflow guide
│   │   ├── JobCard.tsx        # Encapsulated state logic for individual job entries
│   │   ├── NewsletterSection.tsx # Conversion-focused subscription banner
│   │   ├── PricingSection.tsx # SaaS Pricing Tier Cards (Basic, Pro, Lifetime)
│   │   ├── StatsSection.tsx   # Dashboard analytics and conversion pipeline
│   │   └── TestimonialsSection.tsx # Social proof and user reviews
│   └── types/
│       └── index.ts           # Global TypeScript definitions (`Job`, `JobStatus`)
```

### Key Component Highlights:
- **`JobCard.tsx`**: Uses Framer Motion's `layout` prop to seamlessly transition when its dimensions or position in the grid changes. Includes visual initials avatars generated dynamically via string hashing.
- **`StatsSection.tsx`**: Calculates real-time conversion rates (e.g. Interview Rate vs. Rejection Rate) based on the active state array and mounts with staggered entrance animations.

---

## 🔄 State Management & Data Flow

Currently, JobTracker handles state at the **top-level route (`page.tsx`)** and passes data down via props.

1. **State Initialization**: A pre-seeded list of dummy jobs (`SEED_JOBS`) is loaded into React's `useState`.
2. **Derived State**: Search filters (Job title, company) and Status filters (`All`, `Interview`, `Rejected`) compute a `filteredAndSortedJobs` array.
3. **Immutability**: Status updates and deletions use immutable patterns (e.g., `.map()` and `.filter()`) to ensure React accurately detects changes and triggers re-renders.
4. **Layout Transitions**: When the derived state changes, `AnimatePresence` and `layout` props instruct Framer Motion to morph the DOM gracefully instead of snapping.

*(Future implementations will target persistent global state using `Zustand` or React Context alongside `localStorage` hooks).*

---

## 💻 Getting Started

### Prerequisites
Make sure you have **Node.js (v18.17.0+)** and your preferred package manager installed (`npm`, `yarn`, `pnpm`, or `bun`).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/job-tracker.git
   cd job-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install / pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or yarn dev / pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

---

## 📜 Available Scripts

In the project directory, you can run the following commands:

- **`npm run dev`**: Runs the app in development mode. The page will reload if you make edits.
- **`npm run build`**: Builds the app for production to the `.next` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- **`npm run start`**: Starts the production server. You must run the build command before running this.
- **`npm run lint`**: Runs ESLint to statically analyze the code for errors and formatting issues.

---

## 🎨 UI/UX Design Philosophy

JobTracker was designed with an intense focus on **Premium Aesthetics** and **Micro-interactions**:
- **Glassmorphism & Gradients**: Subtle background blurs and energetic radial gradients give depth to the UI without overpowering the content.
- **Staggered Reveals**: Scroll-triggered animations (`whileInView`) guide the user's eye naturally down the page. Staggered children (`staggerChildren: 0.15`) create a waterfall effect that feels incredibly organic.
- **Layout Animations**: When a job status is updated or filtered out of the active view, the remaining cards intelligently glide into their new positions, preventing harsh DOM snapping and improving spatial awareness.
- **Hover Ergonomics**: Buttons and cards utilize subtle negative Y-axis translations (`-translate-y-1`) alongside box-shadow adjustments to provide tactile feedback indicating interactivity.

---

## 🛣️ Roadmap

- [ ] **Phase 1**: Local Storage Persistence (Save user jobs across browser sessions).
- [ ] **Phase 2**: Global State Management integration (Zustand or Redux Toolkit).
- [ ] **Phase 3**: User Authentication (NextAuth.js) and cloud database integration (Supabase / Prisma).
- [ ] **Phase 4**: Advanced Analytics Dashboard (Graphs, Application velocity metrics).
- [ ] **Phase 5**: Kanban Board Drag-and-Drop functionality using `dnd-kit`.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---
<div align="center">
  <i>Designed and Built with passion. Level up your career journey.</i>
</div>
