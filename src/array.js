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

var { SubArrayExtender, Freeze, extender } = require("./extenders");

function extend(iterable) {

}

function append(item) {
    this.push(item);
}

function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
}

function insert(index, item) {
    this.splice(index, 0, item);
}

function insertAll(index, array /* array or item */) {
    this.splice(index, 0, ...array);
}

function count(item) {
    return [...this].filter((i) => i === item).length;
}

function replace(index, item) {
    this.splice(index, 1, item);
}

function remove(item) {
    let i = this.indexOf(item);
    (i !== -1) ? this.splice(i, 1) : this;
}

function removeAll(item) { }

function pop(index) {
    this.splice(index, 1);
}

function clear() {
    this.splice(0, this.length)
}

function index(item, start, end) { }

function sort(key = null, reverse = false) { } // sort(key=None, reverse=False) {}

function reverse() {
    this.reverse();
}

function reverseCopy() {
    return [...this].reverse();
}

function copy() {
    return [...this];
}

function diction(mapFunction, arg) {
    if (!!mapFunction && typeof mapFunction === "function") return mapFunction(Object.assign({}, [...this]), arg);
    return Object.assign({}, [...this]);
}

function subset(iterable) {
    let a = [], len = this.length;
    for (let i = 0; i < len; i++) {
        if (!iterable.includes(this[i])) return false;
    }
    return true;
}

function superset(iterable) {
    let a = [], len = iterable.length;
    for (let i = 0; i < len; i++) {
        if (!this.includes(iterable[i])) return false;
    }
    return true;
}

function diffIterable(iterable) {
    let a = [], len = iterable.length;
    for (let i = 0; i < len; i++) {
        (!this.includes(iterable[i])) ? a.push(iterable[i]) : a;
    }
    return a;
}

function diffSelf(iterable) {
    let a = [], len = this.length;
    for (let i = 0; i < len; i++) {
        (!iterable.includes(this[i])) ? a.push(this[i]) : a;
    }
    return a;
}

function diffBoth(iterable) {
    let a = { "self": [], "iterable": [] };
    a["self"] = this.diffSelf(this, iterable);
    a["iterable"] = this.diffIterable(this, iterable);
    return a;
}

function equal() {
    let a = [...this];
    return JSON.stringify(a) === JSON.stringify(iterable);
}

function similar(iterable) {
    let a = [...this];
    return JSON.stringify(a.sort()) === JSON.stringify(iterable.sort());
}

function uniques() {
    return Array.from(new Set([...this]));
}

function duplicates() {

}

function enqueue(item) {
    this.push(item);
}

function dequeue() {
    this.shift(item);
}

function transpose() {
    this.reverse();
    this.map(function (item) {
        (isArray(item)) ? item.reverse() : item;
    })
}

function immutable() {
    Object.freeze(this);
}

function flatten() {
    this.flatMap(num => num);
}

function flattenCopy() {
    return [...this].flatMap(num => num);
}

function range(start, stop, step) {
    let a = [];
    for (let i = (!!stop) ? start : 0; i <= stop; i += (!!step) ? step : 1) { a[i] = i; }
    return a;
}

function enumerate(type = "object" /* object, array */) {
    if (!["object", "array"].includes(type)) { throw new Error("Type not defined") };
    let a = [], len = this.length;
    for (let i = 0; i < len; i++) {
        if (type === "object") {
            a[i] = { "index": i, "value": this[i] };
        }
        if (type === "array") {
            a[i] = [i, this[i]];
        }
    }
    return a;
}

function del(start, end) {
    this.splice(start, end - start);
}

function log() {
    console.log(this);
}


function ArrayExtended() {

    let SubArray = SubArrayExtender();

    Object.defineProperty(SubArray.prototype, 'extend', { value: extend, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'append', { value: append, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'isArray', { value: isArray, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insertAll', { value: insertAll, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'replace', { value: replace, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'remove', { value: remove, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'removeAll', { value: removeAll, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'popIndex', { value: pop, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'clear', { value: clear, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'index', { value: index, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'count', { value: count, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sort', { value: sort, enumerable: true, });
    // Object.defineProperty(SubArray.prototype, 'reverse', { value: reverse, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'reverseCopy', { value: reverseCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'copy', { value: copy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'diffIterable', { value: diffIterable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'diffSelf', { value: diffSelf, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'diffBoth', { value: diffBoth, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'equal', { value: equal, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'similar', { value: similar, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'uniques', { value: uniques, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'enqueue', { value: enqueue, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'dequeue', { value: dequeue, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'transpose', { value: transpose, enumerable: true, });
    // Object.defineProperty(SubArray.prototype, 'immutable', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'freeze', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'tuple', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'flatten', { value: flatten, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'flattenCopy', { value: flattenCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'range', { value: range, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'enumerate', { value: enumerate, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'del', { value: del, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'diction', { value: diction, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'toObject', { value: diction, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'subset', { value: subset, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'superset', { value: superset, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'extender', { value: extender, enumerable: true, configurable: true, writable: true });
    Object.defineProperty(SubArray.prototype, 'log', { value: log, enumerable: true, });

    // Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });

    return SubArray;
}


function extendArray() {

    Object.defineProperty(Array.prototype, 'extend', { value: extend, enumerable: true, });
    Object.defineProperty(Array.prototype, 'append', { value: append, enumerable: true, });
    Object.defineProperty(Array.prototype, 'isArray', { value: isArray, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insertAll', { value: insertAll, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(Array.prototype, 'replace', { value: replace, enumerable: true, });
    Object.defineProperty(Array.prototype, 'remove', { value: remove, enumerable: true, });
    Object.defineProperty(Array.prototype, 'removeAll', { value: removeAll, enumerable: true, });
    Object.defineProperty(Array.prototype, 'popIndex', { value: pop, enumerable: true, });
    Object.defineProperty(Array.prototype, 'clear', { value: clear, enumerable: true, });
    Object.defineProperty(Array.prototype, 'index', { value: index, enumerable: true, });
    Object.defineProperty(Array.prototype, 'count', { value: count, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sort', { value: sort, enumerable: true, });
    // Object.defineProperty(Array.prototype, 'reverse', { value: reverse, enumerable: true, });
    Object.defineProperty(Array.prototype, 'reverseCopy', { value: reverseCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'copy', { value: copy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'diffIterable', { value: diffIterable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'diffSelf', { value: diffSelf, enumerable: true, });
    Object.defineProperty(Array.prototype, 'diffBoth', { value: diffBoth, enumerable: true, });
    Object.defineProperty(Array.prototype, 'equal', { value: equal, enumerable: true, });
    Object.defineProperty(Array.prototype, 'similar', { value: similar, enumerable: true, });
    Object.defineProperty(Array.prototype, 'uniques', { value: uniques, enumerable: true, });
    Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    Object.defineProperty(Array.prototype, 'enqueue', { value: enqueue, enumerable: true, });
    Object.defineProperty(Array.prototype, 'dequeue', { value: dequeue, enumerable: true, });
    Object.defineProperty(Array.prototype, 'transpose', { value: transpose, enumerable: true, });
    // Object.defineProperty(Array.prototype, 'immutable', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'freeze', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'tuple', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'flatten', { value: flatten, enumerable: true, });
    Object.defineProperty(Array.prototype, 'flattenCopy', { value: flattenCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'range', { value: range, enumerable: true, });
    Object.defineProperty(Array.prototype, 'enumerate', { value: enumerate, enumerable: true, });
    Object.defineProperty(Array.prototype, 'del', { value: del, enumerable: true, });
    Object.defineProperty(Array.prototype, 'diction', { value: diction, enumerable: true, });
    Object.defineProperty(Array.prototype, 'toObject', { value: diction, enumerable: true, });
    Object.defineProperty(Array.prototype, 'subset', { value: subset, enumerable: true, });
    Object.defineProperty(Array.prototype, 'superset', { value: superset, enumerable: true, });
    Object.defineProperty(Array.prototype, 'extender', { value: extender, enumerable: true, configurable: true, writable: true });
    Object.defineProperty(Array.prototype, 'log', { value: log, enumerable: true, });

    // Object.defineProperty(Array.prototype, 'log', { value: log, enumerable: true, });
}


module.exports.ArrayExtended = ArrayExtended();
module.exports.extendArray = extendArray;
