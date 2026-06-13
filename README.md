# Sekhar Chandra & Associates
### Chartered Accountants Website

An elegant, responsive, single-page website for Sekhar Chandra & Associates, built with React and Vite and tuned for a premium first impression across desktop, tablet, and mobile.

The site combines a refined hero, service showcase, leadership profiles, trust-led storytelling, and a contact experience that opens a prefilled Gmail draft for quick follow-up.

## At A Glance

| Area | Details |
| --- | --- |
| Stack | React 18, Vite 5 |
| Style | Custom CSS, responsive layouts, smooth reveal animations |
| Content | Firm profile, services, leadership team, contact section |
| Contact flow | Prefilled Gmail draft, WhatsApp link, phone link |
| Deployment | Ready for Vercel static hosting |

## Features

- Responsive hero with founder image and interactive service preview
- Clear service and trust sections for professional credibility
- Leadership team cards with consistent portrait styling
- Smooth scrolling and scroll-triggered reveal animations
- Contact section with map, phone, WhatsApp, and email access
- Clean static asset structure for fast Vercel deployment

## Folder Structure

```text
src/
  components/   React UI sections
  data/         Firm profile, services, team content
  styles.css    Global design system and animations
public/images/  Brand and team images
index.html      Vite entry HTML
```

## Local Development

```bash
npm install
npm run dev
```

The dev server will start locally through Vite.

## Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploying To Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project into Vercel.
3. Keep the default build command as `npm run build`.
4. Set the output directory to `dist`.
5. Deploy.

No backend is required for the current version of the site.

## Contact Flow

The `Send Inquiry` action opens a prefilled Gmail draft in a new tab so the visitor can review and send the enquiry manually. This keeps the site simple and works without a server.

## Notes

- Static assets live in `public/images`.
- The team content is data-driven from `src/data/profile.js`.
- The design system lives in `src/styles.css`.

