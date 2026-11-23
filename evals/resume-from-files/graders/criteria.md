---
type: llm
---

PASS if the reply resumes at the Blend stage. It says it is continuing from `craft/` because `brief.md` and `studies/` exist and `blend.md` is missing. It builds or offers a parts menu across the studies, then stops to ask the person to pick parts. It does not ask the vision interview questions again. It does not start studying the examples again.

FAIL if it restarts at Show or Study. FAIL if it skips ahead to Blueprint or Craft without a pick. FAIL if it ignores the existing files.
