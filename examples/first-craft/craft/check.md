# Check
Result checked: `examples/first-craft/build/index.html`, read in full. Its script was then run against a small hand-made page stub in Node. It was never opened in a browser.
Reviewer: not fresh for P2, P3, P5 to P7 (the same session built them). P1 and P4 were checked by the orchestrator in a browser, served from `http://localhost:3101`.

| Promise | Brief line | Mark | Proof |
| --- | --- | --- | --- |
| P1 Typing a query and pressing Enter opens a web search for it | V3 | ✅ | Browser: typed `anything crafter`, pressed Enter. The tab opened DuckDuckGo's results titled "anything crafter at DuckDuckGo" |
| P2 The grid shows every link from one editable list, and each tile opens its own address | V3 | ✅ | Stub run: 6 tiles for the 6 entries of `LINKS` (lines 50-57). Each has a name and an `https://` address. Layout not seen |
| P3 A clock shows the current time and keeps moving without a reload | V3 | ✅ | Stub run: clock text written on load, one timer set at 1000 ms, and a tick rewrites the text |
| P4 Light and dark both work: follows the system, a button switches and remembers | V3 | ✅ | Browser: with the system set to dark and nothing saved, the page opened dark. With the system light, the button switched it to dark. The stub run proves the choice is saved |
| P5 One `.html` file of 120 lines or fewer, no build step | V4 | ✅ | `wc -l` printed 103. `ls build/` printed only `index.html`. No config, package or script files in the folder |
| P6 On load no outside request and no tracking code | V4, V5 | ✅ | `grep -n http` found 7 lines: the form address (line 44) and the 6 `LINKS` entries. They are used only on submit or click. A second `grep` for `src=`, `<link`, `@import`, `url(`, `fetch(`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`, `document.cookie`, `analytics`, `<img`, `<iframe` and `@font-face` found only `<link rel="icon" href="data:,">` (line 7). It loads nothing |
| P7 No line, name or text is copied from either example | V5 | ✅ | A script compared the file with 10 files read from the examples. It found 3 identical lines (`<html lang="en">`, `<meta charset="utf-8">`, the no-referrer meta tag) and 0 shared runs of 6 words. The 3 lines are standard HTML with one spelling |

Totals: ✅ 7 · ⚠️ 0 · ❌ 0 of 7

What this does not prove: that it opens in every browser, that `light-dark()` works in older browsers, or that a person finds it useful.
Fix next: none.
