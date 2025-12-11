# 🌌 poc-fe-react-archive-timeline

An immersive **3D poetry portal** built with React + Three.js.  
Navigate a branching timeline, open contextual modals, and manage content through JSON + Markdown.

---

## 📸 Visual Preview

### 🛰️ 3D Timeline

![3D Timeline](assets/timeline-preview.png)

### 🧩 Node Modal

![Node Modal](assets/modal-preview.png)

### 📝 Poem Modal

![Poem Modal](assets/category-preview.png)

---

## ✨ Core Features

- 🧭 Fullscreen 3D timeline with `Scroll / Drag / Click` navigation.
- 🪐 Abstract nodes with dynamic labels and visual connections.
- 🎛️ Mood filters: `all`, `love`, `nature`, `revolt`, `exile`, `spiritual`.
- 📚 Node modal with grouped poems: `manifesto`, `cycle`, `fragments`.
- 📄 Dedicated poem modal focused on metadata + text excerpt.
- 🌍 Built-in multilingual UI and localized content pipeline.
- ⚙️ Startup loader configurable from JSON.

---

## 🧱 Tech Stack

- ⚛️ React 19
- 🟦 TypeScript
- ⚡ Vite
- 🧠 Three.js
- 🧰 Redux Toolkit
- 🎨 Sass (component-scoped + global tokens)

---

## 🌍 Internationalization

Supported locales:

- 🇮🇹 Italian (`it`)
- 🇬🇧 English (`en`)

Localization files:

- UI strings: `src/i18n/locales/*.json`
- Events: `src/content/locales/<locale>/poetic-events.json`
- Poems: `src/content/locales/<locale>/poems/**/*.md`

---

## 🗂 Content-Driven Setup

### Event Data

Each event in `poetic-events.json` defines:

- `id`, `year`, `title`, `location`
- `mood`, `branch`, optional `branchFrom`
- `connections` to other nodes
- `poems` entries linked to Markdown sources

### Poem Texts

Poem excerpts are loaded from:

- `src/content/locales/<locale>/poems/.../*.md`

### UI Configuration

Global UI runtime config lives in:

- `src/content/ui-config.json`

---

## 🚀 Quick Start

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
npm run preview
```

Run checks:

```bash
npm run lint
npm run typecheck
```

---

## 📜 Available Scripts

- `dev` -> start local development server
- `build` -> TypeScript build + Vite production build
- `preview` -> preview production build locally
- `lint` -> run ESLint
- `typecheck` -> run TypeScript project checks

---

## 🧭 Project Structure

- `src/components/` -> UI components and modal layers
- `src/components/three-timeline/` -> Three.js runtime and rendering logic
- `src/features/` -> Redux slices (`timeline`, `locale`)
- `src/data/` -> content loaders and UI config loaders
- `src/content/` -> localized editorial data (JSON + Markdown)
- `src/i18n/` -> translation dictionaries and i18n helpers
- `src/styles/` -> global tokens and shared styling primitives

---

## 📄 License

MIT. See `LICENSE`.
