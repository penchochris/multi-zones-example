# Multi-Zones Example (Next.js 16)

```
apps/appA            → main zone, port 3000 (/, /about) — proxies /appB/* to appB
apps/appB            → "/appB" zone, port 3001, basePath "/appB" — "Hello world"
packages/shared-ui   → Nav + Footer used by both zones
```

## Run

```bash
npm install
npm run dev        # or: npm run build && npm start
```

Open http://localhost:3000 and click **App B** (or go to http://localhost:3000/appB).
The nav and footer are the same as on appA's pages, the "Hello world" in the middle
comes from appB, and the nav shows "served by appB".

## How it works

- **appB** sets `basePath: "/appB"`, so all of its pages and `/_next` assets live under `/appB`.
- **appA** rewrites `/appB` and `/appB/:path+` to appB (`APP_B_URL`, defaults to `http://localhost:3001`).
- In Next.js multi-zones each zone renders the whole HTML page. To get the same nav and footer
  on both, they live in `packages/shared-ui` and both root layouts render them.
- Links that go from one zone to another are plain `<a>` tags, not `next/link`, so the browser
  does a full page load.
