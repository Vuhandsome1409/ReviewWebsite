# Ninja AI Premium Dark Aurora - Design System Master

## Color Palette

### Primary Colors
- **Gold Primary**: `#CA8A04` - Main accent, CTAs, highlights
- **Gold Light**: `#FCD34D` - Gradients, hover states
- **Purple Neon**: `#8B5CF6` - Secondary accent
- **Cyan Accent**: `#22D3EE` - Tertiary highlights

### Background Colors
- **Dark Primary**: `#0A0E27` - Main background (Midnight Blue)
- **Dark Secondary**: `#1a1f3a` - Card backgrounds
- **Dark Tertiary**: `#2d1b4e` - Aurora gradient stops

### Text Colors
- **Text Light**: `#E2E8F0` (slate-200) - Primary text, headings
- **Text Muted**: `#94A3B8` (slate-400) - Secondary text, descriptions

## Typography

### Font Families
- **Headlines**: Lexend (font-headline)
- **Body**: Source Sans 3 (font-sans)
- **Mono/Tech**: Space Grotesk (font-mono)

## Components

### Backgrounds
- **Aurora Background**: `.aurora-bg` - Animated gradient background
- **Aurora Glow**: `.aurora-glow` - Conic gradient overlay

### Glass Effects
- **Glass Premium**: `.glass-premium` - Navbar, major cards
  - Background: `rgba(15, 23, 42, 0.7)`
  - Backdrop filter: `blur(24px) saturate(180%)`
  - Border: `1px solid rgba(255, 255, 255, 0.125)`

- **Glass Card Premium**: `.glass-card-premium` - Content cards
  - Background: `rgba(26, 31, 58, 0.6)`
  - Backdrop filter: `blur(20px) saturate(150%)`
  - Border: `1px solid rgba(255, 255, 255, 0.1)`

### Shadows & Glows
- **Shadow Premium**: `.shadow-premium` - Elevated elements
- **Shadow Glow Gold**: `.shadow-glow-gold` - Gold accent glow
- **Shadow Glow Purple**: `.shadow-glow-purple` - Purple accent glow
- **Shadow Glow Cyan**: `.shadow-glow-cyan` - Cyan accent glow

### Animations
- **Float Smooth**: `.animate-float` - 8s floating animation
- **Float Delayed**: `.animate-float-delayed` - 8s with 2.5s delay
- **Float Slow**: `.animate-float-slow` - 10s with 1.5s delay
- **Pulse Glow Premium**: `.animate-pulse-glow` - 3s pulsing glow
- **Hover Lift**: `.hover-lift` - Lift on hover with scale

### Gradients
- **Premium Gradient**: `linear-gradient(135deg, #CA8A04, #FCD34D)` - Gold gradient for CTAs
- **Aurora Gradient**: `linear-gradient(135deg, #8B5CF6, #22D3EE)` - Purple to cyan
- **Text Gradient Gold**: `.text-gradient-gold` - Gold text gradient
- **Text Gradient Aurora**: `.text-gradient-aurora` - Multi-color text gradient

## Button Styles

### Primary CTA
```css
background: linear-gradient(135deg, #CA8A04, #FCD34D);
color: #0A0E27;
box-shadow: 0 0 40px -10px rgba(202, 138, 4, 0.4);
```

### Secondary Button
```css
background: glass-card-premium;
border: 1px solid rgba(255, 255, 255, 0.15);
color: #E2E8F0;
```

### Ghost Button
```css
background: rgba(139, 92, 246, 0.1);
border: 1px solid rgba(139, 92, 246, 0.3);
color: #A78BFA;
```

## Card Styles

### Feature Card
```css
.glass-card-premium
padding: 1.5rem;
border-radius: 1rem;
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover State
```css
transform: translateY(-8px) scale(1.02);
box-shadow: 0 25px 70px -15px rgba(0, 0, 0, 0.6);
border-color: ${accentColor}40;
```

## Section Backgrounds

### Alternating Sections
- Section 1: `.aurora-bg` (animated)
- Section 2: `.aurora-bg` (same, creates consistency)
- Section 3: `.aurora-bg` (same)

All sections use the same aurora background for a cohesive premium feel.

## Icon Colors (Alternating Pattern)
- Odd items: `#CA8A04` (Gold)
- Even items: `#8B5CF6` (Purple)

## Anti-Patterns (DO NOT USE)
- ❌ Old cyan colors: `#00D4FF`, `#0EA5E9`, `#0369A1`
- ❌ Old purple: `#7B2FFF`
- ❌ Old teal: `#0F766E`, `#14B8A6`
- ❌ Light mode backgrounds: `bg-teal-50`, `bg-cyan-50`
- ❌ Old glass: `.glass-card` (use `.glass-card-premium` instead)
- ❌ Static backgrounds: Use `.aurora-bg` for all sections

## Accessibility
- Text contrast ratio: Minimum 4.5:1 (WCAG AA)
- Focus states: Visible ring with accent color
- Reduced motion: Respect `prefers-reduced-motion`
