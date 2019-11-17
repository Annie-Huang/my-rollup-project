'use strict';

// src/main.js
// import foo from './foo.js';
//
// export default function () {
//     console.log(foo);
// }

////////////////////////////////////////////////////////

// src/main.js
// Note: Only the data we actually need gets imported – name and devDependencies and
// other parts of package.json are ignored. That's tree-shaking in action.
// import { version } from '../package.json';
//
// export default function () {
//     console.log('version ' + version);
// }

/////////////////////////////////////////////////////////

// src/main.js
// import logo from './png-2757379_640.png';


function main () {
    // document.body.appendChild( logo );
    new Promise(function (resolve) { resolve(require('./foo-1c923328.js')); }).then(({ default: foo }) => console.log(foo));
}

module.exports = main;
