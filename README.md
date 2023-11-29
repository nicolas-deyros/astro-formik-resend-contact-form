# Astro contact form using Formik, Yup, Resend, React Email and Tailwind

Base on the video [(FINALLY!) Email for Developers](https://www.youtube.com/watch?v=HyDwVN1AFwY) from the Youtube channel [Coding in Public](https://www.youtube.com/@CodinginPublic)

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── assets/
│   └── components/
│       └── emails/
│           └── SampleEmail.tsx
│       └── Form/
│           └── ContactUs.tsx
│   └── layouts/
│       └── Head.astro
│       └── index.astro
│   └── pages/
│       └── api/
│           └── sendEmail.json.ts
│       └── index.astro
│   └── schemas/
│       └── index.tsx
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Dependencies

This are all the dependencies use for this project

```text
  "@astrojs/check": "^0.3.1",
  "@astrojs/node": "^6.1.0",
  "@astrojs/partytown": "^2.0.2",
  "@astrojs/prefetch": "^0.4.1",
  "@astrojs/react": "^3.0.6",
  "@astrojs/tailwind": "^5.0.2",
  "@react-email/components": "^0.0.11",
  "@react-email/render": "^0.0.9",
  "@types/react": "^18.2.39",
  "@types/react-dom": "^18.2.17",
  "astro": "^3.6.1",
  "astro-icon": "^0.8.1",
  "astro-seo": "^0.8.0",
  "formik": "^2.4.5",
  "framer-motion": "^10.16.5",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-email": "^1.9.5",
  "resend": "^2.0.0",
  "tailwindcss": "^3.3.5",
  "typescript": "^5.3.2",
  "yup": "^1.3.2"
```

## Environment Variables

You need to setup the following environment variables in order for resend to work **RESEND_API_KEY=**. If you would like to add Google Analytics you will also need to use **GA_GTAG=**
