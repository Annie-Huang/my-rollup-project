// rollup.config.js

import json from 'rollup-plugin-json';
// add a second minified output. As format, we choose iife.
// This format wraps the code so that it can be consumed via a script tag in the browser while avoiding
// unwanted interactions with other code. As we have an export, we need to provide the name of a global variable
// that will be created by our bundle so that other code can access our export via this variable.
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/main.js',
    output: [
        {
            file: 'bundle.js',
            format: 'cjs'
        },
        {
            file: 'bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()]
        }
    ],
    plugins: [ json(), image() ]
};
