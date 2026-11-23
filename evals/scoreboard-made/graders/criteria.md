---
type: llm
---

PASS if the reply scores each promise from the brief with a mark: ✅ proven, ⚠️ not checked or ❌ failed. Each mark has proof, such as a file and line, a command and its output, or a screenshot path. It marks ⚠️ for anything it could not check. It never marks ✅ without proof. It shows the scoreboard and stops for the person. It ends with a line starting "Skipped or unchecked".

FAIL if any promise has no mark. FAIL if a mark has no proof. FAIL if the reply does not end with "Skipped or unchecked". FAIL if it edits the build or claims done without a check.
