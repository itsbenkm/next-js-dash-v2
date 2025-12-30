import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
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
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
