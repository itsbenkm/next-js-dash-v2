import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices',
};

// Async Page Component: Allows data fetching directly in the component body
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  // 1. Extract search parameters from the URL
  // 'query' is for the search bar, 'page' is for pagination
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // 2. Fetch the total number of pages based on the search query
  // This is needed to render the pagination controls correctly
  const totalPages = await fetchInvoicesPages(query);
  // const totalPages = await getInvoicesTotalPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-german text-xl text-primaryActive md:text-3xl md:leading-normal">
          Invoices Page
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* Search component updates the URL query parameter */}
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>

      {/* 
        Suspense Boundary
        - Wraps the Table component to show a specific skeleton loader 
          while data is being fetched.
        - The `key` prop ensures the skeleton is re-shown whenever 
          the search query or page number changes.
      */}
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        {/* Pagination controls to navigate between pages */}
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
