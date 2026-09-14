# MIGRATION.md

What a **fully clean regeneration** of this SDK does and does not restore.

Verified on 2026-09-14 by deleting every tracked file except the spec
(`.sdk/def/github-full.yaml`) and rebuilding from scratch with
`admin/scripts/cedar-regen.sh` on sdkgen 4.16.0 / apidef 8.5.2.

## The result

**8600 of 8601 tracked files came back from generation**, byte for byte. After
re-applying the customisations below, `git status` showed no modified and no
deleted files against the previous commit. This SDK is reproducible from its
spec plus its overlays.

## What you MUST re-apply by hand

### 1. `.sdk/model/project.aon` — the whole file

The scaffold documents this file as created once and never overwritten. That is
true only while the file EXISTS. A full wipe removes it, `create-sdkgen` writes a
fresh default, and **every declaration in it is silently gone** — the build still
succeeds and the manifests simply come back with derived values.

Four declarations live here, and losing any of them is quiet rather than loud:

| declaration | what breaks without it |
|---|---|
| `target: 'seneca-provider': output` | the provider is generated IN-TREE instead of into `../../seneca/seneca-github-provider`, leaving a 2 MB duplicate directory |
| `target: 'seneca-provider': publish: version` | the provider manifest drops to the schema default, below what is published |
| `target: ts: publish: registry: package` | the npm name reverts to the derived `@voxgig-sdk/github`, which **does not exist on npm** — the published package is `@voxgig-sdk/github-sdk` |
| `target: <all>: publish: version` | js, py and lua fall to `0.0.1` while npm stays `0.0.4`, and `C21-version-lockstep` blocks the repo |

**Keep a copy before any clean rebuild.** Restoring it afterwards is the only
way back, and nothing warns you.

### 2. `.sdk/tools/check-generate.js`

The **one file** generation did not restore. It is hand-written, 147 lines, and
neither `create-sdkgen` nor `sdkgen` ships it — it was added by
`fb802b1 Generate the whole GitHub API, and make the provider installable`.

It is a generation gate: it checks that a run produced the whole API and did so
in reasonable time, after two silent failures on this project — a target skipped
entirely because its output path did not exist, and an SDK built with 2 entities
where the API has 268.

**It is not wired to anything.** No Makefile target, no npm script, nothing in CI
invokes it. It is restored here so it is not lost, but it does not run.

## Order matters when you restore

`project.aon` refines `main.kit.target.<t>`, and a target can only be refined
once `target/target-index.aon` defines it. Restoring the overlay and then
regenerating in one pass fails at the FIRST `target add`:

```
Cannot resolve value at path $.main.kit.target.ts.comment.line
```

which is the step that would have registered the target. So: rebuild once to get
a working scaffold, restore the overlay, then regenerate again. The drivers now
handle this automatically — `cedar-regen.sh` re-seeds the index before anything
loads the model, and `pub-regen.ts` restores the overlay after `target add`
rather than before.

## One artifact to clean up afterwards

The two-pass sequence generates the provider IN-TREE on the first pass, when the
output override is absent. Generation never deletes, so that `seneca-provider/`
directory survives the second pass even though the real output then goes
out-of-tree. Remove it; the authoritative copy is
`~/Projects/seneca/seneca-github-provider`.
