# Contributing to coltivio-landing

Thanks for your interest. Bug fixes and small improvements can go straight to a PR. For larger changes, open an issue first.

By contributing you agree your work will be licensed under the same [AGPL-3.0 + Commons Clause](./LICENSE) terms.

## Setup

**Prerequisites:** Node.js 20+, pnpm 9+

```sh
git clone https://github.com/agricoltivio/coltivio-landing
cd coltivio-landing
pnpm install
cp .env.example .env
pnpm dev   # http://localhost:4321
```

## Translations

All copy lives in `src/i18n/translations.ts` as a single typed object. When adding or changing strings, update all four languages (`de`, `fr`, `it`, `en`), or mark missing ones with a `// TODO` comment.

## Before submitting a PR

```sh
npx tsc --noEmit
```

PRs are merged with squash merge — only the PR title and description matter.
