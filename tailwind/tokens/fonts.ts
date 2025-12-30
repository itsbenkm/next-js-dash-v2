import { french, german, nabla } from '@/app/ui/fonts';

export const fonts = {
  // =========================================================
  // EXPERIMENTAL TYPOGRAPHY TOKENS
  // ---------------------------------------------------------
  // This setup is intentionally simple and flexible.
  // Each key maps DIRECTLY to a font CSS variable.
  //
  // IMPORTANT:
  // - These keys are NOT special Tailwind or CSS keywords
  // - They are arbitrary labels chosen by the developer
  // - Tailwind will generate utilities like:
  //     font-inter
  //     font-lusitana
  //     font-rubikGlitch
  //     font-limelight
  //     font-unifrakturMaguntia
  //
  // Usage example in components:
  //   <p className="font-inter">Body text</p>
  //   <h1 className="font-limelight">Hero text</h1>
  //
  // This is acceptable for:
  // - experimentation
  // - learning
  // - visual exploration
  // - early-stage projects
  //
  // It is NOT ideal for large-scale or long-lived products,
  // where semantic roles (body, heading, display, etc.)
  // should replace font-name-based roles.
  // =========================================================

  inter: 'var(--font-inter), system-ui, sans-serif',
  lusitana: 'var(--font-lusitana), serif',
  rubikGlitch: 'var(--font-rubik-glitch), cursive',
  limelight: 'var(--font-limelight), cursive',
  french: 'var(--font-french), cursive',
  german: 'var(--font-german), cursive',
  nabla: 'var(--font-nabla), cursive',
  // =========================================================
  // FALLBACK NOTE
  // ---------------------------------------------------------
  // In this experimental setup, explicit fallback fonts
  // (e.g. sans-serif, serif, cursive) are NOT defined here.
  //
  // This means:
  // - If a font variable is missing or fails to load,
  //   the browser will fall back to its default font.
  //
  // This is acceptable temporarily.
  // In production systems, always define fallback stacks:
  //
  // Example (production-safe):
  //   body: ['var(--font-inter)', 'system-ui', 'sans-serif']
  //
  // =========================================================

  // =========================================================
  // MIGRATION PATH (WHEN EXPERIMENTATION ENDS)
  // ---------------------------------------------------------
  // When this becomes a real product:
  //
  // 1. Replace font-name keys with semantic roles:
  //      inter        → body
  //      lusitana     → heading
  //      limelight    → display
  //      rubikGlitch  → accent
  //
  // 2. Add explicit fallback fonts
  // 3. Reduce the number of loaded fonts
  // 4. Keep components unchanged (this is the payoff)
  //
  // =========================================================
};
