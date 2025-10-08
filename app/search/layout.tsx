import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-[#EDE6DF]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Mobile Header */}
          <div className="mb-6 md:hidden">
            <h1 className="font-serif text-2xl font-bold text-[#212121] sm:text-3xl">
              Our Collections
            </h1>
            <p className="mt-2 text-sm text-[#212121]/70">
              Discover our hand-embroidered masterpieces
            </p>
          </div>

          {/* Mobile Filters */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:justify-between md:hidden">
            <div className="w-full sm:w-48">
              <Collections />
            </div>
            <div className="w-full sm:w-48">
              <FilterList list={sorting} title="Sort by" />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:gap-8">
            <div className="w-48 flex-none">
              <div className="sticky top-24 space-y-8">
                <Collections />
                <FilterList list={sorting} title="Sort by" />
              </div>
            </div>
            <div className="flex-1">
              <Suspense fallback={null}>
                <ChildrenWrapper>{children}</ChildrenWrapper>
              </Suspense>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="md:hidden">
            <Suspense fallback={null}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
