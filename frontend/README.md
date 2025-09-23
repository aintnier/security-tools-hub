# Security Tools Hub - Frontend

## Overview
This is a React + Vite frontend application with Tailwind CSS v4 and shadcn/ui components.

## Technology Stack
- **React**: 19.1.1
- **Vite**: 7.1.7 
- **TypeScript**: 5.8.3
- **Tailwind CSS**: v4.0.0 (Alpha)
- **shadcn/ui**: Latest components
- **Build Tools**: ESLint, TypeScript compiler

## Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main application component
├── index.css         # Tailwind CSS imports
└── main.tsx          # Application entry point
```

## Tailwind CSS v4 Configuration

This project uses Tailwind CSS v4 (Alpha) which has a different configuration approach:
- Configuration is done through CSS variables in `@theme` blocks
- Import is simply `@import "tailwindcss";`
- Uses native CSS layers and modern CSS features

## shadcn/ui Components

Components are configured in `components.json` and installed in `src/components/ui/`.

To add new components:
```bash
npx shadcn@latest add [component-name]
```

Note: Due to Vite version compatibility issues, dependencies may need to be installed with `--legacy-peer-deps`.

## Known Issues

1. **Vite v7 Compatibility**: Tailwind v4 Vite plugin expects Vite v5-v6, but project uses v7. This may cause build issues in production.
2. **Alpha Software**: Tailwind v4 is in alpha and may have stability issues.

## Troubleshooting

If you encounter dependency resolution issues:
```bash
npm install --legacy-peer-deps
```

For build issues, ensure all peer dependencies are correctly installed and consider downgrading to Vite v6 if necessary.

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
