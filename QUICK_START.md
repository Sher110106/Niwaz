# 🚀 Quick Start Guide - Niwaz

## Immediate Actions Required

### 1. Update WhatsApp Number (5 minutes)

Search and replace `91XXXXXXXXXX` with your actual WhatsApp number in these files:

```bash
# Use find and replace in VS Code or run:
# Find: 91XXXXXXXXXX
# Replace with: 919876543210 (example)
```

Files to update:
- `components/whatsapp-fab.tsx`
- `app/page.tsx`
- `app/custom/page.tsx`
- `components/layout/navbar/index.tsx`
- `components/layout/footer.tsx`

### 2. Update Contact Information (2 minutes)

In `components/layout/footer.tsx`:
- Email: Change `hello@niwaz.in` to your email
- Instagram: Change `@niwaz` to your handle

### 3. Set Environment Variables

Create or update `.env.local`:

```env
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-access-token
SITE_NAME="Niwaz"
COMPANY_NAME="Niwaz"
```

### 4. Create Shopify Collections

In your Shopify admin, create these collections:
- Collection handle: `lehengas`
- Collection handle: `suits`  
- Collection handle: `dupattas`

Add products to these collections.

---

## Run the Site

```bash
# Install dependencies (if not done)
pnpm install

# Run development server
pnpm dev
```

Visit: `http://localhost:3000`

---

## What You'll See

✅ **Homepage** - Hero, collections, testimonials
✅ **Our Story** - Brand narrative
✅ **Our Craft** - Embroidery process
✅ **Custom Orders** - Bespoke creation flow
✅ **Collections** - Your Shopify products
✅ **WhatsApp Integration** - Floating button everywhere

---

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

---

## That's it! 🎉

Your embroidered ethnicwear store is ready. Just add products in Shopify and update contact info.

Questions? Check `BRAND_README.md` for full documentation.
