import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      {/* Product Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-serif font-medium text-[#212121] lg:text-5xl">
          {product.title}
        </h1>
        <div className="flex items-center space-x-4">
          <Price
            className="text-3xl font-bold text-[#BD7263]"
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
          <div className="h-6 w-px bg-[#ECECEC]" />
          <span className="text-sm font-medium text-[#212121]/60">Hand Embroidered</span>
        </div>
      </div>

      {/* Product Badges */}
      <div className="flex flex-wrap gap-3">
        <span className="inline-flex items-center rounded-full bg-[#547B6F] px-4 py-2 text-sm font-medium text-white">
          ✨ Hand Embroidered
        </span>
        <span className="inline-flex items-center rounded-full border border-[#547B6F] px-4 py-2 text-sm font-medium text-[#547B6F]">
          🎨 Custom Available
        </span>
      </div>

      {/* Variant Selector */}
      <div className="space-y-4">
        <VariantSelector options={product.options} variants={product.variants} />
      </div>

      {/* Product Description */}
      {product.descriptionHtml ? (
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-[#212121]">Description</h3>
          <Prose
            className="text-sm leading-relaxed text-[#212121]/80"
            html={product.descriptionHtml}
          />
        </div>
      ) : null}

      {/* WhatsApp Order Notice */}
      <div className="rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <span className="text-2xl">💬</span>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#212121] mb-1">
              Orders via WhatsApp Only
            </h3>
            <p className="text-xs text-[#212121]/70 mb-3">
              We're currently taking orders exclusively through WhatsApp for a personalized shopping experience.
            </p>
            <a
              href={`https://wa.me/918708491362?text=Hi! I'm interested in this product: ${product.title}. Can you help me place an order?`}
              className="inline-flex items-center rounded-full bg-[#25D366] px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-[#20C55A] hover:scale-105"
            >
              <span className="mr-1">📱</span>
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <AddToCart product={product} />
        <a
          href="https://wa.me/918708491362?text=I%20want%20a%20custom%20design"
          className="flex items-center justify-center rounded-2xl bg-[#25D366] p-4 text-sm font-medium text-white transition-all duration-200 hover:bg-[#20C55A] hover:shadow-lg"
        >
          <span className="mr-2">💬</span>
          Chat for Customizations
        </a>
      </div>

      {/* Product Features */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-[#212121]">Features</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <span className="text-[#547B6F]">✓</span>
            <span className="text-sm text-[#212121]/80">Hand embroidered with traditional techniques</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#547B6F]">✓</span>
            <span className="text-sm text-[#212121]/80">Custom designs available on request</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#547B6F]">✓</span>
            <span className="text-sm text-[#212121]/80">Premium quality materials</span>
          </div>
        </div>
      </div>
    </div>
  );
}
