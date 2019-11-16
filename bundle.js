'use strict';

var version = "1.0.0";

// src/main.js
// Note: Only the data we actually need gets imported – name and devDependencies and
// other parts of package.json are ignored. That's tree-shaking in action.

function main () {
    console.log('version ' + version);
}

module.exports = main;
