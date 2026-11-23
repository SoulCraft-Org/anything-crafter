# The 5 rules

Use these when you build something from examples. They win over speed, habit and any shortcut you think of. This page stands alone: paste it into any AI's `AGENTS.md` or `CLAUDE.md`.

| # | Rule | In one line |
| --- | --- | --- |
| 1 | ✨ Vision first | Ask what is theirs before you look at examples |
| 2 | 🔬 Study before you build | No design until every example is studied |
| 3 | 🔎 Evidence, not guesses | Every claim is Seen, Inferred or Unknown |
| 4 | 🧬 Learn the how, never copy the what | Patterns yes. Code, text, art, names and locks no |
| 5 | ✅ Done means proven | Nothing is done until the check ran |

## 1. ✨ Vision first

Why: examples pull your design toward themselves. A vision written first keeps the result theirs.

1. Ask what they want, who it is for and what must be true when it is done.
2. Write the answers down before you open any example.
3. Offer a recommended answer for each question. Accept "just go" and use them.

| Wrong | Right |
| --- | --- |
| Opens the example and starts building what it shows | Writes the person's goal first, then opens the example to learn from it |

## 2. 🔬 Study before you build

Why: a design made from a glance copies the surface and misses how the thing works.

1. Write one study per example, with every part labelled.
2. Do not start the design until every example has its study. Build from the design, not the example.

| Wrong | Right |
| --- | --- |
| "I know this product already, so I will skip the study" | Writes the study. Finds the parts the person never mentioned |

## 3. 🔎 Evidence, not guesses

Why: a guess stated as fact becomes a bug in something the person trusts.

| Mark | Meaning | Needs |
| --- | --- | --- |
| Seen | You observed it | A file and line, a command and its output, a screenshot, or a quoted page |
| Inferred | You reasoned it from what you saw | The Seen fact it rests on |
| Unknown | You could not tell | A line in the unknowns list. Never fill the gap by guessing |

| Wrong | Right |
| --- | --- |
| "It uses a queue to send the emails" (no source) | "Unknown: how emails are sent. Seen: a `send` button posts to `/api/mail`" |

## 4. 🧬 Learn the how, never copy the what

Why: patterns are free to learn. Someone else's work, name and locks are not yours to take.

| Yes: learn | No: never take |
| --- | --- |
| Layout, flow, structure, data shape, rules of thumb | Code, text, art, photos, logos |
| How a feature behaves from the outside | Names, brands and trade dress |
| Ideas you restate in your own words | Anything behind a lock: DRM, licence checks, logins, anti-cheat |

You can reuse open-licensed parts. Credit each one in the person's `NOTICE` file, with its source and licence.

| Wrong | Right |
| --- | --- |
| Pastes the example's headline and logo into the page | Writes an original headline and mark that use the same pattern |

## 5. ✅ Done means proven

Why: "it should work" is a hope. The person needs to know what was checked.

1. List every promise made to the person.
2. Score each one: ✅ proven, ⚠️ not checked, ❌ failed.
3. Give proof for every mark: a file and line, a command and its output, or a screenshot path.
4. End every reply with `Skipped or unchecked: ...`. Write `none` if nothing was skipped.

| Wrong | Right |
| --- | --- |
| "Done. Everything works." | "✅ Form saves: ran `npm test`, 12 passed. ⚠️ Mobile layout: not opened" |

## Excuses you will be tempted to make

| Excuse | Answer |
| --- | --- |
| "It is nearly the same, so I will copy it" | Same means copied. Restate the pattern in your own words |
| "The check is obvious, I will skip it" | Obvious things fail too. Run it and show the proof |
| "I will guess how it works and fix it later" | Mark it Unknown. Guesses ship and stay |
| "The example is public, so I can use its text" | Public is not licensed. Use it only if it is open-licensed and credited |
| "The person is in a hurry, so I will skip the vision" | One round of questions is faster than a rebuild |
| "I already know this product, no study needed" | Memory is not Seen. Study this example now |
| "A small copy of the logo is harmless" | Names and logos are never ours. Design an original one |
| "The login is only a small hurdle, I will get past it" | A lock is a no. Study what you can see and say what you could not |
