// Structure and budget checks. Node built-ins only, no dependencies.
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");
const lines = (p) => read(p).replace(/\n$/, "").split("\n").length;
const json = (p) => JSON.parse(read(p));

const manifests = [
  ".claude-plugin/plugin.json",
  ".claude-plugin/marketplace.json",
  ".codex-plugin/plugin.json",
  ".cursor-plugin/plugin.json",
];
const skills = readdirSync(join(root, "skills")).filter((d) => existsSync(join(root, "skills", d, "SKILL.md")));

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(m, "missing frontmatter");
  return Object.fromEntries(m[1].split("\n").map((l) => [l.slice(0, l.indexOf(":")), l.slice(l.indexOf(":") + 1).trim()]));
}

test("every manifest parses and pins no version", () => {
  for (const p of manifests) {
    const data = json(p);
    assert.equal("version" in data, false, `${p} has version`);
    for (const plugin of data.plugins ?? []) assert.equal("version" in plugin, false, `${p} plugin has version`);
  }
});

test("marketplace plugin name equals plugin.json name", () => {
  const name = json(".claude-plugin/plugin.json").name;
  assert.equal(json(".claude-plugin/marketplace.json").plugins[0].name, name);
  assert.equal(json(".codex-plugin/plugin.json").name, name);
  assert.equal(json(".cursor-plugin/plugin.json").name, name);
});

test("codex and cursor manifests point at skills/", () => {
  for (const p of [".codex-plugin/plugin.json", ".cursor-plugin/plugin.json"]) assert.equal(json(p).skills, "./skills/");
});

test("each skill has a matching name and a short description", () => {
  assert.ok(skills.length > 0, "no skills found");
  for (const s of skills) {
    const fm = frontmatter(read(`skills/${s}/SKILL.md`));
    assert.equal(fm.name, s);
    assert.ok(fm.description && fm.description.length <= 200, `${s} description is ${fm.description?.length} chars`);
  }
});

test("line budgets hold", () => {
  for (const s of skills) assert.ok(lines(`skills/${s}/SKILL.md`) <= 100, `${s}/SKILL.md over 100 lines`);
  const rules = "skills/craft/references/rules.md";
  if (existsSync(join(root, rules))) assert.ok(lines(rules) <= 90, "rules.md over 90 lines");
  const guides = join(root, "skills/craft/guides");
  for (const g of existsSync(guides) ? readdirSync(guides) : []) assert.ok(lines(`skills/craft/guides/${g}`) <= 60, `${g} over 60 lines`);
  if (existsSync(join(root, "README.md"))) assert.ok(lines("README.md") <= 150, "README.md over 150 lines");
});

function markdownFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? markdownFiles(p) : p.endsWith(".md") ? [p] : [];
  });
}

test("every relative Markdown link resolves", () => {
  const files = [...markdownFiles(join(root, "skills")), join(root, "README.md"), join(root, "PASTE.md")].filter(existsSync);
  for (const f of files) {
    const text = read(f.slice(root.length + 1)).replace(/```[\s\S]*?```/g, "");
    for (const m of text.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
      const target = m[1].split("#")[0];
      if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
      assert.ok(existsSync(resolve(dirname(f), target)), `${f.slice(root.length + 1)} links to missing ${m[1]}`);
    }
  }
});

test("tracked files stay under 1 MB and there is no hooks folder", () => {
  const out = execFileSync("git", ["ls-files", "-z"], { cwd: root, encoding: "utf8" });
  const total = out.split("\0").filter(Boolean).filter((f) => existsSync(join(root, f))).reduce((n, f) => n + statSync(join(root, f)).size, 0);
  assert.ok(total < 1_000_000, `tracked files are ${total} bytes`);
  assert.equal(existsSync(join(root, "hooks")), false, "hooks/ must not exist");
});
