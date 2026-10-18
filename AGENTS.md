# AGENTS.md

## Verify before finishing

```bash
npm run lint        # eslint flat config; script takes no file args
npx tsc --noEmit    # there is no `typecheck` script
npm run build       # required; catches Next.js/cacheComponents errors that tsc misses
```

There are no tests or CI workflows.

## Architecture

- Single Next.js 16 App Router app (not a monorepo). One-page site: `src/app/page.tsx` just composes section components from `src/components/`.
- **All content lives in `src/data/portfolio.ts`** (personal info, projects, skills, education, contact). Edit data there, not in components, for any content change. Project detail pages at `src/app/projects/[slug]/page.tsx` are statically generated from `generateStaticParams()` over that data.
- Path alias: `@/*` → `src/*` (tsconfig `paths`).
- Contact form is `mailto:`-only; there is no backend or API routes.

## Next.js 16 config quirks (see `next.config.mjs`)

- `cacheComponents: true`: route `params` is a `Promise` and must be `await`ed; async components touching dynamic data need a `Suspense` boundary. Follow the pattern in `src/app/projects/[slug]/page.tsx` (sync page wrapper + Suspense + inner async component).
- React Compiler is enabled (`reactCompiler: true` + `babel-plugin-react-compiler`): components must strictly follow the Rules of React (no prop/state mutation, no side effects in render) or builds fail in non-obvious ways.
- Tailwind CSS v4 runs through a Turbopack loader rule (`@tailwindcss/turbopack`). There is **no** `tailwind.config` or `postcss.config` — theme tokens (custom `navy-*`, `blue-*`, `text-*` colors) are defined in the `@theme` block of `src/app/globals.css`. Do not add v3-style config files.
- This Next.js version differs from your training data — read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code.

## Managed AGENTS.md block

The `<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->` block below is written and re-added by `next dev` (enabled via `experimental.agentFeedback`). Keep the markers intact, keep custom content outside the block, and commit the file to avoid churn. A second managed block (`nextjs-agent-feedback`) may also appear; leave it as-is.

## Content status

Placeholder content is intentional: profile/project images, contact details, and some project descriptions are drafts (`detailsAreDraft` flag in portfolio data). See "Personalize before publishing" in `README.md` before treating them as real.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->
