# 🌌 poc-fe-react-archive-timeline

<p align="left">
  <img alt="React" src="https://img.shields.io/badge/React-19.1.1-20232A?logo=react" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript" />
  <img alt="Three.js" src="https://img.shields.io/badge/Three.js-0.180.0-111111?logo=threedotjs" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-2EA043" />
</p>

An immersive **3D poetry archive experience** built with React + Three.js.  
Navigate an abstract branching timeline, open contextual modals, and drive content from JSON + Markdown.

## ✨ Highlights

- 🛰️ Fullscreen 3D timeline with smooth `Scroll / Drag / Click` controls.
- 🪐 Abstract node visuals with branch-aware labels and flow lines.
- 🎛️ Mood filtering (`all`, `love`, `nature`, `revolt`, `exile`, `spiritual`).
- 📚 Node modal with grouped poems (`manifesto`, `cycle`, `fragments`).
- 🌍 Localized content pipeline (currently: **Italian** + **English**).
- ⚙️ Config-based startup loader and fully content-driven data layer.

## 🖼️ Visuals

| Timeline                                    | Node Modal                              |
| ------------------------------------------- | --------------------------------------- |
| ![3D Timeline](assets/timeline-preview.png) | ![Node Modal](assets/modal-preview.png) |

| Poem Modal                                 |
| ------------------------------------------ |
| ![Poem Modal](assets/category-preview.png) |

## 🧱 Stack

| Layer     | Tech                        |
| --------- | --------------------------- |
| UI        | React 19, Sass              |
| Rendering | Three.js                    |
| State     | Redux Toolkit + React Redux |
| Build     | Vite 7                      |
| Language  | TypeScript                  |
| Quality   | ESLint + Prettier           |

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## 🛠️ Scripts

| Command             | Description                   |
| ------------------- | ----------------------------- |
| `npm run dev`       | Start development server      |
| `npm run build`     | Type check + production build |
| `npm run preview`   | Preview production build      |
| `npm run lint`      | Run ESLint                    |
| `npm run lint:fix`  | Auto-fix lint issues          |
| `npm run format`    | Format codebase with Prettier |
| `npm run typecheck` | Run TypeScript checks         |

## 🌍 Localization & Content

Supported locales:

- 🇮🇹 Italian (`it`)
- 🇬🇧 English (`en`)

Content sources:

- UI dictionaries: `src/i18n/locales/*.json`
- Event configuration: `src/content/locales/<locale>/poetic-events.json`
- Poem excerpts: `src/content/locales/<locale>/poems/**/*.md`
- Global UI config: `src/content/ui-config.json`

## 🧭 Project Structure

```text
src/
  app/                         # Redux store + hooks
  components/                  # UI components + modal layers
  components/three-timeline/   # Three.js runtime (scene, labels, interactions)
  content/                     # Localized JSON + Markdown content
  data/                        # Content and UI config loaders
  features/                    # Redux slices (timeline, locale)
  i18n/                        # Translation engine + locale dictionaries
  styles/                      # Global tokens and shared styles
```

## 📌 Notes

- Dependencies are pinned to versions aligned with the requested baseline.
- Build output may still show a chunk-size warning due to Three.js payload.

## 📄 License

MIT - see `LICENSE`.
