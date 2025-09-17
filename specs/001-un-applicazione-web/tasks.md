# Tasks: Dashboard Automazione & Sicurezza IT

**Input**: Design documents from `/specs/001-un-applicazione-web/`  
**Prerequisites**: `plan.md` (required), `research.md`, `data-model.md`, `contracts/`

## Execution Flow (main)

```
1. Load plan.md from feature directory
   → Extract: tech stack, libraries, structure (web app → frontend/)
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md & quickstart.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting, test tooling
   → Tests: contract tests, integration tests (from user stories)
   → Core: models, services, UI pages/routes
   → Integration: mocks (MSW), security hygiene
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Declare dependencies and parallel examples
7. Validate completeness
8. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`

- [P]: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions (from plan.md → Web application)

- Source code: `frontend/src/`
- Tests: `frontend/tests/` with `contract/`, `integration/`, `unit/`
- Contracts (input): `specs/001-un-applicazione-web/contracts/openapi.yaml`

---

## Phase 3.1: Setup

- [ ] T001 Create React + Vite TS app in `frontend/`
  - Command:
    ```bash
    wsl.exe -e bash -lc "npm create vite@latest frontend -- --template react-ts"
    ```
- [ ] T002 Install runtime and dev dependencies
  - Command:
    ```bash
    wsl.exe -e bash -lc "cd frontend && npm i react-router-dom @tanstack/react-query zustand dompurify"
    wsl.exe -e bash -lc "cd frontend && npm i -D tailwindcss @tailwindcss/vite @types/node vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom msw openapi-typescript"
    ```
- [ ] T003 Configure Tailwind v4 plugin and CSS import
  - Edit `frontend/vite.config.ts`: add `import tailwind from "@tailwindcss/vite"` and include `tailwind()` in `plugins`.
  - Edit/Create `frontend/src/index.css`: add `@import "tailwindcss";`
- [ ] T004 Configure path aliases for `@/*`
  - Edit `frontend/tsconfig.json` → `compilerOptions.paths` to map `@/*` → `./src/*`
  - Edit `frontend/vite.config.ts` → `resolve.alias` to map `@` → `path.resolve(__dirname, "src")`
- [ ] T005 Initialize shadcn/ui and add base components
  - Command:
    ```bash
    wsl.exe -e bash -lc "cd frontend && npx shadcn@latest init"
    wsl.exe -e bash -lc "cd frontend && npx shadcn@latest add button input label textarea card dialog toast"
    ```
- [ ] T006 [P] Configure ESLint and Prettier (consistent formatting)
  - Files: `frontend/.eslintrc.*`, `frontend/.prettierrc*` (or package.json fields)
- [ ] T007 Configure Vitest + RTL + MSW test setup
  - Files:
    - `frontend/vite.config.ts` → `test` section for jsdom if using config-based
    - `frontend/src/test/setupTests.ts` → import `@testing-library/jest-dom` and MSW setup
    - `frontend/package.json` → scripts: `test`, `test:watch`, `coverage`
- [ ] T008 Generate OpenAPI types from contracts to `frontend/src/api/types.gen.ts`
  - Command:
    ```bash
    wsl.exe -e bash -lc "cd frontend && npx openapi-typescript ../specs/001-un-applicazione-web/contracts/openapi.yaml -o src/api/types.gen.ts"
    ```
- [ ] T009 Create base API client wrapper `frontend/src/services/apiClient.ts`
  - Include base URL, JSON fetch helper, error normalization to `ApiError`

## Phase 3.2: Tests First (TDD) — MUST FAIL BEFORE 3.3

- [ ] T010 [P] Contract tests for all endpoints defined in `openapi.yaml`
  - File: `frontend/tests/contract/api.contract.test.ts`
  - Verify request/response shapes per `src/api/types.gen.ts` using MSW to mock responses
- [ ] T011 [P] Integration test — Password generator happy path
  - File: `frontend/tests/integration/password-generator.test.tsx`
  - Flow: open dashboard → select "Generatore password" → set criteria → generate → see value + strength + copy affordance
- [ ] T012 [P] Integration test — URL shortener happy path
  - File: `frontend/tests/integration/url-shortener.test.tsx`
  - Flow: open tool → enter valid URL → shorten → see short link + copy feedback
- [ ] T013 [P] Integration test — AI Images Create
  - File: `frontend/tests/integration/image-create.test.tsx`
  - Flow: enter prompt → create → image renders with caption and download
- [ ] T014 [P] Integration test — AI Images Describe
  - File: `frontend/tests/integration/image-describe.test.tsx`
  - Flow: select image (mock upload or URL) → describe → text appears and is accessible
- [ ] T015 [P] Integration test — Invalid inputs and error messaging
  - File: `frontend/tests/integration/invalid-inputs.test.tsx`
  - Cases: malformed URL, empty/short prompt, oversized/unsupported image, missing character sets for password

## Phase 3.3: Core Implementation (ONLY after tests are failing)

### Models (from data-model.md)

- [ ] T016 [P] Implement password models in `frontend/src/models/password.ts`
  - Types: `PasswordOptions`, `GeneratedPassword`
- [ ] T017 [P] Implement image models in `frontend/src/models/images.ts`
  - Types: `ImageCreateRequest/Response`, `ImageDescribeRequest/Response`
- [ ] T018 [P] Implement URL models in `frontend/src/models/url.ts`
  - Types: `ShortenUrlRequest/Response`
- [ ] T019 [P] Implement common models and UI state in `frontend/src/models/common.ts` and `frontend/src/store/ui.ts`
  - Types: `ApiError`, query keys; Zustand `UiState`/`UiActions`

### Services (API calls using apiClient)

- [ ] T020 [P] Password service in `frontend/src/services/passwordService.ts`
  - POST `/api/passwords/generate`
- [ ] T021 [P] Image service in `frontend/src/services/imageService.ts`
  - POST `/api/images/create` and POST `/api/images/describe`
- [ ] T022 [P] URL service in `frontend/src/services/urlService.ts`
  - POST `/api/urls`, GET `/api/urls`, GET `/api/urls/{id}`

### Routing & Layout

- [ ] T023 Configure router/providers in `frontend/src/main.tsx` and `frontend/src/router.tsx`
  - Add `QueryClientProvider`, `RouterProvider`, and error boundary
- [ ] T024 Create shared layout and navigation with a11y in `frontend/src/components/{Layout.tsx,Nav.tsx,ToastProvider.tsx}`
  - Include skip link, focus styles, semantics per WCAG 2.2 AA

### Pages (UI)

- [ ] T025 Implement Password Generator page `frontend/src/pages/PasswordGenerator.tsx`
- [ ] T026 Implement URL Shortener page `frontend/src/pages/UrlShortener.tsx`
- [ ] T027 Implement Image Create page `frontend/src/pages/ImageCreate.tsx`
- [ ] T028 Implement Image Describe page `frontend/src/pages/ImageDescribe.tsx`

### Validation & Errors

- [ ] T029 Add validation utilities and error handling
  - Files: `frontend/src/lib/validation.ts`, integrate to forms; normalize errors to toasts

## Phase 3.4: Integration

- [ ] T030 MSW handlers for all endpoints for tests (and optional dev) in `frontend/src/mocks/{handlers.ts,server.ts}`
- [ ] T031 Security hygiene pass
  - Ensure no `dangerouslySetInnerHTML`; sanitize any HTML with `dompurify`
  - Document CSP Report-Only approach in `specs/001-un-applicazione-web/research.md`

## Phase 3.5: Polish

- [ ] T032 [P] Unit tests for services and store
  - Files: `frontend/tests/unit/{services.test.ts,store.test.ts}`
- [ ] T033 Performance budget check (<150KB gzipped JS) and bundle analysis
  - Add `frontend/package.json` script for `vite build --mode production` and verify output size
- [ ] T034 [P] Update docs (README and quickstart) and add usage notes
  - Files: `frontend/README.md`, update `specs/001-un-applicazione-web/quickstart.md`

---

## Dependencies

- Setup (T001–T009) must complete before any tests (T010–T015)
- Tests (T010–T015) must be in place and failing before Core (T016–T029)
- Models (T016–T019) precede Services (T020–T022)
- Services (T020–T022) precede Pages (T025–T028)
- Router/Layout (T023–T024) precede Pages
- Integration (T030–T031) after core; Polish (T032–T034) last

## Parallel Execution Example

```
# After completing Setup (T001–T009), launch TDD tasks together:
Task: "Contract tests for openapi.yaml in frontend/tests/contract/api.contract.test.ts"
Task: "Integration test — Password generator in frontend/tests/integration/password-generator.test.tsx"
Task: "Integration test — URL shortener in frontend/tests/integration/url-shortener.test.tsx"
Task: "Integration test — AI create in frontend/tests/integration/image-create.test.tsx"
Task: "Integration test — AI describe in frontend/tests/integration/image-describe.test.tsx"
Task: "Integration test — Invalid inputs in frontend/tests/integration/invalid-inputs.test.tsx"
```

## Task Agent Commands (selected)

```
# Scaffold & deps
wsl.exe -e bash -lc "npm create vite@latest frontend -- --template react-ts"
wsl.exe -e bash -lc "cd frontend && npm i react-router-dom @tanstack/react-query zustand dompurify"
wsl.exe -e bash -lc "cd frontend && npm i -D tailwindcss @tailwindcss/vite @types/node vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom msw openapi-typescript"

# Generate API types
wsl.exe -e bash -lc "cd frontend && npx openapi-typescript ../specs/001-un-applicazione-web/contracts/openapi.yaml -o src/api/types.gen.ts"

# Run tests (should fail initially)
wsl.exe -e bash -lc "cd frontend && npm run test"
```

## Validation Checklist

- [ ] All contracts have corresponding tests (openapi.yaml → T010)
- [ ] All entities from data-model have model tasks (T016–T019)
- [ ] Tests come before implementation (T010–T015 before T016+)
- [ ] Parallel tasks operate on different files ([P] flagged)
- [ ] Each task specifies exact file path(s)
- [ ] No [P] tasks modify the same file concurrently
