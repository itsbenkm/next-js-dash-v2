// tailwind/tokens/colors.ts

export const colors = {
  /*
    BRAND COLORS
    These define the primary identity of the app.
    Used for buttons, links, highlights, and key actions.
  */
  // tailwind/tokens/colors.ts
  brand: {
    primary: 'var(--color-brand-primary, #0070F3)',
    primaryHover: 'var(--color-brand-primary-hover, #2589FE)',
    primaryActive: 'var(--color-brand-primary-active, #2F6FEB)',
  },

  /*
    NEUTRAL / UI COLORS
    Used for backgrounds, surfaces, borders, and muted text.
  */
  neutral: {
    white: '#FFFFFF',
    black: '#000000',

    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  /*
    FEEDBACK COLORS
    Used for status messages and UI feedback.
  */
  success: {
    DEFAULT: '#16A34A',
    subtle: '#DCFCE7',
  },

  warning: {
    DEFAULT: '#F59E0B',
    subtle: '#FEF3C7',
  },

  error: {
    DEFAULT: '#DC2626',
    subtle: '#FEE2E2',
  },
};
