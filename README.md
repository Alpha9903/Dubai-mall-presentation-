# The Dubai Mall — Interactive Presentation

An immersive, luxury-themed interactive presentation showcasing The Dubai Mall. Built with React, Vite, Tailwind CSS, and Framer Motion. Features a custom video intro, animated slides, keyboard/touch navigation, particle effects, parallax backgrounds, and a custom cursor.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 8](https://vitejs.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Routing | React Router DOM (for future expansion) |

---

## Features

- **Video Intro Screen** — Full-screen looping background video with floating gold particles and a shimmer-animated "Start Here" CTA.
- **Loading Screen** — Elegant branded loader with progress bar and ambient particles.
- **Custom Cursor** — Spring-physics gold cursor with hover scale effects; auto-disables on touch devices.
- **10 Animated Slides**:
  1. **Hero** — Parallax background with title reveal
  2. **Press** — Magazine-style layout with staggered quote cards
  3. **Properties** — Map-style interactive dots with floating stats card
  4. **Platforms** — Hover-animated promotional grid
  5. **Capabilities** — Service cards with icon animations
  6. **By The Numbers** — Animated counters (80M+ visitors, 1300+ stores, etc.)
  7. **Fashion Avenue** — Luxury showcase with parallax
  8. **Dubai Aquarium** — Immersive experience slide
  9. **Dining Experience** — Glassmorphism restaurant listings with category cards
  10. **Our Journey** — Vertical alternating timeline (2008–2024)
- **Navigation** — Arrow keys, spacebar, swipe gestures, clickable progress dots, and a mini-map (press **M**).
- **Parallax Effects** — Mouse-tracking background movement on image slides.

---

## Project Structure

```
dubai-mall-presentation/
├── public/
│   ├── intro.mp4              # Video intro asset
│   ├── favicon.svg
│   └── *.png / *.svg          # Static images
├── src/
│   ├── App.jsx                # Root app with loading → video → presentation flow
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles
│   ├── components/
│   │   ├── CustomCursor.jsx   # Spring-physics custom cursor
│   │   ├── LoadingScreen.jsx  # Branded loading animation
│   │   ├── LuxuryHeader.jsx   # Top navigation header
│   │   ├── LuxurySlide.jsx    # Reusable image slide with parallax
│   │   ├── MiniMapNav.jsx     # Slide grid overlay (M key)
│   │   ├── VideoIntro.jsx     # Full-screen video intro
│   │   ├── Footer.jsx         # Site footer
│   │   └── slides/
│   │       ├── CapabilitiesSlide.jsx
│   │       ├── DiningSlide.jsx
│   │       ├── PlatformsSlide.jsx
│   │       ├── PressSlide.jsx
│   │       ├── PropertiesSlide.jsx
│   │       ├── StatsSlide.jsx
│   │       ├── TimelineSlide.jsx
│   │       └── SlideWrapper.jsx
│   └── pages/
│       └── LuxuryLanding.jsx  # Main presentation container
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ (includes npm)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/dubai-mall-presentation.git
cd dubai-mall-presentation

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173/`.

> **Note:** Add your own `intro.mp4` video file to the `public/` folder for the intro screen. The video is excluded from GitHub due to file size limits (>100MB).

---

## Design Decisions

- **Monochrome + Gold Palette** — `#CBA153` gold accent against `#FAFAFA` / `#0A0A0A` backgrounds evokes luxury without distraction.
- **Framer Motion `AnimatePresence`** — Ensures smooth enter/exit transitions between slides with spring physics.
- **Parallax via `useMotionValue`** — Lightweight mouse tracking that doesn't block the main thread; disabled gracefully on mobile.
- **Modular Slide Architecture** — Each slide is a self-contained component exported from `slides/`, making it trivial to reorder or add new sections.
- **Touch & Keyboard First** — Swipe detection (50px threshold) and arrow/space key bindings ensure accessibility across devices.
- **Custom Cursor as Progressive Enhancement** — Only renders on `hover: hover` pointer devices; touch users get native behavior.

---

## AI Tools Used

This project was built collaboratively with AI assistance:
- **Cascade (Windsurf)** — Pair-programming agent for component scaffolding, animation logic, debugging, and code refactoring.
- **ChatGPT / GPT-4** — Design system guidance, copywriting for slide content, and README structuring.

---

## License

MIT — Open for educational and portfolio use.
