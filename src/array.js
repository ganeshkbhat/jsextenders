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


/**
 *
 *
 * @param {*} executeFunction
 * @return {*} 
 */
function execute(executeFunction) {
    return executeFunction([...this]);
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} index
 */
function extend(iterable, index) {
    let a = [...this];
    this.clear();
    this.push(...[...a.splice(0, index), ...iterable, ...a]);
}

/**
 *
 *
 * @param {*} count
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function max(count, start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice((!!start) ? start : 0, (!!end) ? end : this.length);
    a.sort();
    if (!count || count === 1) { return a[a.length - 1]; }
    a.splice(0, a.length - count);
    return a;
}


/**
 *
 *
 * @param {*} count
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function maxIndexes(count, start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    a = a.map((i, idx) => { return { index: idx, value: i } });
    a.sort((p, n) => { return p.v - n.v });
    if (!count || count === 1) { a[a.length - 1]; };
    a.splice(0, a.length - count);
    return a;
}

/**
 *
 *
 * @param {*} count
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function min(count, start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    a.sort();
    if (!count || count === 1) { return a[0]; }
    return a.splice(0, count);
}

/**
 *
 *
 * @param {*} count
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function minIndexes(count, start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    a = a.map((i, idx) => { i = { index: idx, value: i }; return i; });
    a.sort((p, n) => { return p.v - n.v; });
    if (!count || count === 1) { a[0]; }
    return a.splice(0, count);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function average(start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    let s = a.reduce((s, i) => { return s + i; });
    return s / a.length;
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function sum(start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    return a.splice((!!start) ? start : 0, (!!end) ? end : this.length).reduce((s, i) => { return s + i; });
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function acosMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => {
            i = Math.acos(i);
            return i;
        });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function cosMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => { i = Math.cos(i); return i; });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function sinMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => { i = Math.sin(i); return i; });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function asinMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => { return Math.asin(i); });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function absMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i) => { i = Math.abs(i); return i; })
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function factorialMap(start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    return a.reduce((s, i) => { return s * i; });
}

/**
 * st,en
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function cosMapCopy(start, end, thisValue) {
    let a = [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    return a.map((i, idx) => { return Math.cos(i); });
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function acosMapCopy(start, end, thisValue) {
    let a = [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    return a.map((i, idx) => { return Math.acos(i); });
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function sinMapCopy(start, end, thisValue) {
    let a = [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    return a.map((i, idx) => { return Math.sin(i); });
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function asinMapCopy(start, end, thisValue) {
    let a = [...this];
    start = (!!start) ? start : 0;
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    return a.map((i, idx) => { i = Math.asin(i); return i; });
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function absMapCopy(start, end, thisValue) {
    let a = [...this];
    start = (!!start) ? start : 0
    end = (!!end) ? end : a.length;
    a = a.splice(start, end);
    return a.map((i) => { i = Math.abs(i); return i; })
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function LN2Map(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {

    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function LN10Map(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {

    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function LOG2EMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {

    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function LOG10EMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {

    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 */
function LN2MapCopy(start, end, thisValue) { }

/**
 *
 *
 * @param {*} start
 * @param {*} end
 */
function LN10MapCopy(start, end, thisValue) { }

/**
 *
 *
 * @param {*} start
 * @param {*} end
 */
function LOG2EMapCopy(start, end, thisValue) { }

/**
 *
 *
 * @param {*} start
 * @param {*} end
 */
function LOG10EMapCopy(start, end, thisValue) { }

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function floorMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => { return Math.floor(i); });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function ceilMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => { return Math.ceil(i); });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function roundMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => { return Math.round(i); });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function floorMapCopy(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        return a.map((i) => { i = Math.floor(i); return i; });
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function ceilMapCopy(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        return a.map((i) => { i = Math.ceil(i); return i; });
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function roundMapCopy(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        return a.map((i) => { i = Math.round(i); return i; });
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function squareMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => { return i * i });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function sqrtMap(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => { return Math.sqrt(i); });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} power
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function powMap(power, start, end, method = "replace", thisValue) {
    if (!power) { throw new Error("Power is not defined"); }
    if (method === "inrange") {
        var a = [];
    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i, idx) => { return Math.pow(i, power); });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} multiplier
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function multiplyMap(multiplier, start, end, method = "replace", thisValue) {
    if (!multiplier) { throw new Error("Multiplier is not defined"); }
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.map((i) => { return (i * ((!!multiplier) ? multiplier : 1)); });
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function squareMapCopy(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        return a.map((i) => { i = Math.pow(i, 2); return i; });
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function sqrtMapCopy(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        return a.map((i) => { i = Math.sqrt(i); return i; });
    }
}

/**
 *
 *
 * @param {*} power
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function powMapCopy(power, start, end, method = "replace", thisValue) {
    if (!power) { throw new Error("Power is not defined"); }
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        return a.map((i) => {
            i = Math.pow(i, power);
            return i;
        });
    }
}

/**
 *
 *
 * @param {*} multiplier
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function multiplyMapCopy(multiplier, start, end, method = "replace", thisValue) {
    if (!multiplier) { throw new Error("Multiplier is not defined"); }
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        return a.map((i) => { i = i * multiplier; return i; });
    }
}

/**
 *
 *
 * @param {*} count
 * @param {*} multiplier
 * @return {*} 
 */
function randomRange(count, multiplier) {
    if (!count) { throw new Error("Count [minimal range number] is not defined"); }
    let a = [];
    for (let i = 0; i < count; i++) {
        a[i] = Math.random() * (multiplier || 1);
    }
    return a;
}

/**
 *
 *
 * @param {*} count
 * @param {*} multiplier
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function fillRandomRange(multiplier, start, end, method = "inrange", thisValue) {
    if (!count) { throw new Error("Count [minimal range number] is not defined"); }
    if (method === "inrange") {
        start = (!!start) ? start : 0
        end = (!!end) ? end : this.length;
        let a = new Array(end - start);
        multiplier = (!!multiplier) ? multiplier : 1.0;
        for (let i = 0; i < a.length; i++) {
            a[i] = Math.random() * multiplier
        }
        let b = [...this];
        b = [...b.splice(0, start), ...a, ...b.splice(end - start, b.length)];
        this.length = 0;
        this.push(...b);
    } else {
        start = (!!start) ? start : 0
        end = (!!end) ? end : this.length;
        let a = new Array(end - start);
        multiplier = (!!multiplier) ? multiplier : 1.0;
        for (let i = 0; i < a.length; i++) {
            a[i] = Math.random() * multiplier
        }
        this.length = 0;
        this.push(...a);
    }
}


/**
 *
 *
 * @param {*} count
 * @param {*} multiplier
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function fillRange(item, start, end, method = "inrange", thisValue) {
    if (!count) { throw new Error("Count [minimal range number] is not defined"); }
    if (method === "inrange") {
        start = (!!start) ? start : 0
        end = (!!end) ? end : this.length;
        let a = new Array(end - start);
        for (let i = 0; i < a.length; i++) {
            a[i] = item
        }
        let b = [...this];
        b = [...b.splice(0, start), ...a, ...b.splice(end - start, b.length)];
        this.length = 0;
        this.push(...b);
    } else {
        start = (!!start) ? start : 0
        end = (!!end) ? end : this.length;
        let a = new Array(end - start);
        for (let i = 0; i < a.length; i++) {
            a[i] = item
        }
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} item
 */
function append(item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    this.push(item);
}

/**
 *
 *
 * @param {*} iterable
 * @return {*} 
 */
function isArray(iterable) {
    iterable = (!!iterable) ? iterable : this;
    return Array.isArray(iterable);
}

/**
 *
 *
 * @param {*} index
 * @param {*} item
 */
function insert(index, item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    let a = [...this];
    a = [...a.splice(0, index - 1), item, ...a];
    this.length = 0;
    this.push(a);
}

/**
 *
 *
 * @param {*} index
 * @param {*} array
 * array or item 
 */
function insertAll(index, array, thisValue) {
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    if (!array) { throw new Error("Array is not defined"); }
    let a = [...this];
    a = [...a.splice(0, index), ...array, ...a];
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} index
 * @param {*} item
 */
function insertCopy(index, item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
}

/**
 *
 *
 * @param {*} index
 * @param {*} array
 * array or item 
 */
function insertAllCopy(index, array, thisValue) {
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    if (!array) { throw new Error("Array is not defined"); }
}

/**
 *
 *
 * @param {*} item
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function count(item, start, end, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    return [...this].splice((!!start) ? start : 0, (!!end) ? end : this.length).filter((i) => i === item).length;
}

/**
 * 
 *
 * @param {*} index
 * @param {*} item
 */
function replace(index, item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    let a = [...this];
    a[index] = item;
    this.length = 0;
    this.push(a);
}

/**
 *
 *
 * @param {*} item
 * @param {*} replaceValue
 * @param {*} start
 * @param {*} end
  * @param {*} method
 */
function replaceAll(item, replaceValue, start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        while (!!a.includes(item)) {
            let i = a.indexOf(item);
            (i !== -1) ? (a[i] = replaceValue) : a[i];
        }
        let b = [...this];
        b = [...b.splice(0, start), ...a, ...b.splice(end, b.length)];
        this.length = 0;
        this.push(...b);
    }

}

/**
 * 
 *
 * @param {*} item
 */
function remove(item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    let i = this.indexOf(item);
    (i !== -1) ? this.splice(i, 1) : this;
}

/**
 * 
 *
 * @param {*} item
 * @param {*} start
 * @param {*} end
 * @param {*} method
 */
function removeAll(item, start, end, method = "replace", thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        while (!!a.includes(item)) {
            let i = a.indexOf(item);
            (i !== -1) ? a.splice(i, 1) : a;
        }
        let b = [...this];
        b = [...b.splice(0, start), ...a, ...b.splice(end, b.length)];
        this.length = 0;
        this.push(...b);
    }
}


/**
 * 
 *
 * @param {*} index
 * @param {*} item
 */
function replaceCopy(index, item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index && index !== 0) { throw new Error("Index is not defined"); }

}

/**
 *
 *
 * @param {*} item
 * @param {*} replaceValue
 * @param {*} start
 * @param {*} end
 * @param {*} method
 */
function replaceAllCopy(item, replaceValue, start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {

    }
}

/**
 * 
 *
 * @param {*} item
 */
function removeCopy(item, thisValue) {

}

/**
 * 
 *
 * @param {*} item
 * @param {*} start
 * @param {*} end
 * @param {*} method
 */
function removeAllCopy(item, start, end, method = "replace", thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (method === "inrange") {

    } else {

    }
}

/**
 * 
 *
 * @param {*} index
 */
function pop(index, thisValue) {
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    return this.splice(index, 1)[0];
}

/**
 * 
 *
 * @param {*} start
 * @param {*} end
 */
function clear(start, end) {
    this.splice((!!start) ? start : 0, (!!end) ? end : this.length);
}

/**
 *
 *
 * @param {*} item
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function index(item, start, end, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if ((!start && start !== 0) && !end) { return this.indexOf(item); }
    if (!!start && !!end) { return [...this.splice(start, (end < this.length) ? end - start : this.length)].map((i, idx) => { return { "item": i, "index": idx }; }).filter((i) => { return i.item === item; }); }
    if (!!start && !end) { return [...this.splice(0, (start < this.length) ? start : this.length)].map((i, idx) => { return { "item": i, "index": idx }; }).filter((i) => { return i.item === item; }); }
    return [...this].map((i, idx) => { return { "item": i, "index": idx } }).filter((i) => { return i.item === item; });
}

/**
 *
 *
 * @param {*} [key=null]
 * @param {boolean} [reverse=false]
 * // sort(key=None, reverse=False) {}
 */
function pysort(key = null, reverse = false) {
    // if (!!key && typeof key === "function") { 
    //     let a = [...this].sort(key);
    // } else {
    //     let a = [...this].sort((c, d) => { return c < b })
    // }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function reverser(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        a = a.reverse();
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function reverseCopy(start, end, thisValue) {
    return [...this].splice((!!start) ? start : 0, (!!end) ? end : this.length).reverse();
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function copy(start, end, thisValue) {
    return [...this].splice((!!start) ? start : 0, (!!end) ? end : this.length);
}

/**
 *
 *
 * @param {*} mapFunction
 * @param {*} arg
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function diction(mapFunction, arg, start, end, thisValue) {
    if (!mapFunction || typeof mapFunction !== "function") { mapFunction = (i) => i; }
    if (!!mapFunction && typeof mapFunction === "function") return mapFunction(Object.assign({}, [...this]), arg);
    return Object.assign({}, [...this]);
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function subset(iterable, start, end, thisValue) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = [], len = this.length;
    for (let i = 0; i < len; i++) {
        if (!iterable.includes(this[i])) return false;
    }
    return true;
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function superset(iterable, start, end, thisValue) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = [], len = iterable.length;
    for (let i = 0; i < len; i++) {
        if (!this.includes(iterable[i])) return false;
    }
    return true;
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function diffIterable(iterable, start, end, thisValue) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = [], len = iterable.length;
    for (let i = 0; i < len; i++) {
        (!this.includes(iterable[i])) ? a.push({ index: i, value: iterable[i] }) : a;
    }
    return a;
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function diffSelf(iterable, start, end, thisValue) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = [], len = this.length;
    for (let i = 0; i < len; i++) {
        (!this.includes(iterable[i])) ? a.push({ index: i, value: this[i] }) : a;
    }
    return a;
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function diffBoth(iterable, start, end, thisValue) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = { "self": [], "iterable": [] };
    a["self"] = this.diffSelf(iterable, start, end);
    a["iterable"] = this.diffIterable(iterable, start, end);
    return a;
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function equal(iterable, start, end, thisValue) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = [...this];
    a.splice(0, (!!start) ? start : 0);
    a.splice((!!end) ? end : [...this].length, [...this].length);
    iterable.splice(0, (!!start) ? start : 0);
    iterable.splice((!!end) ? end : iterable.length, iterable.length);
    return JSON.stringify(a) === JSON.stringify(iterable);
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function similar(iterable, start, end, thisValue) {
    let a = [...this];
    a.splice(0, (!!start) ? start : 0);
    a.splice((!!end) ? end : [...this].length, [...this].length);
    iterable.splice(0, (!!start) ? start : 0);
    iterable.splice((!!end) ? end : iterable.length, iterable.length);
    a.sort();
    iterable.sort();
    return JSON.stringify(a) === JSON.stringify(iterable);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function uniques(start, end, method = "replace", thisValue) {
    let a = [...this];
    let b = [...this];
    let diff = ((!!end) ? end : a.length) - ((!!start) ? start : 0);
    a.splice(0, (!!start) ? start : 0);
    a.splice((0, !!end) ? diff : a.length);
    let c = Array.from(new Set(a));
    if (method === "inrange") {
        if (!start && !end) {
            b = [...c];
        } else {
            b = [...b.splice(0, start), ...c, ...b.splice(end, b.length)];
        }
    } else {
        this.length = 0;
        b = [...c];
    }
    this.push(...b);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function uniquesCopy(start, end, method = "replace", thisValue) {
    let a = [...this];
    let b = [...this];
    let diff = ((!!end) ? end : a.length) - ((!!start) ? start : 0);
    a.splice(0, (!!start) ? start : 0);
    a.splice((0, !!end) ? diff : a.length);
    let c = Array.from(new Set(a));

    if (method === "inrange") {
        if (!start && !end) {
            b = [...c];
        } else {
            b = [...b.splice(0, start), ...c, ...b.splice(end, b.length)];
        }
    } else {
        b = [...c];
    }
    return b;
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function duplicates(start, end, method = "range", thisValue) {
    let a = [...this], noduplicatesarray = this.uniquesCopy(), c;
    for (let i = 0; i < noduplicatesarray.length; i++) {
        c = a.indexOf(noduplicatesarray[i]);
        a[c] = (c >= 0) ? undefined : a[c];
    }
    a = a.filter((a) => { return a !== undefined });
    if (method === "inrange") {
        let b = [...this];
        a = [...b.splice(0, start), ...a, ...b.splice(end, this.length)];

    }
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function duplicatesCopy(start, end, thisValue) {
    let a = [...this], noduplicatesarray = [...this]
    noduplicatesarray.uniques();
    for (let i = 0; i < noduplicatesarray.length; i++) {
        let c = a.indexOf(noduplicatesarray[i]);
        a[c] = (c !== -1) ? undefined : a[c];
    }
    return a.filter((a) => a !== undefined);
}

/**
 *
 *
 * @param {*} item
 */
function enqueue(item) {
    if (!item) { throw new Error("Item is not defined"); }
    this.push(item);
}

/**
 *
 *
 * @return {*} 
 */
function dequeue() {
    return this.shift();
}

/**
 *
 *
 * @param {*} iterator
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function transpose(iterator, start, end, method = "replace", thisValue) {
    iterator = (!!iterator) ? iterator : [...this];
    iterator.reverser();
    iterator.map((item) => {
        if (Array.isArray(item)) {
            item = transpose(item);
        } else {
            item = item
        };
        return item;
    });

    if (method === "inrange") {

    } else {
        this.length = 0;
        this.push(...iterator);
    }

}

/**
 *
 *
 * @param {*} iterator
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function transposeCopy(iterator, start, end, thisValue) {
    iterator = (!!iterator) ? iterator : [...this];
    iterator.reverser();
    iterator.map((item) => {
        if (Array.isArray(item)) {
            item = transpose(item);
        } else {
            item = item
        };
        return item;
    });
    return iterator;
}

/**
 *
 *
 */
function immutable(thisValue) {
    Object.freeze(this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function flatten(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this];
        let diff = ((!!end) ? end : a.length) - ((!!start) ? start : 0);
        a.splice(0, start);
        a.splice(diff, a.length);
        a = a.splice((!!start) ? start : 0, (!!end) ? end : a.length);
        let len = a.length;
        for (let i = 0; i < len; i++) {
            if (!!this.isArray(a[i])) {
                let idlen = a[i].length;
                a = [...a.splice(0, i), ...a[0], ...a.splice(1, a.length)];
                i = i + idlen;
            }
        }
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} method // replace, inrange 
 */
function flattenDeep(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = [...this].flat(Infinity);
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function flattenCopy(start, end, thisValue) {
    return [...this].flatMap(num => num);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function flattenDeepCopy(start, end, thisValue) {
    return [...this].flat(Infinity);
}

/**
 *
 *
 * @param {*} start
 * @param {*} stop
 * @param {*} step
 * @return {*} 
 */
function range(start, stop, step) {
    if (((!start && !stop) || !start) && (start !== 0) && (stop !== 0)) { throw new Error("Start [minimal range end number] is not defined"); }
    let a = [];
    if ((!!start && !stop) && stop !== 0) {
        for (let i = 0; i < start; i += (!!step) ? step : 1) {
            a[i] = i;
        }
    } else if (!!start && !!stop) {
        for (let i = start; i < stop; i += (!!step) ? step : 1) {
            a[i] = i;
        }
    }
    return a;
}

/**
 *
 *
 * @param {string} [type="object"]
 * @return {*} 
 */
function enumerate(type = "object", thisValue) {
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

/**
 *
 *
 * @param {*} start
 * @param {*} end
 */
function del(start, end, thisValue) {
    if (!end) {
        end = (!!start) ? start : this.length;
        start = 0;
    }
    this.splice(start, end - start);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 */
function log(start, end, message = "", func = console.log, thisValue) {
    func(message + JSON.stringify([...this]));
}

// // _ lodash Functions
// // Array

// function chunk() { }
// function compact() { }
// concatInPlace // function concat() { }
// diffBoth => // function difference() { }
// diffSelf =>  // function differenceBy() { }
// diff =>  // function differenceWith() { }
// del, remove =>  // function drop() { }
// del, remove =>  // function dropRight() { }
// function dropRightWhile() { }
// function dropWhile() { }
// function fill() { }
// function findIndex() { }
// function findLastIndex() { }
// function first -> head() { }
// flatten, flattenCopy => // function flatten() { }
// flattenDeep, flattenDeepCopy => function flattenDeep() { }
// function flattenDepth() { }
// function fromPairs() { }
// function head() { }
// function indexOf() { }
// function initial() { }
// function intersection() { }
// function intersectionBy() { }
// function intersectionWith() { }
// function join() { }
// function last() { }
// function lastIndexOf() { }
// function nth() { }
// function pull() { }
// function pullAll() { }
// function pullAllBy() { }
// function pullAllWith() { }
// function pullAt() { }
// remove => // function remove() { }
// function reverse() { }
// function slice() { }
// pysort
// function sortedIndex() { }
// function sortedIndexBy() { }
// function sortedIndexOf() { }
// function sortedLastIndex() { }
// function sortedLastIndexBy() { }
// function sortedLastIndexOf() { }
// function sortedUniq() { }
// function sortedUniqBy() { }
// function tail() { }
// function take() { }
// function takeRight() { }
// function takeRightWhile() { }
// function takeWhile() { }
// function union() { }
// function unionBy() { }
// function unionWith() { }
// unique, uniqueCopy => // function uniq() { }
// function uniqBy() { }
// function uniqWith() { }
// function unzip() { }
// function unzipWith() { }
// function without() { }
// function xor() { }
// function xorBy() { }
// function xorWith() { }
// function zip() { }
// function zipObject() { }
// function zipObjectDeep() { }
// function zipWith() { }


// // _ lodash Functions
// // Collection

// function countBy() { }
// function each -> forEach() { }
// function eachRight -> forEachRight() { }
// function every() { }
// function filter() { }
// function find() { }
// function findLast() { }
// function flatMap() { }
// function flatMapDeep() { }
// function flatMapDepth() { }
// function forEach() { }
// function forEachRight() { }
// function groupBy() { }
// function includes() { }
// function invokeMap() { }
// function keyBy() { }
// function map() { }
// function orderBy() { }
// function partition() { }
// function reduce() { }
// function reduceRight() { }
// function reject() { }
// function sample() { }
// function sampleSize() { }
// function shuffle() { }
// function size() { }
// function some() { }
// function sortBy() { }

function ArrayExtended() {

    let SubArray = SubArrayExtender();

    Object.defineProperty(SubArray.prototype, 'execute', { value: execute, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'extend', { value: extend, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'append', { value: append, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'isArray', { value: isArray, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insertAll', { value: insertAll, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'replace', { value: replace, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'remove', { value: remove, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'removeAll', { value: removeAll, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insertAllCopy', { value: insertAllCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insertCopy', { value: insertCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'replaceCopy', { value: replaceCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'removeCopy', { value: removeCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'removeAllCopy', { value: removeAllCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'popIndex', { value: pop, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'clear', { value: clear, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'index', { value: index, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'count', { value: count, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'pysort', { value: pysort, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'reverser', { value: reverser, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'reverseCopy', { value: reverseCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'copy', { value: copy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'diffIterable', { value: diffIterable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'diffSelf', { value: diffSelf, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'diffBoth', { value: diffBoth, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'equal', { value: equal, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'similar', { value: similar, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'uniques', { value: uniques, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'uniquesCopy', { value: uniquesCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'duplicatesCopy', { value: duplicatesCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'enqueue', { value: enqueue, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'dequeue', { value: dequeue, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'transpose', { value: transpose, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'transposeCopy', { value: transposeCopy, enumerable: true, });
    // Object.defineProperty(SubArray.prototype, 'immutable', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'freeze', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'tuple', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'flatten', { value: flatten, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'flattenCopy', { value: flattenCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'flattenDeep', { value: flattenDeep, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'flattenDeepCopy', { value: flattenDeepCopy, enumerable: true, });
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
    Object.defineProperty(SubArray.prototype, 'maxIndexes', { value: maxIndexes, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'min', { value: min, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'minIndexes', { value: minIndexes, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'average', { value: average, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sum', { value: sum, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'factorialMap', { value: factorialMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'acosMap', { value: acosMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sinMap', { value: sinMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'asinMap', { value: asinMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'absMap', { value: absMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'cosMap', { value: cosMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'acosMapCopy', { value: acosMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sinMapCopy', { value: sinMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'asinMapCopy', { value: asinMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'absMapCopy', { value: absMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'cosMapCopy', { value: cosMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LN2MapCopy', { value: LN2MapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LN10MapCopy', { value: LN10MapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LOG2EMapCopy', { value: LOG2EMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LOG10EMapCopy', { value: LOG10EMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LN2MapCopy', { value: LN2MapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LN10MapCopy', { value: LN10MapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LOG2EMapCopy', { value: LOG2EMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'LOG10EMapCopy', { value: LOG10EMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'floorMap', { value: floorMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'ceilMap', { value: ceilMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'roundMap', { value: roundMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'squareMap', { value: squareMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sqrtMap', { value: sqrtMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'powMap', { value: powMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'multiplyMap', { value: multiplyMap, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'floorMapCopy', { value: floorMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'ceilMapCopy', { value: ceilMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'roundMapCopy', { value: roundMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'squareMapCopy', { value: squareMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'sqrtMapCopy', { value: sqrtMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'powMapCopy', { value: powMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'multiplyMapCopy', { value: multiplyMapCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'randomRange', { value: randomRange, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'fillRandomRange', { value: fillRandomRange, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'fillRange', { value: fillRange, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'replaceAll', { value: replaceAll, enumerable: true, });

    // Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });

    return SubArray;
}


function extendArray() {

    Object.defineProperty(Array.prototype, 'execute', { value: execute, enumerable: true, });
    Object.defineProperty(Array.prototype, 'extend', { value: extend, enumerable: true, });
    Object.defineProperty(Array.prototype, 'append', { value: append, enumerable: true, });
    Object.defineProperty(Array.prototype, 'isArray', { value: isArray, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insertAll', { value: insertAll, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(Array.prototype, 'replace', { value: replace, enumerable: true, });
    Object.defineProperty(Array.prototype, 'remove', { value: remove, enumerable: true, });
    Object.defineProperty(Array.prototype, 'removeAll', { value: removeAll, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insertAllCopy', { value: insertAllCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insertCopy', { value: insertCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'replaceCopy', { value: replaceCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'removeCopy', { value: removeCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'removeAllCopy', { value: removeAllCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'popIndex', { value: pop, enumerable: true, });
    Object.defineProperty(Array.prototype, 'clear', { value: clear, enumerable: true, });
    Object.defineProperty(Array.prototype, 'index', { value: index, enumerable: true, });
    Object.defineProperty(Array.prototype, 'count', { value: count, enumerable: true, });
    Object.defineProperty(Array.prototype, 'pysort', { value: pysort, enumerable: true, });
    Object.defineProperty(Array.prototype, 'reverser', { value: reverser, enumerable: true, });
    Object.defineProperty(Array.prototype, 'reverseCopy', { value: reverseCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'copy', { value: copy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'diffIterable', { value: diffIterable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'diffSelf', { value: diffSelf, enumerable: true, });
    Object.defineProperty(Array.prototype, 'diffBoth', { value: diffBoth, enumerable: true, });
    Object.defineProperty(Array.prototype, 'equal', { value: equal, enumerable: true, });
    Object.defineProperty(Array.prototype, 'similar', { value: similar, enumerable: true, });
    Object.defineProperty(Array.prototype, 'uniques', { value: uniques, enumerable: true, });
    Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });
    Object.defineProperty(Array.prototype, 'uniquesCopy', { value: uniquesCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'duplicatesCopy', { value: duplicatesCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'enqueue', { value: enqueue, enumerable: true, });
    Object.defineProperty(Array.prototype, 'dequeue', { value: dequeue, enumerable: true, });
    Object.defineProperty(Array.prototype, 'transpose', { value: transpose, enumerable: true, });
    Object.defineProperty(Array.prototype, 'transposeCopy', { value: transposeCopy, enumerable: true, });
    // Object.defineProperty(Array.prototype, 'immutable', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'freeze', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'tuple', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'flatten', { value: flatten, enumerable: true, });
    Object.defineProperty(Array.prototype, 'flattenCopy', { value: flattenCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'flattenDeep', { value: flattenDeep, enumerable: true, });
    Object.defineProperty(Array.prototype, 'flattenDeepCopy', { value: flattenDeepCopy, enumerable: true, });
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
    Object.defineProperty(Array.prototype, 'maxIndexes', { value: maxIndexes, enumerable: true, });
    Object.defineProperty(Array.prototype, 'min', { value: min, enumerable: true, });
    Object.defineProperty(Array.prototype, 'minIndexes', { value: minIndexes, enumerable: true, });
    Object.defineProperty(Array.prototype, 'average', { value: average, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sum', { value: sum, enumerable: true, });
    Object.defineProperty(Array.prototype, 'factorialMap', { value: factorialMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'acosMap', { value: acosMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sinMap', { value: sinMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'asinMap', { value: asinMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'absMap', { value: absMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'cosMap', { value: cosMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'acosMapCopy', { value: acosMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sinMapCopy', { value: sinMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'asinMapCopy', { value: asinMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'absMapCopy', { value: absMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'cosMapCopy', { value: cosMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LN2MapCopy', { value: LN2MapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LN10MapCopy', { value: LN10MapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LOG2EMapCopy', { value: LOG2EMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LOG10EMapCopy', { value: LOG10EMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LN2MapCopy', { value: LN2MapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LN10MapCopy', { value: LN10MapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LOG2EMapCopy', { value: LOG2EMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'LOG10EMapCopy', { value: LOG10EMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'floorMap', { value: floorMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'ceilMap', { value: ceilMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'roundMap', { value: roundMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'squareMap', { value: squareMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sqrtMap', { value: sqrtMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'powMap', { value: powMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'multiplyMap', { value: multiplyMap, enumerable: true, });
    Object.defineProperty(Array.prototype, 'floorMapCopy', { value: floorMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'ceilMapCopy', { value: ceilMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'roundMapCopy', { value: roundMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'squareMapCopy', { value: squareMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'sqrtMapCopy', { value: sqrtMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'powMapCopy', { value: powMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'multiplyMapCopy', { value: multiplyMapCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'randomRange', { value: randomRange, enumerable: true, });
    Object.defineProperty(Array.prototype, 'fillRandomRange', { value: fillRandomRange, enumerable: true, });
    Object.defineProperty(Array.prototype, 'fillRange', { value: fillRange, enumerable: true, });
    Object.defineProperty(Array.prototype, 'replaceAll', { value: replaceAll, enumerable: true, });

    // Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });

}

module.exports.ArrayExtended = ArrayExtended();
module.exports.extendArray = extendArray;
