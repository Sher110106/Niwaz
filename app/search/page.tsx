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
    <div className="space-y-6">
      {/* Search Results Header */}
      {searchValue ? (
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <p className="text-sm text-[#212121]/80">
            {products.length === 0
              ? 'No products found for '
              : `Found ${products.length} ${resultsText} for `}
            <span className="font-semibold text-[#BD7263]">&quot;{searchValue}&quot;</span>
          </p>
        </div>
      ) : (
        <div className="hidden md:block">
          <h2 className="font-serif text-2xl font-bold text-[#212121] lg:text-3xl">
            All Products
          </h2>
          <p className="mt-1 text-sm text-[#212121]/70">
            Browse our complete collection of hand-embroidered pieces
          </p>
        </div>
      )}

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="space-y-6">
          <Grid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductGridItems products={products} />
          </Grid>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 text-6xl">🔍</div>
          <h3 className="mb-2 font-serif text-xl font-bold text-[#212121]">
            No Products Found
          </h3>
          <p className="text-sm text-[#212121]/70">
            Try adjusting your search or browse our collections
          </p>
        </div>
      )}
    </div>
  );
}
