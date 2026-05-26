# Rishit Jena — Personal Portfolio

> Computer Science undergraduate | Full Stack Developer | Workflow Intelligence & AI-Assisted Systems

A recruiter-friendly, production-grade portfolio built with React, TypeScript, and Tailwind CSS. It showcases intelligent full-stack systems, AI-powered projects, and hands-on industry experience in EMS manufacturing.

---

## Quick Overview

| | |
|:---|:---|
| **Name** | Rishit Jena |
| **Role** | Full Stack Developer / Workflow Intelligence Engineer |
| **Status** | Available for full-time opportunities |
| **Location** | India |
| **Email** | rishitjena725@gmail.com |
| **GitHub** | [github.com/rishit725-ai](https://github.com/rishit725-ai) |
| **LinkedIn** | [linkedin.com/in/rishit-jena-008948313](https://www.linkedin.com/in/rishit-jena-008948313) |

---

## Featured Projects

### 1. Smart EMS Workflow Intelligence Platform
A full-stack workflow intelligence platform for Electronics Manufacturing Services that tracks RFQ-to-dispatch workflows, visualizes dependencies, and improves operational visibility.

- **Stack:** React, Node.js, Express, PostgreSQL, FastAPI
- **Highlights:** Dependency-aware workflow tracking, inventory and QA monitoring, operational intelligence layer
- **Tags:** Full Stack, Workflow, Enterprise
- **Code:** [github.com/rishit725-ai/Smart-EMS-Main](https://github.com/rishit725-ai/Smart-EMS-Main.git)

### 2. AI-Powered Smart Agriculture System
Hackathon-winning AI-powered agriculture platform integrating ML models for crop health monitoring, irrigation assistance, and price forecasting.

- **Stack:** React, Python, FastAPI, scikit-learn
- **Highlights:** Winner of Terrathon 4.0 (₹25,000 prize), responsive React frontend, ML-integrated architecture
- **Tags:** AI/ML, Award, Full Stack

### 3. Music Genre Classification System
Deep learning and classical ML-based music genre classification using CNN feature extraction with SVM and GDA classifiers.

- **Stack:** Python, PyTorch, scikit-learn, NumPy
- **Highlights:** CNN feature extraction, dimensionality reduction, hybrid ML pipeline
- **Tags:** Deep Learning, Research
- **Code:** [github.com/rishit725-ai/Music-Classification-through-CNN-and-Classical-Algorithms](https://github.com/rishit725-ai/Music-Classification-through-CNN-and-Classical-Algorithms.git)

---

## Key Achievements

- **Silver Medal** — NPTEL Deep Learning (IIT Ropar) — top performer nationwide
- **1st Place** — Terrathon 4.0 Hackathon — AI-powered smart agriculture platform
- **₹25,000 Cash Prize** — Terrathon 4.0 for the winning project

---

## Technical Skills

### Frontend
React, TypeScript, Tailwind CSS, Next.js, Vite

### Backend
Node.js, Express.js, FastAPI, REST APIs, JWT Auth

### Database
PostgreSQL, MongoDB, Redis, Prisma

### AI / ML
Python, PyTorch, scikit-learn, CNN, ML Pipelines

### Tools & Platforms
Docker, Git / GitHub, Linux, Postman, Vercel

---

## Industry Experience

### EMS Manufacturing Intern | Electronics Manufacturing Services | 2024 — 2025
- Worked on EMS manufacturing workflows involving PCB assembly, smart switch production, and operational process tracking
- Gained hands-on exposure to RFQ, procurement, IQC, SMT assembly, QA testing, and dispatch lifecycle stages
- Contributed to smart switch development discussions including PCB-level understanding, relay integration, and workflow coordination
- Observed real-world production monitoring, inventory dependency handling, and quality assurance processes
- Documented operational workflows and analyzed opportunities for workflow visibility and process optimization

---

## Tech Stack (Portfolio)

| Layer | Technology |
|:---|:---|
| **Framework** | TanStack Start v1 (React 19, SSR/SSG, file-based routing) |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS v4 (CSS-first, semantic tokens) |
| **UI Components** | shadcn/ui (Radix + Tailwind) |
| **Icons** | Lucide React |
| **Validation** | Zod |
| **Runtime** | Cloudflare Worker (edge) |
| **TypeScript** | Strict mode enabled |

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20 or later) or [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/rishit725-ai/portfolio.git
cd portfolio

# Install dependencies
bun install
# OR
npm install
```

### Development

```bash
# Start the dev server
bun dev
# OR
npm run dev
```

The dev server starts at `http://localhost:3000`.

### Production Build

```bash
# Build for production
bun run build
# OR
npm run build
```

### Preview Production Build

```bash
# Preview the production build locally
bun run preview
# OR
npm run preview
```

---

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── portfolio/          # Portfolio sections
│   │   │   ├── About.tsx       # About / focus areas
│   │   │   ├── Achievements.tsx # Awards & certifications
│   │   │   ├── Contact.tsx     # Contact form & links
│   │   │   ├── Experience.tsx  # Work experience / internships
│   │   │   ├── Footer.tsx      # Footer
│   │   │   ├── Hero.tsx        # Hero / landing section
│   │   │   ├── Navbar.tsx      # Navigation bar
│   │   │   ├── Projects.tsx    # Featured projects
│   │   │   ├── Section.tsx     # Reusable section wrapper
│   │   │   └── Skills.tsx      # Technical skills
│   │   └── ui/                 # shadcn/ui components
│   ├── hooks/                  # React hooks
│   ├── lib/                    # Utilities & helpers
│   ├── routes/                 # TanStack file-based routes
│   │   ├── __root.tsx          # Root layout
│   │   └── index.tsx           # Homepage
│   ├── styles.css              # Global styles & Tailwind tokens
│   └── ...                     # Router, server, etc.
├── package.json
├── tsconfig.json
├── vite.config.ts
├── wrangler.jsonc              # Cloudflare Workers config
└── README.md
```

---

## Customizing Your Details

All personal details are centralized in the portfolio components. Update these files to reflect your own information:

| Detail | File |
|:---|:---|
| Name, headline, bio, typing animation roles | `src/components/portfolio/Hero.tsx` |
| Email, GitHub, LinkedIn | `src/components/portfolio/Hero.tsx` + `src/components/portfolio/Contact.tsx` |
| Projects | `src/components/portfolio/Projects.tsx` |
| Experience / internships | `src/components/portfolio/Experience.tsx` |
| Achievements / awards | `src/components/portfolio/Achievements.tsx` |
| Skills & tech stack | `src/components/portfolio/Skills.tsx` |
| About / focus areas | `src/components/portfolio/About.tsx` |
| Page title & meta description | `src/routes/index.tsx` |

---

## Deployment

This project is configured for edge deployment on **Cloudflare Workers** via Wrangler. To deploy:

```bash
npx wrangler deploy
```

For Vercel or other platforms, configure the build output accordingly.

---

## License

This portfolio template is available for personal use. Feel free to fork and customize it for your own professional presence.

---

## Contact

- **Email:** [rishitjena725@gmail.com](mailto:rishitjena725@gmail.com)
- **GitHub:** [github.com/rishit725-ai](https://github.com/rishit725-ai)
- **LinkedIn:** [linkedin.com/in/rishit-jena-008948313](https://www.linkedin.com/in/rishit-jena-008948313)

---

> Open to full-time roles, internships, and engineering collaborations.
