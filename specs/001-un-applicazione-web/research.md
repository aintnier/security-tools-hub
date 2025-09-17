# Research

This document consolidates decisions, sources, and assumptions used to plan the frontend prototype for the dashboard (password generator, AI image create/describe, URL shortener).

## Sources (primary)

- Vite (React + TypeScript) Getting Started – Node >= 20.19 or >= 22.12; dev/build/preview scripts; plugin ecosystem.
- Tailwind CSS v4 Using Vite – install `tailwindcss` and `@tailwindcss/vite`; add plugin in `vite.config`; `@import "tailwindcss"` in CSS; no config required by default.
- shadcn/ui (Vite) – path alias `@/*` → `./src/*`; vite plugins `react()` and `tailwindcss()`; install `@types/node`; `shadcn init` then `shadcn add button` etc.
- React Router – nested routes; loaders/actions; `createBrowserRouter` + `RouterProvider`; `errorElement`.
- TanStack Query – server state fetching/caching; QueryClient provider; mutations.
- Zustand – minimal client state; `create()` store.

## Security references

- OWASP CSP Cheat Sheet – strict CSP with nonces or hashes; `frame-ancestors`; `form-action`; `object-src 'none'`; prefer Report-Only rollout; avoid `unsafe-inline`/`unsafe-eval`.
- OWASP XSS Prevention Cheat Sheet – prefer framework auto-escaping; avoid `dangerouslySetInnerHTML`; use DOMPurify for sanitization; safe sinks (`textContent`, `setAttribute`); output-encoding by context (HTML, Attr, JS, CSS, URL).

## Architectural decisions (frontend)

- Build tool: Vite + React TS; target modern browsers; use ESLint + TypeScript strict.
- Styling: Tailwind v4 with official Vite plugin; shadcn/ui for components; CSS file imports only.
- Routing: React Router with a top-level `Root` layout and nested routes per feature.
- Data fetching: TanStack Query for server state; centralized base URL; interceptors for auth errors (later).
- Client state: Zustand for UI/local state (theme, toasts, form state not managed by router).
- a11y: Follow WCAG 2.2 AA; keyboard navigable components; focus management; skip link; color contrast; semantics.

## Open questions (from spec)

- Authentication/roles (admin vs. anon?)
- AI content policy, rate limits, size limits, allowed formats.
- URL shortener analytics (clicks, UTM, geo?), expiry policy.
- Data retention/GDPR, localization scope.

Assumptions for prototype: no auth; conservative file limits (images up to 5MB, png/jpg/webp); rate limit UI messaging only; minimal click count in UI; English + Italian labels.

## Risks and mitigations

- XSS via rendered HTML: avoid `dangerouslySetInnerHTML`; sanitize any server-provided HTML using DOMPurify.
- CSP breakage: start with Report-Only in dev; iteratively tighten.
- Supply chain: pin versions; enable `npm audit` and `eslint`.

## References (links)

- https://vitejs.dev/guide/
- https://tailwindcss.com/docs/installation/using-vite
- https://ui.shadcn.com/docs/installation/vite
- https://reactrouter.com/start/tutorial
- https://tanstack.com/query/latest
- https://zustand-demo.pmnd.rs/
- https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
- https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
