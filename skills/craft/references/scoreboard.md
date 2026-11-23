# Scoreboard

Write it to `craft/check.md`. A fresh reviewer reads only `craft/` and the result.

## Fill in this scoreboard

```
# Check
Result checked: <path, link, or "ran it" or "opened it">
Reviewer: <fresh session>

| Promise | Brief line | Mark | Proof |
| --- | --- | --- | --- |
| P1 <text from the brief> | V3 | ✅ | <what you ran, opened or read, and what you saw> |
| P2 <text from the brief> | V4 | ⚠️ | <why you could not check it> |
| P3 <text from the brief> | V3 | ❌ | <what you saw that broke it> |

Totals: ✅ <n> · ⚠️ <n> · ❌ <n> of <all>

What this does not prove: <one line, for example "no real person has tried it">
Fix next: <the ❌ rows first, one line each, or "none">
```

## Marks

| Mark | Means | Proof must be |
| --- | --- | --- |
| ✅ proven | You checked it and it held | The step you took and the result you saw |
| ⚠️ not checked | You could not or did not check it | The reason |
| ❌ failed | You checked it and it broke | What you saw |

## Steps

1. Copy every promise from `craft/brief.md`, one row each, in order.
2. Link each row to its V-line in "Brief line".
3. Check one promise at a time. Run it or open it.
4. Mark it. Write the proof in the same row.
5. Count the marks. The totals must add up to the number of promises.

## Rules

1. No proof, no ✅.
2. "Looks fine" is not proof.
3. Never drop a failed or unchecked promise. Show it.
4. Zero ❌ is fine. Never invent a finding.
5. STOP 2: show the table. Wait for the person.
