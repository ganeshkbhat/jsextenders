/**
 *
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/singleton.js
 * File Description:
 *
 *
*/
/* eslint no-console: 0 */
'use strict';
/**
 * Creates a global singleton
 * Takes `key` of the global variable and associated `object` to create if not there
 * Can force replace the object if `replace` TRUE
 * Freeze boolean `freeze` will make the object immutable
 * Returns undefined if `key` not specified
 *
 * @param {string} key
 * @required
 *
 * @param {any} object
 * @optional Default: undefined
 *
 * @param {boolean} replace
 * @optional Default: false
 *
 * @param {boolean} freeze
 * @optional Default: false
 *
 * @returns global object or undefined
 *
 */
var singleton = function (key, object, replace, freeze) {
    if (key) {
        if (object && replace) {
            global[key] = object;
        }
        else {
            if (!(global[key])) {
                global[key] = object;
            }
        }
        if (freeze) {
            Object.freeze(global[key]);
        }
    }
    else {
        return undefined;
    }
    return global[key];
};
module.exports.singleton = singleton;
//# sourceMappingURL=singleton.js.map