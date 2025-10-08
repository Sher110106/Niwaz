***

# UI Design Specification: Minimalist Embroidered Ethnicwear Ecommerce

## 1. Branding & Theme

- **Primary Color:** `#EDE6DF` (off-white/cream, background)
- **Accent Color:** `#BD7263` (muted rose, main CTAs/buttons)
- **Secondary Color:** `#212121` (rich black, headings and key elements)
- **Highlight Color:** `#547B6F` (soft green, badges, links)
- **Typography:**  
  - Heading: `DM Serif Display`, serif, weight 700  
  - Body: `Inter`, sans-serif, weight 400-500
- **Logo Use:**  
  - Top-left, always visible, clickable to home
- **Spacing/Grid:**  
  - Base unit: 8px
  - Large white space between sections

## 2. General Layout

- **Header:** Sticky, minimalist, white background, subtle box-shadow.  
  - Left: Logo  
  - Right: Shop links (Lehengas, Suits, Embroidery), Custom (WhatsApp), Cart (icon only)
- **Footer:**  
  - Very simple: small logo, WhatsApp chat link, contact email, IG icon
  - No lists or link clutter

## 3. Homepage

- **Hero Section:**  
  - Full-width feature image: Model in embroidered piece  
  - Headline: _“Every Piece. Hand Embroidered. Customizable to You.”_  
  - Single, large CTA: “Shop Collection”
- **Featured Collections:**  
  - Horizontal scroll or two grids: Lehengas, Suits, with photo + hover effect  
  - “Custom designs available” badge on all images
- **About Embroidery:**  
  - Text block (max 3 sentences), subtle illustration of artisan hands
- **Custom Order Area:**  
  - Prominent banner/button: “Want something unique?  
     [Chat on WhatsApp]”
  - Green WhatsApp icon, when clicked opens WhatsApp chat (ANCHOR TAG: `https://wa.me/91XXXXXXXXXX?text=I%20want%20a%20custom%20design`)
- **Testimonials:**  
  - Faded carousel or grid (text only, rounded cards)

## 4. Product Pages

- **Gallery:**  
  - Main image left, thumbnails below  
  - Responsive zoom on hover/click
- **Product Info:**  
  - Name (large), price, embroidery badge  
  - “Customization available” callout under price  
  - CTA: “Chat for Customizations” → WhatsApp link
  - Description, garment care, delivery, returns (only essential info, vertical tabs or collapsible)

## 5. Custom Orders

- **Section or Modal:**  
  - Title: “Dream It, We Stitch It”  
  - Bullet points:  
    - Pick your fabric, colors, thread type  
    - Share size or reference images  
    - Live updates/consult on WhatsApp
  - CTA: WhatsApp chat link, always visible as floating action button on product and home pages

## 6. Navigation & Interactivity

- **Responsive:**  
  - Header collapses to hamburger on mobile  
  - Hero/sections stack vertically
- **Microinteractions:**  
  - Button hover: subtle background color shift  
  - Product cards: shadow/lift on hover  
  - WhatsApp button: ripple effect on tap

## 7. Embroidery & Customization Messaging

- **Badge:**  
  - Text: “Hand Embroidered” (Color: `#547B6F`, rounded, small padding)
- **Customization:**  
  - “Custom Available” chip beside every product, persistent mention in footer and cart

## 8. Assets & Icons

- **Icon style:** Outline (Feather or Material Design icons)
- **WhatsApp:** Green original, always paired with “Chat” text
- **Images:** All product images in aspect ratio 4:5, subtle border-radius: 12px

## 9. Color & Style Reference Table

| Token                | Hex Code   | Usage                            |
|----------------------|------------|----------------------------------|
| bg-primary           | #EDE6DF    | Website main background          |
| text-primary         | #212121    | Headings, nav, main text         |
| accent               | #BD7263    | CTA buttons, highlights          |
| highlight            | #547B6F    | Embroidery badges, WhatsApp      |
| border, shadow       | #ECECEC    | Card borders, dividing lines     |
| success (WhatsApp)   | #25D366    | WhatsApp CTA button bg           |

## 10. Example UI Components (Code)

### Embroidery Badge

```html
<span style="
  background: #547B6F;
  color: #fff;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  display: inline-block;
">
  Hand Embroidered
</span>
```

### WhatsApp Custom Button

```html
<a href="https://wa.me/91XXXXXXXXXX?text=I%20want%20a%20custom%20design"
  style="
    display:flex;
    align-items:center;
    background:#25D366;
    color:#fff;
    font-weight:500;
    padding:10px 20px;
    border-radius:24px;
    font-size:1.1rem;
    text-decoration:none;
    box-shadow:0 3px 12px #e8efe9;
    gap: 8px;
  "
>
  <img src="whatsapp-icon.svg" alt="WhatsApp" width="22" height="22" />
  Chat for Custom Design
</a>
```

### Product Card Minimal Example

```html
<div style="
  border: 1px solid #ECECEC;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow:0 3px 12px rgba(28,28,28,0.08);
  transition: box-shadow .25s;
">
  <img src="lehenga.jpg" alt="Embroidered Lehenga" style="width:100%;aspect-ratio:4/5;" />
  <div style="padding: 16px;">
    <h3>Rose Garden Lehenga</h3>
    <span><!-- Embroidery Badge --></span>
    <div>
      <span style="font-weight:600;">₹4,999</span>
      <span><!-- Customization chip --></span>
    </div>
    <a href="https://wa.me/91XXXXXXXXXX?text=I%20want%20a%20custom%20design"
      style="margin-top:12px;display:inline-block;...
    ">Chat for Customization</a>
  </div>
</div>
```

***

## 11. Accessibility

- All icons/images must have descriptive `alt` text
- Sufficient color contrast
- Keyboard accessible navigation & focus states

***

## 12. Notes to AI Agent

- Maintain minimalism—avoid visual clutter, but DO emphasize embroidery and custom order flows everywhere.
- Ensure WhatsApp CTA is prominent and functional on mobile and desktop.
- Respect grid and spacing rules for a premium, airy look.

***
