# Repository Guidelines

## Project Structure & Module Organization

This is the Evergrove landscaping website exported from Replit/Lovable and prepared as a standalone Vercel repo. It uses TanStack Start, Vite, React, Tailwind CSS v4, Framer Motion, and Nitro.

- `src/routes/`: TanStack route files. The homepage is `src/routes/index.tsx`; root document/head setup is `src/routes/__root.tsx`.
- `src/components/`: page sections and reusable UI components.
- `src/components/ui/`: shadcn/Radix-style primitives.
- `src/assets/`: bundled local images used by the page.
- `src/styles.css`: Tailwind theme, tokens, base styles, utilities, and animations.

## Build, Test, and Development Commands

Use npm for this repo. Bun files were removed so Vercel does not auto-detect the wrong package manager.

```powershell
npm install        # install dependencies; .npmrc enables legacy peer resolution
npm run dev        # local dev server at http://127.0.0.1:5173
npm run build      # Vercel/Nitro production build
npm run preview    # preview build at http://127.0.0.1:4173
npm run lint       # ESLint
```

Do not use `localhost:3000` for this project; that port may belong to another Next.js landscaping app in the workspace.

## Vercel Deployment Notes

`vite.config.ts` explicitly enables Nitro with `preset: "vercel"`. A successful production build should generate `.vercel/output`. Keep `.vercel/`, `node_modules/`, `.nitro/`, `.tanstack/`, and `.workspace/` uncommitted.

`vercel.json` uses `npm install` and `npm run build`. The `.npmrc` file sets `legacy-peer-deps=true` because this generated UI dependency tree can fail npm peer resolution otherwise.

## Styling & CSS Rules

Keep Tailwind imports at the top of `src/styles.css`:

```css
@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";
```

Do not put remote Google Fonts `@import` rules in `src/styles.css`; Lightning CSS rejects them after Tailwind expands generated rules. Add external fonts through `links` in `src/routes/__root.tsx` instead.

Use existing theme tokens such as `bone`, `charcoal`, `moss`, `forest`, `stone`, and `gold`. Components use Tailwind utility classes and Framer Motion animations.

## Testing Guidelines

There is no formal test suite. Validate changes with `npm run build`, then run `npm run dev` and check `http://127.0.0.1:5173/`. If the page renders like unstyled HTML, inspect the Vite terminal for CSS errors and verify `/src/styles.css` returns `200`.

## Commit & Pull Request Guidelines

Use concise imperative commits, for example `Prepare Evergrove for Vercel` or `Fix dev stylesheet loading`. PRs should list affected sections, include validation commands, and attach screenshots for visual changes.
