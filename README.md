# Rieber Prosjekt AS - Website

Professional consulting website for Rieber Prosjekt AS, a Norwegian acoustic and environmental engineering firm.

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom professional design system
- **Fonts**: Playfair Display (serif headings) & Inter (body text)
- **Icons**: Lucide React

## Design Philosophy

The website follows a conservative, professional design approach suitable for an established consulting firm:

- **Trust-focused**: Deep navy and muted gold color scheme
- **Traditional layout**: Classic navigation and content structure
- **Content-first**: Emphasis on expertise and credentials
- **Minimal animations**: Subtle transitions only
- **Professional typography**: Serif headings with generous spacing

## Pages

- **Home** (`/`) - Company overview and services
- **Bygningsakustikk** (`/bygningsakustikk`) - Building acoustics services
- **Støykartlegging** (`/stoykartlegging`) - Noise mapping services
- **Reguleringsplaner** (`/reguleringsplaner`) - Regulatory planning
- **Skytebaner** (`/skytebaner`) - Shooting range acoustics
- **Om oss** (`/om-oss`) - About the company
- **Kontakt** (`/kontakt`) - Contact form and information

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Key Features

- Responsive design for all devices
- SEO optimized with metadata
- Professional contact form
- Service showcase with detailed descriptions
- Credentials and certifications prominently displayed
- Norwegian language (nb-NO)

## Color Palette

- Primary: `#1e3a5f` (Deep navy blue)
- Secondary: `#6b7280` (Warm gray)
- Accent: `#d4a574` (Muted gold)
- Background: `#fafaf9` (Off-white)
- Text: `#1f2937` (Charcoal)

## Project Structure

```
rpr-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── bygningsakustikk/  # Building acoustics page
│   ├── stoykartlegging/   # Noise mapping page
│   ├── reguleringsplaner/ # Regulatory plans page
│   ├── skytebaner/        # Shooting ranges page
│   ├── om-oss/            # About us page
│   └── kontakt/           # Contact page
├── components/
│   └── layout/
│       ├── Header.tsx     # Navigation header
│       └── Footer.tsx     # Site footer
└── public/                # Static assets

```

## Deployment

The site can be deployed to any Node.js hosting platform. Recommended options:

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com/new):

```bash
npm run build
npx vercel
```

### Other Platforms
- Netlify
- Traditional web hosting with Node.js support
- Docker container deployment

## Company Information

**Rieber Prosjekt AS**
- Organization Number: NO 911 678 462 MVA
- Phone: 924 86 555
- Email: post@rpr.no
- Address: Billingstadåsen 18b, 1396 Billingstad, Norway

## License

This project is proprietary software for Rieber Prosjekt AS.