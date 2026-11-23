#!/bin/sh
# Builds dist/craft.zip: the craft skill folder, ready to upload to claude.ai or the Gemini app.
# Run from the repo root: sh tools/build_zip.sh
set -eu
root=$(pwd)
rm -rf dist && mkdir -p dist
(cd plugins/anything-crafter/skills && zip -q -r -X "$root/dist/craft.zip" craft -x '*.DS_Store')
size=$(wc -c < dist/craft.zip | tr -d ' ')
[ "$size" -lt 1000000 ] || { echo "craft.zip is $size bytes, over 1 MB" >&2; exit 1; }
unzip -l dist/craft.zip | grep -q ' craft/SKILL.md$' || { echo "craft/SKILL.md missing from the zip" >&2; exit 1; }
echo "dist/craft.zip: $size bytes"
