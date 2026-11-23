# Brief
Date: 2026-11-22
Answers: just go (the 5 recommended answers, picked by the maintainer for this showcase)

## Vision
V1. A one-file personal start page for a browser: a search box, a grid of favourite links, a clock, light and dark.
V2. Anyone who wants a calm, private home page and can edit one list of links in a text editor.
V3. Day one: search the web from the box, open a favourite link from the grid, read the time, switch light and dark.
V4. Mine: the whole thing is one file with no build step and no tracking. Open it and it works.
V5. It must never copy an example's words, art or code, and never call out to any outside address on its own.

## Examples
E1. https://github.com/pawelmalak/flame (code, MIT, 6683 stars)
E2. https://github.com/lissy93/dashy (code, MIT, 27055 stars)

## Why the examples matter
| # | Example | Type | Why it matters |
| --- | --- | --- | --- |
| E1 | pawelmalak/flame | code | A small, popular self-hosted start page. Shows the minimum a start page needs |
| E2 | lissy93/dashy | code | A large, popular dashboard. Shows search, themes, link groups and how config is kept |

## Promises
P1. Typing a query in the search box and pressing Enter opens a web search for it. (V3)
P2. The grid shows every link from one editable list, and each tile opens its own address. (V3)
P3. A clock shows the current time and keeps moving without a reload. (V3)
P4. Light and dark both work: the page follows the system and a button switches and remembers. (V3)
P5. It is one `.html` file of 120 lines or fewer and needs no build step. (V4)
P6. On load it makes no outside request and has no tracking code. (V4, V5)
P7. No line, name or text is copied from either example. (V5)
