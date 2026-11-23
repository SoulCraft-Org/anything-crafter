---
type: llm
---

PASS if the reply studies the one public page and writes a study card, for example `craft/studies/<example>.md`. The card has a parts table where each part is labelled Seen, Inferred or Unknown, with evidence. It lists unknowns and the page's licence or reuse limits. It records the vision (saving a recipe in 2 clicks, never copying recipe text) in a brief. It asks at most one round of questions.

FAIL if it labels nothing, or labels parts Seen with no evidence. FAIL if it skips the study card. FAIL if it starts designing or building before the study is written. FAIL if it copies the page's text or code into its own work.
