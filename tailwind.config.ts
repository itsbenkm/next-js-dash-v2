import type { Config } from 'tailwindcss';
import { fonts } from './tailwind/tokens/fonts';
import { colors } from './tailwind/tokens/colors';
const config: Config = {
  // Tells Tailwind where to look for class names.
  // Tailwind will ONLY generate CSS for classes it finds in these files.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    // `extend` safely adds to Tailwind defaults without overwriting them.
    extend: {
      /*
        FONT SYSTEM (Design Tokens)

        - Fonts are PROVIDED by next/font
        - Fonts are EXPOSED via CSS variables in RootLayout
        - Fonts are CONSUMED here via Tailwind utilities
        - Always include a browser-safe fallback
      */
      /*
        TYPOGRAPHY SYSTEM

        - Keys (sans, heading, display, glitch, etc.) are SEMANTIC ROLES
        - Values are font stacks (CSS variables + fallbacks)
        - Tailwind generates utilities like:
            font-sans
            font-heading
            font-display
            font-glitch
      */
      fontFamily: {
        inter: fonts.inter,
        lusitana: fonts.lusitana,
        glitch: fonts.rubikGlitch,
        limelight: fonts.limelight,
        french: fonts.french,
        german: fonts.german,
        nabla: fonts.nabla,
      },

      /*
        LAYOUT EXTENSIONS
      */
      gridTemplateColumns: {
        // Enables `grid-cols-13`
        '13': 'repeat(13, minmax(0, 1fr))',
      },

      /*
        COLOR TOKENS
        These generate utilities like:
        - bg-blue-500
        - text-blue-600
        - border-blue-400
      */
      colors: {
        primary: colors.brand.primary,
        primaryHover: colors.brand.primaryHover,
        primaryActive: colors.brand.primaryActive,
        //blue: {
        //  400: '#2589FE',
        //  500: '#0070F3',
        //  600: '#2F6FEB',
        //},
      },
    },

    /*
      KEYFRAMES
      Defines animation primitives.
      Must be paired with an `animation` utility elsewhere to be used.
    */
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },

  /*
    PLUGINS
    @tailwindcss/forms:
    - Normalizes form elements across browsers
    - Critical for inputs, selects, and checkout forms
  */
  plugins: [require('@tailwindcss/forms')],
};

export default config;

/* =========================================================
   DESIGN SYSTEM NOTES (DOCUMENTATION ONLY)
   ---------------------------------------------------------
   This section is intentionally commented out.
   It explains how this Tailwind config fits into the
   overall font + styling pipeline.
   ========================================================= */

/*
  HOW THIS FILE CASCADES THROUGH THE APP (FONTS)

  fonts.ts (next/font)
        ↓
  RootLayout (exposes CSS variables via .variable)
        ↓
  tailwind.config.ts (maps variables to semantic roles)
        ↓
  Components (use font-sans / font-glitch utilities)

  If any link in this chain is missing:
  - Tailwind silently falls back
  - The browser saves the UI with defaults
  - The design system becomes inconsistent
*/

/*
  WHY FONTS MUST APPEAR HERE TO BE "REAL"

  - next/font alone does NOT apply fonts
  - RootLayout alone does NOT choose fonts
  - Tailwind is the ONLY layer where:

      • font roles are defined
      • fallbacks are enforced
      • usage is consistent across the app

  This is why this file acts as the STYLING CONTRACT.
*/

/*
  WHY `extend` IS MANDATORY

  Without `extend`:
  - Tailwind defaults are overwritten
  - font-sans, spacing, and colors can break
  - You lose built-in Tailwind guarantees

  With `extend`:
  - Defaults remain intact
  - Custom tokens layer safely on top
  - The system stays predictable
*/

/*
  WHY THIS SETUP IS PRODUCTION-SAFE
  (even inside a tutorial codebase)

  - Fonts always have explicit fallbacks
  - Layout utilities are deterministic
  - Colors are centralized
  - Form elements behave consistently across browsers

  This allows experimentation WITHOUT corrupting
  the underlying design system.
*/

/*
  ONE-SENTENCE MENTAL MODEL (LOCK THIS IN)

  "This file defines the design tokens the entire UI consumes;
   nothing here styles elements directly — it only enables them."
*/

/* =========================================================
   END OF DOCUMENTATION
   ========================================================= */
