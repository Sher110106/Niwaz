# 🎨 Visual Design Reference - Niwaz

## Color Swatches

```
┌─────────────────────────────────────────────────┐
│  Primary Background  │  #EDE6DF                 │
│  ████████████████    │  Off-white/Cream         │
├─────────────────────────────────────────────────┤
│  Accent             │  #BD7263                 │
│  ████████████████    │  Muted Rose (CTAs)       │
├─────────────────────────────────────────────────┤
│  Secondary Text     │  #212121                 │
│  ████████████████    │  Rich Black              │
├─────────────────────────────────────────────────┤
│  Highlight          │  #547B6F                 │
│  ████████████████    │  Soft Green (Badges)     │
├─────────────────────────────────────────────────┤
│  Border             │  #ECECEC                 │
│  ████████████████    │  Light Gray              │
├─────────────────────────────────────────────────┤
│  WhatsApp           │  #25D366                 │
│  ████████████████    │  WhatsApp Green          │
└─────────────────────────────────────────────────┘
```

---

## Typography Hierarchy

```
┌──────────────────────────────────────────┐
│  Hero Heading                            │
│  Font: DM Serif Display                  │
│  Size: 5xl - 8xl (80-96px desktop)       │
│  Weight: 700 (Bold)                      │
│  Color: #212121                          │
│  Example: "Every Piece. Hand Embroidered"│
├──────────────────────────────────────────┤
│  Section Heading                         │
│  Font: DM Serif Display                  │
│  Size: 4xl - 5xl (36-48px)               │
│  Weight: 700 (Bold)                      │
│  Color: #212121                          │
│  Example: "Our Collections"              │
├──────────────────────────────────────────┤
│  Card Heading                            │
│  Font: DM Serif Display                  │
│  Size: xl - 2xl (20-24px)                │
│  Weight: 700 (Bold)                      │
│  Color: #212121                          │
│  Example: "Lehengas"                     │
├──────────────────────────────────────────┤
│  Body Text                               │
│  Font: Inter                             │
│  Size: base - lg (16-18px)               │
│  Weight: 400-500                         │
│  Color: #212121/80 (80% opacity)         │
│  Line Height: 1.6-1.8 (relaxed)          │
├──────────────────────────────────────────┤
│  Small Text / Captions                   │
│  Font: Inter                             │
│  Size: sm - xs (12-14px)                 │
│  Weight: 400-500                         │
│  Color: #212121/70 (70% opacity)         │
└──────────────────────────────────────────┘
```

---

## Component Patterns

### 1. Hand Embroidered Badge
```
┌────────────────────────┐
│  Hand Embroidered      │  Background: #547B6F
│                        │  Text: White
│                        │  Border Radius: 12px
│                        │  Padding: 3px 10px
│                        │  Font Size: 0.85rem
└────────────────────────┘
```

### 2. Primary CTA Button
```
┌─────────────────────────────────┐
│    Shop Collection              │  Background: #BD7263
│                                 │  Text: White
│                                 │  Border Radius: 9999px (full)
│                                 │  Padding: 16px 32px
│                                 │  Font Weight: 600
│                                 │  Hover: #a86355
│                                 │  Shadow: Large
└─────────────────────────────────┘
```

### 3. WhatsApp Button
```
┌─────────────────────────────────┐
│  💬  Chat on WhatsApp           │  Background: #25D366
│                                 │  Text: White
│                                 │  Border Radius: 9999px (full)
│                                 │  Padding: 16px 32px
│                                 │  Font Weight: 600
│                                 │  Icon: WhatsApp logo
│                                 │  Hover: Scale 105%
└─────────────────────────────────┘
```

### 4. Secondary/Outline Button
```
┌─────────────────────────────────┐
│    Create Custom Design         │  Background: White
│                                 │  Border: 2px #547B6F
│                                 │  Text: #547B6F
│                                 │  Border Radius: 9999px (full)
│                                 │  Padding: 16px 32px
│                                 │  Hover: BG #547B6F, Text White
└─────────────────────────────────┘
```

### 5. Product Card
```
┌─────────────────────────────────────┐
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │        Product Image          │  │  Border: 1px #ECECEC
│  │        (4:5 aspect ratio)     │  │  Border Radius: 12px
│  │                               │  │  Background: White
│  └───────────────────────────────┘  │  Shadow: Soft
│  ┌───────────────────────────────┐  │
│  │  Rose Garden Lehenga          │  │  Padding: 16px
│  │  [Hand Embroidered]           │  │  Hover: Shadow lift
│  │  ₹4,999                       │  │
│  │  [Custom Available]           │  │
│  │  📱 Chat for Customization    │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 6. Testimonial Card
```
┌─────────────────────────────────────┐
│  ★★★★★                              │  Border: 1px #ECECEC
│                                     │  Border Radius: 16px
│  "The attention to detail is        │  Background: White
│  incredible. My custom lehenga      │  Padding: 32px
│  was exactly what I dreamed of!"    │  Shadow: Subtle
│                                     │
│  Priya S.              [Wedding]    │  Stars: #BD7263
└─────────────────────────────────────┘
```

---

## Layout Patterns

### Homepage Structure
```
┌─────────────────────────────────────────┐
│  Navbar (sticky)                        │
├─────────────────────────────────────────┤
│                                         │
│         HERO SECTION                    │  Height: 85vh
│    Large heading + 2 CTAs               │  Background: Gradient
│                                         │
├─────────────────────────────────────────┤
│                                         │
│    FEATURED COLLECTIONS                 │  Background: White
│    [Lehengas] [Suits] [Dupattas]        │  Grid: 3 columns
│                                         │
├─────────────────────────────────────────┤
│                                         │
│    ABOUT EMBROIDERY                     │  Background: Cream
│    Text + Image (2 col grid)            │  Grid: 2 columns
│                                         │
├─────────────────────────────────────────┤
│                                         │
│    CUSTOM ORDER BANNER                  │  Background: Green gradient
│    CTA: WhatsApp                        │  Full width
│                                         │
├─────────────────────────────────────────┤
│                                         │
│    TESTIMONIALS                         │  Background: White
│    [Card] [Card] [Card]                 │  Grid: 3 columns
│                                         │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

---

## Spacing Scale

```
Base Unit: 8px

2px   → gap-0.5
4px   → gap-1
8px   → gap-2  (base)
12px  → gap-3
16px  → gap-4
24px  → gap-6  (card padding)
32px  → gap-8  (section padding)
48px  → gap-12
64px  → gap-16
80px  → gap-20 (section spacing)
```

---

## Border Radius Scale

```
Small:  4px   → rounded-sm
Medium: 8px   → rounded-lg
Large:  12px  → rounded-xl  (products, cards)
XL:     16px  → rounded-2xl (sections)
Full:   9999px → rounded-full (buttons, badges)
```

---

## Shadow Scale

```
Subtle:   shadow-sm    (cards)
Default:  shadow-md    (hover states)
Large:    shadow-lg    (CTAs)
XL:       shadow-xl    (elevated cards)
2XL:      shadow-2xl   (floating elements)
```

---

## Responsive Grid Patterns

### Collections Grid
```
Mobile (< 768px):     1 column
Tablet (768-1024px):  2 columns
Desktop (> 1024px):   3 columns
```

### Content Grid
```
Mobile (< 768px):     Stack (1 column)
Tablet/Desktop:       2 columns (50/50 or 60/40)
```

---

## Icon Style

- **Style:** Outline/Line icons
- **Weight:** Medium (2px stroke)
- **Size:** 
  - Small: 16px (h-4 w-4)
  - Medium: 20px (h-5 w-5)
  - Large: 24px (h-6 w-6)
- **Color:** Inherit from parent

---

## Image Guidelines

### Product Images
- **Aspect Ratio:** 4:5 (portrait)
- **Resolution:** 800x1000px minimum
- **Format:** WebP or JPEG
- **Border Radius:** 12px
- **Shadow:** Subtle on cards

### Hero Images
- **Aspect Ratio:** 16:9 or wider
- **Resolution:** 1920x1080px minimum
- **Format:** WebP or JPEG

---

## Accessibility Standards

### Color Contrast
```
Text on Background:
#212121 on #EDE6DF = 11.3:1 ✅ AAA
#212121/80 on #EDE6DF = 7.2:1 ✅ AA

Button Contrast:
White on #BD7263 = 5.1:1 ✅ AA
White on #547B6F = 5.4:1 ✅ AA
White on #25D366 = 4.8:1 ✅ AA
```

### Focus States
- Ring: 2px solid #BD7263
- Offset: 2px
- Visible on keyboard navigation

---

## Animation Guidelines

### Transitions
```
Default: 150ms ease
Hover: 250ms ease
Scale: 300ms ease-out
```

### Hover Effects
- Buttons: Background color shift + subtle scale
- Cards: Shadow lift
- Links: Color change + underline
- WhatsApp: Scale 105%

---

## Usage Examples

### Hero Section
```tsx
<section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-[#EDE6DF] to-[#e5dcd3]">
  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#212121]">
    Every Piece.
    <span className="text-[#BD7263]">Hand Embroidered.</span>
  </h1>
</section>
```

### Collection Card
```tsx
<Link href="/collection/lehengas" className="group relative overflow-hidden rounded-2xl">
  <div className="aspect-[4/5] bg-gradient-to-br from-[#f5e6e0] to-[#e8d5ce]">
    {/* Image */}
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
    <div className="absolute bottom-0 p-6 text-white">
      <span className="rounded-full bg-[#547B6F] px-3 py-1 text-xs">
        Custom Available
      </span>
      <h3 className="font-serif text-2xl font-bold">Lehengas</h3>
    </div>
  </div>
</Link>
```

---

**Reference this guide when creating new components or pages to maintain design consistency.**
