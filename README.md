# Claudia Luna Consulting

Premium corporate website for Claudia Luna Consulting — a Stockholm-based senior HR and transformation advisory consultancy.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Resend (contact form delivery)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For local contact delivery, copy `.env.example` to `.env.local` and fill in Resend values. Never commit real secrets.

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
- `npm run test` — automated contact/API tests (mocked Resend)

## Content editing

Editable copy and structure live in:

- `src/data/content.ts`

Public contact email and optional LinkedIn URL are configured in `site` at the top of that file. Leave `linkedIn` empty to hide LinkedIn CTAs.

## Contact form

The form posts to `/api/contact` with client- and server-side validation, honeypot/timing checks, soft rate limiting, and Resend delivery.

Success is shown only after Resend accepts the message. Setup steps for Resend, GoDaddy DNS and Vercel env vars:

- `docs/CONTACT_SETUP.md`

## Privacy

`/privacy` explains how contact-form data is handled (Swedish/English via the language switcher). Business-owner confirmation is still required for legal details called out on that page.

## Deploy

Deploy to Vercel. After code deploy, configure the environment variables listed in `.env.example` and complete domain verification in Resend before relying on live form delivery.
