# Rishit Jena — Portfolio

> AI/ML & Full Stack Engineer · B.Tech Computer Science, PES University (2027)

My personal portfolio, built with React, TypeScript, TanStack Start and Tailwind CSS.

| | |
|:---|:---|
| **Email** | rishitjena725@gmail.com |
| **GitHub** | [github.com/rishit725-ai](https://github.com/rishit725-ai) |
| **LinkedIn** | [linkedin.com/in/rishit-jena-008948313](https://www.linkedin.com/in/rishit-jena-008948313) |
| **Status** | Graduating June 2027 — open to full-time roles & internships |

---

## Experience

**AI/ML Intern — Sify Technologies Limited** · Bangalore · Jun 2026 – Aug 2026
- Developed a modular Guardrails Library in Python for enterprise AI systems, with configurable processors for input validation, security, and compliance.
- Contributed to a scalable, open-source framework: reusable guardrail components, testing workflows, and developer documentation.

**Intern — Vishesh Innovative Technologies Pvt Ltd** · Bangalore · Jun 2025 – Jul 2025
- Analyzed end-to-end EMS manufacturing workflows across Procurement, Production, QA, SCM, and HR to identify process gaps and accuracy risks.
- Mapped ERP-driven process digitization, inventory management, and production planning systems.
- Documented workflow dependencies and bottlenecks, translating findings into process recommendations.

## Projects

### AI-Powered Smart Agriculture System — 🏆 Winner, Terrathon 4.0 (Cisco)
Five ML models for disease detection, crop recommendation, irrigation scheduling, and price forecasting, behind a React chatbot for real-time farmer assistance.
[Code](https://github.com/rishit725-ai/Terrathon-Cisco-main)

### Smart EMS Workflow Intelligence Platform
Full-stack platform tracking RFQ-to-dispatch manufacturing workflows with dependency-aware tracking, inventory and QA monitoring, alerts, and a bottleneck-detection intelligence layer.
[Code](https://github.com/rishit725-ai/Smart-EMS-Main)

### Music Genre Classification — CNN & Classical ML
CNN feature extractor + SVM/GDA classifiers on GTZAN; compressed features from 25,840 to 320 dimensions while improving accuracy.
[Code](https://github.com/rishit725-ai/Music-Classification-through-CNN-and-Classical-Algorithms)

## Achievements
- **1st Place & ₹25,000 Prize** — Terrathon 4.0 (Cisco Systems problem statement)
- **Silver Medal** — NPTEL Deep Learning Certification (77%, IIT Ropar)

## Skills
- **Languages:** Python, SQL, C, Java
- **AI / ML:** Machine Learning, Deep Learning, CNNs, PyTorch, scikit-learn, XGBoost, LLM Guardrails
- **Data:** PostgreSQL, MongoDB, Supabase, Data Analytics
- **Web:** React, Node.js, Express, FastAPI

---

## Running locally

Requires Node.js 20+.

```bash
npm install
npm run dev        # dev server
npm run build      # static build → dist/client
npm run typecheck
npm run lint
```

Deployed on Vercel as a static site (`vercel.json` serves `dist/client`).

## Editing content

All text — profile, stats, experience, projects, skills, achievements, education — lives in
`src/data/portfolio.ts`. Components in `src/components/portfolio/` only handle layout.

- **Project screenshots:** put an image in `public/projects/` and set `image: "/projects/name.png"` on the project.
- **Live demos:** set `demo: "https://…"` on the project.
- **Resume:** replace `public/RishitJena_Resume.pdf`, keeping the same filename.
- **Page title & link previews:** `src/routes/__root.tsx`.
