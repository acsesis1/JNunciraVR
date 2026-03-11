# Enhanced Stitch Prompt: Responsive Optimization for Mobile and PC

**Objective:** 
Optimize the existing UI design to ensure a high-fidelity, seamless experience across both mobile and desktop (PC) viewports.

**Core Instructions:**
1. **Responsive Navigation:**
   - On mobile, transition the navigation links into a clean, functional 'hamburger' menu.
   - On desktop, maintain the fixed horizontal navigation bar with the logo container.

2. **Layout Adaptability:**
   - **Hero Section:** Ensure the hero glass card and background image scale proportionally. On mobile, center the tagline and logo for maximum impact.
   - **Features & Modules Grids:** 
     - On mobile, switch the `features-grid` and `exp-grid` to a single-column layout with vertical stacking and increased touch targets.
     - On desktop, utilize the `repeat(auto-fit, minmax(320px, 1fr))` and `repeat(auto-fill, minmax(240px, 1fr))` patterns to fill the horizontal space.
   - **Gallery:** Ensure the `gallery-container` maintains its 16/10 aspect ratio and scales smoothly from 1 column on mobile to multiple columns on desktop.
   - **Contact Section:** On mobile, ensure the `contact-wrapper` stacks vertically (Info above Location) and links are easy to tap.

3. **Visual Consistency:**
   - Maintain the primary blue accent color (`#00a2ff`) across all icons (`i`), dividers, and buttons.
   - Ensure the `hue-rotate` adjustments (if any) are consistent across all screen sizes.
   - Optimize font sizes for readability: use larger base sizes for mobile and refined, spacious typography for desktop.

4. **Interaction:**
   - Ensure the lightbox and gallery hover effects are optimized for both touch interactions on mobile and mouse hovers on desktop.

**Vibe:** 
Professional, high-fidelity, and modern. The design should feel "alive" and polished on any device.