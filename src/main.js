// // src/main.js
// import foo from './foo.js';
//
// export default function () {
//     console.log(foo);
// }

// src/main.js
import { version } from '../package.json';

export default function () {
    console.log('version ' + version);
}
