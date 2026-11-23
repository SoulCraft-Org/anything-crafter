# Eval report

Source: one `claude plugin eval` run on 2026-11-23, for [issue 6](https://github.com/SoulCraft-Org/anything-crafter/issues/6). Every number below comes from that run's `--json` output. The latest run is in [Rerun 2](#rerun-2).

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
- `study-a-page`: every reply reports the page fetched and the Study and Blend stages done. The judge reads only that last reply, which shows the blend menu and nothing of the study card.

| Note | Detail |
| --- | --- |
| Not like for like | The tables above this section measured commit `02816b1` with no tools granted. Rerun 2 measures commit `7b52bff` with `Write`, `Edit` and `WebFetch` granted |
| What a pass takes | 3 of 3 runs. Two cases scored 0.67, which is 1 failed run each |
| Skill fired | 3 of 3 runs in 4 cases, 2 of 3 in `declines-brand-copy`, 0 of 3 in `scoreboard-made` |
| Reruns | One, as asked. No case or skill text was changed for it |
