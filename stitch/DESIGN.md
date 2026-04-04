# Design System Strategy: The Living Sanctuary

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Living Sanctuary."** 

Unlike traditional "corporate" religious platforms that rely on rigid grids and heavy iconography, this system treats the digital interface as a breathing, editorial space. We are moving away from the "template" look. Our goal is to create a sense of peace through intentional asymmetry, vast negative space, and tonal depth. We prioritize the "human" over the "mechanical." 

The interface should feel like a high-end lifestyle journal—spacious, grounded, and deeply authentic. We use soft light and organic layering to guide the user’s spirit, rather than loud colors or aggressive calls to action.

---

## 2. Colors & The Tonal Philosophy
The palette is rooted in earth and light. We utilize a spectrum of warm neutrals (`surface`, `background`) and organic golds (`primary`, `tertiary`) to evoke a sense of sunrise and sacred ground.

### The "No-Line" Rule
To achieve a "Sanctuary" feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must never be structural "fences." Instead, define space through:
*   **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
*   **Soft Light:** Using subtle tonal shifts to indicate where one content area ends and another begins.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine handmade paper. 
*   **Base:** Use `background` (#fbf9f4) for the main canvas.
*   **Nesting:** Place a `surface-container-low` (#f5f4ed) area for secondary content. Inside that, a `surface-container-lowest` (#ffffff) card can sit to provide a soft "pop" of focus.
*   **Importance:** Higher-tier containers (`surface-container-highest`) should be reserved for the most intimate interactions, like private reflections or prayer requests.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" Material look:
*   **Glassmorphism:** For floating elements (menus, navigation bars), use `surface` colors with a 70% opacity and a `20px` backdrop-blur. This allows the nature-inspired background colors to bleed through softly.
*   **Signature Textures:** Apply a subtle linear gradient (Top-Left to Bottom-Right) from `primary` (#725b3f) to `primary-container` (#fdddb9) on hero sections or primary buttons. This adds a "soulful" glow that flat color cannot replicate.

---

## 3. Typography
Our typography is a conversation between the ancient and the modern.

*   **The Voice (Noto Serif):** Used for `display` and `headline` tiers. This serif is graceful and grounded. Use it for scripture, major headings, and quotes. It should feel like it was typeset in a boutique journal.
*   **The Guide (Manrope):** Used for `title`, `body`, and `label` tiers. It is a clean, modern sans-serif that ensures accessibility and clarity without feeling clinical.

**Editorial Scale:** Use high-contrast sizing. Pair a large `display-lg` headline with a significantly smaller `body-md` description. The extreme difference in scale creates an "editorial" sophistication that feels curated.

---

## 4. Elevation & Depth
In this design system, depth is a feeling, not a shadow.

*   **The Layering Principle:** Use the `surface-container` tiers to stack elements. A `surface-container-low` card sitting on a `surface` background provides enough "lift" without needing a drop shadow.
*   **Ambient Shadows:** When a floating state is required (e.g., a modal or a primary action button), use an extra-diffused shadow. 
    *   *Specs:* `0px 20px 40px` blur, with `on-surface` at 5% opacity. This mimics natural, ambient light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use `outline-variant` (#b2b2ab) at **20% opacity**. Never use a 100% opaque border.
*   **Glassmorphism Depth:** Use backdrop-blur on `surface-container` layers to create a "frosted glass" effect, softening the edges of the UI and making the platform feel integrated with the user's environment.

---

## 5. Components

### Buttons
*   **Primary:** A gradient fill from `primary` to `primary-dim`. Use `md` (0.75rem) roundedness. Text should be `on-primary` (#fff7f3).
*   **Secondary:** A `surface-container-high` fill with `primary` text. No border.
*   **Tertiary:** `on-surface-variant` text with no background. Use for "Cancel" or "Read More" to keep the visual noise low.

### Cards & Lists
*   **The Rule of Silence:** Forbid the use of divider lines. Separate list items using `1.5rem` of vertical whitespace (Spacing Scale) or a subtle background shift to `surface-container-low` on hover.
*   **Reflection Cards:** Use `surface-container-lowest` (#ffffff) with `xl` (1.5rem) corner radius. These should feel like a sanctuary for content.

### Input Fields
*   Avoid the "box" look. Use a `surface-container-low` background with a `2px` bottom-only border in `primary` that activates on focus. 
*   Labels should use `label-md` in `on-surface-variant`.

### The Reflection Plate (Custom Component)
A wide, glassmorphic container for daily scripture.
*   **Background:** `surface` at 40% opacity with `backdrop-filter: blur(12px)`.
*   **Border:** Ghost Border (10% `outline-variant`).
*   **Typography:** `headline-md` (Noto Serif) centered.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Align a headline to the left and the body text to the right-center to create a modern, high-end editorial feel.
*   **Use Generous Padding:** Use `xl` (1.5rem) and above for container padding. Let the content breathe.
*   **Warmth over Neutrality:** Always lean toward the `surface` and `surface-container-low` tones rather than pure white.

### Don’t:
*   **No Pure Black:** Never use `#000000`. Use `on-surface` (#31332e) for text to maintain a soft, non-judgmental tone.
*   **No Sharp Corners:** Avoid `none` roundedness. Even for large containers, use at least `DEFAULT` (0.5rem) to keep the aesthetic "peaceful."
*   **No Corporate Blue/Grey:** Avoid cold tones. If you need a secondary color, use `secondary` (#5c614e) which provides a grounded, nature-inspired sage green.

### Accessibility Note:
While we use soft tones, ensure that all `on-surface` and `primary` text elements meet a 4.5:1 contrast ratio against their respective `surface` backgrounds. Beauty should never come at the cost of inclusion.