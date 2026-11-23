# Guide: app and binary

## What this route covers

An installed app, an APK or a binary. You learn what it does, which files it holds and what its screens show.

## What to look at

1. Name the app and note its version, size and publisher from its info.
2. List the top-level files and folders inside the bundle or package.
3. Read the manifest or info file (`Info.plist`, `AndroidManifest.xml`). Note the name, permissions and declared features.
4. List the libraries and frameworks it ships with.
5. List the resources you can read as plain files: strings, images, config.
6. Look at screenshots of its screens. Note the layout, menus and flows.
7. Write what the app does in one line, from its own description and what you saw.

## How to study it

| Case | Do |
| --- | --- |
| Default | A static look only. Read files and screenshots. Do not open, run or hook the app |
| Deep study | Use the `rea` tool (MIT, github.com/morluto/rea, set up with `npx rea-agents setup`) |
| Fallback | No `rea`, or no yes: stay with the static look and mark what you could not see Unknown |

1. Before adding `rea`, say what it installs and ask. Wait for a clear yes.
2. Before any runtime or hooking step, ask again, separately. The first yes never covers it.

## What to record on the study card

| Part | Write down |
| --- | --- |
| What it does | One line |
| Files | Top-level layout and what each part is |
| Manifest | Name, permissions, declared features |
| Screens | Layout and flows from screenshots |
| Limits | What a static look could not show |
| Proof | The file path or screenshot behind each claim |

Mark each line Seen, Inferred or Unknown.

## When to say no

Always refuse:

- DRM, licence checks and anti-cheat: never study, bypass or remove them.
- Cracking, patching, or removing limits from a paid app.
- Running or hooking an app without the person's yes.
