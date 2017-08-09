const fs = require('fs');
const path = require('path');
const replace = require('buffer-replace');

module.exports = function directInjection(content) {
  let out = content;
  const appDirs = this.query.apps || [];
  const apps = [];

  appDirs.forEach((appDir) => {
    try {
      const manifestFile = `${appDir}/manifest.json`;
      this.addDependency(manifestFile); // Watch for file changes.

      const manifestObj = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
      manifestObj._rig_id = path.posix.basename(appDir),
      apps.push(manifestObj);
    } catch (err) {
      console.error(err);
    }
  });

  // DI:AppList
  //
  // Inserts a list of app configuration objects.
  // [ { _rig_id: <app id>, etc. } ]

  try {
    out = replace(out, '/* DI:AppList */', `/*eslint-disable*/[${apps.map(a => JSON.stringify(a)).join(', ')}]/* eslint-enable */`);
  } catch (err) {
    console.error(err);
    throw err;
  }

  return out;
};
