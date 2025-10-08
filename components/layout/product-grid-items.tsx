import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn group">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
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
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            {/* Custom Available Badge */}
            <div className="absolute top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:top-3 sm:right-3">
              <span className="rounded-full bg-[#547B6F] px-2 py-1 text-xs font-medium text-white shadow-sm sm:px-3">
                ✨ Custom
              </span>
            </div>
            {/* Mobile Badge - Always Visible */}
            <div className="absolute top-2 left-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0 sm:hidden">
              <span className="rounded-full bg-[#BD7263] px-2 py-1 text-xs font-medium text-white shadow-sm">
                Hand Embroidered
              </span>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
