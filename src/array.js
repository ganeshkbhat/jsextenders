/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/array.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var freeze = require("./freeze");
var extender = require("./extender");

function extend() {

    let SubArray = extender();

    function append(item) { }


    function extend(iterable) { }


    function insert(index, item) { }


    function remove(item) { }


    function pop(index) { }


    function clear() { }


    function index(item, start, end) { }


    function count(item) { }


    function sort(key = None, reverse = False) { } // function sort(key=None, reverse=False) {}


    function reverse() { }


    function copy() { }


    function diff() { }


    function equal() { }


    function similar() { }


    function unique() { }


    function duplicates() { }


    function enqueue() { }


    function dequeue() { }


    function transpose() { }


    function immutable() {}


    function flatten() { }


    function range(start, stop, step) { }


    function enumerate(array = [], type = "object" /* object, array */) { }


    function del(start, end) { }


    function insert(index, array /* array or item */) { }


    function diction() { }


    function subset() { }


    function superset() { }


    function length() { }


    function extender(func, object) {
        if (typeof func !== "function") {
            throw new Error("Error: func is not an function", func);
        }
        if (typeof func !== "object" && !object.prototype) {
            throw new Error("Error: object is not an Object with prototype", object);
        }
        return Object.defineProperty(object.prototype, func.prototype.name, { value: func, enumerable: true, });
    }


    Object.defineProperty(SubArray.prototype, 'append', { value: append, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'extend', { value: extend, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'remove', { value: remove, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'pop', { value: pop, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'clear', { value: clear, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'index', { value: index, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'count', { value: count, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sort', { value: sort, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'reverse', { value: reverse, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'copy', { value: copy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'diff', { value: diff, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'equal', { value: equal, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'similar', { value: similar, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'unique', { value: unique, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'enqueue', { value: enqueue, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'dequeue', { value: dequeue, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'transpose', { value: transpose, enumerable: true, });
    // Object.defineProperty(SubArray.prototype, 'immutable', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'freeze', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'tuple', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'flatten', { value: flatten, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'range', { value: range, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'enumerate', { value: enumerate, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'del', { value: del, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'diction', { value: diction, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'toObject', { value: diction, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'subset', { value: subset, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'superset', { value: superset, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'length', { value: length, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'extender', { value: length, enumerable: true, configurable: true, writable: true });

    // Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });

    return SubArray;
}


module.exports.ArrayExtended = extend();
module.exports.extendArray = extend;
