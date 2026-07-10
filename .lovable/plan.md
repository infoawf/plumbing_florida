# Florida Coast Plumbing — Build Plan

A polished, responsive plumbing marketing site for Palm Beach County, matching the detailed brief (coastal navy/blue/orange/cream palette, Fraunces + Manrope typography, curved/arch shape language, distinct from Templates #1 and #2).

## Routes

- `/` — Home
- `/services` — Services
- `/about` — About Us
- `/contact` — Contact Us

Logo links to Home. Navbar shows only Services, About Us, Contact Us + a single "Book Online" CTA.

## Design System (src/styles.css)

Replace default tokens with the brand palette:

- Navy `#0C2D42`, Coastal Blue `#2E86BD`, Bright Water `#39A9E0`, Sunset Orange `#FF6814`, Warm Sunset `#F8941D`, Sand Cream `#FFF7E6`, Seafoam `#F3FBFE`, Ink `#1D2B35`, Slate `#6E7D86`, Border `#D5E5EC`, Success/Error.
- Radius scale (sm→3xl) mapped for buttons/inputs/panels/arches.
- Load Fraunces (600–900) + Manrope (400–800) via `<link>` in `__root.tsx` head.
- Utility classes/tokens for `.font-display` (Fraunces) and default body (Manrope).
- Semantic tokens for background, foreground, primary (orange), secondary (coastal blue), navy surface, cream surface, seafoam surface.

## Shared Components (src/components/)

- `AnnouncementBar` — dismissible, localStorage-persisted, coastal blue.
- `SiteHeader` — sticky navbar; logo (SVG), desktop links with orange curved underline hover, Services mega menu (3 columns + Sand Cream feature strip), Book Online CTA, small phone text link. Mobile: hamburger + right drawer (Sand Cream, navy overlay), Services accordion, drawer action area.
- `SiteFooter` — navy footer with palm silhouettes; Serving You / Helpful Links / Get In Touch columns; license line; social row (no fake awards).
- `Logo` — inline SVG: half-sun + 3 water lines + pipe elbow + small palm leaf; "Florida Coast" wordmark, "Plumbing" subtext. Horizontal + compact + mono variants.
- `WaveDivider`, `ArchFrame`, `SunsetLines`, `PalmSilhouette`, `WaterDrop` — decorative SVGs.
- `Button` variants: primary (orange), secondary (blue outline), dark (navy).
- `ServiceCard` (arch-window), `BenefitRow`, `ProcessWave`, `ReviewSlider`, `FaqAccordion`, `ServiceAreaMap` (custom Palm Beach SVG), `FinalCta` (capsule pattern background).

## Home Page (src/routes/index.tsx)

1. Coastal Portal Hero — Sand Cream, 6/6 split, eyebrow + Fraunces headline with blue curved underline and orange sun highlight, dual CTAs, support row; right side large arched portal with a generated team+van photo, overlay sun/palm/drop/birds, floating "35+ Years Combined Experience" badge, shallow blue wave bottom edge.
2. Trust Strip — narrow navy band, 4 icon+label items.
3. Arch-Window Service Cards — 6 services, orange corner tab numbers, blue text link, hover behavior per spec, "Explore All Services" CTA.
4. About Preview — Seafoam, 6/6 layered circular composition (technician photo + inset + palm silhouette + drops + half-sun).
5. Why Choose Us — 3 horizontal benefit rows + coastal plumbing illustration.
6. Process Wave — navy background, horizontal blue wave with 4 orange rounded-square numbered markers; vertical on mobile.
7. Review Slider — sunset/horizon/water bands, one featured card with partial neighbors, arrows + counter + wave indicators, 4 static reviews (no error text).
8. Service Area — navy, city list in 2 columns + custom Palm Beach County SVG map with orange highlight + rings.
9. FAQ — 7 questions, orange numbers, blue curved dividers, square blue +/− control.
10. Final CTA — Sand Cream with repeating pale-sunset/soft-blue capsule+circle pattern behind a centered translucent panel; reduced-motion aware.

## Services Page (src/routes/services.tsx)

- Curved graphic hero (navy) with waves/sun/palm/drops + right arched technician photo, dual CTAs.
- Sticky category chip nav (desktop underline, mobile horizontal scroll).
- Sections per brief: Emergency, Drains, Leaks & Pipes, Water Heaters, Sewer, Water Quality, Fixtures — each with its own layout treatment (emergency navy/orange panel, drain signs list, visible vs hidden leak comparison, repair vs replacement table, etc.).
- Bottom CTA band.

## About Page (src/routes/about.tsx)

- Hero with heading "Neighborly plumbing help built on Florida hospitality."
- Story section (6/6 with circular photo composition).
- Values grid (4 items: Honest recs, Respect, Clean work, Clear updates).
- Team approach section (no fabricated bios/headshots — generic role blurbs).
- Coverage recap linking to Contact.

## Contact Page (src/routes/contact.tsx)

- Two-column layout: left = contact form (name, phone, email, address, service type select, message, urgency toggle, photo upload placeholder — client-side only, submits to a `mailto:` fallback or shows success state without backend); right = contact info card (phone, hours 24/7, service area, licensing line), plus small map illustration.
- FAQ mini-block for booking questions.
- Final CTA reuse.

## Assets

Use `imagegen` to create:

- Hero portal photo: Florida plumbing team beside branded blue/white van, natural daylight.
- About circular photo: technician working on fixture.
- About inset: clean filtration/faucet closeup.
- Why-choose-us illustration: coastal filtration/faucet scene.
- Services hero arch photo: technician close-up.

Logo, decorative SVGs (sun, palms, waves, drops, birds, map, capsule pattern) authored inline as React SVG components — no external icon libraries beyond existing lucide-react for small UI icons (phone, calendar, arrow, close, plus/minus, check, shield, home, pin).

## Head Metadata

- Root: brand-appropriate title/description defaults.
- Each route sets its own `head()` with unique title, description, og:title, og:description, twitter:card. Leaf routes get an og:image only when a real absolute URL exists (from generated hero assets uploaded via `lovable-assets` if needed); otherwise omit.

## Technical Notes

- All page work is frontend/presentation: static content, no backend, no Lovable Cloud.
- Contact form: client-only; on submit shows success state and offers `tel:` and `mailto:` fallbacks. No data persistence.
- Announcement dismissal persisted in `localStorage` (read inside `useEffect` to avoid SSR mismatch).
- All decorative motion respects `prefers-reduced-motion`.
- Accessibility: keyboard-navigable mega menu + drawer with focus trap, aria-expanded, escape close, visible focus states, alt text on all images, semantic landmarks, single H1 per page.
- Do NOT reference Florida Flush, its logo, slogan, or licensing number anywhere.

## Deliverable

A complete, distinct Florida Coast Plumbing site with the 4 routes above, matching the coastal-retro-modern direction, ready to publish.  

Create a complete, polished, responsive plumbing-service website for:

BUSINESS NAME:

Florida Coast Plumbing

TAGLINE:

Honest Service. Smooth Flow.

PRIMARY LOCATION:

Palm Beach County, Florida

SERVICE AREA:

Boynton Beach, Boca Raton, Delray Beach, West Palm Beach, Wellington, Jupiter, Lake Worth Beach, and Palm Beach Gardens.

WEBSITE ROUTES:

1. Home: /
2. Services: /services
3. About Us: /about
4. Contact Us: /contact

Do not create additional full pages.

The company logo should link to the Home page.

The main navbar must include only:

- Services
- About Us
- Contact Us

Do not add Home as a text navigation item. The logo already serves as the Home link.

A single “Book Online” CTA may appear in the desktop navbar, but it must be visually separate from the navigation links.

==================================================

1. PRIMARY CREATIVE DIRECTION

==================================================

Create a fun, warm, coastal Florida plumbing website that still feels professional, trustworthy, and conversion-focused.

The site should feel:

- Local to South Florida
- Friendly and approachable
- Established and trustworthy
- Bright without appearing childish
- Funky without losing professionalism
- Energetic without becoming visually chaotic
- Residential-service focused
- Easy for homeowners to understand
- Distinctive from generic plumbing templates

Use the supplied Florida plumbing reference images as the primary inspiration for:

- Navy, blue, orange, and white color relationships
- Coastal visual personality
- Palm Beach and Florida atmosphere
- Bold typography
- Curved containers
- Circular and arched image framing
- Sunset and water-inspired graphics
- Strong local service identity
- Friendly but direct CTA language
- Large rounded visual sections
- Decorative palms, waves, water drops, sunrise shapes, and soft curves

Do not directly copy:

- The Florida Flush name
- The Florida Flush logo
- Their exact palm-tree emblem
- Their slogan
- Their section layouts
- Their van branding
- Their card construction
- Their written content
- Their licensing information
- Their service-area graphics

The final website must feel like an original brand called Florida Coast Plumbing.

==================================================

2. CRITICAL DIFFERENTIATION FROM TEMPLATES #1 AND #2

==================================================

This design must not look like a variation of the first two plumbing websites.

Do not reuse from Template #1:

- Pale-yellow section system
- Deep-teal brand color
- Hexagonal or clipped CTA buttons
- Team-photo background hero
- Teal testimonial cards
- The same service-icon grid
- The same About Us van layout
- The same financing and promotions split
- The same curved footer design

Do not reuse from Template #2:

- Warm porcelain, cobalt, and coral system
- Modular field-service hero
- Technician cutout beside service van
- Service-ticket cards
- Split-action buttons
- Field-report review cards
- Diagnostic route-line process
- Asymmetric service mosaic
- Bricolage Grotesque typography

Template #3 should be recognizable through:

- Coastal navy, ocean blue, sunset orange, and white palette
- Retro-modern Florida character
- Curved “coastal portal” hero
- Rounded arch-window service cards
- Wave-shaped section dividers
- Soft circular photography crops
- Sunset-line decorative graphics
- Fraunces display typography
- Bright orange compact CTA buttons
- Coastal review slider
- Palm Beach map illustration
- A final CTA inspired by large repeating rounded capsule shapes

==================================================

3. BRAND IDENTITY

==================================================

BUSINESS NAME:

Florida Coast Plumbing

TAGLINE:

Honest Service. Smooth Flow.

SHORT BRAND STATEMENT:

“Reliable plumbing help for homes across Palm Beach County.”

BRAND PERSONALITY:

- Neighborly
- Honest
- Capable
- Warm
- Responsive
- Relaxed but not casual
- Local without relying on stereotypes
- Confident without exaggeration

LOGO DIRECTION:

Design an original compact logo for Florida Coast Plumbing.

The logo may include:

- A simplified sun half-circle
- Two or three horizontal water lines
- A small pipe elbow integrated into the waves
- One subtle palm-leaf silhouette
- The words “Florida Coast”
- Smaller supporting text “Plumbing”

The logo should feel modern-retro rather than like a sports-team badge.

Avoid:

- Giant mascot logos
- Oversized palm trees
- Detailed tropical landscapes
- Flaming sunsets
- Cartoon plumbers
- Toilet icons inside the logo
- Wrenches crossed behind the wordmark
- Copying the shape or typography of Florida Flush Plumbing

LOGO SIZE:

Desktop navbar:

Approximately 150px to 180px wide

Mobile navbar:

Approximately 128px to 150px wide

The logo must not dominate the entire header.

Create:

- Full horizontal logo
- Compact mobile logo
- White one-color version
- Navy one-color version
- Small favicon mark

==================================================

4. COLOR PALETTE

==================================================

Use a color palette derived from the supplied Florida references.

PRIMARY DEEP NAVY:

#0C2D42

ROLE:

- Main headings
- Footer
- Dark service-area sections
- Navigation text
- Review-card text
- Dark surfaces
- Icons and outlines

COASTAL BLUE:

#2E86BD

ROLE:

- Brand accents
- Section dividers
- Links
- Active navigation states
- Water graphics
- Secondary buttons
- Card details

BRIGHT WATER BLUE:

#39A9E0

ROLE:

- Illustration accents
- Icon backgrounds
- Map markers
- Decorative waves
- Selected slider controls

SUNSET ORANGE:

#FF6814

ROLE:

- Main CTA buttons
- Announcement details
- Important labels
- Active indicators
- Small decorative highlights

WARM SUNSET:

#F8941D

ROLE:

- Secondary orange details
- Soft sunset graphics
- Decorative backgrounds
- Stars and badges

SAND CREAM:

#FFF7E6

ROLE:

- Main page background
- CTA section background
- Soft card surfaces
- Warm section separation

SEAFOAM WHITE:

#F3FBFE

ROLE:

- Pale-blue section backgrounds
- Review section
- Contact form support panels
- Service overview backgrounds

PURE WHITE:

#FFFFFF

ROLE:

- Navigation background
- Main content surfaces
- Form fields
- Text over navy and blue

INK CHARCOAL:

#1D2B35

ROLE:

- Body text
- Form labels
- Supporting copy

MUTED SLATE:

#6E7D86

ROLE:

- Secondary text
- Helper messages
- Metadata
- Review location and date

SOFT BORDER:

#D5E5EC

ROLE:

- Borders
- Dividers
- Input outlines
- Card separation

SUCCESS:

#2F7B5B

ERROR:

#B8453C

COLOR RULES:

- Navy must anchor the brand.
- Orange should be used for conversion and emphasis, not as a background for every section.
- Blue should provide the coastal energy.
- White and Sand Cream should keep the site clean and readable.
- Avoid teal-heavy sections that resemble Template #1.
- Avoid cobalt/coral combinations that resemble Template #2.
- Do not introduce purple, red, neon green, or black as decorative colors.
- Do not use gradients extensively.

A subtle sunset gradient may be used only inside decorative illustrations:

#FF6814 to #F8B642

Do not use large modern SaaS gradients behind content.

==================================================

5. TYPOGRAPHY

==================================================

Use a completely new typography system.

DISPLAY AND HEADING FONT:

Fraunces

Use weights:

- 600
- 700
- 800
- 900

Use Fraunces for:

- Homepage hero headline
- Major page titles
- Main section headings
- Review pull quotes
- Final CTA headline
- Large decorative numbers

Fraunces should create a soft, retro, coastal personality through its curved letterforms.

Do not use Fraunces for:

- Navigation
- Body paragraphs
- Forms
- Small buttons
- Long service descriptions

BODY AND UI FONT:

Manrope

Use weights:

- 400
- 500
- 600
- 700
- 800

Use Manrope for:

- Navigation
- Body copy
- CTA labels
- Forms
- Reviews
- Service descriptions
- Footer
- Metadata

TYPE SCALE:

Desktop homepage hero:

72px to 88px

Fraunces 800

Line height 0.98 to 1.04

Letter spacing approximately -0.035em

Tablet hero:

56px to 68px

Mobile hero:

42px to 50px

Major section heading:

48px to 62px desktop

34px to 42px mobile

Page title:

64px to 76px desktop

42px to 52px mobile

Card title:

24px to 30px

Body text:

17px to 19px

Line height 1.55 to 1.7

Navigation:

15px to 16px

Manrope 700

Eyebrow:

12px to 14px

Manrope 800

Uppercase

Letter spacing 1.8px to 2.2px

TYPOGRAPHY RULES:

- Do not make every heading uppercase.
- Use sentence case for primary headings.
- Small eyebrows and navigation labels may be uppercase.
- Do not use a highly condensed industrial font.
- Avoid excessive shadow behind text.
- Use subtle orange or blue underline accents instead of drop shadows.
- Limit paragraph width to approximately 680px.
- Avoid long centered paragraphs.

==================================================

6. SPACING AND LAYOUT SYSTEM

==================================================

Maximum content width:

1280px

Wide visual sections:

Up to 1400px

Desktop side padding:

56px to 72px

Tablet side padding:

32px

Mobile side padding:

20px

Small mobile side padding:

16px to 18px

Base spacing unit:

8px

Major section spacing:

Desktop:

104px to 136px

Tablet:

80px to 104px

Mobile:

64px to 80px

Use a 12-column grid on desktop.

Use varied layouts rather than repeating equal three-card rows.

Recommended layouts:

- 6/6 split
- 7/5 split
- 5/7 split
- Two-card feature rows
- Staggered arch cards
- Wide review slider
- Service-area split
- Centered patterned CTA
- Full-width coastal bands

==================================================

7. CURVES AND SHAPE LANGUAGE

==================================================

Curves should be a defining part of this template, but they must be controlled.

Use:

- Large arched image frames
- Rounded top corners
- Wave-like section edges
- Circle and semi-circle photo crops
- Oversized pill-shaped decorative motifs
- Soft horizon lines
- Curved underline accents
- Rounded orange CTA buttons
- Layered sun and water shapes

Do not use:

- Curves around every paragraph
- Random bubbles everywhere
- Highly irregular blobs behind body copy
- Too many floating circles
- The same radius on every component

SHAPE SCALE:

Small controls:

8px to 12px radius

Buttons:

14px to 18px radius

Inputs:

12px radius

Standard content panels:

20px to 24px radius

Large visual containers:

32px to 48px radius

Arch cards:

50% top-left and top-right arch or a defined 160px top curve

Circular image windows:

50%

==================================================

8. DISMISSIBLE TOP ANNOUNCEMENT BAR

==================================================

Add a top announcement bar above the main navbar.

This bar must include a close “X” icon so users can dismiss it.

DESKTOP ANNOUNCEMENT BAR:

Height:

44px to 50px

Background:

Coastal Blue

Text:

White

Content structure:

Left:

Small orange status icon

Center:

“24/7 plumbing help available across Palm Beach County.”

Optional inline action:

“Call 561-555-0136”

Right:

Dismiss button with an X icon

Do not include “Book Online” in this announcement bar because that action already appears in the main navbar.

Do not repeat both the phone number and booking CTA several times in the same header region.

DISMISS BUTTON:

- At least 40px by 40px touch target
- White X icon
- Transparent background
- Rounded hover state
- Accessible label: “Dismiss announcement”
- Visible focus state
- On click, smoothly collapse the top bar
- Store dismissal state in localStorage or session storage
- Do not display the bar again during the same session after dismissal

MOBILE ANNOUNCEMENT BAR:

Text:

“24/7 Palm Beach plumbing help”

Optional phone icon

Close X remains visible.

Ensure the text does not collide with the close icon.

==================================================

9. MAIN NAVBAR

==================================================

Create a clean, professional navbar inspired by the references, but improve the proportions significantly.

BACKGROUND:

White

HEIGHT:

Desktop 78px to 86px

BORDER:

1px Soft Border on the bottom

DESKTOP LAYOUT:

Left:

Compact Florida Coast Plumbing logo

Center:

- Services
- About Us
- Contact Us

Right:

One primary action:

“Book Online”

Optional small phone icon may appear beside a short text link:

“Call 561-555-0136”

However, do not place both a large phone button and a large booking button in the navbar.

Recommended hierarchy:

Primary:

Book Online

Secondary:

Small text-style call link

The same action must not appear twice beside itself.

NAVIGATION LINKS:

- Manrope 700
- Deep Navy
- 15px to 16px
- Comfortable spacing
- No pill background at rest

Hover:

- Text becomes Coastal Blue
- A short orange curved underline appears below
- Transition 180ms

Active page:

- Navy text remains
- Small orange dot or wave mark appears underneath

NAVBAR CTA:

- Sunset Orange fill
- White text
- Rounded rectangle
- Approximately 16px radius
- Padding 13px 22px
- Small calendar or arrow icon
- Minimum height 48px

Hover:

- Orange darkens slightly
- Button moves up by 1px
- Icon shifts subtly
- No dramatic scale

STICKY BEHAVIOR:

When scrolling:

- Navbar becomes sticky
- Announcement bar stays dismissed if closed
- Navbar height decreases slightly
- Background becomes 96% opaque white
- Add subtle blue bottom border
- Do not use a heavy shadow

==================================================

10. SERVICES DROPDOWN

==================================================

The Services item should open a desktop mega menu.

MEGA MENU STYLE:

- White background
- Navy top border approximately 4px
- 26px rounded lower corners
- Width approximately 960px to 1080px
- Soft shadow
- Positioned below the Services link
- Spacious rather than dense

COLUMNS:

Column 1 — Plumbing Repairs

- Emergency Plumbing
- Leak Detection
- Pipe Repair
- Slab Leak Evaluation
- Fixture Repair

Column 2 — Drains and Sewer

- Drain Cleaning
- Sewer Line Repair
- Camera Inspection
- Hydro Jetting
- Recurring Clogs

Column 3 — Water Systems

- Water Heater Repair
- Water Heater Installation
- Tankless Water Heaters
- Water Filtration
- Water Softeners

Each item includes:

- Small blue line icon
- Service title
- Short helper phrase
- Orange arrow on hover

BOTTOM FEATURE STRIP:

Background:

Sand Cream

Text:

“Not sure what service you need? Tell us what you’re noticing.”

Action:

“View All Services”

Do not place the phone number and Book Online action again inside the menu if they are already visible directly above it.

MENU ACCESSIBILITY:

- Open on click and controlled hover
- Keyboard accessible
- Correct aria-expanded state
- Escape closes menu
- Outside click closes menu
- Focus remains logical
- No hover gap causing accidental close

==================================================

11. MOBILE NAVIGATION

==================================================

Below 900px, show only:

Left:

Compact logo

Right:

Hamburger icon

Do not show:

- Desktop navigation links
- Navbar booking button
- Phone number
- Extra utility icons

MOBILE HEADER:

- White background
- Approximately 72px high
- Sticky
- Thin blue border-bottom
- Logo approximately 140px wide
- Hamburger target at least 48px

HAMBURGER:

- Three navy lines
- Animate into a close icon
- Keep movement restrained
- Visible keyboard focus

MOBILE DRAWER:

Open from the right.

Width:

- 90% on small phones
- 84% on larger phones
- Maximum 420px

Background:

Sand Cream

Overlay:

Deep Navy at approximately 60% opacity

Animation:

320ms to 380ms

Disable body scroll while drawer is open.

Trap focus inside the drawer.

DRAWER HEADER:

- Logo
- Close button
- Soft blue divider

PRIMARY NAVIGATION:

- Services
- About Us
- Contact Us

Only these three main navigation rows should appear.

SERVICES ACCORDION:

Display grouped service links:

Repairs:

- Emergency Plumbing
- Leak Detection
- Pipe Repair

Drain and Sewer:

- Drain Cleaning
- Sewer Repair
- Hydro Jetting

Water:

- Water Heaters
- Tankless Systems
- Water Filtration

DRAWER ACTION AREA:

Primary:

Book Online

Secondary:

Call 561-555-0136

Support note:

“Available 24/7 for urgent plumbing problems.”

The two actions may appear here because desktop actions are hidden on mobile.

Do not repeat them again elsewhere inside the drawer.

==================================================

12. BUTTON AND CTA SYSTEM

==================================================

Create a different CTA system from Templates #1 and #2.

PRIMARY BUTTON:

- Sunset Orange background
- White text
- 14px to 18px radius
- Slightly wider horizontal padding
- Optional small white arrow or calendar icon
- No clipped ends
- No attached split segment
- No full pill shape unless used for a compact badge

Hover:

- Darken orange
- Slight upward movement
- Subtle shadow
- Arrow moves 2px

SECONDARY BUTTON:

- White or transparent background
- 2px Coastal Blue border
- Deep Navy text
- 14px radius

Hover:

- Coastal Blue background
- White text

DARK BUTTON:

- Deep Navy fill
- White text
- Used on Sand Cream or orange backgrounds

TEXT LINK:

- Coastal Blue
- Manrope 700
- Small orange arrow
- Animated underline

PHONE ACTION:

- Use a phone icon
- Display number once per section
- Do not place both “Call Now” and the full number as two separate buttons beside each other

==================================================

13. HOME PAGE

==================================================

---

SECTION 1 — COASTAL PORTAL HERO

---

Do not use a full-width background photograph.

Create a custom split hero with a large curved visual portal.

BACKGROUND:

Sand Cream

DESKTOP HEIGHT:

Approximately 700px to 780px

LAYOUT:

Left:

6 columns

Right:

6 columns

LEFT CONTENT:

Eyebrow:

“PALM BEACH COUNTY PLUMBERS”

Headline:

“Plumbing help that keeps your home flowing.”

Use Fraunces 800.

Highlight the words “keeps your home flowing” with:

- A soft Coastal Blue curved underline
- A small orange sun shape behind one word
- Do not reduce readability

Supporting copy:

“Florida Coast Plumbing provides clear recommendations, dependable repairs, and respectful service for homes throughout Palm Beach County.”

Trust statement:

“Licensed and insured professionals. Straightforward options. Clean, careful work.”

Primary CTA:

Book Online

Secondary CTA:

Call 561-555-0136

Small support row:

- 24/7 urgent service
- Local Palm Beach team
- Clear service options

Do not display the phone number elsewhere in the hero after using it in the secondary CTA.

RIGHT VISUAL — COASTAL PORTAL:

Create a large vertical arch or rounded portal.

Portal frame:

- Deep Navy outline
- Bright Water Blue secondary border
- White or Seafoam White interior
- Approximately 500px wide
- Large curved top
- Flat or lightly curved bottom

Inside the portal:

- Photorealistic Florida Coast Plumbing service team
- Two to four technicians
- Branded white-and-blue service van
- Clean residential or service-yard environment
- Orange uniform accents
- Natural Florida daylight

Do not use this image as a background.

Overlay small graphic elements:

- Partial orange sun
- Three horizontal sunset lines
- One simplified palm silhouette
- One water-drop graphic
- Small flying-bird silhouettes

Do not overcrowd the portal.

FLOATING TRUST BADGE:

Create one badge only:

“35+ Years Combined Experience”

This is placeholder content and should be easy to replace.

Badge style:

- White card
- Orange top edge
- Navy text
- 16px radius
- Slight overlap over the portal

Do not create several competing floating cards.

BOTTOM HERO EDGE:

Use a shallow blue wave divider flowing into the next section.

MOBILE HERO:

- Content first
- Portal image second
- Arch remains visible
- Reduce decorative birds and palm shapes
- CTA buttons stack
- Keep image height approximately 380px to 440px
- Prevent horizontal overflow

---

SECTION 2 — TRUST STRIP

---

Create a narrow navy reassurance band.

Items:

- State-Licensed Professionals
- Family-Owned Local Team
- Written Workmanship Standards
- Serving Palm Beach County

Each item includes:

- Small white line icon
- Short label
- No paragraph

Desktop:

Four items across

Mobile:

Two-column grid

Do not repeat the phone number or Book Online CTA in this strip.

---

SECTION 3 — ARCH-WINDOW SERVICE CARDS

---

Background:

White

Eyebrow:

“OUR SERVICES”

Heading:

“Help for every part of your plumbing system.”

Supporting text:

“Choose a service below or tell us what you’re noticing and we’ll help guide you.”

Create six completely new service cards.

CARD STYLE:

Arch-Window Cards

Each card should include:

Top visual area:

- Large arched window shape
- Light-blue or Sand Cream background
- Original plumbing line illustration or close-up service image
- Orange corner tab displaying service number
- No circular icon overlapping the top

Bottom information area:

- White background
- Navy title
- Short description
- Blue text link
- Small curved orange arrow

SERVICES:

01 — Emergency Plumbing

“Fast help for active leaks, backups, burst pipes, and urgent water problems.”

02 — Drain Cleaning

“Clear slow, blocked, and recurring drains with the right diagnostic approach.”

03 — Leak Detection

“Locate hidden water problems before recommending repair work.”

04 — Water Heaters

“Repair, replacement, maintenance, and tankless system support.”

05 — Sewer Services

“Camera inspections, clearing, repair options, and sewer-line evaluation.”

06 — Water Filtration

“Improve water quality through testing, filtration, and softening solutions.”

DESKTOP:

Three columns

TABLET:

Two columns

MOBILE:

One column

CARD HOVER:

- Arch image moves upward slightly
- Orange tab expands by a few pixels
- Link underline appears
- Card border becomes Bright Water Blue
- Do not dramatically lift or rotate

CTA beneath cards:

Explore All Services

---

SECTION 4 — ABOUT PREVIEW

---

Background:

Seafoam White

Use a 6/6 layout.

LEFT:

Eyebrow:

“LOCAL BY CHOICE”

Heading:

“Your neighbors when the water won’t cooperate.”

Body:

“Florida Coast Plumbing serves Palm Beach County with a simple approach: arrive prepared, explain the problem clearly, protect the home, and complete the work carefully.”

Secondary paragraph:

“We combine hands-on plumbing experience with organized communication, so customers know what is happening before, during, and after the appointment.”

Values:

- Honest recommendations
- Respect for your home
- Clean work areas
- Clear appointment updates

CTA:

About Florida Coast

RIGHT VISUAL:

Create an original layered circular composition inspired by the references but not copied.

Use:

- One large circular photo of a technician working
- One smaller circular inset showing a clean fixture or filtration system
- Navy palm silhouette behind
- Three blue water-drop shapes
- Orange half-sun detail

Do not include award logos unless real assets are supplied.

Do not invent a “Neighborhood Favorite” badge.

---

SECTION 5 — WHY CHOOSE US

---

Background:

White

Heading:

“Plumbing service without unnecessary surprises.”

Create three large horizontal benefit rows rather than cards.

ROW 1:

Icon:

Blue outlined check mark

Title:

Clear Recommendations

Text:

“We inspect the issue, explain what we found, and review practical options before work begins.”

ROW 2:

Icon:

Blue outlined shield

Title:

Workmanship You Can Trust

Text:

“Our technicians test completed work and review the result with you before leaving.”

ROW 3:

Icon:

Blue outlined home

Title:

Respect for Your Property

Text:

“We protect surrounding areas, keep tools organized, and clean the workspace when the job is complete.”

LAYOUT:

Desktop:

Text rows on the left

Large coastal plumbing illustration on the right

Illustration may contain:

- Water filtration unit
- Faucet
- Water drops
- Soft palm shadow
- Round image of a clean kitchen or bathroom

Do not show a baby or family image unless it is highly relevant and properly licensed.

---

SECTION 6 — PROCESS WAVE

---

Background:

Deep Navy

Heading color:

White

Eyebrow:

“WHAT TO EXPECT”

Heading:

“Four steps from problem to solution.”

Create a curved wave-style process.

Steps:

1. Tell Us What’s Happening

“Share the symptoms and urgency.”

2. Choose an Appointment

“Select an available service window.”

3. Review the Findings

“Your technician explains the cause and options.”

4. Complete and Confirm

“The work is completed, tested, and reviewed.”

VISUAL STYLE:

- Use one horizontal blue wave line
- Place orange numbered markers along the wave
- Use compact text blocks above and below the line
- Markers are rounded squares, not circles

Mobile:

- Convert to vertical flowing line
- Keep number markers aligned left
- Text remains readable

Do not add a CTA in this section unless needed. The section already explains the process.

---

SECTION 7 — REVIEW SLIDER

---

Background:

Create a modern sunset-inspired coastal section.

Do not recreate the literal illustrated beach background from the reference.

Use:

- Sunset Orange upper band
- Sand Cream horizon line
- Bright Water Blue lower band
- Navy curved wave at the bottom
- Very subtle palm silhouettes at the far edges

Keep the center clear and readable.

Eyebrow:

“REAL CUSTOMER FEEDBACK”

Heading:

“What your Palm Beach neighbors are saying.”

SLIDER STRUCTURE:

Desktop:

- One featured review card in the center
- Partial previous and next cards visible
- Square navigation arrows
- Progress counter
- Five small wave-style indicators

Mobile:

- One review at a time
- Swipe support
- Visible pagination
- Large touch controls

REVIEW CARD STYLE:

- White surface
- 24px radius
- Small orange top tab
- Large navy quote mark
- Five orange stars
- Review text
- Customer first name and last initial
- City
- Service category
- Optional verified-review label

Sample review 1:

“The technician explained what was causing the recurring drain problem and gave us clear options. The work area was spotless when he finished.”

— Maria L., Boynton Beach

Drain Cleaning

Sample review 2:

“We received appointment updates, the plumber arrived within the scheduled window, and our water heater was working again that afternoon.”

— Daniel K., Wellington

Water Heater Repair

Sample review 3:

“They located a hidden leak without opening unnecessary areas. Everything was clearly explained before the repair began.”

— Nicole S., Boca Raton

Leak Detection

Sample review 4:

“Friendly, organized, and professional from the first phone call to the final walkthrough.”

— James R., Delray Beach

Pipe Repair

Do not display “Failed to load reviews.”

If a live reviews API fails:

- Show static verified placeholder reviews
- Log the error discreetly
- Never expose technical failure text to website visitors

Below the slider:

Primary text link:

Read More Reviews

Secondary text link:

Leave a Google Review

---

SECTION 8 — SERVICE AREA

---

Background:

Deep Navy

Text:

White

LAYOUT:

Left:

Service-area copy and city list

Right:

Custom map illustration

Eyebrow:

“WHERE WE WORK”

Heading:

“Serving homes throughout Palm Beach County.”

Body:

“Florida Coast Plumbing provides residential plumbing support from Boynton Beach to Jupiter and surrounding Palm Beach County communities.”

CITY LIST:

- Boynton Beach
- Boca Raton
- Delray Beach
- West Palm Beach
- Wellington
- Jupiter
- Lake Worth Beach
- Palm Beach Gardens

Use blue pin icons and arrange cities in two columns.

CTA:

Check Your ZIP Code

MAP ILLUSTRATION:

Create an original simplified Palm Beach County map.

Use:

- Bright Water Blue county shape
- White border lines
- Orange service-zone highlight
- Small location markers
- Soft target-ring effect
- No copied map screenshot
- No Google Maps branding

Do not display the entire Florida state unless it supports the Palm Beach County location clearly.

---

SECTION 9 — FAQ

---

Background:

White

Eyebrow:

“PLUMBING QUESTIONS”

Heading:

“Helpful answers before your appointment.”

QUESTIONS:

1. Do you offer emergency plumbing service?
2. What should I do when water is actively leaking?
3. Do you provide an estimate before beginning work?
4. Can you service both tank and tankless water heaters?
5. What parts of Palm Beach County do you cover?
6. Can I send photos with my service request?
7. How will I know when the technician is arriving?

ACCORDION STYLE:

- Full-width rows
- Navy question text
- Orange number at left
- Blue curved divider
- Square blue plus/minus control at right
- No individual rounded card around every question

==================================================

14. FINAL CTA SECTION

==================================================

Build the final CTA using the visual structure of the supplied reference with repeating oversized pill and circle shapes.

Do not copy the reference colors exactly.

SECTION BACKGROUND:

Sand Cream

DECORATIVE PATTERN:

Use large repeated rounded capsule and circle shapes behind the content.

Pattern colors:

- Pale Sunset: #FFD79C
- Soft Water Blue: #CBEFFF
- White
- Limited Sunset Orange

Arrange shapes in an organized grid:

- Long horizontal capsules
- Medium capsules
- Circles
- Partial shapes clipped by the section edges

Keep the center area relatively clear.

Do not animate every shape.

A subtle slow horizontal movement may be used only when reduced-motion is not enabled.

CENTER CONTENT:

Eyebrow:

“READY TO GET STARTED?”

Headline:

“Let’s get your plumbing back on track.”

Supporting text:

“Tell us what’s happening and Florida Coast Plumbing will help you choose the right next step.”

Primary CTA:

Book Online

Secondary CTA:

Call 561-555-0136

Small helper text:

“Urgent plumbing help is available 24/7.”

CONTENT PANEL:

Place the text inside a slightly translucent white or Sand Cream center panel.

- No glassmorphism blur
- Soft 24px radius
- Maximum width approximately 700px
- Strong contrast
- Compact padding

The final CTA must feel playful, memorable, and professional.

==================================================

15. SERVICES PAGE

==================================================

ROUTE:

/services

PAGE HERO:

Use a curved graphic hero rather than a photographic background.

Background:

Deep Navy

Decorative elements:

- Large blue wave
- Orange half-sun
- Thin sunset stripes
- One simplified palm silhouette
- Water-drop icons

Content:

Eyebrow:

“PLUMBING SERVICES”

Heading:

“Reliable help for leaks, drains, water heaters, and more.”

Body:

“Explore plumbing repair, installation, maintenance, and water-quality services for homes throughout Palm Beach County.”

Primary CTA:

Book Online

Secondary CTA:

Call 561-555-0136

Add an arched photo window on the right showing a Florida Coast technician at work.

STICKY SERVICE NAVIGATION:

- Emergency
- Drains
- Leaks and Pipes
- Water Heaters
- Sewer
- Water Quality
- Fixtures

Desktop:

Sticky horizontal navigation beneath main navbar

Mobile:

Horizontally scrollable chip row

Active category:

Orange underline and navy text

SERVICE SECTIONS:

---

EMERGENCY PLUMBING

---

Services:

- Burst Pipes
- Active Water Leaks
- Sewer Backups
- Overflowing Fixtures
- No Hot Water
- Emergency Shutoff Guidance

Use a navy and orange emergency panel.

Do not overuse fear-based copy.

---

DRAIN SERVICES

---

Services:

- Drain Cleaning
- Kitchen Drains
- Bathroom Drains
- Main-Line Clearing
- Camera Inspection
- Hydro Jetting

Include:

“Signs your drain issue may be more than a simple clog.”

---

LEAKS AND PIPE REPAIR

---

Services:

- Leak Detection
- Pipe Repair
- Slab Leak Evaluation
- Water-Line Repair
- Water Pressure Diagnosis
- Whole-Home Repiping

Create a comparison:

“Visible leak”

versus

“Hidden leak”

---

WATER HEATERS

---

Services:

- Water Heater Repair
- Water Heater Replacement
- Tankless Water Heaters
- Water Heater Maintenance
- Electric Water Heaters
- Gas Water Heaters

Include a clear repair-versus-replacement comparison.

---

SEWER SERVICES

---

Services:

- Sewer Camera Inspection
- Sewer Line Cleaning
- Sewer Line Repair
- Root Intrusion Evaluation
- Recurring Backup Diagnosis

---

WATER QUALITY

---

Services:

- Whole-Home Filtration
- Drinking-Water Systems
- Water Softeners
- Filter Replacement
- Water Testing
- System Maintenance

Educational note:

“Hard water, odor, taste, and sediment may require different solutions.”

---

FIXTURES AND INSTALLATIONS

---

Services:

- Toilet Repair
- Toilet Installation
- Faucet Repair
- Faucet Installation
- Sink Plumbing
- Garbage Disposals
- Shower and Tub Plumbing
- Remodeling Support

SERVICE CARD STYLE:

Do not reuse the homepage arch-window cards here.

Use horizontal “Coastal Service Rows”:

- Service title left
- One-sentence description center
- Signs or benefits as small chips
- Blue arrow action right
- Alternating white and Seafoam White surfaces
- Curved navy line at the bottom

Do not create individual service-detail routes.

Use expandable inline service details.

SERVICES FAQ:

Include six service-related questions.

Finish with the patterned final CTA.

==================================================

16. ABOUT US PAGE

==================================================

ROUTE:

/about

PAGE HERO:

Background:

Sand Cream

Left:

Text content

Right:

Large circular and arched photo composition

Eyebrow:

“ABOUT FLORIDA COAST”

Heading:

“Local plumbing service built around honest communication.”

Body:

“Florida Coast Plumbing serves Palm Beach County homeowners with reliable technical work, organized scheduling, and clear explanations.”

CTA:

Contact Our Team

Use:

- Large team image in an arch
- Smaller circular photo of a technician
- Orange sun shape
- Navy palm silhouette
- Blue wave line

Do not copy the exact About section from the reference.

OUR STORY:

Heading:

“Rooted in Palm Beach County.”

Discuss:

- Local service focus
- Familiarity with Florida homes and plumbing systems
- Respect for customers’ time
- Organized appointments
- Long-term relationships

Do not invent a founder biography.

Do not claim a specific founding year unless supplied.

VALUES:

Create four curved horizontal panels:

1. Be Clear

“Explain what is happening and what the available options mean.”

2. Be Prepared

“Arrive with organized tools, equipment, and service information.”

3. Protect the Home

“Work carefully around floors, fixtures, walls, and cabinets.”

4. Finish Properly

“Test the completed work and review it before leaving.”

TEAM SECTION:

Heading:

“Professional people, not just professional tools.”

Use role-based cards:

- Customer Care
- Service Technicians
- Installation Specialists
- Field Leadership

Use portrait or work-environment imagery.

Do not create fake employee names.

WHY FLORIDA HOMES ARE DIFFERENT:

Create an educational section discussing:

- Hard-water conditions
- Humidity
- Seasonal occupancy
- Older coastal piping
- Storm preparation
- Outdoor plumbing exposure

Keep content practical and avoid alarmism.

STANDARDS SECTION:

Background:

Deep Navy

Heading:

“What every visit should include.”

Items:

- Appointment communication
- Clear diagnosis
- Protection of work areas
- Practical service options
- Completed-work testing
- Final walkthrough

STATS:

Use safe replaceable values:

- 24/7 Urgent Support
- 8+ Palm Beach Communities
- Residential Plumbing Specialists
- Licensed and Insured

Do not invent customer totals, job counts, or review totals.

Finish with the patterned CTA section.

==================================================

17. CONTACT US PAGE

==================================================

ROUTE:

/contact

PAGE HERO:

Background:

Seafoam White

Eyebrow:

“CONTACT FLORIDA COAST”

Heading:

“Tell us what’s happening.”

Body:

“You do not need to know the technical name of the problem. Share what you see, hear, or smell and our team will help determine the next step.”

Display two actions:

Primary:

Book Online

Secondary:

Call 561-555-0136

Do not repeat these actions directly beneath the hero again.

CONTACT LAYOUT:

Desktop:

7-column form

5-column contact panel

Mobile:

Form first

Contact panel second

FORM HEADING:

“Request plumbing service”

FIELDS:

- Full Name
- Phone Number
- Email Address
- Service Address
- City
- ZIP Code
- Service Needed
- What Are You Noticing?
- Is Water Actively Spreading? Yes / No
- Preferred Appointment Date
- Preferred Time Window
- Upload Photos
- Additional Details

SERVICE OPTIONS:

- Emergency Plumbing
- Drain Cleaning
- Leak Detection
- Pipe Repair
- Water Heater
- Sewer Service
- Water Filtration
- Fixture Repair
- Not Sure

PHOTO UPLOAD:

Allow:

- JPG
- PNG
- HEIC
- Maximum 10 MB per file
- Up to five files

Helper message:

“Photos are optional. Do not enter standing water or unsafe areas to take a picture.”

CONSENT:

“I agree to receive calls or messages regarding this service request.”

SUBMIT BUTTON:

Send Service Request

FORM STYLE:

- White form background
- 24px radius
- Thin blue top border
- No overly large enclosing pill
- Labels above fields
- 12px input radius
- Navy labels
- Orange required indicators
- Blue focus states

FORM STATES:

Loading:

“Sending Request…”

Success:

“Your service request has been received.”

Include:

- Confirmation reference
- Expected response information
- Submitted phone number
- Emergency phone reminder

Error:

Clear inline message

Do not send users to a blank confirmation screen.

CONTACT PANEL:

Background:

Deep Navy

Text:

White

Include:

Phone:

561-555-0136

Email:

[service@floridacoastplumbing.com](mailto:service@floridacoastplumbing.com)

Office:

Palm Beach County, Florida

Hours:

Monday–Friday: 7:00 AM–7:00 PM

Saturday: 8:00 AM–5:00 PM

Urgent Plumbing Support: 24/7

Include:

- Click-to-call
- Click-to-email
- Licensed and insured note
- Service-area list
- Small orange sunset-line decoration

Use placeholder contact details that are easy to replace.

EMERGENCY GUIDANCE:

Background:

Sunset Orange

Heading:

“Water actively spreading?”

Steps:

1. Shut off the nearest safe water valve.
2. Keep people away from electrical hazards.
3. Avoid direct contact with sewer water.
4. Call urgent plumbing support.

CTA:

Call 561-555-0136

CONTACT FAQ:

Include:

- How soon will someone respond?
- Do I need to know which service I need?
- Can I upload photos?
- What should I do during an active leak?
- Will I receive an arrival window?
- Which Palm Beach communities do you serve?

Finish with a compact version of the patterned final CTA.

==================================================

18. FOOTER

==================================================

Create a professional coastal footer.

Do not duplicate the footer from the reference.

BACKGROUND:

Deep Navy

TOP EDGE:

Use a soft wave shape.

Add a thin Sunset Orange line across the top.

LOGO:

Place the Florida Coast Plumbing logo at a reasonable size.

Do not allow the logo to overlap unrelated footer content.

DESKTOP COLUMNS:

Column 1 — Brand

- Logo
- Tagline
- Short description
- Licensed and insured note
- Social icons

Column 2 — Services

- Emergency Plumbing
- Drain Cleaning
- Leak Detection
- Water Heaters
- Sewer Services
- Water Filtration

Column 3 — Company

- About Us
- Contact Us
- Privacy Policy
- Accessibility
- Terms

Do not add Careers, Financing, Blog, or Specials because these routes do not exist.

Column 4 — Contact

- Phone
- Email
- Palm Beach County
- Business hours
- License placeholder

FOOTER DECORATION:

- Subtle navy-on-navy palm silhouettes at far edges
- Thin blue horizon line
- Small flying-bird silhouettes
- Avoid large tropical illustrations behind text

BOTTOM BAR:

- Copyright
- Privacy
- Accessibility
- License placeholder
- Template disclaimer

MOBILE FOOTER:

- Logo and phone visible first
- Footer navigation groups become accordions
- Contact information remains visible
- Social icons at least 44px touch targets
- Do not create an excessively tall empty footer

==================================================

19. IMAGE AND AI-ASSET DIRECTION

==================================================

Use AI-generated imagery when real business assets are not available.

Maintain one consistent visual identity across all images.

UNIFORMS:

- Navy or medium-blue work shirt
- Small orange shoulder or pocket accent
- Neutral tan or navy work trousers
- Clean practical footwear
- Original small Florida Coast logo
- No giant unreadable text

SERVICE VANS:

- White base
- Navy lower section
- Coastal Blue wave stripe
- Sunset Orange accent
- Compact logo
- Phone number may be added later through HTML overlays rather than generated into the image

Avoid text inside AI-generated van graphics whenever possible.

PHOTOGRAPHY STYLE:

- Photorealistic
- Bright natural Florida daylight
- Clean residential homes
- Palm Beach County atmosphere
- Organized service environments
- Accurate tools
- Realistic pipe and fixture work
- Friendly but natural expressions
- Balanced ethnic and age representation

IMAGE SUBJECTS:

- Team and service vans

## Technician inspecting a leak  
  
**CHECK TXT FILE FOR REFERENCE**