/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/string.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


function extend() {

    function map() { }


    function extender(func, object) {
        if (typeof func !== "function") {
            throw new Error("Error: func is not an function", func);
        }
        if (typeof func !== "object" && !object.prototype) {
            throw new Error("Error: object is not an Object with prototype", object);
        }
        return Object.defineProperty(object.prototype, func.prototype.name, { value: func, enumerable: true, writable: true});
    }

    
    // Object.defineProperty(Object.prototype, 'map', { value: map, enumerable: true, });

    return String;
}

module.exports.StringExtended = extend();
module.exports.extendObject = extend;
