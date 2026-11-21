# Quest Growth Empire

Premium multi-page website for Quest Growth Empire, a multidisciplinary business growth, creative production and technology company.

**Brand:** Quest Growth Empire  
**Tagline:** Turning Local Businesses into Powerful Brands.  
**Brand philosophy:** Brand. Build. Automate. Grow.  
**Primary enquiry / WhatsApp:** +91 91184 74846  
**Launch region:** Lucknow and Uttar Pradesh, using a centralized coordination team and a regional partner network.

## Website

The public website is deployed separately through AppDeploy. This repository contains its source code.

## Pages

- Home
- About
- Production House
  - Events & Experiences
  - Wedding Photography & Films
  - Commercial Production
  - Models & Talent Booking
- Brand & Creative
- Digital Growth
- Technology
- Business Strategy
- Portfolio
- Locations
- Contact

## Features

- Responsive, premium dark-and-gold visual identity.
- Dedicated pages for the main service departments.
- Model and talent enquiry form for male/female models and shoot requirements.
- Service enquiry forms that open WhatsApp with a pre-filled project brief.
- Regional service-area messaging that does not misrepresent partner coverage as physical offices.
- Custom crowned-Q emblem asset in `public/quest-logo.svg`.

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS
- Static export configuration

## Run locally

```bash
npm install
npm run dev
```

Build the production site:

```bash
npm run build
```

## Deployment notes

The app is configured for static export. Configure the repository in your hosting provider (for example, Vercel) with the Next.js framework preset and build command `npm run build`. Confirm the output settings with the host's Next.js static-export support before production deployment.

## Enquiry handling

Forms open WhatsApp at `https://wa.me/919118474846` with a pre-filled message. The visitor must review and send the message. This does not currently create a database record or automatically store enquiries.

## Important content note

Portfolio imagery is illustrative stock photography until replaced with approved original client work. Do not present it as completed client work or as evidence of measured outcomes. Regional city listings are service areas subject to confirmed partner availability, not a claim of physical branch offices.
