import AcmeLogo from '@/app/ui/acme-logo';
import CommentForm from '@/app/ui/comment-form';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { neon } from '@neondatabase/serverless';

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get('comment');
    // Insert the comment from the form into the Postgres database
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;
  }
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-primaryHover p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
          <p className="font-glitch text-xl text-gray-800 md:text-3xl md:leading-normal">
            {/* 
    `font-glitch` is a Tailwind font role, NOT a direct font import.

    How this works:
    1. The Rubik Glitch font is imported via next/font in fonts.ts
    2. Its CSS variable (--font-rubik-glitch) is exposed globally in RootLayout
    3. tailwind.config.ts maps `font-glitch` → var(--font-rubik-glitch), cursive
    4. This component simply opts into the role

    Result:
    - No font import needed here
    - Fallback is handled by the browser
    - Font usage is consistent across the app
  */}
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-primaryHover">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          <p className="font-french text-xl text-primaryHover md:text-3xl md:leading-normal">
            <strong>This is a french typa font broski </strong>
          </p>

          <p className="font-german text-xl text-primaryActive md:text-3xl md:leading-normal">
            <strong>This is a german typa font broski </strong>
          </p>

          <p className="font-limelight text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>This is a limelight typa font broski </strong>
          </p>
          <Link
            href="/login"
            className=" font-nabla flex items-center gap-5 self-start rounded-lg bg-primaryHover px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary md:text-base"
          >
            <span>Log in, Nabla font</span>{' '}
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          {/* Add a simple form to submit comments to the database */}
          <CommentForm create={create} />
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          ;{/* Add Hero Images Here */}
          <Image
            /* 
    Next.js Image component
    - Replaces the native <img> tag
    - Enables automatic image optimization, lazy loading,
      correct sizing, and prevents layout shift (CLS)
  */
            src="/hero-desktop.png"
            /*
    Path to the image inside the /public directory.
    This resolves to: public/hero-desktop.png

    Because this is a local static asset:
    - Next.js can optimize it at build time
    - No external network request is needed
  */

            width={1000}
            height={760}
            /*
    These define the image's INTRINSIC dimensions.
    They are NOT the rendered size on screen.

    Purpose:
    - Establish the correct aspect ratio
    - Allow the browser to reserve space before loading
    - Prevent layout shift (CLS)

    Visual size is controlled later via CSS / layout.
  */

            className="hidden md:block"
            /*
    Tailwind utility classes controlling RESPONSIVE VISIBILITY.

    - `hidden` → display: none (hide by default on all screens)
    - `md:block` → display: block when viewport >= 768px

    Result:
    - Image is hidden on mobile
    - Image is shown on desktop

    Tailwind converts this into CSS media queries at build time.
  */

            alt="Screenshots of the dashboard project showing desktop version"
            /*
    Accessible alternative text:
    - Used by screen readers
    - Used by search engines
    - Required for meaningful images

    This image conveys information, so a descriptive alt is correct.
  */
          />
          <Image
            /*
    Second Image component for the MOBILE version.
    This is a different asset, not just a resized version.
    This pattern is called "art-direction".
  */
            src="/hero-mobile.png"
            /*
    Points to: public/hero-mobile.png

    Smaller image tailored specifically for mobile screens.
    Saves bandwidth and improves performance on small devices.
  */

            width={560}
            height={620}
            /*
    Intrinsic dimensions for the mobile image.
    Again:
    - Preserves aspect ratio
    - Prevents layout shift
  */

            className="md:hidden"
            /*
    Responsive visibility rule:

    - Visible by default (mobile-first)
    - Hidden at `md` breakpoint and above (>= 768px)

    Result:
    - Image is shown on mobile
    - Image is hidden on desktop
  */

            alt="Screenshots of the dashboard project showing mobile version"
            /*
    Alt text specific to the mobile screenshot.
    Keeps accessibility accurate and descriptive.
  */
          />
        </div>
      </div>
    </main>
  );
}
