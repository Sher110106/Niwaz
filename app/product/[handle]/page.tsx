import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  // Decode the handle to handle URL-encoded characters like emojis
  const decodedHandle = decodeURIComponent(params.handle);
  const product = await getProduct(decodedHandle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
  const params = await props.params;
  
  // Decode the handle to handle URL-encoded characters like emojis
  const decodedHandle = decodeURIComponent(params.handle);
  
  const product = await getProduct(decodedHandle);

  if (!product) {
    console.error(`Product not found for handle: ${params.handle} (decoded: ${decodedHandle})`);
    return notFound();
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="min-h-screen bg-[#EDE6DF]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col rounded-3xl border border-[#ECECEC] bg-white p-6 md:p-8 lg:flex-row lg:gap-12 shadow-lg">
            <div className="h-full w-full basis-full lg:basis-3/5">
              <Suspense
                fallback={
                  <div className="relative aspect-square h-full max-h-[600px] w-full overflow-hidden rounded-2xl bg-[#EDE6DF]" />
                }
              >
                <Gallery
                  images={product.images.slice(0, 5).map((image: Image) => ({
                    src: image.url,
                    altText: image.altText
                  }))}
                />
              </Suspense>
            </div>

            <div className="basis-full lg:basis-2/5">
              <Suspense fallback={null}>
                <ProductDescription product={product} />
              </Suspense>
            </div>
          </div>
          <RelatedProducts id={product.id} />
        </div>
      </div>
      <Footer />
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="mt-16 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-medium text-[#212121]">You Might Also Like</h2>
        <p className="mt-2 text-[#212121]/60">Discover more hand embroidered pieces</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {relatedProducts.map((product) => (
          <div
            key={product.handle}
            className="group"
          >
            <Link
              className="relative block h-full w-full"
              href={`/product/${encodeURIComponent(product.handle)}`}
              prefetch={true}
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
