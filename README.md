# React + TypeScript + Vite

## Instagram feed

The site loads the latest posts from `/api/instagram` and keeps the bundled feed as a fallback. The API function is ready for Vercel deployment.

1. Create a Meta/Instagram API access token for the connected professional account.
2. Copy `.env.example` to `.env.local` and set `INSTAGRAM_ACCESS_TOKEN`.
3. Deploy to Vercel. Keep the token in the server environment and do not use a `VITE_` prefix.

## Contact form

The contact form sends messages through the Resend API from the server-side `/api/contact` function.

1. Create a Resend API key.
2. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `RESEND_FROM_EMAIL` to `.env.local` or your Vercel environment variables.
3. Use a verified domain for `RESEND_FROM_EMAIL` in production. The `onboarding@resend.dev` address is suitable only for testing.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
