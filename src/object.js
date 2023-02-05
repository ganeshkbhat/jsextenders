/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/object.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


function extend() {

    function map() { }


    function sort() { }


    function diff() { }


    function diffBoth() { }


    function equal() { }


    function similar() { }


    function subset() { }


    function superset() { }


    function toArray(type = "array" /* array [k, v], objects {k:v} */) { }


    function length() { }


    function clear() { }


    function copy() { }


    function pop(key) { }


    function popItem() { }


    function setDefault(value) { }


    function get() { }


    function items() { }


    function immutable() { }


    // function itemsValue(key) { }


    function extender() {}

    

    Object.defineProperty(Object.prototype, 'map', { value: map, enumerable: true, });
    Object.defineProperty(Object.prototype, 'sort', { value: sort, enumerable: true, });
    Object.defineProperty(Object.prototype, 'diff', { value: diff, enumerable: true, });
    Object.defineProperty(Object.prototype, 'diffBoth', { value: diffBoth, enumerable: true, });
    Object.defineProperty(Object.prototype, 'equal', { value: equal, enumerable: true, });
    Object.defineProperty(Object.prototype, 'similar', { value: similar, enumerable: true, });
    Object.defineProperty(Object.prototype, 'subset', { value: subset, enumerable: true, });
    Object.defineProperty(Object.prototype, 'superset', { value: superset, enumerable: true, });
    Object.defineProperty(Object.prototype, 'toArray', { value: toArray, enumerable: true, });
    Object.defineProperty(Object.prototype, 'length', { value: length, enumerable: true, });
    Object.defineProperty(Object.prototype, 'clear', { value: clear, enumerable: true, });
    Object.defineProperty(Object.prototype, 'copy', { value: copy, enumerable: true, });
    Object.defineProperty(Object.prototype, 'pop', { value: pop, enumerable: true, });
    Object.defineProperty(Object.prototype, 'popItem', { value: popItem, enumerable: true, });
    Object.defineProperty(Object.prototype, 'setDefault', { value: setDefault, enumerable: true, });
    Object.defineProperty(Object.prototype, 'get', { value: get, enumerable: true, });
    Object.defineProperty(Object.prototype, 'items', { value: items, enumerable: true, });
    Object.defineProperty(Object.prototype, 'immutable', { value: immutable, enumerable: true, });
    // Object.defineProperty(Object.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(Object.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(Object.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(Object.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(Object.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(Object.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(Object.prototype, 'duplicates', { value: duplicates, enumerable: true, });

    return Object
}

module.exports.ObjectExtended = extend();
module.exports.extendObject = extend;
