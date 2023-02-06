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


var { SubObjectExtender, Freeze, extender } = require("./extenders");


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


function items() {
    console.log(100);
}


function immutable() { }


function log() {
    console.log(1000);
}


// function itemsValue(key) { }


function ObjectExtended() {

    let SubObject = SubObjectExtender();

    Object.defineProperty(SubObject.prototype, 'map', { value: map, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'sort', { value: sort, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'diff', { value: diff, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'diffBoth', { value: diffBoth, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'equal', { value: equal, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'similar', { value: similar, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'subset', { value: subset, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'superset', { value: superset, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'toArray', { value: toArray, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'length', { value: length, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'clear', { value: clear, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'copy', { value: copy, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'pop', { value: pop, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'popItem', { value: popItem, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'setDefault', { value: setDefault, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'get', { value: get, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'items', { value: items, enumerable: true, });
    Object.defineProperty(SubObject.prototype, 'immutable', { value: immutable, enumerable: true, configurable: true, writable: true });
    Object.defineProperty(SubObject.prototype, 'log', { value: log, enumerable: true, });

    // Object.defineProperty(SubObject.prototype, 'duplicates', { value: duplicates, enumerable: true, });

    return SubObject;
}


function extendObject() {

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
    Object.defineProperty(Object.prototype, 'immutable', { value: immutable, enumerable: true, configurable: true, writable: true });
    Object.defineProperty(Object.prototype, 'log', { value: log, enumerable: true, });

    // Object.defineProperty(Object.prototype, 'duplicates', { value: duplicates, enumerable: true, });

}


module.exports.ObjectExtended = ObjectExtended();
module.exports.extendObject = extendObject;
