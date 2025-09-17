# Frontend Quickstart (React + Vite + Tailwind v4 + shadcn/ui)

Prereqs

- Node 20.19+ or 22.12+ (in WSL)
- PNPM or NPM

## 1) Scaffold

```bash
wsl.exe -e bash -lc "npm create vite@latest frontend -- --template react-ts"
cd frontend
```

## 2) Install deps

```bash
wsl.exe -e bash -lc "npm i -D tailwindcss @tailwindcss/vite @types/node"
wsl.exe -e bash -lc "npm i react-router-dom @tanstack/react-query zustand dompurify"
```

## 3) Configure Tailwind v4

- Add the plugin to `vite.config.ts`:

```ts
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwind()],
});
```

- Import Tailwind in `src/index.css`:

```css
@import "tailwindcss";
```

## 4) shadcn/ui

```bash
wsl.exe -e bash -lc "npx shadcn@latest init"
wsl.exe -e bash -lc "npx shadcn@latest add button input label textarea card dialog toast"
```

- Ensure path alias in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

- In `vite.config.ts` add alias:

```ts
resolve: { alias: { "@": path.resolve(__dirname, "src") } }
```

## 5) React Router + Query

- Wrap app in providers:

```tsx
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const qc = new QueryClient();

<StrictMode>
  <QueryClientProvider client={qc}>
    <RouterProvider router={router} />
  </QueryClientProvider>
</StrictMode>;
```

## 6) Security hygiene

- Avoid `dangerouslySetInnerHTML`; sanitize HTML with `dompurify`.
- Start with CSP Report-Only via dev server proxy or hosting.
- Prefer safe sinks (`textContent`, `setAttribute`).

## 7) Run

```bash
wsl.exe -e bash -lc "npm run dev"
```
