# Study: flame
Link or file: https://github.com/pawelmalak/flame
Type: code
Studied with: `gh api` (read-only file reads, nothing cloned, installed or run)
Date: 2026-11-22

## What it is
A self-hosted start page for a home server. A small web server keeps your apps and bookmarks in a database and a browser app shows them.

## Licence and reuse
Licence: MIT (`LICENSE.md`, "MIT License", 2021). Note: `package.json` says "ISC", so the two files disagree.
May reuse: ideas and patterns, always.
Never reuse: its text, art, code, name, brand. Because of the ISC/MIT mismatch this build takes ideas only.

## Parts
| Part | What it does | How it works | Evidence | Label |
| --- | --- | --- | --- | --- |
| Server | Serves the page and an API | Node server starts on `PORT`, default 5005 | `server.js` lines 20 and 36 | Seen |
| Build step | Needs a build before use | Client uses `react-scripts build`; Docker is the advised install | `client/package.json` scripts; README "With Docker (recommended)" | Seen |
| Data store | Keeps apps and bookmarks | Sequelize with sqlite3 | root `package.json` dependencies | Seen |
| Where data lives | Apps and bookmarks sit in a database | Built-in editor forms and tables | README, "no file editing necessary"; `Apps/AppForm`, `Bookmarks/Form` | Seen |
| Link grid | Shows bookmarks as category cards, each a list of links | Maps categories to cards; shows a message when empty | `BookmarkGrid.tsx` lines 27-61 | Seen |
| Clock | Shows date and time in the header | `setInterval` of 1000 ms re-reads the time; time is opt-in | `Header.tsx` lines 26-35; `getDateTime.ts` line 32 | Seen |
| Search | One box does local filtering and web search | On Enter it builds `template + encoded query` and redirects | `SearchBar.tsx` lines 81-115 | Seen |
| Search shortcuts | Esc clears the box; the backtick key focuses it | Window `keyup` listener | `SearchBar.tsx` lines 41-59 | Seen |
| Search providers | 11 built-in providers, user can add more | A prefix picks the provider | README "11 web search providers"; `SearchBar.tsx` line 82 | Seen |
| Theme colours | Page colours are three CSS variables on the root | `--color-background`, `--color-primary`, `--color-accent` | `client/src/index.css` lines 44-46 | Seen |
| Theme choice | 15 built-in themes plus a theme builder | Choice is stored by the app | README "15 built-in color themes" | Seen |
| Settings lock | A password protects settings, apps and bookmarks | JWT auth on the server | README "Authentication system"; `jsonwebtoken` in `package.json` | Seen |
| Weather widget | Shows weather in the header | Server calls a weather service and pushes over a WebSocket | `WeatherWidget.tsx` exists; `ws` and `axios` in `package.json`; `server.js` line 33 | Inferred |
| Self-test | Tests and CI | A client `test` script; no workflow files | `client/package.json`; `.github` holds only an issue template and images | Seen |
| Page weight | A large dependency tree for a start page | 14 server and 30 client dependencies | both `package.json` files | Seen |

## Unknowns
- Which weather service it calls, and whether the call is made from the server or the browser. Read `server/utils` and `Socket.js` to find out.
- Whether any tests exist beyond the `react-scripts test` script. Read the `client/src` test files, if any.
- How the chosen theme is saved. Read `store/action-creators/theme.ts`.
