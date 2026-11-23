# Handoff: after launch (2026-11-23)

Start the next session here. Each row is one PR or one action.

## Where it stands

| Area | State |
| --- | --- |
| Repo | Public. `v0.1.0` released with `craft.zip` |
| Plugin | In `plugins/anything-crafter/` (#27). Icon (#26) and privacy policy (#28) set |
| Anthropic plugin directory | Submitted. Scan passed on `a1e85c2`. Publish requested: it goes live when an Anthropic reviewer approves |
| Evals | Rerun 3: 6 of 6. Rerun 4, after the folder move: 5 of 6, skill fired 18 of 18 (#29) |
| Security | Secret scanning, push protection, private reporting, CodeQL, fork PR approval on |

## Next steps

| # | Task | Why | Done when |
| --- | --- | --- | --- |
| 1 | Merge #29 if not merged yet | Records Rerun 4 | `evals/REPORT.md` on `main` has Rerun 4 |
| 2 | Answer the directory reviewer | Review questions go to the account's contact email | Listing is live in Claude Code, Cowork and the Claude apps |
| 3 | Once live: install from the directory, then add that route to the README install table | Prove the new route works | One install from the listing works |
| 4 | Give `routes-app-to-rea` a fixture app path | The sandbox refused a read of a real app path in Rerun 2 and Rerun 4 | Case passes 3 of 3 in one cloud rerun |
| 5 | Small models skip the Blueprint Decisions table | Nemotron Lightning missed it (model report card) | Lightning shows the table in one OpenCode run |
| 6 | One OpenCode run after the folder move | Installs were checked, a model run was not | Report card row updated |
| 7 | Release `v0.1.1` | `main` has the icon, folder move and privacy policy since `v0.1.0` | Release out with `craft.zip` |

## Later (not v1, from the launch plan)

| Item | Note |
| --- | --- |
| 3 to 5 more showcases | Contributors can add them under `examples/**` |
| More models on the report card | Open-weight first |
| Translations | By contributors |
| One-command bundle for deepseek-harness | Once that install route is confirmed |
| Post the first craft where `rea` invites showcases | Needs the founder's yes: it is public posting |

## Rules that still hold

| Rule | Detail |
| --- | --- |
| Evals | Only in a cloud session, never on a laptop. About 2.8 US dollars and 13 minutes a run |
| Plugin folder | Markdown, JSON, YAML and images only. Scripts and agent files stay at the root. The structure test enforces it |
| Skill text | `plugins/**` needs a maintainer review. Only `examples/**` can merge without one |
| New versions | The directory checks `main` about every 6 hours. Auto-publish is on after the first approval |
