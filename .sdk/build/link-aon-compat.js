/* @voxgig/sdkgen's `target add`/`feature add` commands (still, as of 3.7.3)
 * resolve every model file in the import chain as `.aontu`, even though this
 * project's models - and @voxgig/apidef's own generated derivatives - are
 * `.aon`. Symlink each `.aon` onto a same-named `.aontu` twin so both
 * resolve. Safe to re-run; only ever adds symlinks, never removes files. */

const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')

function linkAonTwin(aonPath) {
  const aontuPath = aonPath.replace(/\.aon$/, '.aontu')
  try {
    const stat = fs.lstatSync(aontuPath)
    if (stat.isSymbolicLink() || stat.isFile()) {
      return
    }
  }
  catch (e) {
    // Doesn't exist yet - fall through and create it.
  }
  fs.symlinkSync(path.basename(aonPath), aontuPath)
  console.log('link-aon-compat: linked', path.relative(root, aontuPath), '->', path.basename(aonPath))
}

function walkModelDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkModelDir(full)
    }
    else if (entry.name.endsWith('.aon')) {
      linkAonTwin(full)
    }
  }
}

walkModelDir(path.join(root, 'model'))

// The two packages' own bundled model files, which still ship as `.aontu`
// only - this project's `.aon` imports need the reverse twin here too.
for (const pkg of ['@voxgig/apidef', '@voxgig/sdkgen']) {
  const modelDir = path.join(root, 'node_modules', pkg, 'model')
  if (!fs.existsSync(modelDir)) continue
  for (const entry of fs.readdirSync(modelDir)) {
    if (entry.endsWith('.aontu')) {
      const aonPath = path.join(modelDir, entry.replace(/\.aontu$/, '.aon'))
      try {
        fs.lstatSync(aonPath)
      }
      catch (e) {
        fs.symlinkSync(entry, aonPath)
        console.log('link-aon-compat: linked', path.relative(root, aonPath), '->', entry)
      }
    }
  }
}
