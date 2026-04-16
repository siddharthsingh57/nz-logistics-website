# YOUR BUSINESS NAME — Marketing Website

A 3-page marketing website for a New Zealand logistics & transport company.  
Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

---

## Quick Start

### 1. Install Node.js (if not already installed)

Download and install **Node.js 18 or later** from:  
https://nodejs.org/en/download

After installation, verify with:
```bash
node --version  # should be 18.x or higher
npm --version
```

### 2. Install dependencies

```bash
cd nz-logistics-website
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Pages

| Route        | File                         | Description                                |
|--------------|------------------------------|--------------------------------------------|
| `/`          | `app/page.tsx`               | Home — Hero, Services, Why Us, Coverage, Process, Proof, CTA |
| `/services`  | `app/services/page.tsx`      | Full service detail pages with feature lists |
| `/contact`   | `app/contact/page.tsx`       | Quote request form + depot info + hours    |

---

## Where to Edit Copy

**All editable content lives in one file: `/content/site.ts`**

Open `content/site.ts` and you'll find named exports for every section's text. 
No need to hunt through component files — just edit the constants.

### Key find-and-replace targets in `content/site.ts`:

| Placeholder         | Replace with                             |
|---------------------|------------------------------------------|
| `YOUR BUSINESS NAME` | The real company brand name             |
| `[YEAR]`            | Year the business was founded (e.g. 2008) |
| `[X]` (depots)      | Number of depots (e.g. 7)               |
| `[X]` (on-time %)   | On-time delivery percentage (e.g. 98)   |
| `[X]k+` (runs)      | Annual run count (e.g. 42)              |
| `[PHONE NUMBER]`    | Full NZ phone number (e.g. 0800 123 456) |
| `[EMAIL ADDRESS]`   | Contact email (e.g. freight@company.co.nz) |
| `[STREET ADDRESS]`  | Head office street address              |
| `[SUBURB], [CITY]`  | City and postcode                       |

---

## Hero Animation Slot

The hero section contains a clearly-marked animation slot for your custom animation.

**File:** `components/sections/Hero.tsx`  
**Element:** `<div id="hero-animation-slot">`

### To replace the placeholder:

1. Open `components/sections/Hero.tsx`
2. Find `<HeroAnimationPlaceholder />` inside the `id="hero-animation-slot"` div
3. Delete `<HeroAnimationPlaceholder />` and its definition at the top of the file
4. Mount your custom animation component inside the `id="hero-animation-slot"` div

### Layout specs (do NOT change the outer div):

```tsx
<div
  id="hero-animation-slot"
  className="relative w-full aspect-video min-h-[300px] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden"
>
  {/* Your animation here */}
</div>
```

- **Desktop:** aspect ratio 4:3, fills the right grid column
- **Mobile:** aspect ratio 16:9 (video), full width, appears above the text
- Border radius: `rounded-2xl` on mobile, `rounded-3xl` on desktop
- The div has `overflow-hidden` so children can bleed to edges

---

## Replacing Image Placeholders

All image placeholders have HTML comments explaining what photo should go there.

Search for `/* Replace with` in any `.tsx` file to find them.

Example:
```tsx
{/* Replace with image of [trucks on SH1 / Auckland depot / etc.] */}
```

Replace the placeholder `<div>` with:
```tsx
<img
  src="/images/your-image.jpg"
  alt="[Descriptive alt text]"
  className="w-full h-full object-cover"
/>
```

Put images in the `/public/images/` directory.

---

## Replacing Client Logos

**File:** `components/sections/Proof.tsx`

Find the five grey placeholder rectangles. Replace each `<motion.div>` block with:
```tsx
<motion.div key={i} variants={fadeUp()} className="flex items-center justify-center h-[52px]">
  <img
    src="/images/clients/logo-name.svg"
    alt="Client company name"
    className="max-h-8 w-auto opacity-50 hover:opacity-80 transition-opacity"
  />
</motion.div>
```

Recommended logo specs: **160×60px SVG or PNG** with transparent background.

---

## Adding a Real Testimonial

**File:** `components/sections/Proof.tsx`

Find the `<blockquote>` element and replace the placeholder text with a real customer quote.

Suggested format:
```tsx
<blockquote>
  <p className="font-display text-xl md:text-2xl font-light text-ink/70 leading-relaxed italic text-balance">
    "Your real customer testimonial goes here — 2 to 3 sentences."
  </p>
  <footer className="mt-5 font-sans text-sm text-muted">
    — Jane S., Operations Manager, Smith Exports Ltd
  </footer>
</blockquote>
```

Use first name + last initial only for privacy (e.g. "Jane S." not "Jane Smith").

---

## Contact Form Backend

The contact form in `/app/contact/page.tsx` currently logs submissions to the browser console only (`console.log`). It has no backend.

To connect it to a real backend, find `handleSubmit` in `app/contact/page.tsx` and replace the `setTimeout` with a `fetch()` call to your API endpoint or a service like [Resend](https://resend.com), [Formspree](https://formspree.io), or [EmailJS](https://www.emailjs.com).

---

## Design System

| Token               | Value                  | Usage                           |
|---------------------|------------------------|---------------------------------|
| `--bg`              | `#F4F1EB`              | Page background (warm off-white)|
| `--bg-alt`          | `#EDE9E0`              | Alternate section background    |
| `--primary`         | `#2C4A3E`              | Forest green — brand primary    |
| `--primary-dark`    | `#1A2E26`              | Darker forest green             |
| `--accent`          | `#C4622D`              | Burnt orange — CTAs & highlights|
| `--ocean`           | `#1B4D6E`              | Pacific blue — secondary accent |
| `--ink`             | `#1A1A18`              | Body text (warm near-black)     |
| `--muted`           | `#6B6456`              | Secondary text (warm grey)      |

Fonts:
- **Display (headings):** Fraunces — variable serif, light weight
- **Body/UI:** Outfit — geometric sans-serif

---

## Updating the Domain / Meta Tags

In `app/layout.tsx`, update the `metadataBase` URL:

```tsx
metadataBase: new URL('https://youractualdomain.co.nz'),
```

---

## Tech Stack

| Package        | Purpose                         |
|----------------|---------------------------------|
| Next.js 14     | Framework (App Router)          |
| TypeScript     | Type safety                     |
| Tailwind CSS   | Utility-first styling           |
| Framer Motion  | All animations                  |
| Lenis          | Smooth scroll (auto-disabled for prefers-reduced-motion) |
| lucide-react   | Icons                           |
| clsx + tailwind-merge | Class name utilities    |

---

## Responsive Breakpoints

Tested at:
- **375px** — mobile (iPhone SE)
- **768px** — tablet (iPad)
- **1024px** — small desktop
- **1440px** — large desktop

---

## Scripts

```bash
npm run dev      # Development server on localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```
