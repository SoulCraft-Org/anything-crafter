# Guide: code

## What this route covers

A repo, command line tool, package, plugin or skill. You learn how it is laid out, where it starts, what it promises and what you may reuse.

## What to look at

1. Read the licence first. Note its name and whether it allows reuse.
2. Read the top-level file tree. Note each folder and its job.
3. Read the manifest (`package.json`, `pyproject.toml`, `plugin.json`, `SKILL.md`). Note the name, dependencies and commands.
4. Find the entry points: the main file, the command, the exported functions.
5. Read the README for the promise and the install steps.
6. Read the tests and the CI file. Note how it checks itself.
7. Read one small piece of code end to end to see its style.

## How to study it

| Case | Do |
| --- | --- |
| Default | Use `gh` to read the tree and files (`gh repo view`, `gh api`). Read local files with a file reader |
| Fallback | Fetch the raw files over HTTPS from the host's raw file address. List what you could not reach as Unknown |

Read the code. Do not install it, build it or run it.

## What to record on the study card

| Part | Write down |
| --- | --- |
| Licence | Its name, and what it lets you reuse |
| Layout | Folders and their jobs |
| Entry points | Where it starts, and the commands it offers |
| Manifest | Name, dependencies, scripts |
| Checks | Tests and CI, one line each |
| Proof | The file path and line behind each claim |

Mark each line Seen, Inferred or Unknown.

## When to say no

Say no, and say why in one line, when:

- The repo is private and you have no access. Never use someone else's token.
- It has no licence, or a licence that forbids reuse. Study the ideas only, and say so.
- You are asked to copy its code or text. Learn the how, never copy the what.
- You are asked to run code you did not write.
