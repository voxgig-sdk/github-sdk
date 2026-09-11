#!/usr/bin/env node
/* Copyright (c) 2024-2026 Voxgig, MIT License */

// GENERATION GATE: did the run produce the whole API, and did it do so in
// reasonable time?
//
// Two failures cost real time on this project, and neither announced itself:
//
//   1. THE RUN GENERATED (ALMOST) NOTHING, AND EXITED 0. The provider target's
//      output path named a directory that did not exist and `create: false`
//      skips a missing one, so a whole target was silently absent behind one
//      INFO line. Separately, a narrow definition file left the SDK with 2
//      entities where the API has 268 — also silently.
//
//   2. THE RUN GOT SLOW. A generate over about a minute means something is
//      wrong; the useful signal is a threshold, not a stopwatch someone
//      remembers to read.
//
// Both are cheap to check and expensive to miss, so they are checked.
//
// Run AFTER `npm run generate`:  node tools/check-generate.js
// Or, with the timing included:  npm run generate-checked

const Fs = require('node:fs')
const Path = require('node:path')

const SDK = Path.join(__dirname, '..')
const ROOT = Path.join(SDK, '..')

// Over this and the gate fails. A full-API generate of the whole GitHub
// specification — 722 paths, 268 entities, eight targets — takes about 50
// seconds on a developer laptop, so 90 leaves room for a slower machine
// without hiding a real regression.
const BUDGET_S = 90

const problems = []
const notes = []


// The guide records what the specification contains: apidef writes
// `metrics: count: entity/path/method` when it classifies. That makes it the
// one place that states the EXPECTED scope, so the generated model can be
// compared against it rather than against a number hardcoded here.
function guideMetrics() {
  const guidefile = Path.join(SDK, 'model', 'guide', 'base-guide.aon')
  if (!Fs.existsSync(guidefile)) {
    problems.push('no model/guide/base-guide.aon — has generate ever run?')
    return null
  }

  const src = Fs.readFileSync(guidefile, 'utf8')

  // A conflicted guide is apidef's error to report (it does, by file and
  // line). Saying so here too, in case this gate runs on a stale tree.
  if (/^(<{7}|>{7})(?!<|>)/m.test(src) || /^={7}(?!=)\s*$/m.test(src)) {
    problems.push('model/guide/base-guide.aon has unresolved merge conflict markers')
    return null
  }

  const read = (key) => {
    const m = src.match(new RegExp('metrics: count: ' + key + ':\\s*(\\d+)'))
    return null == m ? null : Number(m[1])
  }

  return { entity: read('entity'), path: read('path'), method: read('method') }
}


function main() {
  const metrics = guideMetrics()

  if (null != metrics) {
    // ENTITY FILES vs WHAT THE SPEC SAYS. The guide's own count is the
    // expectation; a model that holds fewer entities than the specification
    // classified means something dropped them silently.
    const entdir = Path.join(SDK, 'model', 'entity')
    const ents = !Fs.existsSync(entdir) ? [] :
      Fs.readdirSync(entdir).filter((f) =>
        f.endsWith('.aon') && 'entity-index.aon' !== f)

    notes.push(`entities: ${ents.length} model files, guide counts ${metrics.entity}`)

    if (null != metrics.entity && ents.length < metrics.entity) {
      problems.push(
        `only ${ents.length} entity model files for ${metrics.entity} ` +
        `classified entities — a target or definition is narrower than the spec`)
    }

    notes.push(`spec scope: ${metrics.path} paths, ${metrics.method} methods`)
  }

  // EVERY DECLARED TARGET PRODUCED OUTPUT. This is the check the silently
  // skipped provider needed: a target listed in the model but absent from
  // disk is a run that did less than it claimed.
  const targets = ['ts', 'js', 'go', 'py', 'php', 'lua', 'go-cli', 'go-mcp']
  for (const t of targets) {
    const dir = Path.join(ROOT, t)
    if (!Fs.existsSync(dir)) {
      problems.push(`target "${t}" produced no output directory`)
      continue
    }
    const count = Fs.readdirSync(dir).length
    if (0 === count) {
      problems.push(`target "${t}" output directory is empty`)
    }
  }

  // The out-of-tree provider, whose absence was the original silent skip.
  const provrel = Path.join(ROOT, '..', '..', 'seneca', 'seneca-github-provider')
  if (Fs.existsSync(provrel)) {
    const src = Path.join(provrel, 'src', 'github-provider.ts')
    if (!Fs.existsSync(src)) {
      problems.push('seneca provider checkout is present but was not generated into')
    } else {
      notes.push('seneca provider: generated')
    }
  } else {
    notes.push('seneca provider: checkout absent, target skipped (expected)')
  }

  // Timing, when the wrapper supplied it.
  const elapsed = Number(process.env.GENERATE_ELAPSED_S || '')
  if (Number.isFinite(elapsed) && 0 < elapsed) {
    notes.push(`generate took ${elapsed}s (budget ${BUDGET_S}s)`)
    if (BUDGET_S < elapsed) {
      problems.push(
        `generate took ${elapsed}s, over the ${BUDGET_S}s budget — ` +
        `something has regressed, or the definition has grown`)
    }
  }

  for (const n of notes) {
    console.log('  ' + n)
  }

  if (0 < problems.length) {
    console.error('\ncheck-generate FAILED:')
    for (const p of problems) {
      console.error('  - ' + p)
    }
    process.exit(1)
  }

  console.log('\ncheck-generate: ok')
}

main()
