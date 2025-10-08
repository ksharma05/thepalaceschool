### Project Setup TODO

**Phase 1: Foundation & Core Information (Go-Live MVP)**

**1. Root Project Setup (Monorepo)**
- [x] Create a root `package.json` to define npm workspaces.
- [x] Create a root `.gitignore` file.
- [x] Create a `README.md` file.

**2. Backend Setup (`packages/server`)**
- [x] Create `packages/server/package.json` with dependencies.
- [x] Create `packages/server/tsconfig.json`.
- [x] Create `packages/server/src/index.ts`.
- [x] Create `packages/server/.env.example`.

**3. Frontend Setup (`packages/client`)**
- [x] Use Vite to scaffold a new React + TypeScript project in `packages/client`.
- [x] Add `react-router-dom` and `gsap` dependencies.
- [x] Create `src/components/` and `src/pages/` directories.

**4. Final Steps**
- [x] Run `npm install` in the root directory.
- [x] Create `.env` file in `packages/server`.
- [x] Add `start` scripts to run both servers.
