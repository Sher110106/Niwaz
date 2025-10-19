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
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            {/* Custom Available Badge - Only on hover */}
            <div className="absolute top-3 right-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
              <span className="rounded-full bg-[#547B6F] px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                ✨ Custom Available
              </span>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
