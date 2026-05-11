---
name: Design System
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#becbae'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#89957a'
  outline-variant: '#3f4a34'
  surface-tint: '#79df00'
  primary: '#ffffff'
  on-primary: '#1a3700'
  primary-container: '#8afe00'
  on-primary-container: '#3b7100'
  inverse-primary: '#376b00'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#8afe00'
  primary-fixed-dim: '#79df00'
  on-primary-fixed: '#0c2000'
  on-primary-fixed-variant: '#285000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: 2px
  headline-xl:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 1px
  headline-xl-mobile:
    fontFamily: Bebas Neue
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  title-lg:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Barlow Condensed
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter-desktop: 24px
  margin-desktop: 48px
  margin-mobile: 20px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system targets an elite, high-performance demographic that views fitness as a disciplined pursuit of excellence. The visual language is aggressive yet sophisticated, blending the raw energy of hardcore training culture with the polished aesthetics of dark luxury.

The style is a hybrid of **Glassmorphism** and **High-Contrast/Bold** design. It utilizes deep, ink-black environments to create a cinematic stage where content is spotlighted through neon accents and dramatic lighting. The atmosphere should feel exclusive, intense, and technologically advanced, evoking a sense of "premium grit." Every interaction should feel heavy and intentional, supported by smooth, high-inertia transitions that mimic the movement of heavy iron.

## Colors

The palette is anchored by "Void Black" (#0A0A0A) to ensure maximum contrast and deep black levels on OLED displays. "Electric Lime" (#8BFF00) serves as the high-energy catalyst, used sparingly but impactfully for critical actions, progress indicators, and "glowing" focal points.

- **Backgrounds:** Use the primary black for the base layer and charcoal (#1A1A1A) for elevated containers.
- **Accents:** Neon green is reserved for active states, CTAs, and success messaging.
- **Overlays:** Semi-transparent layers should utilize a 10-15% opacity white or green tint to create a glass-like sheen over dark backgrounds.
- **Gradients:** Use subtle radial gradients (Black to Charcoal) to mimic directional spotlighting in the UI.

## Typography

The typography strategy emphasizes power and hierarchy. **Bebas Neue** is the voice of the brand—used for large display titles and impactful headlines to mirror the verticality and strength of a high-end gym environment. 

For functional labels and sub-headers, **Barlow Condensed** maintains the industrial, athletic aesthetic while providing better legibility at medium sizes. **Inter** handles all body copy, ensuring that technical training data and descriptions are clear and professional. Always use uppercase for headlines and labels to reinforce the "hardcore" tone, while body text remains in standard sentence case for readability.

## Layout & Spacing

The design system utilizes a **12-column fixed grid** for desktop environments, centered within a 1280px container to create a "cinematic letterbox" feel on wider screens. On mobile, the system transitions to a fluid 4-column layout.

Spacing is aggressive and generous. Use large vertical gaps (stack-lg) between major content sections to allow high-contrast imagery to breathe. Component internals follow an 8px base unit, favoring 16px and 24px padding for cards and containers. This "breathing room" is essential to prevent the dark UI from feeling claustrophobic.

## Elevation & Depth

Depth in this design system is achieved through light and material, not just shadows.

1.  **The Stage (Level 0):** The base background (#0A0A0A).
2.  **Glass Layers (Level 1):** Foreground cards using a backdrop filter (Blur: 20px) and a semi-transparent charcoal fill (Opacity: 40%). These layers must have a 1px solid border (#FFFFFF at 10% opacity) to define their edges.
3.  **The Glow (Level 2):** Primary interactive elements (like active workout buttons) emit a soft radial outer glow of #8BFF00 with a 15-20px blur and low opacity (20%).
4.  **Dramatic Shadow:** When elements are stacked, use heavy, diffused black shadows (`0 20px 40px rgba(0,0,0,0.8)`) to create a sense of physical weight.

## Shapes

The shape language balances industrial precision with modern comfort. Standard components use a **12px radius (rounded-lg)**, while primary content cards and containers use a **16px radius (rounded-xl)**. 

Avoid fully circular buttons unless they are small icon toggles; instead, use slightly rounded rectangular buttons to maintain a "heavy" architectural look. Interactive states should subtly expand the shape or increase the border glow brightness rather than changing the radius.

## Components

### Buttons
- **Primary:** Solid #8BFF00 fill, #0A0A0A text (Bebas Neue). On hover: apply an outer glow and slight scale (1.02x).
- **Secondary:** Transparent background, 2px border of #8BFF00. 
- **Ghost:** Transparent background, white text, subtle white border on hover.

### Cards
- Cards must use the Glassmorphism specification. 
- Headers within cards should be uppercase Barlow Condensed.
- Image-heavy cards should use a bottom-to-top black gradient overlay to ensure text legibility over athlete photography.

### Input Fields
- Dark charcoal backgrounds with a 1px border. 
- Focus state: Border changes to #8BFF00 with a subtle inner glow. 
- Use Barlow Condensed for placeholder text to keep the "industrial" feel.

### Specialized Components
- **Progress Rings:** High-stroke (8px+) neon green rings for tracking workout completion.
- **Metric Tiles:** Large Bebas Neue numbers paired with small Barlow Condensed labels to emphasize performance data.
- **Status Chips:** High-saturation pills with background tints of the status color (e.g., translucent green background with solid neon green text).