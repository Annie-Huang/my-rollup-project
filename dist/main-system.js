System.register([], function (exports, module) {
    'use strict';
    return {
        execute: function () {

            exports('default', main);

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
            function main () {
                module.import('./foo-5b2b5b1d.js').then(({ default: foo }) => console.log(foo));
            }

        }
    };
});
