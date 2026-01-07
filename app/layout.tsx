// ===============================
// app/layout.tsx
// ===============================

// Global styles
// - Loads Tailwind base, components, and utilities
// - Must be imported ONCE at the root layout
import '@/app/ui/global.css';
import Script from 'next/script';

// Import fonts via next/font
// IMPORTANT:
// - These imports DO NOT apply fonts visually
// - They only generate CSS variables (e.g. --font-inter)
// - The variables must be attached to <body> to exist globally
import {
  inter,
  rubikGlitch,
  limelight,
  french,
  german,
  nabla,
} from '@/app/ui/fonts';

import ThemeToggle from '@/app/ui/toggle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

// RootLayout
// - Top-level App Router boundary
// - Wraps the entire application
// - Owns <html>, <body>, global CSS, fonts, and theme bootstrapping
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html> is required in App Router layouts
    // Anything applied here persists across ALL routes
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/*
          THEME BOOTSTRAP SCRIPT (FOUC FIX)

          Problem:
          - Server renders without knowing the user's theme
          - Browser defaults to light mode
          - React hydrates → reads localStorage → switches to dark
          - Result: brief flash of light mode (FOUC)

          Solution:
          - Run a tiny synchronous script BEFORE React loads
          - Read localStorage immediately
          - Set data-theme on <html> before CSS paints

          This prevents the flash entirely.
          This is the same pattern used by GitHub, Vercel, etc.
        */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch {}
})();
    `,
          }}
        />
      </head>

      {/*
        <body> is where font CSS variables are EXPOSED.

        What happens here:
        - inter.variable        → defines --font-inter
        - rubikGlitch.variable → defines --font-rubik-glitch
        - limelight.variable   → defines --font-limelight
        - etc.

        Why this matters:
        - Tailwind font utilities (font-sans, font-glitch, font-nabla, etc.)
          reference these CSS variables
        - If a variable is missing, Tailwind silently falls back
        - Exposing ALL referenced variables keeps the design system honest

        antialiased:
        - Improves font rendering across platforms
      */}
      <body
        className={`
          ${inter.variable}
          ${rubikGlitch.variable}
          ${limelight.variable}
          ${french.variable}
          ${german.variable}
          ${nabla.variable}
          antialiased
        `}
      >
        {/* All pages and nested layouts render here */}
        {children}

        {/*
          Global Theme Toggle

          Why it's here:
          - RootLayout persists across navigation
          - Toggle is always available
          - State does NOT reset when changing routes

          Placement:
          - Footer keeps it global but unobtrusive
        */}
        <footer className="flex justify-end p-4">
          <ThemeToggle />
        </footer>
      </body>
    </html>
  );
}
