/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: 
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

function extend() {

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


    function immutable() { }


    function flatten() { }


    function range(start, stop, step) { }


    function enumerate(array = [], type = "object" /* object, array */) { }


    function del(start, end) { }


    function insert(index, array /* array or item */) { }


    function diction() { }


    function subset() { }


    function superset() { }


    function length() { }



    Object.defineProperty(Array.prototype, 'append', { value: append, enumerable: true, });
    Object.defineProperty(Array.prototype, 'extend', { value: extend, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(Array.prototype, 'remove', { value: remove, enumerable: true, });
    Object.defineProperty(Array.prototype, 'pop', { value: pop, enumerable: true, });
    Object.defineProperty(Array.prototype, 'clear', { value: clear, enumerable: true, });
    Object.defineProperty(Array.prototype, 'index', { value: index, enumerable: true, });
    Object.defineProperty(Array.prototype, 'count', { value: count, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sort', { value: sort, enumerable: true, });
    Object.defineProperty(Array.prototype, 'reverse', { value: reverse, enumerable: true, });
    Object.defineProperty(Array.prototype, 'copy', { value: copy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'diff', { value: diff, enumerable: true, });
    Object.defineProperty(Array.prototype, 'equal', { value: equal, enumerable: true, });
    Object.defineProperty(Array.prototype, 'similar', { value: similar, enumerable: true, });
    Object.defineProperty(Array.prototype, 'unique', { value: unique, enumerable: true, });
    Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    Object.defineProperty(Array.prototype, 'enqueue', { value: enqueue, enumerable: true, });
    Object.defineProperty(Array.prototype, 'dequeue', { value: dequeue, enumerable: true, });
    Object.defineProperty(Array.prototype, 'transpose', { value: transpose, enumerable: true, });
    Object.defineProperty(Array.prototype, 'immutable', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'freeze', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'tuple', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'flatten', { value: flatten, enumerable: true, });
    Object.defineProperty(Array.prototype, 'range', { value: range, enumerable: true, });
    Object.defineProperty(Array.prototype, 'enumerate', { value: enumerate, enumerable: true, });
    Object.defineProperty(Array.prototype, 'del', { value: del, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(Array.prototype, 'diction', { value: diction, enumerable: true, });
    Object.defineProperty(Array.prototype, 'toObject', { value: diction, enumerable: true, });
    Object.defineProperty(Array.prototype, 'subset', { value: subset, enumerable: true, });
    Object.defineProperty(Array.prototype, 'superset', { value: superset, enumerable: true, });
    Object.defineProperty(Array.prototype, 'length', { value: length, enumerable: true, });


    // Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    // Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });

    return Array;
}


module.exports.ArrayExtended = extend();
module.exports.extendArray = extend;
