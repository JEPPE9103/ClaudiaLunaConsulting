# Contact system — manual production setup

Code changes are complete. Live delivery still requires Resend domain verification and Vercel environment variables. Do **not** paste API keys into chat or commit them to Git.

## 1. Create a free Resend account

1. Go to [https://resend.com](https://resend.com) and create an account.
2. Stay on the free plan (sufficient for a small consulting site within free monthly send limits).

## 2. Add and verify `claudialunaconsulting.com`

1. In Resend: **Domains** → **Add Domain** → enter `claudialunaconsulting.com`.
2. Resend will show DNS records (typically SPF/DKIM-related `TXT` / `CNAME` records). Copy them carefully.
3. In GoDaddy DNS for the domain, add **only** the records Resend lists.
4. Wait for Resend to show the domain as **Verified**.

### DNS safety

- Do **not** change MX records unless Resend explicitly requires it **and** you approve the change.
- Existing website (`A`/`CNAME` for the site) and existing email routing must stay intact.
- Prefer adding new TXT/CNAME records alongside current ones.

## 3. Choose the FROM address

Once the domain is verified, use a sender on that domain, for example:

```text
website@claudialunaconsulting.com
```

Never use `claudialunaconsulting@gmail.com` as the Resend `from` identity.

Inbound inquiries should still be delivered **to** Gmail:

```text
claudialunaconsulting@gmail.com
```

## 4. Generate a Resend API key

1. Resend → **API Keys** → **Create API Key**.
2. Give it a restrictive name (e.g. `clc-website-contact`).
3. Copy the key once and store it in a password manager.
4. Do not commit it. Do not paste it into chat.

## 5. Add environment variables in Vercel

In the Vercel project → **Settings** → **Environment Variables**, add for Production (and Preview if desired):

| Name | Example value |
| --- | --- |
| `RESEND_API_KEY` | your Resend key |
| `CONTACT_TO_EMAIL` | `claudialunaconsulting@gmail.com` |
| `CONTACT_FROM_EMAIL` | `website@claudialunaconsulting.com` |

Redeploy after saving variables so the production runtime picks them up.

Local development (optional): copy `.env.example` to `.env.local` and fill in the same keys.

## 6. Deploy the code

Push the contact-system branch/commit, then deploy via your normal Vercel flow (or approve a production deploy). This checklist assumes DNS/env are already configured before relying on the live form.

## 7. Live verification checklist

After deploy + env + verified domain:

1. Open `https://claudialunaconsulting.com/#contact`.
2. Submit a real test message from a personal email you control.
3. Confirm success UI only after submit completes.
4. Check `claudialunaconsulting@gmail.com` for the message (including spam/promotions).
5. Reply from Gmail and confirm Reply-To reaches the test sender.
6. Submit an invalid email and confirm a validation error (no success state).
7. Confirm footer/contact mailto links open `claudialunaconsulting@gmail.com`.
8. Confirm `/privacy` loads in Swedish and English.
9. Confirm LinkedIn is hidden until a real URL is set in `src/data/content.ts`.

## Notes

- Provider acceptance ≠ guaranteed inbox delivery. Treat Resend “accepted” as send acceptance only.
- In-memory rate limiting is soft/best-effort on serverless. Honeypot + timing + validation + Resend limits remain the primary free protections.
- No extra paid database was added; Gmail inbox is the system of record for inquiries.
