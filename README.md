## Twintafo AI Website

Marketing site for Twintafo AI, built with Next.js (App Router).

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Create a `.env.local` file for local dev, and set these in Vercel for preview/prod:

```
NEXT_PUBLIC_SITE_URL=https://twintafoai.com
SMTP_HOST=mail.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-pass
CONTACT_TO=hello@twintafoai.com
CONTACT_FROM=hello@twintafoai.com
```

Required for contact form delivery: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.

## Deploy (Vercel)

- Project root: repository root (`/Users/Ruma/Desktop/Twintafo AI/Code/twintafo-web`)
- Framework preset: Next.js (auto-detected)
- Build command: `npm run build`
- Output: `.next`
- Node: >= 20.11
- Domains: `twintafoai.com` and `www.twintafoai.com` (set DNS to Vercel)

The legacy nested folder `twintafo-web/` is ignored from deploys.

## Operations Checklist

- Enable analytics (Vercel Analytics or preferred provider).
- Set up error monitoring (Sentry/LogRocket/etc.).
- Verify contact form delivery in preview and prod.
- Run `npm run build` locally before production release.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
