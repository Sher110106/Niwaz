import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b border-[#ECECEC] pb-6">
        <h1 className="mb-2 text-5xl font-medium text-[#212121]">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-[#BD7263] p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <div className="mb-2">
        <span className="inline-block rounded-full bg-[#547B6F] px-3 py-1 text-xs font-medium text-white">Hand Embroidered</span>
        <span className="ml-2 inline-block rounded-full border border-[#547B6F] px-3 py-1 text-xs font-medium text-[#547B6F]">Custom Available</span>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight text-[#212121]/80"
          html={product.descriptionHtml}
        />
      ) : null}
      <div className="mt-4 space-y-3">
        <AddToCart product={product} />
        <a
          href="https://wa.me/91XXXXXXXXXX?text=I%20want%20a%20custom%20design"
          className="flex items-center justify-center rounded-full bg-[#25D366] p-3 text-sm font-medium text-white hover:opacity-95"
        >
          Chat for Customizations
        </a>
      </div>
    </>
  );
}
