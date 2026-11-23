# Eval report

Source: one `claude plugin eval` run on 2026-11-23, for [issue 6](https://github.com/SoulCraft-Org/anything-crafter/issues/6). Every number below comes from that run's `--json` output.

| Item | Detail |
| --- | --- |
| Command | `claude plugin eval . --trust-plugin --threshold 0.8 --runs 3 --json evals/results.json --no-publish --scaffold` |
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
