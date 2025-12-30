// Global styles (Tailwind base, components, utilities)
// Global CSS import
// - Loads Tailwind base, components, and utilities
// - Must be imported once at the root of the app
import '@/app/ui/global.css';

// Import all fonts that Tailwind references via CSS variables
// IMPORTANT:
// - These imports do NOT apply fonts
// - They only expose CSS variables (via .variable)
import {
  inter,
  rubikGlitch,
  limelight,
  french,
  german,
  nabla,
} from '@/app/ui/fonts';

import ThemeToggle from '@/app/ui/toggle';

// RootLayout is the global boundary for the App Router
// - Runs once
// - Wraps the entire application
// - Correct place for global styling infrastructure (fonts, themes, providers)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html> wrapper is required in App Router layouts
    <html lang="en">
      {/*
        <body> is where global CSS variables should be exposed.

        What happens here:
        - inter.variable        → defines --font-inter
        - rubikGlitch.variable  → defines --font-rubik-glitch

        Why this matters:
        - Tailwind utilities (font-sans, font-glitch) reference these variables
        - If a variable is NOT defined here, Tailwind will silently fall back
        - Exposing all referenced variables keeps the design system honest
      */}
      <body
        className={`${inter.variable} ${rubikGlitch.variable} ${limelight.variable} ${french.variable} ${german.variable} ${nabla.variable} antialiased`}
      >
        {children}
        <footer className="flex justify-end p-4">
          <ThemeToggle />
        </footer>
      </body>
    </html>
  );
}
