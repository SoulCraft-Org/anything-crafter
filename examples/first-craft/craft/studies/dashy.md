# Study: dashy
Link or file: https://github.com/lissy93/dashy
Type: code
Studied with: `gh api` (read-only file reads, nothing cloned, installed or run)
Date: 2026-11-22

## What it is
A self-hosted dashboard for a home lab, built as a Vue app with an Express server. Everything on the page is described in one YAML config file.

## Licence and reuse
Licence: MIT (`LICENSE`, "MIT License", 2019-2026; `package.json` field `license` is also MIT).
May reuse: ideas and patterns, always.
Never reuse: its text, art, code, name, brand, unless the credit rules in `NOTICE` are followed. This build takes ideas only.

## Parts
| Part | What it does | How it works | Evidence | Label |
| --- | --- | --- | --- | --- |
| Entry point | Serves the built app | `npm start` runs `node server`; `vite build` makes the app | `package.json` scripts | Seen |
| One config file | All links and settings sit in one YAML file | Keys `pageInfo`, `appConfig` and `sections` | `user-data/conf.yml` lines 4-18 | Seen |
| Sections of items | Links are grouped; each item has a title, url and icon | `sections[].items[]` | `user-data/conf.yml` lines 19-30 | Seen |
| Link tiles | Section and item pieces draw the grid | `Section.vue` and `Item.vue` exist | tree listing of `src/components/LinkItems/` | Seen |
| Tile behaviour | How a click opens a link | Not read | not opened | Unknown |
| Search | One box filters tiles and searches the web on Enter | A form submit handler and a window `keydown` listener | `Settings/SearchBar.vue` lines 2, 71-77, 91 | Seen |
| Type to search | Pressing any letter focuses the box | A regex on the key at line 91 | `SearchBar.vue` line 91 | Seen |
| Search shortcuts | Esc clears the box; arrow keys move between tiles | Key code branches | `SearchBar.vue` lines 101-106 | Seen |
| Engine by prefix | A leading bang picks the engine | Imports `getSearchEngineFromBang` and `defaultSearchEngine` | `SearchBar.vue` lines 31-39 | Seen |
| Clock widget | Shows time and date, updated each second | `setInterval(this.update, 1000)`; uses `Intl.DateTimeFormat` and the browser zone | `Widgets/Clock.vue` lines 54-61 and 78 | Seen |
| Colour variables | The palette is CSS variables on `:root` | `--primary`, `--background`, `--foreground` and more | `src/styles/color-palette.scss` lines 3-8 | Seen |
| Themes | Each theme is a block that overrides the variables | `html[data-theme='<name>'] { ... }`, one partial per family | `src/styles/color-themes.scss` header comment | Seen |
| Privacy default | Error reporting stays off unless the user turns it on | Sentry loads only if `enableErrorReporting` is true | `src/utils/logging/ErrorReporting.js` lines 1-16 | Seen |
| No-referrer | The page hides where you came from | `<meta name="referrer" content="no-referrer">` | `index.html` line 8 | Seen |
| Loading and failure text | Placeholder while loading, message if it never mounts | Hidden error block shown after 5 seconds | `index.html` loading block and comment | Seen |
| Self-test | Unit tests and CI on every pull request | `vitest run`; folders `tests/unit`, `tests/server`; workflow `ci.yml` | `package.json` scripts; tree of `tests/`; `ci.yml` header | Seen |
| Weight | A big project for a start page | Vite, Vue, Express, CodeMirror, Sentry and more | `package.json` dependencies; API lists size 948634 KB | Seen |

## Unknowns
- How a tile click opens a link (same tab or new). Read `LinkItems/Item.vue`.
- Where the chosen theme is saved. Read `ThemeSelector.vue` and `store.js`.
- Which web search engines ship by default. Read `defaultSearchEngine` and `searchEngineUrls` in `utils/config/defaults.js`.
