# Blend
Studies read: studies/flame.md (E1), studies/dashy.md (E2)

## What I learned
- Both keep links as named groups, and each group is a list of tiles with a title and an address (E1 `BookmarkGrid.tsx`, E2 `conf.yml`).
- Both build a search address by joining an engine template to the encoded query, then send the browser there (E1 `SearchBar.tsx`, E2 `SearchBar.vue`).
- Both redraw the clock once a second with a timer, and E2 asks the browser for the locale and zone (E1 `Header.tsx`, E2 `Clock.vue`).
- Both paint the page with a few CSS variables on the root, and E2 swaps whole palettes by a `data-theme` name (E1 `index.css`, E2 `color-themes.scss`).
- Neither is one file: E1 needs a server, a database and a build, and E2 needs a build and a server (both `package.json`).
- E2 keeps outside calls off until the user opts in, which is a good default for V5 (E2 `ErrorReporting.js`).

## Parts
| # | Part | From | What it does | Label | Pick |
| --- | --- | --- | --- | --- | --- |
| 1 | Grouped link grid | E1, E2 | Shows links as tiles in a grid (V3) | Seen | yes |
| 2 | Links as one editable list | E2 | One plain config holds every link, so editing is one place (V3, V4) | Seen | yes |
| 3 | Search by address join | E1, E2 | Enter joins an engine address and the encoded query, then navigates (V3) | Seen | yes |
| 4 | Search keyboard shortcuts | E1, E2 | A key focuses the box and Esc clears it (V3) | Seen | yes |
| 5 | Filter tiles while typing | E1, E2 | Narrows the grid as you type | Seen | |
| 6 | Engine chosen by prefix | E1, E2 | A leading mark picks another engine | Seen | |
| 7 | Ticking clock | E1, E2 | A one-second timer redraws the time (V3) | Seen | yes |
| 8 | Clock in the browser's locale and zone | E2 | Asks the browser for format and zone instead of a setting (V3) | Seen | yes |
| 9 | Colours as root variables | E1, E2 | A few CSS variables paint the whole page (V3) | Seen | yes |
| 10 | Theme as a named override | E2 | A `data-theme` name on the root swaps the variables (V3) | Seen | yes |
| 11 | Outside calls off by default | E2 | Nothing leaves the page unless the user opts in (V5) | Seen | yes |
| 12 | No-referrer meta | E2 | Hides the page address from sites you click through to (V5) | Seen | yes |
| 13 | Loading and failure message | E2 | Shows text while loading and if the app never mounts | Seen | |
| 14 | Password-locked settings | E1 | Protects the editors with a login | Seen | |
| 15 | Weather widget | E1 | Shows the weather in the header | Inferred | |
| 16 | Server and database | E1 | Stores links on a server | Seen | |
| 17 | Build step | E1, E2 | Compiles the app before it can be used | Seen | |
| 18 | Tests and CI | E1, E2 | E2 runs unit tests on every pull request; E1 has a client test script only | Seen | |
| 19 | How a tile click opens | E2 | Same tab or new tab | Unknown | |
| 20 | Where the theme choice is saved | E1, E2 | Remembering the choice | Unknown | |

## Overlaps and gaps
- Both do: grouped link grid, search by address join, a one-second clock, colour variables.
- Only one has: themes by `data-theme` name, browser locale clock, opt-in outside calls (all E2), password lock and weather (E1).
- Neither has, but the brief wants: one file with no build and no server (V4, P5).
- Neither has, but the brief wants: light and dark that follows the system (V3, P4).
- Neither has, but the brief wants: no outside request on load (V5, P6).

## Stop 1
Asked: "Which parts do you want? Give me numbers, or say all of the Seen ones."
Answer: picked by the maintainer for this showcase.
The maintainer said to continue without waiting. The worker chose the parts that serve V1 to V5: 1, 2, 3, 4, 7, 8, 9, 10, 11, 12.
Not picked, and why:
- 5 and 6 are extras that V3 does not ask for.
- 13 to 17 are costs that break V4 or V5.
- 18 is a way of working, not a piece.
- 19 and 20 are Unknown.
