# ✅ Launch Checklist - Niwaz

## Pre-Launch Tasks

### 🔧 Configuration (Required)

- [ ] **Update WhatsApp Number**
  - [ ] `components/whatsapp-fab.tsx`
  - [ ] `app/page.tsx`
  - [ ] `app/custom/page.tsx`
  - [ ] `components/layout/navbar/index.tsx`
  - [ ] `components/layout/footer.tsx`
  - Replace: `91XXXXXXXXXX` → Your number (e.g., `919876543210`)

- [ ] **Update Contact Information**
  - [ ] Email in `components/layout/footer.tsx`
  - [ ] Instagram handle in `components/layout/footer.tsx`
  - [ ] Update any other social media links

- [ ] **Set Environment Variables**
  - [ ] Create `.env.local` file
  - [ ] Add `SHOPIFY_STORE_DOMAIN`
  - [ ] Add `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
  - [ ] Add `SITE_NAME="Niwaz"`
  - [ ] Add `COMPANY_NAME="Niwaz"`

---

### 🛍️ Shopify Setup (Required)

- [ ] **Create Collections**
  - [ ] Collection: `lehengas`
  - [ ] Collection: `suits`
  - [ ] Collection: `dupattas`
  - [ ] Add products to each collection

- [ ] **Product Setup**
  - [ ] Upload products with 4:5 aspect ratio images
  - [ ] Add "Hand Embroidered" tag to products
  - [ ] Write compelling descriptions highlighting craftsmanship
  - [ ] Set accurate pricing in INR (₹)
  - [ ] Configure inventory tracking
  - [ ] Set up variants if needed (sizes, colors)

- [ ] **Optional: Navigation Menu**
  - [ ] Create menu: `next-js-frontend-header-menu`
  - [ ] Add menu items (or use default navigation)

- [ ] **Test Products**
  - [ ] At least 3 products per collection
  - [ ] Verify images display correctly
  - [ ] Check product details page
  - [ ] Test add to cart functionality

---

### 🧪 Testing (Critical)

#### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] WhatsApp buttons open WhatsApp with pre-filled message
- [ ] Cart add/remove/update works
- [ ] Product search functions
- [ ] Checkout process completes
- [ ] Mobile menu opens/closes
- [ ] All pages load without errors

#### Visual Tests
- [ ] Mobile (< 768px) - iPhone/Android
- [ ] Tablet (768-1024px) - iPad
- [ ] Desktop (> 1024px) - Laptop/Desktop
- [ ] Test in Safari, Chrome, Firefox
- [ ] Images load properly
- [ ] Fonts display correctly (DM Serif Display, Inter)
- [ ] Colors match design spec

#### Content Tests
- [ ] All text is readable (no Lorem Ipsum)
- [ ] Images have alt text
- [ ] Links go to correct destinations
- [ ] Testimonials are appropriate
- [ ] Contact info is accurate

#### Accessibility Tests
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] All interactive elements have labels

---

### 📝 Content Review (Recommended)

- [ ] **Homepage**
  - [ ] Hero headline resonates with brand
  - [ ] CTAs are clear and compelling
  - [ ] Testimonials are real/relevant
  
- [ ] **Our Story**
  - [ ] Story reflects your actual brand values
  - [ ] Customize if needed for your specific journey
  
- [ ] **Our Craft**
  - [ ] Embroidery techniques match what you offer
  - [ ] Remove any techniques you don't use
  
- [ ] **Custom Orders**
  - [ ] Pricing reflects your actual rates
  - [ ] Timeline is accurate
  - [ ] Customization options match what you offer

---

### 🎨 Branding (Optional Customization)

- [ ] **Logo**
  - Current: "R&T" monogram
  - [ ] Replace with custom logo if desired
  - Update: `components/logo-square.tsx`

- [ ] **Colors**
  - [ ] Use current palette, or
  - [ ] Customize in `app/globals.css` (`:root` variables)

- [ ] **Typography**
  - [ ] Keep DM Serif Display + Inter, or
  - [ ] Change Google Fonts URL in `app/globals.css`

- [ ] **Favicon**
  - [ ] Add `favicon.ico` to `/app` folder
  - [ ] Add `apple-touch-icon.png` for iOS

---

### 🔒 Security & Performance

- [ ] **Environment Security**
  - [ ] `.env.local` is in `.gitignore`
  - [ ] No sensitive keys in code
  - [ ] Shopify tokens are correct type (Storefront API)

- [ ] **Performance**
  - [ ] Test page load times (<3 seconds)
  - [ ] Images are optimized (WebP format)
  - [ ] No console errors
  - [ ] Lighthouse score > 90

---

### 🚀 Deployment

#### Vercel Deployment
- [ ] Push code to GitHub
- [ ] Connect GitHub repo to Vercel
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy to production
- [ ] Test production URL

#### Post-Deployment
- [ ] Set custom domain (if applicable)
- [ ] Configure DNS settings
- [ ] Set up SSL certificate (auto with Vercel)
- [ ] Test all functionality on live site
- [ ] Check mobile responsiveness on live site

---

### 📈 Analytics & Monitoring (Recommended)

- [ ] **Vercel Analytics**
  - [ ] Enable Vercel Analytics in dashboard
  - [ ] Monitor page views

- [ ] **Google Analytics** (Optional)
  - [ ] Add GA4 property
  - [ ] Install tracking code
  - [ ] Set up conversion tracking

- [ ] **Social Pixels** (Optional)
  - [ ] Facebook Pixel
  - [ ] Instagram Pixel
  - [ ] Pinterest Tag

---

### 📱 Marketing Setup (Post-Launch)

- [ ] **Social Media**
  - [ ] Create Instagram business account
  - [ ] Post product photos
  - [ ] Link to website in bio
  - [ ] Create Facebook page
  - [ ] Set up WhatsApp Business profile

- [ ] **Google My Business**
  - [ ] Create business listing
  - [ ] Add website link
  - [ ] Upload photos

- [ ] **SEO**
  - [ ] Submit sitemap to Google Search Console
  - [ ] Add meta descriptions (already included)
  - [ ] Create blog for content marketing (optional)

---

### 🎯 Launch Day

- [ ] Final walkthrough of entire site
- [ ] Test checkout with test order
- [ ] Announce on social media
- [ ] Email existing customers
- [ ] Monitor WhatsApp for inquiries
- [ ] Check order fulfillment process

---

### 📞 Support & Maintenance

- [ ] **Customer Support**
  - [ ] Set up WhatsApp Business hours
  - [ ] Create FAQ page (optional)
  - [ ] Set up email support workflow

- [ ] **Regular Tasks**
  - [ ] Add new products monthly
  - [ ] Update collections seasonally
  - [ ] Monitor and respond to WhatsApp inquiries
  - [ ] Backup site data regularly
  - [ ] Update dependencies quarterly

---

## Quick Reference

### Key Files to Customize
```
Contact Info:
├── components/layout/footer.tsx
└── All WhatsApp button files

Content:
├── app/page.tsx (homepage)
├── app/our-story/page.tsx
├── app/our-craft/page.tsx
└── app/custom/page.tsx

Styling:
├── app/globals.css
└── components/logo-square.tsx
```

### Important Commands
```bash
# Development
pnpm dev

# Build
pnpm build

# Start production
pnpm start

# Type check
pnpm type-check
```

---

## Support Resources

- **BRAND_README.md** - Complete documentation
- **DESIGN_REFERENCE.md** - Visual design guide
- **QUICK_START.md** - Getting started
- **IMPLEMENTATION_SUMMARY.md** - What was built
- **Agent.md** - Original design spec

---

## Emergency Contacts

If something breaks:
1. Check browser console for errors
2. Check Vercel deployment logs
3. Verify environment variables
4. Test Shopify API connection
5. Rollback to previous deployment if needed

---

**Good luck with your launch! 🎉**

*Remember: Start small, test thoroughly, and iterate based on customer feedback.*
