import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <div className="min-h-screen bg-[#EDE6DF]">
      {/* Search Results Header */}
      <div className="bg-white border-b border-[#ECECEC]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {searchValue ? (
            <div className="text-center">
              <h1 className="text-2xl font-serif font-medium text-[#212121] sm:text-3xl lg:text-4xl">
                Search Results
              </h1>
              <p className="mt-2 text-sm text-[#212121]/70">
                {products.length === 0
                  ? 'No products found for '
                  : `Found ${products.length} ${resultsText} for `}
                <span className="font-semibold text-[#BD7263]">&quot;{searchValue}&quot;</span>
              </p>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-serif font-medium text-[#212121] sm:text-3xl lg:text-4xl">
                All Products
              </h1>
              <p className="mt-2 text-sm text-[#212121]/70">
                Browse our complete collection of hand-embroidered pieces
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {products.length > 0 ? (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-[#212121]/60">
                Showing {products.length} {products.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            <Grid className="grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
              <ProductGridItems products={products} />
            </Grid>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-6 h-24 w-24 rounded-full bg-[#ECECEC] flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="mb-2 font-serif text-xl font-bold text-[#212121]">
              No Products Found
            </h3>
            <p className="text-sm text-[#212121]/70">
              Try adjusting your search or browse our collections
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
