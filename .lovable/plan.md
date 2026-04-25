## Problem

The published site at `mrlubricants.lovable.app` returns **HTTP 502 Internal Server Error**, while the dev preview works fine.

## Root cause

Two related issues:

1. **Stale TypeScript build cache**: `tsconfig.tsbuildinfo` still contains references to `src/components/ui/chart.tsx` (deleted earlier) and the old `src/main.tsx`. This is why the build-error report keeps surfacing the same `chart.tsx` errors even though the file no longer exists on disk and nothing imports it.

2. **Stale broken deployment**: The currently published worker is from one of the earlier broken states (during the Netlify/Vercel/Cloudflare deployment experiments). The current source code is healthy — `src/routes/index.tsx`, `__root.tsx`, `router.tsx`, all components, Tailwind, and TanStack Start config are all intact and the dev server runs cleanly. We just need a fresh successful build to be published.

## Fix

1. Delete the stale `tsconfig.tsbuildinfo` so TypeScript rebuilds its incremental cache from the current (correct) file set — this clears the phantom `chart.tsx` errors.
2. Run a full production build (`vite build`) to verify both the client bundle and the SSR/Worker bundle compile cleanly with no errors.
3. Once the build succeeds, the next publish will replace the broken 502 worker with a working one.

## What we will NOT change

- No framework swap (TanStack Start + SSR stays).
- No changes to `vite.config.ts`, `package.json` dependencies, or `src/router.tsx`.
- No changes to routes, components, styles, or Tailwind setup.
- No re-introduction of `chart.tsx`, `index.html`, `src/main.tsx`, or any deployment configs (wrangler/netlify/vercel).

## Verification

After the build passes locally, I will ask you to click **Publish** to roll out the fixed worker, then re-test `mrlubricants.lovable.app` to confirm it returns a 200 with the rendered homepage instead of 502.