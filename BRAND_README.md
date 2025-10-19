# Niwaz 🧵

**Hand-embroidered ethnicwear celebrating traditional craftsmanship**

A modern e-commerce platform built with Next.js 15, showcasing the art of traditional Indian hand embroidery while offering seamless custom order experiences through WhatsApp integration.

---

## 🎨 Brand Identity

**Niwaz** represents the fusion of ancient embroidery art with contemporary design sensibilities.

### Brand Story
We preserve the ancient techniques of hand embroidery while embracing contemporary aesthetics, creating timeless pieces that celebrate both heritage and modernity. Each piece is crafted by skilled artisans who have honed their craft over generations.

### Visual Identity

#### Color Palette
- **Primary Background:** `#EDE6DF` - Off-white/cream warmth
- **Accent:** `#BD7263` - Muted rose for CTAs and highlights
- **Secondary:** `#212121` - Rich black for typography
- **Highlight:** `#547B6F` - Soft green for badges and links
- **Border:** `#ECECEC` - Subtle dividers
- **WhatsApp:** `#25D366` - Brand green

#### Typography
- **Headings:** DM Serif Display (serif, weight 700)
- **Body:** Inter (sans-serif, weights 400-600)

---

## 📂 Site Structure

### Main Pages

1. **Homepage** (`/`)
   - Hero section with brand mission
   - Featured collections grid
   - Embroidery craftsmanship highlight
   - Custom order CTA banner
   - Customer testimonials

2. **Collections** (`/search`)
   - All products from Shopify
   - Filterable by collection
   - Search functionality

3. **Collection Pages**
   - `/collection/lehengas` - Regal ensembles
   - `/collection/suits` - Suits & Kurtas
   - `/collection/dupattas` - Dupattas & Stoles

4. **Our Story** (`/our-story`)
   - Brand heritage and mission
   - Artisan partnerships
   - Sustainability commitment

5. **Our Craft** (`/our-craft`)
   - Detailed embroidery process
   - Traditional techniques explained
   - Artisan testimonials

6. **Custom Orders** (`/custom`)
   - Bespoke creation process
   - Customization options
   - Pricing and timeline information
   - WhatsApp integration for inquiries

7. **Product Pages** (`/product/[handle]`)
   - Image gallery
   - Product details
   - Custom embroidery badge
   - WhatsApp custom consultation CTA

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **E-commerce:** Shopify Storefront API
- **Deployment:** Vercel
- **Font Loading:** Google Fonts (DM Serif Display, Inter)
- **Analytics:** Built-in Vercel Analytics

---

## 🎯 Key Features

### 1. **Custom Order Flow**
- Floating WhatsApp button on all pages
- Direct WhatsApp integration for custom design inquiries
- Pre-filled messages for easy customer contact

### 2. **Hand Embroidered Badge**
- Consistent visual indicator on all products
- Emphasizes craftsmanship and authenticity

### 3. **Minimalist Design**
- Clean, spacious layouts
- Focus on product imagery
- Easy navigation
- Mobile-first responsive design

### 4. **Shopify Integration**
- Dynamic product fetching
- Cart management
- Checkout flow
- Inventory tracking

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm
- Shopify store with Storefront API access

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Add your Shopify credentials to .env.local
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-access-token
SITE_NAME="Niwaz"
COMPANY_NAME="Niwaz"

# Run development server
pnpm dev
```

Visit `http://localhost:3000`

### WhatsApp Number Configuration

Update the WhatsApp phone number in:
- `/components/whatsapp-fab.tsx`
- `/app/page.tsx`
- `/app/custom/page.tsx`
- `/components/layout/navbar/index.tsx`
- `/components/layout/footer.tsx`

Replace `91XXXXXXXXXX` with your actual WhatsApp number (country code + number).

---

## 📋 Shopify Setup

### Required Collections
Create these collections in your Shopify admin for proper navigation:
- `lehengas`
- `suits`
- `dupattas`

### Menu Configuration
Create a menu named `next-js-frontend-header-menu` in Shopify with your navigation items, or the site will use default navigation.

### Product Recommendations
- Use 4:5 aspect ratio images (e.g., 800x1000px)
- Add "Hand Embroidered" tag to all products
- Include detailed descriptions highlighting craftsmanship
- Add custom embroidery options in product variants if applicable

---

## 🎨 Design Guidelines

### Component Patterns

#### Embroidery Badge
```tsx
<div className="inline-block rounded-full bg-[#547B6F] px-3 py-1 text-xs font-medium text-white">
  Hand Embroidered
</div>
```

#### CTA Button
```tsx
<Link
  href="/custom"
  className="rounded-full bg-[#BD7263] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#a86355]"
>
  Create Custom Design
</Link>
```

#### WhatsApp Link
```tsx
<a
  href="https://wa.me/91XXXXXXXXXX?text=I%20want%20a%20custom%20design"
  className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white"
>
  Chat on WhatsApp
</a>
```

---

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are mobile-first and fully responsive.

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on all images
- Color contrast WCAG AA compliant

---

## 🔧 Customization

### Colors
Update theme colors in `app/globals.css`:

```css
:root {
  --niwaz-bg: #EDE6DF;
  --niwaz-text: #212121;
  --niwaz-accent: #BD7263;
  --niwaz-highlight: #547B6F;
  --niwaz-border: #ECECEC;
  --niwaz-whatsapp: #25D366;
}
```

### Fonts
Change fonts in `app/globals.css` by updating the Google Fonts import URL.

---

## 📈 Performance Optimizations

- Image optimization with Next.js Image component
- Font preloading via Google Fonts
- Lazy loading for below-fold content
- Efficient Shopify API queries with GraphQL
- Edge runtime for API routes
- Static page generation where possible

---

## 🧪 Testing Checklist

- [ ] All pages load correctly
- [ ] WhatsApp links work with proper pre-filled text
- [ ] Cart functionality (add, remove, update quantities)
- [ ] Search works across products
- [ ] Mobile navigation menu
- [ ] Responsive design on all screen sizes
- [ ] Form submissions (if any)
- [ ] Product images load properly
- [ ] Links navigate correctly

---

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production
```
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
SITE_NAME=Niwaz
COMPANY_NAME=Niwaz
```

---

## 🤝 Contributing

This is a custom brand website. For modifications:
1. Follow the design system in `Agent.md`
2. Maintain the minimalist aesthetic
3. Ensure WhatsApp integration remains prominent
4. Test on mobile devices

---

## 📄 License

See `license.md`

---

## 💬 Support

For custom design inquiries: WhatsApp or email hello@niwaz.in

For technical issues: Create an issue in the repository

---

**Made with ❤️ by artisans across India 🇮🇳**
