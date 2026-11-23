---
name: craft
description: Builds your own version of anything from examples. Studies how they are built, then crafts and checks it. Use for "build me one like...", "copy this...", "study these...", "run the check".
---

# Craft

Show examples. Learn how they are built. Build something original.

| Rule | In short |
| --- | --- |
| Stages | 6, in order: Show, Study, Blend, Blueprint, Craft, Check |
| Stops | Exactly 2: after Blend, and after Check. Stop and wait. Only if the person said to work unattended: take the recommended option, mark it `unattended` in the file, go on |
| Memory | Files in `craft/` in the project root. The blueprint names the build folder. Each stage writes one file, so any session can resume |
| Last line | Every reply ends with `Skipped or unchecked: ...` (write `none` if nothing) |

Load [rules](references/rules.md) once at the start. Rules win over everything below.

## Resume

1. If `craft/` exists, read every file in it.
2. Continue at the first stage whose file is missing. Never redo a stage whose file exists.
3. Say in one line where you resumed and why.

## 1. Show

First check rule 4. Asked to copy a name, logo, text, code or a lock? Start your reply with a one-line no to that part, then offer an original.
Load [brief](references/brief.md) when you start.

1. Ask the vision interview: 1 round, at most 5 questions, each with a recommended answer.
2. Accept "just go" at any point and use the recommended answers.
3. Ask for 1 or more examples (links, files or names).
4. Write `craft/brief.md`: vision lines V1, V2 …, promises P1, P2 …. Never mark a promise: only Check does.

Done when: every question is answered or defaulted, and 1 or more examples are named.

## 2. Study

Load [study card](references/study-card.md) when you start.

1. Pick the guide from the examples' type and load it before you open any example: [website](guides/website.md), [web app](guides/web-app.md), [code](guides/code.md), [doc or deck](guides/doc-deck.md), [design](guides/design.md), [app or binary](guides/app-binary.md). No guide fits: say so and say no. Never improvise one.
2. Study one example at a time. Use the guide's route only.
3. Label every part of the example.
4. Mark each claim Seen, Inferred or Unknown.
5. Write `craft/studies/<example>.md`, one file per example.

Done when: every part is labelled and each example has 1 or more Seen proof.

## 3. Blend

Load [parts menu](references/parts-menu.md) when you start.

1. Read every file in `craft/studies/`.
2. List the parts across all examples as a menu.
3. Write `craft/blend.md`.
4. STOP 1: ask the person to pick parts. Wait.

Done when: the picks are in `craft/blend.md`, marked `unattended` on an unattended run.

## 4. Blueprint

Load [blueprint](references/blueprint.md) when you start.

1. Read `craft/brief.md` and `craft/blend.md` only.
2. Design the original thing. Learn the how, never copy the what.
3. Trace every piece by number: V1 … or a pick.
4. Write `craft/blueprint.md`.

Done when: every piece traces to the vision or a pick.

## 5. Craft

1. Read `craft/brief.md` and `craft/blueprint.md` only. Do not reopen the examples.
2. Build the thing, one blueprint piece at a time.
3. Run it or open it once. If you cannot, run the smallest check you can and say which.

Done when: it runs, opens or passes a check. Say which.

## 6. Check

Load [scoreboard](references/scoreboard.md) when you start.

1. Use a fresh reviewer that reads only `craft/` and the result: the `checker` agent if you have it. No subagents: use a fresh session. Neither: write `Reviewer: not fresh` and why.
2. Score every promise in the brief: ✅ proven, ⚠️ not checked, ❌ failed. Give proof for each.
3. Write `craft/check.md`.
4. STOP 2: show the scoreboard. Wait.

Done when: every promise has a mark and proof.

## Always

| Do | Don't |
| --- | --- |
| Finish a stage, write its file, then start the next | Stop anywhere except the 2 stops |
| Do the stages in order | Skip a stage to save time |
| Say what you could not check | Claim done before Check ran |
| Keep names, text, art and code of examples out | Copy an example's words or assets |
