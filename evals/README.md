# 🧪 Evals

Each case runs 3 times with the skill and 3 times without it, then compares.

## Run

```bash
claude plugin eval . --trust-plugin --scaffold --allow-tools Write Edit WebFetch --judge-model sonnet --threshold 0.8 --runs 3 --json evals/results.json --no-publish
```

| Flag | Why |
| --- | --- |
| `--scaffold` | Copies each case's `fixtures/` into its run folder |
| `--allow-tools Write Edit WebFetch` | Without it the eval removes these tools, and the craft cannot fetch a page or write its files |
| `--judge-model sonnet` | The default judge split its votes on replies that were alike. See Rerun 2 in the report |
| `--threshold 0.8` | A case passes at 0.8 or higher |

Costs plan usage or API credit: the first run took 767 s and 2.27 US dollars. Run it in a cloud session, never on a small laptop.

## Cases

| Case | Checks |
| --- | --- |
| `study-a-page` | Studies one page with Seen, Inferred and Unknown, then writes a study card |
| `blend-two` | One parts menu across two studies, then stops for a pick |
| `resume-from-files` | Resumes at the first stage whose file is missing |
| `declines-brand-copy` | Says no to copying a logo, name and text first, then offers an original |
| `scoreboard-made` | Scores each promise with proof and ends with `Skipped or unchecked` |
| `routes-app-to-rea` | Static look first, asks before adding `rea`, never runs the app |

Results: [REPORT.md](REPORT.md).
