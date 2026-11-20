# Temer Properties - Rebuilt with Next.js

A high-performance, pixel-faithful modern clone of [Temer Properties](https://temerproperties.com/) — Ethiopia's leading real estate developer in Addis Ababa.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Highlights & Features

- **Brand Colors & Design System**:
  - Primary Brand Green (`#84A441`), Dark Green (`#6e8a32`), Dark Charcoal (`#181d24`), and Gold Accents (`#c3ae4b`).
  - Strict matching of fonts, typography scales, buttons, card borders, and shadows.

- **Moving Content (Extracted Native Videos)**:
  - Extracted native high-definition MP4 videos from the WordPress media library and Elementor embeds:
    - `public/videos/hero-background.mp4` (Autoplaying seamless loop background hero video)
    - `public/videos/intro.mp4` ("Watch this video to know us better" video player)
    - `public/videos/social-reel.mp4` (High-energy social showcase)

- **Complete Page Architecture**:
  - **Homepage (`/`)**:
    - Floating sticky navigation bar with scroll state transition (transparent on top, solid white on scroll)
    - Autoplaying Hero video with toggle controls, contact phone badge (**0938125777**), and quick property filter widget
    - Animated stats counters (10,000+ Customers, 10+ Years Experience, 10+ Delivered Projects, 350+ Apartment Units)
    - Interactive property filter & latest listings cards
    - Native video player section with sound/play toggle & YouTube modal option
    - Projects portfolio showcase with status filters (All, In Progress, Delivered, Upcoming)
    - Real estate blog cards and latest industry news
    - Interactive contact inquiry form & direct contact phone details
    - Comprehensive 3-column footer with social icons & legal links
  - **Properties Standard List (`/properties-standard-list`)**:
    - Full searchable and filterable directory of all 32 properties (location, category, bedrooms, sorting)
  - **Properties With Map (`/half-map-properties-list`)**:
    - Split-screen layout featuring responsive listing cards on the left and an interactive location map on the right
  - **Individual Property Detail Pages (`/properties/[slug]`)**:
    - High-resolution gallery, comprehensive specs (beds, baths, gross/net area), features list, location map, and sticky inquiry/booking sidebar
  - **About Us (`/about-us`)**:
    - Company history (founded 2010 EC), Mission, Vision, Core Values, interactive FAQ accordion, and delivered projects list
  - **Construction Update (`/construction-update`)**:
    - Site update showcase with milestone progress bars, timeline quarters, and site tour booking
  - **Our Team (`/our-team`)**:
    - Executive Founders and Top Management directory with authentic photos and roles
  - **Sales Officers (`/sales-officer`)**:
    - Directory of 24 authorized property consultants with direct call actions
  - **Job Portal (`/job-portal`)**:
    - All 12 real job openings with expandable responsibilities, qualifications, and direct application workflow (`jobs@temerproperties.com`)
  - **News & Events (`/events`)** & **Blog Archive (`/blog-list`)**:
    - Searchable news and articles with 50+ posts
  - **Individual Blog Posts (`/blog/[slug]`)**:
    - Clean reading typography, social shares, and related articles
  - **Contact (`/contact`)**:
    - Office location, contact phone **0938125777**, interactive form, and Google Maps embed
  - **Global "Book Now" Modal**:
    - Accessible from anywhere on the site (header, cards, hero) to schedule consultations or site visits

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the website.

### 3. Build & Test Production Locally
```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel

The project is fully pre-configured for one-click deployment on [Vercel](https://vercel.com).

### Option A: Via GitHub (Recommended)
1. Commit and push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Complete Temer Properties website with Next.js, updated contact info, and Vercel config"
   git push origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository (`temer-properties` or your connected repository).
4. Click **Deploy**. Vercel will automatically detect **Next.js** and build the project with zero additional configuration.

### Option B: Via Vercel CLI
```bash
npx vercel
# Follow the interactive prompts to link and deploy to preview or production (--prod)
npx vercel --prod
```
