# ✈️ Visskan Aviation Website

Official website for **Visskan Aviation Pvt. Ltd.**, rebuilt using **Next.js (App Router)** and **Tailwind CSS**.  
Inspired by [Al-Safa Logistics](https://al-safa-logistics.webflow.io/), and built to match international standards like [Menzies Aviation](https://menziesaviation.com), [dnata](https://dnata.com/en), and [POS Aviation](https://www.posaviation.com.my).

This website is:
- ✅ Fully responsive and mobile-first
- ✅ SEO-optimized and AI-readable
- ✅ Compliant with Google Core Web Vitals
- ✅ Built with semantic HTML and JSON-LD schema markup
- ✅ Deployed on [Vercel](https://vercel.com/) for optimal performance

---

## 🌐 Project Overview

Visskan Aviation provides ground handling and aviation support services across major Indian airports.  
The website aims to showcase:
- Company history and certifications
- Full service offerings in aviation
- Presence at various airports
- Airline and airport clients
- Career opportunities
- Contact channels and form

---

## 🧱 Tech Stack

| Category       | Tech / Tool                         |
|----------------|-------------------------------------|
| Framework      | Next.js (App Router - stable)       |
| Styling        | Tailwind CSS                        |
| Animation      | Framer Motion                       |
| Forms          | Formspree / Next.js API Route       |
| Hosting        | Vercel                              |
| Fonts          | Inter / Poppins                     |
| Images         | `next/image` component              |
| SEO            | Metadata API, Structured Data       |
| Schema Markup  | JSON-LD                             |
| UI Icons       | Heroicons / Lucide.dev              |

---

## 📁 Folder Structure

```
/app
  ├── layout.tsx
  ├── page.tsx
  ├── about/
  ├── services/
  ├── presence/
  ├── clients/
  ├── careers/
  └── contact/
/components
  ├── Header.tsx
  ├── Footer.tsx
  ├── Hero.tsx
  └── UI/
/public
  ├── images/
  ├── icons/
  └── favicon.ico
/styles
  └── globals.css
```

---

## ✅ Core Features

- Fully responsive design
- SEO & AI optimization with JSON-LD
- Scroll and hover animations
- Lazy loading for images
- Schema.org integration
- Accessible navigation
- Contact form with validation

---

## 🔍 Pages & Routing

| Route         | Page Description                             |
|---------------|----------------------------------------------|
| `/`           | Homepage with CTA, metrics, partners         |
| `/about`      | Company overview, team, certifications       |
| `/services`   | Details on ground handling & support services|
| `/presence`   | List and map of airports covered             |
| `/clients`    | Client logos, testimonials, case studies     |
| `/careers`    | Job listings and application form            |
| `/contact`    | Google Map, contact form, addresses          |

---

## 🧠 SEO, Schema & AI Optimization

**Meta Optimization**
- Unique titles, descriptions per page using Next.js Metadata API

**JSON-LD Schema Includes:**
- `Organization`
- `LocalBusiness`
- `Service`
- `BreadcrumbList`
- `ContactPage`

**AI Optimization**
- Clear content hierarchy with semantic tags
- Descriptive alt texts and consistent sectioning
- Crawl-friendly markup and fast-loading assets

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/visskan-aviation.git

# Move into directory
cd visskan-aviation

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 🚀 Deployment

The site is optimized for Vercel. To deploy:

```bash
# Build
npm run build

# Preview locally
npm run start
```

Set up project in Vercel, connect GitHub repo, and configure custom domain.

---

## 📊 Google Core Web Vitals

Performance targets:
- **LCP < 2.5s** – Optimize hero section and fonts
- **FID < 100ms** – Lightweight scripts and fast form responses
- **CLS < 0.1** – Prevent layout shifts using fixed heights, `next/image`

Tested via [PageSpeed Insights](https://pagespeed.web.dev/) and [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)

---

## 🎨 Design Language

- **Colors**: Aviation-themed – blue, grey, white
- **Typography**: Clean sans-serif (`Inter`, `Poppins`)
- **UI Elements**: Rounded buttons, hover transitions, card layouts
- **Animations**: Scroll reveals and interactive elements via Framer Motion

---

## 🔐 Security & Best Practices

- Form input sanitization
- HTTP headers via `next.config.js`
- Static site generation for performance
- Hosting on secure HTTPS with Vercel

---

## 📞 Contact

- ✉️ Email: info@visskanaviation.com
- 🌐 Website: [https://www.visskanaviation.com](https://www.visskanaviation.com)
- 📍 Offices at major Indian airports

---

## 📝 License

MIT © Visskan Aviation Pvt. Ltd.

For inquiries, contact the site maintainer or development partner.
