# Copilot / AI agent instructions — Ankit Transport

Purpose: Provide concise, repository-specific guidance so an AI coding agent can be productive immediately.

Big picture
- This is a single-page React app bootstrapped with Create React App. The app is client-only (no server code in repo).
- Routing and high-level layout live in `src/App.js` (router, sticky nav, footer). Example: the nav and routes are defined in `src/App.js`.
- Reusable UI pieces are small, presentational components in `src/components/*` (each component imports its own `*.css`).

Key files and directories
- `src/App.js` — router, site-wide layout, top-level `NavLink` usage.
- `src/components/` — `Home.js`, `Services.js`, `Contact.js`, `About.js`, `Portfolio.js` and their corresponding `*.css` files.
- `src/index.js`, `public/index.html` — app entry and HTML shell.
- `package.json` — use `npm start`, `npm test`, `npm run build` (this repo uses `react-scripts`).

Patterns & conventions (observable)
- Components are presentational and import plain CSS files (not CSS modules). Follow the existing pattern: create `ComponentName.js` and `ComponentName.css` together.
- Assets: images are referenced directly in JSX in places (example in `src/App.js`):

```jsx
<img src='./images/2-2-om-png-image.png' alt="Ankit Transport Logo" className="logo" />
```

  - Check whether the image lives under `src/images` or `public/`. If an import is already used elsewhere, prefer `import logo from './images/...';` so bundler tracks the asset.
- Routing: the project depends on `react-router-dom` v6 (see `package.json`). Be cautious: some code uses the older `NavLink` prop `activeClassName` (example in `src/App.js`). Do not automatically refactor to v6 `className` callback unless tests/preview confirm behaviour.

Build / test / debug
- Start dev server: `npm start` — open http://localhost:3000
- Build production bundle: `npm run build`
- Run tests: `npm test` (CRA test runner)
- Debugging: run the dev server and use browser console for runtime errors. Unit tests are limited to CRA test scaffolding (`src/App.test.js`).

Dependencies & integration points
- Notable deps from `package.json`: `react`, `react-dom`, `react-router-dom@^6`, `react-icons`, `react-scripts`, MUI (`@mui/*`) and FontAwesome packages. Components currently use `react-icons` in `src/App.js`.
- No backend or API calls are present in the repository — treat this as static SPA content unless new integration code is added.

When editing code
- Keep changes minimal and focused. Respect the component-per-file + CSS-per-component pattern.
- If adding a new route, update `src/App.js` imports and `<Routes>` with a new `<Route path=... element={...} />`.
- When changing asset references, prefer explicit imports (`import logo from './images/logo.png'`) to string paths when the file is inside `src/`.
- Avoid automatic dependency upgrades (e.g., migrating router major versions) without explicit instructions and verification.

Examples (common tasks)
- Add page component:
  - Create `src/components/MyPage.js` and `src/components/MyPage.css` (follow existing components).
  - Import and add route in `src/App.js`:

```jsx
import MyPage from './components/MyPage';
...
<Route path="/mypage" element={<MyPage />} />
```

- Fix navigation active style (if requested): inspect `src/App.js` where `NavLink` is used:

```jsx
<NavLink to="/" activeClassName="active">Home</NavLink>
```

  - Note: `activeClassName` is from older router versions. If converting, use v6 pattern and test in browser.

What not to do without confirmation
- Do not switch routing or build tooling (CRA -> Vite, router v5->v6 upgrades) without an explicit task and tests.
- Do not remove unused dependencies globally; some packages (MUI, FontAwesome) may be added for future components.

If you need more context
- Open `src/App.js` and any component in `src/components/` to see current patterns.
- Run `npm start` locally to verify UI changes quickly.

Feedback
- If any section is unclear or you want stricter rules (commit messages, linting, PR size), tell me and I'll update this file.
