# Claudia Luna Consulting

Premium corporate website for Claudia Luna Consulting — a Stockholm-based senior HR and transformation advisory consultancy.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Content editing

Editable copy and structure live in:

- `src/data/content.ts`

Update contact email, LinkedIn URL, expertise areas, case studies and section copy there without touching layout components.

## Portraits

Portrait areas use `PortraitPlaceholder`. Replace with a real image later by updating the component or swapping in a Next.js `Image`.

## Contact form

The form posts to `src/app/api/contact/route.ts` with client- and server-side validation, plus success and error states.

The API currently validates and acknowledges submissions. Connect an email provider when ready.

## Deploy

Deploy to Vercel or any Node-compatible host:

```bash
npm run build
npm run start
```
