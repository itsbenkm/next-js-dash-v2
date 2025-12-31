import SideNav from '@/app/ui/dashboard/sidenav';
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={`${inter.variable} ${rubikGlitch.variable} ${limelight.variable} ${french.variable} ${german.variable} ${nabla.variable} antialiased`}
    >
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </body>
  );
}
