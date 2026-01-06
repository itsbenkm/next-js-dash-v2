// app/dashboard/(overview)/page.tsx

import { Suspense } from 'react';

// UI components that render actual dashboard content.
// These are Server Components that fetch their own data internally.
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

// Skeleton components used as fallback UIs while data is loading.
// These render immediately when a Suspense boundary is hit.
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardSkeleton,
} from '@/app/ui/skeletons';

/**
 * This page component acts as the ORCHESTRATION LAYER for the dashboard overview.
 *
 * Responsibilities of this file:
 * - Define the page structure and layout
 * - Group related components together
 * - Control WHEN different parts of the UI appear using Suspense
 *
 * Responsibilities it deliberately avoids:
 * - Fetching data
 * - Business logic
 * - State management
 *
 * Data fetching happens inside child Server Components to enable
 * automatic parallel data fetching in Next.js.
 */
export default async function Page() {
  return (
    <main>
      {/* Static content renders immediately — no data dependency */}
      <h1 className="font-limelight text-xl text-primaryActive md:text-3xl md:leading-normal">
        Dashboard Page
      </h1>

      {/* 
        Cards section:
        - Cards are grouped inside CardWrapper
        - CardWrapper fetches all card-related data in parallel
        - A SINGLE Suspense boundary prevents individual card "popping"
        - CardSkeleton is shown until ALL card data is ready
      */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      {/*
        Lower dashboard section:
        - RevenueChart and LatestInvoices are independent data sources
        - Each gets its own Suspense boundary
        - This allows staggered streaming:
          - Cards can appear first
          - Charts/invoices stream in later
        - Improves perceived performance and UX
      */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
