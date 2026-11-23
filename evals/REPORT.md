# Eval report

Source: one `claude plugin eval` run on 2026-11-23, for [issue 6](https://github.com/SoulCraft-Org/anything-crafter/issues/6). Every number below comes from that run's `--json` output. The latest run is in [Rerun 4](#rerun-4).

| Item | Detail |
| --- | --- |
| Command | `claude plugin eval . --trust-plugin --threshold 0.8 --runs 3 --json evals/results.json --no-publish --scaffold` |
| Skill measured | Commit `02816b1`. `main` moved on while this run was going |
| CLI | Claude Code 2.1.330 |
| Runs | 3 per case with the plugin (WITH) and 3 without it (W/OUT) |
| Result | 2 of 6 cases at or above 0.8. Exit code 1 |
| Run errors | None. All 36 runs finished |
| Time and cost | 767 seconds and 2.27 US dollars, as the run reported them |

## Scores

| Case | WITH | W/OUT | Δ | At 0.8 |
| --- | --- | --- | --- | --- |
| `blend-two` | 0.33 | 0.00 | +0.33 | fail |
| `declines-brand-copy` | 0.33 | 0.67 | -0.33 | fail |
| `resume-from-files` | 1.00 | 0.00 | +1.00 | pass |
| `routes-app-to-rea` | 1.00 | 0.00 | +1.00 | pass |
| `scoreboard-made` | 0.00 | 0.00 | 0.00 | fail |
| `study-a-page` | 0.00 | 0.00 | 0.00 | fail |

The run reports an overall WITH score of 0.44 and a mean Δ of +0.33.

## Failures

One line per case below 0.8. The judge returns votes with no reasons, so each cause is read from the replies.

- `blend-two`: all 3 replies built one menu and stopped to ask, but none showed a pick column or could write `craft/blend.md`, and the judge passed 1 of 3.
- `declines-brand-copy`: in 2 of 3 runs the skill opened the vision interview without a plain no to copying the logo, name and text.
- `scoreboard-made`: the `checker` agent scored the promises with the skill never loaded, and no reply ended with the `Skipped or unchecked` line the grader requires.
- `study-a-page`: `WebFetch` and `Write` were not granted, so no reply could fetch the page or write the study card.

## First run and fixtures

The first run used the same command without `--scaffold`. It passed 1 of 6 cases.

| Case | First run WITH | Rerun WITH | Skill fired in rerun | Fixture added |
| --- | --- | --- | --- | --- |
| `blend-two` | 0.00 | 0.33 | 3 of 3 | yes |
| `declines-brand-copy` | 1.00 | 0.33 | 2 of 3 | no |
| `resume-from-files` | 0.00 | 1.00 | 3 of 3 | yes |
| `routes-app-to-rea` | 0.33 | 1.00 | 3 of 3 | no |
| `scoreboard-made` | 0.00 | 0.00 | 0 of 3 | yes |
| `study-a-page` | 0.00 | 0.00 | 3 of 3 | no |

| Note | Detail |
| --- | --- |
| Why fixtures | In the first run, 3 cases failed only because the `craft/` files their prompts describe did not exist. Every run starts in an empty folder |
| How fixtures load | Each of the 3 cases has a `case.yaml` with a `scaffold_script`. It copies `fixtures/` into the run folder, and it runs only with `--scaffold` |
| Tools not granted | The command passes no `--allow-tools`, so `Write`, `WebFetch` and `Bash` are removed from every run |
| Noise | `declines-brand-copy` and `routes-app-to-rea` did not change between the two runs. Each still moved by 0.67. Three runs per case is a small sample |
| Reruns | One, as planned. No case was tuned after it |

## Rerun 2

Source: one more `claude plugin eval` run on 2026-11-23, on the latest `main`. Every number in this section comes from that run's `--json` output.

| Item | Detail |
| --- | --- |
| Command | `claude plugin eval . --trust-plugin --scaffold --allow-tools Write Edit WebFetch --threshold 0.8 --runs 3 --json evals/results.json --no-publish` |
| Skill measured | `main` at commit `7b52bff` |
| Runs | 3 per case with the plugin (WITH) and 3 without it (W/OUT) |
| Result | 1 of 6 cases at or above 0.8. Exit code 1 |
| Run errors | None. All 36 runs finished |
| Time and cost | 782 seconds and 2.26 US dollars, as the run reported them |

| Case | WITH | W/OUT | Δ | At 0.8 |
| --- | --- | --- | --- | --- |
| `blend-two` | 0.33 | 0.00 | +0.33 | fail |
| `declines-brand-copy` | 0.67 | 0.67 | 0.00 | fail |
| `resume-from-files` | 1.00 | 0.00 | +1.00 | pass |
| `routes-app-to-rea` | 0.67 | 0.00 | +0.67 | fail |
| `scoreboard-made` | 0.00 | 0.00 | 0.00 | fail |
| `study-a-page` | 0.00 | 0.00 | 0.00 | fail |

The run reports an overall WITH score of 0.44 and a mean Δ of +0.33.

One line per case below 0.8. The judge returns votes with no reasons, so each cause is read from the replies.

- `blend-two`: all 3 replies report `craft/blend.md` written and stop to ask. They are alike and none shows a pick column, yet the judge passed 1 and failed 2, on a 5 to 4 vote split. No cause is recorded.
- `declines-brand-copy`: 1 run of 3 failed on a 2 to 1 vote. Its reply opened with the vision interview and gave its no last. The 2 passing replies said no first.
- `routes-app-to-rea`: 1 run of 3 stopped at the unreadable app path and never reached the question about `rea`.
- `scoreboard-made`: the skill loaded in 0 of 3 runs, and each reply summed up the `checker` agent without the `Skipped or unchecked` last line.
- `study-a-page`: every reply reports the page fetched and the Study and Blend stages done. The judge reads only that last reply. It shows the blend menu and a short summary of the study, but not the study card's evidence or licence lines.

| Note | Detail |
| --- | --- |
| Not like for like | The tables above this section measured commit `02816b1` with no tools granted. Rerun 2 measures commit `7b52bff` with `Write`, `Edit` and `WebFetch` granted |
| What a pass takes | 3 of 3 runs. Two cases scored 0.67, which is 1 failed run each |
| Skill fired | 3 of 3 runs in 4 cases, 2 of 3 in `declines-brand-copy`, 0 of 3 in `scoreboard-made` |
| Reruns | One, as asked. No case or skill text was changed for it |

## Rerun 3

Source: one `claude plugin eval` run on 2026-11-23, on the fixes that came with this section. Every number in the first two tables comes from that run's `--json` output.

| Item | Detail |
| --- | --- |
| Command | `claude plugin eval . --trust-plugin --scaffold --allow-tools Write Edit WebFetch --judge-model sonnet --threshold 0.8 --runs 3 --json evals/results.json --no-publish` |
| Skill measured | The fix branch at commit `c93074c`, on top of `main` at `a2de738` |
| Runs | 3 per case with the plugin (WITH) and 3 without it (W/OUT) |
| Result | 6 of 6 cases at or above 0.8. Exit code 0 |
| Run errors | None. All 36 runs finished |
| Time and cost | 798 seconds and 2.81 US dollars, as the run reported them |

| Case | WITH | W/OUT | Δ | At 0.8 |
| --- | --- | --- | --- | --- |
| `blend-two` | 1.00 | 0.00 | +1.00 | pass |
| `declines-brand-copy` | 1.00 | 0.00 | +1.00 | pass |
| `resume-from-files` | 1.00 | 0.00 | +1.00 | pass |
| `routes-app-to-rea` | 1.00 | 0.00 | +1.00 | pass |
| `scoreboard-made` | 1.00 | 0.00 | +1.00 | pass |
| `study-a-page` | 0.89 | 0.00 | +0.89 | pass |

The run reports an overall WITH score of 0.98 and a mean Δ of +0.98. No case failed, so there is no failure line.

One grader result did fail. In `study-a-page`, the `criteria` grader failed 1 run of 3, on 3 votes to 0. That reply reports the study card written and stops at Stop 1. No cause is recorded.

| Case | Rerun 2 WITH | Rerun 3 WITH | What changed |
| --- | --- | --- | --- |
| `blend-two` | 0.33 | 1.00 | Stop 1 shows the menu as it is in the file, Pick column kept. It does not pick or recommend parts |
| `declines-brand-copy` | 0.67 | 1.00 | The no opens the reply and states rule 4. The skill description says it turns a copy request into an original |
| `resume-from-files` | 1.00 | 1.00 | Nothing |
| `routes-app-to-rea` | 0.67 | 1.00 | The guide loads before any example is opened. The app route asks about `rea` |
| `scoreboard-made` | 0.00 | 1.00 | "run the check" loads the skill. Every row carries proof, and what was only read in code is ⚠️. The fixture gained its studies and blend |
| `study-a-page` | 0.00 | 0.89 | One grader became three that each read what they judge. "Just go" covers the interview only |

Read these before trusting 6 of 6.

| Note | Detail |
| --- | --- |
| Not like for like | Rerun 2 used the default judge. Rerun 3 uses the larger judge, and `study-a-page` is graded by three graders, not one |
| Two full runs | The first, at commit `898a8e5`, scored 1.00 in every case. Review then found that the grader split had narrowed one condition. It was restored and the suite run again. This section reports the second run. One full run of the 3 allowed was left unused |
| Tuned on checks | The fixes were tuned before these runs on 213 skill-only runs in 25 checks, some on wording variants |
| Soft spot | In the last check at this commit, `declines-brand-copy` passed 8 of 9 skill-only runs. The failing reply opened with the interview. A rerun can drop a run |
| Baseline | W/OUT is 0.00 in every case with the larger judge. In Rerun 2 the default judge passed 2 of 3 no-skill replies in `declines-brand-copy` |
| Study grader | The old grader read only the last reply and never saw the study card. A focus change alone did not fix it: the transcript passed 1 of 4 runs and the card file 0 of 4. The three-way split passed 4 of 4 |
| Averaging | The case score averages its three graders. So 0.89 is 2 of 3 runs passing every grader, and 1 run whose reply failed. A single grader would have scored that case 0.67, below 0.8 |
| A regression on the way | A reworded `checker` description stopped the skill loading for the brand-copy request. A six-run bisect found it, and the description is back to its old wording |
| A prompt that invites a run-on | `study-a-page` says "just go with your own picks for the rest". One check run read that as leave to skip Stop 1, and built a site |

## Rerun 4

Source: one `claude plugin eval` run on 2026-11-23, after [PR 27](https://github.com/SoulCraft-Org/anything-crafter/pull/27) moved the plugin into `plugins/anything-crafter/`. Every number in this section comes from that run's `--json` output. No case, skill or manifest text was changed for it.

| Item | Detail |
| --- | --- |
| Command | `claude plugin eval . --trust-plugin --scaffold --allow-tools Write Edit WebFetch --judge-model sonnet --threshold 0.8 --runs 3 --json evals/results.json --no-publish` |
| Skill measured | `main` at commit `a1e85c2`, loaded through the root dev manifest `.claude-plugin/plugin.json` |
| CLI | Claude Code 2.1.330 |
| Runs | 3 per case with the plugin (WITH) and 3 without it (W/OUT) |
| Result | 5 of 6 cases at or above 0.8. Exit code 1 |
| Run errors | None. All 36 runs finished |
| Time and cost | 805 seconds and 2.79 US dollars, as the run reported them |
| Skill fired | 18 of 18 WITH runs, 3 of 3 in every case. A separate one-prompt check loaded it as `anything-crafter:craft` |

| Case | WITH | W/OUT | Δ | At 0.8 |
| --- | --- | --- | --- | --- |
| `blend-two` | 1.00 | 0.00 | +1.00 | pass |
| `declines-brand-copy` | 1.00 | 0.00 | +1.00 | pass |
| `resume-from-files` | 1.00 | 0.00 | +1.00 | pass |
| `routes-app-to-rea` | 0.67 | 0.00 | +0.67 | fail |
| `scoreboard-made` | 1.00 | 0.00 | +1.00 | pass |
| `study-a-page` | 1.00 | 0.00 | +1.00 | pass |

The run reports an overall WITH score of 0.94 and a mean Δ of +0.94.

One line per case below 0.8. The judge returns votes with no reasons, so the cause is read from the reply.

- `routes-app-to-rea`: 1 run of 3 failed on 3 votes to 0. The sandbox denied its read of `/Applications/Sketchpad.app`, so it stopped and offered three ways on, and never asked about `rea`.

| Note | Detail |
| --- | --- |
| The move | The plugin loads from `plugins/anything-crafter/` through the root dev manifest. No fix was needed |
| Like for like | Same command, judge and graders as Rerun 3 |
| Against Rerun 3 | `routes-app-to-rea` fell from 1.00 to 0.67. `study-a-page` rose from 0.89 to 1.00. The others held at 1.00 |
| The failure | Rerun 2 lost a run of this case the same way, at the unreadable app path. The skill text did not change between Rerun 3 and this run |
| Averaging | Still applies to `study-a-page`, which averages its three graders. It hid nothing this time: all 3 graders passed all 3 runs. `routes-app-to-rea` has one scored grader, so its 0.67 is 2 of 3 runs |
| Baseline | W/OUT is 0.00 in every case. In `study-a-page`, the `brief` and `card` graders threw because the no-skill runs wrote no `craft/` files |
| Reruns | One, as asked |
