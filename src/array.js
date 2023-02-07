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

function max(count) {
    if (!count) { throw new Error("Count is not defined"); }
}

function maxesIndexes(count) {
    if (!count) { throw new Error("Count is not defined"); }
}

function min(count) {
    if (!count) { throw new Error("Count is not defined"); }
}

function minsIndexes(count) {
    if (!count) { throw new Error("Count is not defined"); }
}

function average() { }

function sum() { }

function factorialMap() { }

function acosMap() { }

function sinMap() { }

function asinMap() { }

function absMap() { }

function cosMap() { }

function factorialMap() { }

function LN2Map() { }

function LN10Map() { }

function LOG2EMap() { }

function LOG10EMap() { }

function sinMap() { }

function floorMap() { }

function ceilMap() { }

function roundMap() { }

function squareMap() { }

function sqrtMap() { }

function powMap() { }

function multiplyMap() { }

function randomRange(start, end, step) { }

function append(item) {
    if (!item) { throw new Error("Item is not defined"); }
    this.push(item);
}

function isArray() {
    return Object.prototype.toString.call(this) === '[object Array]';
}

function insert(index, item) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index) { throw new Error("Index is not defined"); }
    this.splice(index, 0, item);
}

function insertAll(index, array /* array or item */) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!array) { throw new Error("Array is not defined"); }
    this.splice(index, 0, ...array);
}

function count(item) {
    if (!item) { throw new Error("Item is not defined"); }
    return [...this].filter((i) => i === item).length;
}

function replace(index, item) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index) { throw new Error("Index is not defined"); }
    this.splice(index, 1, item);
}

function remove(item) {
    if (!item) { throw new Error("Item is not defined"); }
    let i = this.indexOf(item);
    (i !== -1) ? this.splice(i, 1) : this;
}

function removeAll(item) {
    if (!item) { throw new Error("Item is not defined"); }
    this.map((i) => { return (i === item) ? i : undefined });
    this.filter((r) => { return r !== undefined });
}

function pop(index) {
    if (!index) { throw new Error("Index is not defined"); }
    this.splice(index, 1);
}

function clear() {
    this.splice(0, this.length);
}

function index(item, start, end) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!start && !end) { return this.indexOf(item); }
    if (!!start && !!end) { return [...this.splice(start, (end < this.length) ? end - start : this.length - 1)].map((i, idx) => { return { "item": i, "index": idx }; }).filter((i) => { return i.item === item; }); }
    if (!!start && !end) { return [...this.splice(0, (start < this.length) ? start : this.length - 1)].map((i, idx) => { return { "item": i, "index": idx }; }).filter((i) => { return i.item === item; }); }
    return [...this].map((i, idx) => { return { "item": i, "index": idx } }).filter((i) => { return i.item === item; });
}

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
    if (!mapFunction || typeof mapFunction !== "function") { throw new Error("Mapper function is not defined"); }
    if (!!mapFunction && typeof mapFunction === "function") return mapFunction(Object.assign({}, [...this]), arg);
    return Object.assign({}, [...this]);
}

function subset(iterable) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = [], len = this.length;
    for (let i = 0; i < len; i++) {
        if (!iterable.includes(this[i])) return false;
    }
    return true;
}

function superset(iterable) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = [], len = iterable.length;
    for (let i = 0; i < len; i++) {
        if (!this.includes(iterable[i])) return false;
    }
    return true;
}

function diffIterable(iterable) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = [], len = iterable.length;
    for (let i = 0; i < len; i++) {
        (!this.includes(iterable[i])) ? a.push(iterable[i]) : a;
    }
    return a;
}

function diffSelf(iterable) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = [], len = this.length;
    for (let i = 0; i < len; i++) {
        (!iterable.includes(this[i])) ? a.push(this[i]) : a;
    }
    return a;
}

function diffBoth(iterable) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = { "self": [], "iterable": [] };
    a["self"] = this.diffSelf(this, iterable);
    a["iterable"] = this.diffIterable(this, iterable);
    return a;
}

function equal(iterable) {
    return JSON.stringify([...this]) === JSON.stringify(iterable);
}

function similar(iterable) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    return JSON.stringify([...this].sort()) === JSON.stringify(iterable.sort());
}

function uniques() {
    return Array.from(new Set([...this]));
}

function duplicates() {
    let arr = [...this], noduplicatesarray = this.uniques();
    for (let i = 0; i < noduplicatesarray.length; i++) {
        let c = arr.indexOf(noduplicatesarray[i]);
        arr[c] = (c !== -1) ? undefined : arr[c];
    }
    return arr.filter((a) => a !== undefined);
}

function enqueue(item) {
    if (!item) { throw new Error("Item is not defined"); }
    this.push(item);
}

function dequeue() {
    return this.shift();
}

function transpose() {
    this.reverse();
    this.map(function (item) {
        (Object.prototype.toString.call(item) === '[object Array]') ? item.reverse() : item;
    });
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
    if (!start) { throw new Error("Start [minimal range end number] is not defined"); }
    let a = [];
    for (let i = (!!stop) ? start : 0; i <= stop; i += (!!step) ? step : 1) { a[i] = i; }
    return a;
}

/**
 *
 *
 * @param {string} [type="object"] Options: object, array
 * @return {*} 
 */
function enumerate(type = "object") {
    if (!["object", "array"].includes(type)) { throw new Error("Type not defined"); };
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
    if (!start) { throw new Error("Start [minimal range end number] is not defined"); }
    if (!end) {
        start = 0;
        end = start;
    }
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
    Object.defineProperty(SubArray.prototype, 'max', { value: max, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'maxesIndexes', { value: maxesIndexes, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'min', { value: min, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'minsIndexes', { value: minsIndexes, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'average', { value: average, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sum', { value: sum, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'factorialMap', { value: factorialMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'acosMap', { value: acosMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sinMap', { value: sinMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'asinMap', { value: asinMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'absMap', { value: absMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'cosMap', { value: cosMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'factorialMap', { value: factorialMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LN2Map', { value: LN2Map, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LN10Map', { value: LN10Map, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LOG2EMap', { value: LOG2EMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LOG10EMap', { value: LOG10EMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'floorMap', { value: floorMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'ceilMap', { value: ceilMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'roundMap', { value: roundMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'squareMap', { value: squareMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sqrtMap', { value: sqrtMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'powMap', { value: powMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'multiplyMap', { value: multiplyMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'randomRange', { value: randomRange, enumerable: true, });

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
    Object.defineProperty(Array.prototype, 'max', { value: max, enumerable: true, });
    Object.defineProperty(Array.prototype, 'maxesIndexes', { value: maxesIndexes, enumerable: true, });
    Object.defineProperty(Array.prototype, 'min', { value: min, enumerable: true, });
    Object.defineProperty(Array.prototype, 'minsIndexes', { value: minsIndexes, enumerable: true, });
    Object.defineProperty(Array.prototype, 'average', { value: average, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sum', { value: sum, enumerable: true, });
    Object.defineProperty(Array.prototype, 'factorialMap', { value: factorialMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'acosMap', { value: acosMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sinMap', { value: sinMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'asinMap', { value: asinMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'absMap', { value: absMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'cosMap', { value: cosMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'factorialMap', { value: factorialMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LN2Map', { value: LN2Map, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LN10Map', { value: LN10Map, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LOG2EMap', { value: LOG2EMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LOG10EMap', { value: LOG10EMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'floorMap', { value: floorMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'ceilMap', { value: ceilMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'roundMap', { value: roundMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'squareMap', { value: squareMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sqrtMap', { value: sqrtMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'powMap', { value: powMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'multiplyMap', { value: multiplyMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'randomRange', { value: randomRange, enumerable: true, });

    // Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });

}

module.exports.ArrayExtended = ArrayExtended();
module.exports.extendArray = extendArray;
