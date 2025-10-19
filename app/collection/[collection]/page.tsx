import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });
  const collection = await getCollection(params.collection);

  return (
    <div className="min-h-screen bg-[#EDE6DF]">
      {/* Collection Header */}
      <div className="bg-white border-b border-[#ECECEC]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-medium text-[#212121] sm:text-5xl lg:text-6xl">
              {collection?.title || 'Collection'}
            </h1>
            {collection?.description && (
              <p className="mt-4 text-lg text-[#212121]/70 max-w-2xl mx-auto">
                {collection.description}
              </p>
            )}
            <div className="mt-6 flex items-center justify-center space-x-4">
              <span className="inline-flex items-center rounded-full bg-[#547B6F] px-4 py-2 text-sm font-medium text-white">
                ✨ Hand Embroidered
              </span>
              <span className="inline-flex items-center rounded-full border border-[#547B6F] px-4 py-2 text-sm font-medium text-[#547B6F]">
                🎨 Custom Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="mx-auto h-24 w-24 rounded-full bg-[#ECECEC] flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-medium text-[#212121] mb-2">No products found</h3>
            <p className="text-[#212121]/60">We couldn't find any products in this collection.</p>
          </div>
        ) : (
          <>
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-[#212121]/60">
                Showing {products.length} {products.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            <Grid className="grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <ProductGridItems products={products} />
            </Grid>
          </>
        )}
      </div>
    </div>
  );
}
