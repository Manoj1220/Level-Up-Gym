# Level Up Gym

Premium, cinematic digital experience for Level Up Gym, built with Next.js 15, Tailwind CSS, and Prisma.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Database**: SQLite (via Prisma) - easily swappable to PostgreSQL
- **Email**: Nodemailer
- **Fonts**: Google Fonts (Bebas Neue, Barlow Condensed, Inter)

## Features

1. **Pixel-Perfect Frontend Integration**: Directly ported from Google Stitch designs without modifying the visual identity.
2. **Join Application System**: Server actions form handling, input validation, and loading states.
3. **Database Setup**: Prisma schema for applications and leads.
4. **Admin Dashboard**: Minimalist secure dashboard to view leads, mark as contacted, delete, search, and filter.
5. **Email Notifications**: Ready-to-go Nodemailer setup to send emails to admin and auto-responses to leads.
6. **SEO & Meta**: Complete meta tags, Open Graph implementation, and semantic HTML.

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Initialize database (SQLite):
   ```bash
   npx prisma db push
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Admin Dashboard

Access the admin dashboard at `/admin`.

**Default Credentials:**
- **Username**: `admin`
- **Password**: `leveluppro`

## Deployment (Vercel / Netlify)

1. Connect your repository to Vercel/Netlify.
2. Set up the Environment Variables from `.env.example`.
3. If using **PostgreSQL** in production (recommended):
   - Open `prisma/schema.prisma`
   - Change `provider = "sqlite"` to `provider = "postgresql"`
   - Run `npx prisma generate`
   - Commit the changes and deploy.
4. Add `DATABASE_URL` in your hosting provider's environment variables.
5. Setup the build command to generate Prisma client: `npx prisma generate && next build`. (Next.js usually handles this if configured, or you can add a `postinstall` script in package.json: `"postinstall": "prisma generate"`).

## Email Setup
Configure the `SMTP_*` environment variables with your email provider (SendGrid, Resend, or Gmail App Passwords) for production emails.

## File Structure

- `src/app/page.tsx`: Main landing page
- `src/app/join/`: Join Application Flow
- `src/app/admin/`: Admin Dashboard
- `src/app/globals.css`: Tailwind variables & global styles
- `prisma/schema.prisma`: Database schema
