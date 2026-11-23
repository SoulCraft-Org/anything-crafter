# 🧪 Model report card

Tested, not claimed. The same craft, run on three models, graded against each stage's "Done when".

## Results (2026-11-22)

| Model | Harness | 🎯 Show | 🔬 Study | 🧩 Blend | 📐 Blueprint | Time |
| --- | --- | --- | --- | --- | --- | --- |
| Claude Sonnet 5.5 | Claude Code | ✅ | ✅ | ✅ | ✅ | about 7 min, build included |
| Nemotron 3.5 Super (open-weight) | OpenCode | ✅ | ✅ | ✅ | ✅ | 86 s |
| Nemotron 3.5 Lightning (open-weight) | OpenCode | ⚠️ | ✅ | ⚠️ | ⚠️ | 51 s |
| Nemotron 3.5 Lightning, after the fix | OpenCode | ✅ | ✅ | ✅ | ⚠️ | 46 s |

| Model | What it got right | What it missed |
| --- | --- | --- |
| Sonnet 5.5 | Every stage, then a 103-line build scored ✅ 7 of 7 ([showcase](first-craft/)) | Nothing graded |
| Nemotron Super | 5 V-lines, 2 checkable promises, 16 Seen parts each quoting the source, 2 Unknowns kept apart, 9 traces | Nothing graded |
| Nemotron Lightning | Real reads of both projects. Seen, Inferred and Unknown all used | No V or P numbers. Pre-marked every promise ✅. No `unattended` mark. Blueprint traced nothing |
| Lightning, after the fix | P1 to P6 with no marks, `unattended` picks, 23 pieces traced by number | Blueprint has no Decisions table |

## What we changed

The small model followed `SKILL.md` but never opened the templates. So the three must-haves now sit inline in `SKILL.md`: number V and P lines, never mark a promise before Check, mark unattended picks.

## Method

| | |
| --- | --- |
| Prompt | Build my own one-file start page (search, link grid, clock, light and dark, no build step, no tracking). Vision: just go. Examples: `pawelmalak/flame`, `lissy93/dashy`. Work unattended. Stop after Blueprint |
| Install | The skill copied to `.agents/skills/craft/` in an empty folder |
| Sandbox | OpenCode permissions: file edits and page fetches allowed; shell allows only `gh api`, `ls`, `cat`, `mkdir` |
| Run | `opencode run --auto -m opencode/<model> "<prompt>"`, one run per model |
| Grade | Each stage's "Done when" from `SKILL.md`, read by a person, plus a script that counts V-lines, P-lines, labels, traces and the `unattended` mark |

| This does not prove | |
| --- | --- |
| Repeatability | One run per model. Results can vary run to run |
| Other models | gpt-oss on Ollama's free pool was the plan; its free quota was used up that day |
| The Decisions table | Small models skip it. It is still only in the template |
