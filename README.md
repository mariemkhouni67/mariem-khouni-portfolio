# Mariem Khouni — Software Engineer & AI Developer Portfolio

> **White + Pink Modern AI Aesthetic** &bull; Production-ready developer portfolio engineered with **React 19**, **TypeScript**, **Tailwind CSS**, and **Three.js**.

---

## 🌸 Overview

This portfolio presents the engineering profile, full-stack projects, and AI capabilities of **Mariem Khouni**, Software Engineering student at ISSAT (expected graduation: June 2027), currently seeking a **Final-Year Internship (PFE)** starting **February 2027**.

Designed with a light-first **White + Pink + Modern + Futuristic + Highly Animated** aesthetic blending Apple-level minimalism with modern AI startup motion design.

---

## ✨ Key Features & Architecture

### 1. 3D Interactive Hero Ecosystem
- **Three.js Translucent Crystal**: Geometric pink wireframe icosahedron with orbital nodes, responsive particle field, and smooth mouse-follow parallax.
- **Floating Halo Portrait**: Real circular portrait enclosed in a multi-layered pink gradient ring with 3D tilt physics and 6 orbiting domain badges (`React`, `AI • RAG`, `TypeScript`, `Node.js`, `MCP • Tools`, `DB • Cloud`).
- **Dynamic Rotating Roles**: Full-Stack Developer, AI Builder, React Developer, Backend Developer, and AI Agents Explorer.

### 2. "Building With AI" 8-Node Pipeline
- Interactive end-to-end autonomous agent execution flow:
  $$\text{USER} \longrightarrow \text{PROMPT} \longrightarrow \text{AI AGENT} \longrightarrow \text{TOOLS} \longrightarrow \text{MCP} \longrightarrow \text{RAG / DATABASE} \longrightarrow \text{LLM} \longrightarrow \text{RESULT}$$
- Hover node expansion, dynamic role banners, animated pulses, and deep-dive inspection grid across 9 verified AI concepts (`AI Agents`, `MCP`, `RAG`, `DeepSeek`, `ChromaDB`, `BGE-M3`, `Prompt Engineering`, `LLM API`, `A2A`).

### 3. "How I Use AI" 7-Step Lifecycle
- 7 sequential engineering stages (`01 Understand`, `02 Plan`, `03 Prompt`, `04 Build`, `05 Test`, `06 Review`, `07 Iterate`) linked with an animated pink pipeline.
- Continuous engineering feedback loop with **Human in the Loop** verification:
  > *"AI helps me accelerate development, but I validate, debug and refine the result."*

### 4. Alternating Projects Showcase with Video Upload
- **Showcase 1**: **StudyMate** — Full-stack AI study platform (DeepSeek, ChromaDB vector store, BGE-M3 RAG pipeline, Docker, MySQL, gamified learning).
- **Showcase 2**: **TravelScape** — Full-stack MERN travel booking platform with 3D hero, Leaflet geospatial mapping, multilingual chatbot, and admin CRUD.
- **Showcase 3**: **Decathlon Posture Coach** — AI fitness app leveraging DeepSeek R1 reasoning across 873+ exercises matched with Decathlon products.
- **Video Demo Player & In-Browser Upload**:
  - Live drag-and-drop video upload (`.mp4`, `.webm`, `.mov`).
  - Persistent **IndexedDB storage** so uploaded walkthrough videos remain available across browser refreshes.
  - Custom video controls (Scrubber, Play/Pause, Mute/Unmute, Fullscreen, metadata badge).
  - Production fallback path `/public/videos/<id>-demo.mp4`.

### 5. Grounded AI Portfolio Assistant
- Floating **"Ask Mariem's AI"** chat panel grounded strictly on factual portfolio data with zero hallucination.
- Instant suggested inquiry chips covering projects, tech stack, education, and PFE internship availability.

### 6. Desktop Custom Interactive Cursor
- Dual-layer cursor with central pink dot and ambient glow.
- Transitions into **`VIEW`** mode over project cards and **`PLAY`** mode over demo video players.

### 7. Printable / PDF-Ready CV Modal
- Fully formatted resume ready for instant printing or PDF export with a single click.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript, Vite |
| **Styling & Motion** | Tailwind CSS v4, Glassmorphism, CSS Keyframe Physics |
| **3D Graphics** | Three.js |
| **Persistence** | Native IndexedDB (video storage), LocalStorage (preferences) |
| **Icons** | Lucide React + Custom SVG Brand Monograms |
| **Quality & Types** | Strict TypeScript (`verbatimModuleSyntax`, `noUnusedLocals`) |

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── certificates/          # Pre-placed PDF/image certificates
│   │   └── README.md
│   ├── images/                # Real profile photos & fallbacks
│   │   ├── profile.jpg
│   │   ├── mariem.jpg
│   │   └── profile-placeholder.svg
│   ├── videos/                # Production project demo walkthroughs
│   │   └── README.md
│   ├── favicon.svg            # Custom MK monogram gradient favicon
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/            # Modular React components
│   │   ├── AIAgentsSection.tsx
│   │   ├── AIAssistantModal.tsx
│   │   ├── AIWorkflow.tsx
│   │   ├── About.tsx
│   │   ├── AnimatedBackground.tsx
│   │   ├── CVModal.tsx
│   │   ├── CertificationCard.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Languages.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProfilePhoto.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Projects.tsx
│   │   ├── SkillCard.tsx
│   │   ├── Skills.tsx
│   │   ├── SocialIcons.tsx
│   │   ├── ThreeHeroScene.tsx
│   │   └── VideoDemo.tsx
│   ├── data/
│   │   └── portfolio.ts       # Grounded factual candidate data
│   ├── utils/
│   │   └── videoStorage.ts    # IndexedDB persistence for uploaded videos
│   ├── App.tsx
│   ├── index.css              # Light-first variables & pink keyframes
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0 or newer)
- **npm** (v9.0 or newer)

### Installation

```bash
# Clone the repository
git clone https://github.com/mariemkhouni67/mariem-khouni-portfolio.git

# Enter project directory
cd mariem-khouni-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173/` in your browser.

### Production Build & Preview

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub: `https://github.com/mariemkhouni67/mariem-khouni-portfolio`.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **"Add New Project"**.
3. Import `mariem-khouni-portfolio`.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

### Deploy to Netlify
1. Connect repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy site.

---

## 🔒 Security & Privacy Notice

- **No Secrets Exposed**: Zero API keys, passwords, or `.env` files are tracked in this repository.
- **Client-Side Assistant**: The portfolio AI assistant runs deterministically in the client using the grounded factual knowledge base in `src/data/portfolio.ts`.

---

## 📬 Contact Information

- **Name**: Mariem Khouni
- **Location**: Nabeul, Tunisia
- **Email**: [mariem.khouni@outlook.com](mailto:mariem.khouni@outlook.com)
- **LinkedIn**: [linkedin.com/in/mariem-khouni](https://linkedin.com/in/mariem-khouni)
- **GitHub**: [github.com/mariemkhouni67](https://github.com/mariemkhouni67)
- **Target Position**: End-of-Studies Internship (PFE) starting **February 2027**

---

&copy; 2026 Mariem Khouni. All rights reserved.
