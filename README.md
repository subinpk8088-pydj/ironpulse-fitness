# IRON PULSE FITNESS — Gym & Training Studio

A single-page, production-ready React site for a gym / fitness studio. Built with Vite, React 18, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Single-page scroll-snap layout**: Home, Programs, Membership, Gallery, Why Us, Reviews, Free Trial Booking, Contact (footer) — all in one continuous scroll
- Sticky nav with active-section highlighting via `IntersectionObserver`, and `scrollIntoView` smooth-scroll on nav clicks
- Scroll-snap is relaxed on mobile so taller sections (the booking form, gallery grid) don't fight the snap
- Programs grid: Strength Training, HIIT Bootcamp, CrossFit, Personal Training, Yoga & Mobility, Cardio Circuit
- 3-tier membership pricing (Basic / Pro / Elite) with a "Most Popular" highlight
- Photo gallery grid with hover captions
- Free-trial booking form (name, phone, program, fitness goal, date, time) with an in-page confirmation and optional WhatsApp hand-off
- Centralized `src/config.js` for business info — same VertexFlow re-theming pattern as the other single-page client builds
- Bold, energetic visual identity: all-caps Anton display font, orange/lime accents on a near-black base, animated "equalizer bar" decoration in the hero
- Toast notifications for booking confirmation
- Fully responsive: mobile (320px+), tablet, desktop, large desktop
- Accessible: semantic HTML, ARIA labels, visible focus states, keyboard-navigable menu

## 🛠 Tech Stack

- **React 18** + **Vite** (no React Router — single-page site)
- **Tailwind CSS v3** (custom color palette & fonts in `tailwind.config.js`)
- **Framer Motion** for animations
- **Lucide React** for icons

No `react-icons`, `react-slick`, `react-typed`, `react-countup`, or similar packages — consistent with the established pattern across this project family.

## 📦 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar (scroll-snap nav), Footer
│   ├── common/          # Button, SectionTitle, WhatsAppButton, Toast
│   └── sections/        # Hero, Programs, Pricing, Gallery, WhyUs, Testimonials, Booking
├── hooks/
│   └── useActiveSection.js   # IntersectionObserver-based active nav tracking
├── utils/                # constants (programs/pricing/gallery/testimonials data), helpers, animations
├── config.js              # Centralized business info — edit this first to re-theme for a new client
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Design System

| Token | Hex | Usage |
|---|---|---|
| Ink | `#121212` | Main background |
| Surface | `#1A1A1A` | Section backgrounds |
| Panel | `#242424` | Card/skeleton tones |
| Cloud | `#F5F5F5` | Primary text on dark backgrounds |
| Orange | `#FF5722` | Buttons, highlights, "Why Us" background |
| Deep Orange | `#D84315` | Gradient partner, hover states |
| Lime | `#A3E635` | Secondary accent, checkmarks, ratings |
| Red | `#EF4444` | Reserved for alerts |

Fonts: **Anton** (bold, all-caps headings) + **Barlow** (body), loaded via Google Fonts in `index.html`.

## 🔧 Re-theming for a New Client

1. Edit `src/config.js` — business name, tagline, phone, WhatsApp number, address, hours, nav labels
2. Edit `tailwind.config.js` — swap the color tokens for the new brand's palette
3. Edit `src/utils/constants.js` — swap programs, pricing, gallery images, and testimonials
4. Swap the Google Fonts link in `index.html` if the new brand needs different typography

## 📅 Booking Flow

This is a frontend-only demo — no backend or payment processor. The trial-booking form shows an in-page confirmation and offers to send the details via a pre-filled WhatsApp message, the same lead-gen pattern used across this project family.

## ♿ Accessibility Notes

- All interactive icons have `aria-label`s
- Focus-visible outlines defined globally in `index.css`
- Semantic landmarks (`header`, `nav`, `section`s, `footer`)
- Color contrast checked against the dark ink/cloud palette for text legibility

---

Built with Vite + React + Tailwind + Framer Motion.
