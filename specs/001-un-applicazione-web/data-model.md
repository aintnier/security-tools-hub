# Data Model (Frontend)

This defines TypeScript-facing models, UI state, and query keys.

## Core types

```ts
// Password generator
export type PasswordOptions = {
  length: number; // 8-64
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeAmbiguous?: boolean; // e.g., 0/O, 1/l
};

export type GeneratedPassword = {
  value: string;
  strength: "weak" | "medium" | "strong";
};

// AI Image
export type ImageCreateRequest = {
  prompt: string;
  size?: "256x256" | "512x512" | "1024x1024";
  format?: "png" | "jpg" | "webp";
};

export type ImageCreateResponse = {
  id: string;
  url: string; // CDN or data URL
  width: number;
  height: number;
  format: "png" | "jpg" | "webp";
};

export type ImageDescribeRequest = {
  imageUrl: string; // or upload handled separately
  maxTokens?: number;
};

export type ImageDescribeResponse = {
  id: string;
  description: string;
  tags?: string[];
};

// URL Shortener
export type ShortenUrlRequest = {
  url: string;
  customAlias?: string;
  expiresAt?: string; // ISO8601
};

export type ShortenUrlResponse = {
  id: string;
  shortUrl: string;
  originalUrl: string;
  clicks?: number;
  expiresAt?: string | null;
};

export type ApiError = {
  code: string;
  message: string;
  details?: unknown;
};
```

## TanStack Query keys

```ts
export const qk = {
  image: {
    create: () => ["image", "create"],
    describe: (id: string) => ["image", "describe", id],
  },
  url: {
    list: () => ["url", "list"],
    byId: (id: string) => ["url", id],
  },
} as const;
```

## Zustand slices

```ts
export type Theme = "light" | "dark" | "system";

export type UiState = {
  theme: Theme;
  isNavOpen: boolean;
  toast?: {
    id: string;
    title: string;
    description?: string;
    variant?: "default" | "destructive";
  };
};

export type UiActions = {
  setTheme: (t: Theme) => void;
  toggleNav: () => void;
  showToast: (toast: UiState["toast"]) => void;
  clearToast: () => void;
};
```

## Accessibility considerations

- Labels reflect visual text; no icon-only actionable elements without labels.
- Keyboard focus order follows reading order; roving tabindex for menus.
- Color contrast adheres to WCAG 2.2 AA.
