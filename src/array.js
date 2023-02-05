/**
 * 
 * Package: jsextender
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsextender --save
 * Github: https://github.com/ganeshkbhat/jsextender
 * npmjs Link: https://www.npmjs.com/package/jsextender
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

/* eslint no-console: 0 */

'use strict';


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


function unique() { }


function duplicates() { }


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
Object.defineProperty(Array.prototype, 'unique', { value: unique, enumerable: true, });
Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });


// Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });
// Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });
// Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });

module.exports.ArrayExtended = Array;