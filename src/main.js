// src/main.js
// import foo from './foo.js';
//
// export default function () {
//     console.log(foo);
// }

// src/main.js
import { version } from '../package.json';
// Note: Only the data we actually need gets imported – name and devDependencies and
// other parts of package.json are ignored. That's tree-shaking in action.

export default function () {
    console.log('version ' + version);
}
