# AGENTS.md - Webb Portfolio

> **AI Coding Agent Reference Document**  
> This file contains essential information for AI coding agents working on this project. It is the source of truth for project structure, conventions, and development workflows.

---

## Project Overview

**Webb Portfolio** is a personal portfolio website for Demarick Webb-Rivera, a Full Stack Developer and Army Veteran based in Nashville, TN. The site showcases professional experience, projects, skills, and provides a contact form for potential employers.

### Unique Design Identity

The portfolio features a distinctive **"Yeezy" aesthetic** — an industrial, minimalist design language inspired by Kanye West's DONDA era. Key visual characteristics:

- **Color Palette**: Monochromatic earth tones (void, ash, concrete, bone) with burnt orange accents (`--yzy-construction: #ff4d00`)
- **Typography**: All uppercase, heavy weight (800-900), tight letter-spacing (-0.02em to -0.03em)
- **Textures**: Film grain and concrete texture overlays for industrial feel
- **Sharp Geometry**: Zero border-radius (`* { border-radius: 0 !important; }`)
- **Construction Site Motif**: Status beacons, grid overlays, industrial borders

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | ^16.0.8 |
| Language | TypeScript | ^5 |
| UI Library | React | ^19.2.1 |
| Styling | Tailwind CSS | ^3.4.1 |
| Fonts | Google Fonts (Inter, JetBrains Mono) | - |
| Analytics | @vercel/analytics | ^1.5.0 |
| Email | @emailjs/browser | ^4.4.1 |

---

## Project Structure

```
WebbPortfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles + Yeezy theme tokens
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page composition
│   │   └── not-found.tsx       # 404 page
│   │
│   └── components/             # React components
│       ├── Hero.tsx            # Hero section with photo toggle
│       ├── Navigation.tsx      # Fixed nav with mobile menu
│       ├── About.tsx           # Profile/manifesto section
│       ├── Projects.tsx        # 4-project showcase grid
│       ├── Skills.tsx          # Skills grid + credentials
│       ├── Contact.tsx         # EmailJS contact form
│       ├── Footer.tsx          # Monumental footer with links
│       ├── ScrollProgress.tsx  # Reading progress bar
│       ├── DevVerifier.tsx     # Dev tool (Konami code activated)
│       ├── ConsoleModule.tsx   # Retro console UI components
│       ├── TabNavigation.tsx   # Accessible tab navigation
│       ├── SystemInfo.tsx      # System diagnostics panel
│       └── StickyMobileCTA.tsx # Mobile sticky contact button
│
├── public/                     # Static assets
│   ├── headshot.jpg            # Hero/profile photo
│   ├── logo dwr com.png        # Site favicon
│   ├── film-grain.svg          # Texture overlay
│   ├── concrete-texture.svg    # Background texture
│   ├── *.svg                   # Project thumbnails
│   └── *.mp3                   # Background music (Moon by Kanye West)
│
├── .github/
│   └── copilot-instructions.md # GitHub Copilot guidelines
│
├── package.json                # Dependencies & scripts
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind + custom theme
├── postcss.config.js           # PostCSS setup
├── .eslintrc.json              # ESLint (extends next/core-web-vitals)
├── .env.local                  # EmailJS credentials (public)
├── requirements.txt            # Python deps (optional)
└── start.bat                   # Windows dev server launcher
```

---

## Build and Development Commands

```bash
# Development server
npm run dev
# or use the Windows batch file
start.bat

# Production build
npm run build

# Production server (after build)
npm run start
```

**Important**: The project uses `reactStrictMode: false` in `next.config.js` to prevent double-mounting issues during development.

---

## Key Configuration Details

### Next.js Config (`next.config.js`)

```javascript
{
  reactStrictMode: false,  // Disabled to prevent ghosting in dev
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' }
    ]
  }
}
```

### TypeScript Config (`tsconfig.json`)

- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler

### Tailwind Config

Custom theme extensions:
- **Colors**: `burnt-orange`, `yzy-void`, `yzy-concrete`, `yzy-bone`, etc.
- **Fonts**: `sans` (Inter), `mono` (JetBrains Mono)
- **Spacing**: Custom values (18, 88, 100, 120)
- **Shadows**: `subtle`, `card`, `card-hover`, `premium`

---

## Code Style Guidelines

### Component Patterns

1. **Client Components**: All interactive components use `'use client'` directive
2. **Type Safety**: Props typed with TypeScript interfaces
3. **CSS Approach**: Utility classes from Tailwind + custom CSS in `globals.css`
4. **Naming**: PascalCase for components, camelCase for functions/variables

### Styling Conventions

```typescript
// Preferred: Inline styles for dynamic values
<div style={{ marginBottom: '2rem' }}>

// Preferred: Tailwind utilities for static values
<div className="flex items-center gap-4">

// Preferred: CSS custom properties for theme values
<div style={{ color: 'var(--yzy-bone)' }}>
```

### CSS Architecture (`globals.css`)

- **CSS Variables**: All Yeezy theme tokens in `:root`
- **Component Classes**: `.yzy-*` prefixed classes for Yeezy-specific styles
- **Utility Classes**: `.text-hero`, `.text-section`, `.section-padding`
- **Global Overrides**: `* { border-radius: 0 !important; }`

### Typography

All text is **UPPERCASE** by default (set on `body`). The design uses:
- `font-weight: 800-900` for headings
- `letter-spacing: -0.02em to -0.03em` for tight headlines
- `font-family: var(--font-mono)` for technical/meta text

---

## Component Reference

### Hero (`Hero.tsx`)
- Props: `photoMode: 'backdrop' | 'nav'`
- Features: Backdrop image toggle, status beacon, CTA buttons
- Renders photo as backdrop or in nav based on `photoMode`

### Navigation (`Navigation.tsx`)
- Props: `photoMode`, `onTogglePhotoMode`
- Features: Fixed nav, mobile menu, avatar toggle
- Smart scroll: hides on scroll down, shows on scroll up

### Projects (`Projects.tsx`)
- Data: Inline array of 4 `ProjectMeta` objects
- Format: Problem → Approach → Result case study layout
- Features: Year badges, tech stack tags, dual CTA buttons

### Contact (`Contact.tsx`)
- Form fields: name, email, message
- Integration: EmailJS (credentials in `.env.local`)
- Validation: Client-side before submission

### DevVerifier (`DevVerifier.tsx`)
- Activation: Konami code (↑↑↓↓←→←→BA)
- Purpose: Runtime verification of theme/CSS/ARIA
- Auto-hides after 5 seconds

---

## Easter Eggs

### DONDA Flash Effect
- **Trigger**: Triple-click anywhere on page (or rapid 3 clicks within 700ms)
- **Effect**: White flash + "DONDA" text overlay + audio tone
- **Code**: Located in `page.tsx` click handler

### Background Music
- **Track**: "Moon" by Kanye West ft. Don Toliver
- **Auto-plays** on load (with fallback for blocked audio)
- **Toggle**: Fixed "AUDIO ON/OFF" button in bottom-right

---

## Environment Variables

Located in `.env.local` (public values, safe to commit):

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_vtlp32a
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_ghiu8yb
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=UNKlFMtz9oZIt0Z7a
```

---

## Testing Strategy

**No automated test suite is currently configured.**

Manual testing checklist:
- [ ] Contact form submission works
- [ ] EmailJS credentials valid
- [ ] All project links open correctly
- [ ] Mobile menu functions
- [ ] Photo toggle works (desktop)
- [ ] DONDA easter egg triggers
- [ ] Audio toggle works
- [ ] Scroll progress indicator visible

### Dev Verification Tool

Press `↑↑↓↓←→←→BA` (Konami code) to open the DevVerifier overlay. It checks:
- Theme attribute validity
- ARIA roles/attributes
- CSS pseudo-elements
- Viewport overflow settings
- Keyboard navigation

---

## Deployment

### Vercel (Primary Target)

1. Connect GitHub repository to Vercel
2. Build command: `next build`
3. Output directory: `.next`

### Environment Notes

- Node.js 18+ required
- No server-side dependencies (static export compatible)
- EmailJS runs client-side (no backend needed)

---

## Security Considerations

1. **EmailJS**: Public key is client-side by design; template restrictions prevent abuse
2. **CORS**: No API routes; all external requests are client-side
3. **XSS**: React's automatic escaping; no `dangerouslySetInnerHTML` usage
4. **Secrets**: No sensitive server-side secrets (no API routes)

---

## Accessibility

- Semantic HTML (`<main>`, `<nav>`, `<section>`)
- ARIA labels on interactive elements
- `sr-only` skip-to-content link
- Focus visible styles (`:focus-visible`)
- `prefers-reduced-motion` respected in animations
- Keyboard navigation support

---

## Common Tasks

### Adding a New Project

Edit `src/components/Projects.tsx`:

```typescript
{
  id: 5,
  title: "PROJECT NAME",
  problem: "PROBLEM STATEMENT",
  approach: "SOLUTION APPROACH", 
  result: "MEASURABLE RESULT",
  technologies: ["Tech1", "Tech2"],
  image: "/project-image.svg",
  liveUrl: "https://...",
  githubUrl: "https://github.com/...",
  year: "2024"
}
```

### Changing Theme Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --yzy-construction: #ff4d00;  /* Primary accent */
  --yzy-void: #1a1816;          /* Background */
  --yzy-bone: #e8e4e0;          /* Primary text */
  /* ... */
}
```

### Updating Contact Email

Edit in two places:
1. `src/components/Contact.tsx` (form `to_email` field)
2. `src/components/Hero.tsx` (mailto link)
3. `src/components/Footer.tsx` (footer link)

---

## Troubleshooting

### Audio not playing
- Browser autoplay policies block audio until user interaction
- Audio toggle will show "AUDIO OFF"; click to enable

### Styles not updating
- Check `data-theme="yeezy"` on `<html>` element
- Hard refresh (Ctrl+F5) to clear CSS cache

### Email form not working
- Verify EmailJS credentials in `.env.local`
- Check browser console for API errors
- Test with direct email link as fallback

### Mobile layout issues
- All mobile breakpoints at `768px` (`md:` in Tailwind)
- Photo toggle hidden on mobile (`< 768px`)
- Sticky CTA appears after scrolling 300px

---

## File Ownership

- **Personal Content**: Hero, About, Contact, Footer, Projects, Skills
- **UI Components**: Navigation, ScrollProgress, ConsoleModule, TabNavigation
- **Dev Tools**: DevVerifier, SystemInfo
- **Utilities**: StickyMobileCTA

---

## Changelog Notes

- **v0.1.0**: Initial portfolio release
- **Design Iteration**: Migrated to Yeezy aesthetic (industrial/construction theme)
- **Current**: Single-page layout with smooth scroll sections

---

*Last updated: 2026-02-27*  
*For questions about this project, refer to the README.md or contact the project owner.*
