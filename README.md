# Talent Nexus website

Official bilingual website built with Next.js and Tailwind CSS, ready for GitHub and Netlify.

## Local development

```bash
npm install
npm run dev
```

## Contact API

The form posts to `/api/contact` by default. Set `NEXT_PUBLIC_CONTACT_API` in Netlify to use an external CRM or form endpoint.

## Netlify

Import the GitHub repository in Netlify. The included `netlify.toml` supplies the build command and runtime settings.
