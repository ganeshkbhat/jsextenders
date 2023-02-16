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
function execute(executeFunction, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    return executeFunction(a);
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} index
 */
function extend(iterable, index, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    this.clear();
    this.push(...[...a.splice(0, index), ...iterable, ...a]);
}

/**
 *
 *
 * @param {*} count
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
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
 * @param {*} thisValue
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
 * @param {*} thisValue
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
 * @param {*} thisValue
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
 * @param {*} thisValue
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
 * @param {*} thisValue
 * @return {*} 
 */
function sum(start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    return a.splice((!!start) ? start : 0, (!!end) ? end : this.length).reduce((s, i) => { return s + i; });
}

/**
 *
 *
 * @param {*} i
 * @param {string} [fn] Name of the Javascript Math function
 * @return {*} i // modified
 */
function mathswitch(i, fname, callback) {
    switch (fname) {
        case "abs":
            i = Math.abs(i);
            break;
        case "acos":
            i = Math.acos(i);
            break;
        case "acosh":
            i = Math.acosh(i);
            break;
        case "asin":
            i = Math.asin(i);
            break;
        case "asinh":
            i = Math.asinh(i);
            break;
        case "atan":
            i = Math.atan(i);
            break;
        case "atan2":
            i = Math.atan2(...i);
            break;
        case "atanh":
            i = Math.atanh(i);
            break;
        case "cbrt":
            i = Math.cbrt(i);
            break;
        case "ceil":
            i = Math.ceil(i);
            break;
        case "clz32":
            i = Math.clz32(i);
            break;
        case "cos":
            i = Math.cos(i);
            break;
        case "cosh":
            i = Math.cosh(i);
            break;
        case "exp":
            i = Math.exp(i);
            break;
        case "expm1":
            i = Math.expm1(i);
            break;
        case "floor":
            i = Math.floor(i);
            break;
        case "fround":
            i = Math.fround(i);
            break;
        case "log":
            i = Math.log(i);
            break;
        case "hypot":
            i = Math.hypot(...i);
            break;
        case "imul":
            i = Math.imul(...i);
            break;
        case "log10":
            i = Math.log10(i);
            break;
        case "log1p":
            i = Math.log1p(i);
            break;
        case "log2e":
            i = Math.LOG2E;
            break;
        case "log10e":
            i = Math.LOG10E;
            break;
        case "ln2":
            i = Math.LN2(i);
            break;
        case "ln10":
            i = Math.LN10(i);
            break;
        case "max":
            i = Math.max(...i);
            break;
        case "min":
            i = Math.min(...i);
            break;
        case "pow":
            i = Math.pow(...i);
            // Math.pow(i, power);
            break;
        case "random":
            i = Math.random();
            break;
        case "round":
            i = Math.round(i);
            break;
        case "sign":
            i = Math.sign(i);
            break;
        case "sin":
            i = Math.sin(i);
            break;
        case "sinh":
            i = Math.sinh(i);
            break;
        case "sqrt":
            i = Math.sqrt(i);
            break;
        case "tan":
            i = Math.tan(i);
            break;
        case "tanh":
            i = Math.tanh(i);
            break;
        case "trunc":
            i = Math.trunc(i);
            break;
        case "acos":
            i = Math.acos(i);
            break;
        default:
            i = ((!!callback) ? callback(i) : function (i) { return i; })(i);
    }
    return i;
}

/**
 *
 *
 * @param {string} [type="abs"]
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"]
 * @param {*} thisValue
 */
function MapperCopy(type = "abs", start, end, method = "replace", thisValue, callback, ...args) {
    if (!callback) {
        callback = (a, ...args) => { return a.map((i, idx) => { return mathswitch((!!args && !!args.length) ? [i, ...args] : i, type); }); }
    }
    if (method === "inrange") {
        let a = (!!thisValue) ? [...thisValue] : [...this];
        let b = (!!thisValue) ? [...thisValue] : [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        args = (!!args) ? args : [];
        a = callback(a, ...args);
        b = [...b.splice(0, start), ...a, ...b.splice(end - start + 1, b.length)];
        return b;
    } else {
        let a = (!!thisValue) ? [...thisValue] : [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        args = (!!args) ? args : [];
        a = callback(a, ...args);
        return a;
    }
}

/**
 *
 *
 * @param {string} [type="abs"]
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"]
 * @param {*} thisValue
 */
function Mapper(type = "abs", start, end, method = "replace", thisValue, callback, ...args) {
    return MapperCopy(type, start, end, method, thisValue || this, callback, ...args);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function acosMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("acos", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function cosMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("cos", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function sinMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("sin", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function asinMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("asin", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function absMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("abs", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
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
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function cosMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("cos", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function acosMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("acos", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function sinMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("sin", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function asinMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("asin", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function absMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("abs", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function LN2Map(start, end, method = "replace", thisValue) {
    let a = MapperCopy("LN2", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function LN10Map(start, end, method = "replace", thisValue) {
    let a = MapperCopy("LN10", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function LOG2EMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("log2e", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function LOG10EMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("log10e", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 */
function LN2MapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("LN2", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 */
function LN10MapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("LN10", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 */
function LOG2EMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("log2e", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 */
function LOG10EMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("log10e", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function floorMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("floor", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function ceilMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("ceil", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function roundMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("round", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function floorMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("floor", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function ceilMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("ceil", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function roundMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("round", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function squareMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("pow", start, end, method, thisValue || this, null, 2);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function sqrtMap(start, end, method = "replace", thisValue) {
    let a = MapperCopy("sqrt", start, end, method, thisValue || this);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} power
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function powMap(power, start, end, method = "replace", thisValue) {
    if (!power) { throw new Error("Power is not defined"); }
    let a = MapperCopy("pow", start, end, method, thisValue || this, null, power);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} multiplier
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function multiplyMap(multiplier, start, end, method = "replace", thisValue) {
    if (!multiplier) { throw new Error("Multiplier is not defined"); }
    let a = MapperCopy("pow", start, end, method, thisValue || this, null, multiplier);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end 
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function squareMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("pow", start, end, method, thisValue || this, null, 2);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function sqrtMapCopy(start, end, method = "replace", thisValue) {
    return MapperCopy("sqrt", start, end, method, thisValue || this);
}

/**
 *
 *
 * @param {*} power
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function powMapCopy(power, start, end, method = "replace", thisValue) {
    if (!power) { throw new Error("Power is not defined"); }
    return MapperCopy("pow", start, end, method, thisValue || this, null, power);
}

/**
 *
 *
 * @param {*} multiplier
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function multiplyMapCopy(multiplier, start, end, method = "replace", thisValue) {
    if (!multiplier) { throw new Error("Multiplier is not defined"); }
    return MapperCopy("pow", start, end, method, thisValue || this, null, multiplier);
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
    let a = MapperCopy("random", 0, count, "replace", this, null, multiplier);
    return a;
}

/**
 *
 *
 * @param {*} multiplier
 * @param {*} start
 * @param {*} end
 * @param {string} [method="inrange"] // replace, inrange
 * @param {*} thisValue
 */
function fillRandomRange(multiplier, start, end, method = "inrange", thisValue) {
    if (!count) { throw new Error("Count [minimal range number] is not defined"); }
    let a = MapperCopy("fillrandom", start, end, method, thisValue || this, (a, ...args) => { return a.map((i, idx) => { return i * factorialMap(0, args.length, args) }) }, multiplier);
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} item
 * @param {*} start
 * @param {*} end
 * @param {string} [method="inrange"] // replace, inrange
 * @param {*} thisValue
 */
function fillRange(item, start, end, method = "inrange", thisValue) {
    if (!count) { throw new Error("Count [minimal range number] is not defined"); }
    let a = Mapper("fillRange", start, end, method, this, (a, ...args) => { return a.map((i) => { return i * item }) });
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} item
 * @param {*} thisValue
 */
function append(item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    a.push(item);
    this.length = 0;
    this.push(...a);
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
 * @param {*} thisValue
 */
function insert(index, item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    a = [...a.splice(0, index - 1), item, ...a];
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} index
 * @param {*} array // array or item
 * @param {*} thisValue
 */
function insertAll(index, array, thisValue) {
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    if (!array) { throw new Error("Array is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    a = [...a.splice(0, index), ...array, ...a];
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} array
 * @param {*} thisValue
 * @param {*} args - list of multiple arguments
 */
function concatMerge(array, thisValue, ...args) {
    var argsList = [];
    if (!!args.length) {
        for (let i = 0; i < args.length; i++) {
            if (!!Array.isArray(args[i])) {
                argsList = [...argsList, ...args[i]];
            } else {
                argsList = [...argsList, args[i]];
            }
        }
    }
    thisValue = (!!thisValue) ? thisValue : [...this]
    let a = [...thisValue, ...array, ...argsList];
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} index
 * @param {*} item
 * @param {*} thisValue
 */
function insertCopy(index, item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
}

/**
 *
 *
 * @param {*} index
 * @param {*} array // array or item
 * @param {*} thisValue
 */
function insertAllCopy(index, array, thisValue) {
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    if (!array) { throw new Error("Array is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
}

/**
 *
 *
 * @param {*} item
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function count(item, start, end, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    a = a.splice((!!start) ? start : 0, (!!end) ? end : this.length)
    return a.filter((i) => i === item).length;
}

/**
 *
 *
 * @param {*} index
 * @param {*} item
 * @param {*} thisValue
 */
function replace(index, item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    a[index] = item;
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} item
 * @param {*} replaceValue
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function replaceAll(item, replaceValue, start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = (!!thisValue) ? [...thisValue] : [...this];
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
 * @param {*} thisValue
 */
function remove(item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let i = a.indexOf(item);
    (i !== -1) ? a.splice(i, 1) : a;
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} item
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function removeAll(item, start, end, method = "replace", thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (method === "inrange") {

    } else {
        let a = (!!thisValue) ? [...thisValue] : [...this];
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
 * @param {*} thisValue
 */
function replaceCopy(index, item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];

}

/**
 *
 *
 * @param {*} item
 * @param {*} replaceValue
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function replaceAllCopy(item, replaceValue, start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = (!!thisValue) ? [...thisValue] : [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        while (!!a.includes(item)) {
            let i = a.indexOf(item);
            (i !== -1) ? (a[i] = replaceValue) : a[i];
        }
        let b = [...this];
        return [...b.splice(0, start), ...a, ...b.splice(end, b.length)];
    }
}

/**
 *
 *
 * @param {*} item
 * @param {*} thisValue
 */
function removeCopy(item, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let i = a.indexOf(item);
    (i !== -1) ? a.splice(i, 1) : a;
    return a;
}

/**
 *
 *
 * @param {*} item
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function removeAllCopy(item, start, end, method = "replace", thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    if (method === "inrange") {

    } else {
        let a = (!!thisValue) ? [...thisValue] : [...this];
        start = (!!start) ? start : 0;
        end = (!!end) ? end : a.length;
        a = a.splice(start, end);
        while (!!a.includes(item)) {
            let i = a.indexOf(item);
            (i !== -1) ? a.splice(i, 1) : a;
        }
        let b = [...this];
        return [...b.splice(0, start), ...a, ...b.splice(end, b.length)];
    }
}

/**
 *
 *
 * @param {*} index
 * @param {*} thisValue
 * @return {*} 
 */
function pop(index, thisValue) {
    if (!index && index !== 0) { throw new Error("Index is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    a.splice(index, 1)[0];
    this.length = 0;
    this.push(...a);
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
 * @param {*} thisValue
 * @return {*} 
 */
function index(item, start, end, thisValue) {
    if (!item) { throw new Error("Item is not defined"); }
    // let a = (!!thisValue) ? [...thisValue] : [...this];
    if ((!start && start !== 0) && !end) { return this.indexOf(item); }
    if (!!start && !!end) { return [...this.splice(start, (end < this.length) ? end - start + 1 : this.length)].map((i, idx) => { return { "item": i, "index": idx }; }).filter((i) => { return i.item === item; }); }
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
    let a = [...this];
    if (!!key && typeof key === "function") {
        a = a.sort(key);
    } else if (reverse === true) {
        a = a.sort((c, d) => { return c < d });
    } else {
        a = a.sort((c, d) => { return c > d });
    }
    return a;
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function reverser(start, end, method = "replace", thisValue) {
    let a = MapperCopy("reverser", start, end, method, thisValue || this, (a) => { return a.reverse(); });
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function reverseCopy(start, end, method = "replace", thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    return MapperCopy("reverser", start, end, method, thisValue || this, (a) => { return a.reverse(); });
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function copy(start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    return a.splice((!!start) ? start : 0, (!!end) ? end : a.length);
}

/**
 *
 *
 * @param {*} mapperFunction
 * @param {*} arg
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function diction(mapperFunction, arg, start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    if (!mapperFunction || typeof mapperFunction !== "function") { mapperFunction = (i) => i; }
    if (!!mapperFunction && typeof mapperFunction === "function") return mapperFunction(Object.assign({}, a), arg);
    return Object.assign({}, a);
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
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let len = a.length;
    for (let i = 0; i < len; i++) {
        if (!iterable.includes(a[i])) return false;
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
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let len = iterable.length;
    for (let i = 0; i < len; i++) {
        if (!a.includes(iterable[i])) return false;
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
    let a = (!!thisValue) ? [...thisValue] : [...this], arr = [];
    let len = iterable.length;
    for (let i = 0; i < len; i++) {
        (!a.includes(iterable[i])) ? arr.push({ index: i, value: iterable[i] }) : arr;
    }
    return arr;
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function diffSelf(iterable, start, end, thisValue) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this], arr = [];
    let len = a.length;
    for (let i = 0; i < len; i++) {
        (!a.includes(iterable[i])) ? arr.push({ index: i, value: a[i] }) : arr;
    }
    return arr;
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function diffBoth(iterable, start, end, thisValue) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let b = { "self": [], "iterable": [] };
    b["self"] = a.diffSelf(iterable, start, end);
    b["iterable"] = a.diffIterable(iterable, start, end);
    return b;
}

/**
 *
 *
 * @param {*} iterable
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 * @return {*} 
 */
function equal(iterable, start, end, thisValue) {
    if (!iterable) { throw new Error("Iterable is not defined"); }
    let a = (!!thisValue) ? [...thisValue] : [...this];
    a.splice(0, (!!start) ? start : 0);
    a.splice((!!end) ? end : a.length, a.length);
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
 * @param {*} thisValue
 * @return {*} 
 */
function similar(iterable, start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    a.splice(0, (!!start) ? start : 0);
    a.splice((!!end) ? end : a.length, a.length);
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
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function uniques(start, end, method = "replace", thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let b = (!!thisValue) ? [...thisValue] : [...this];
    a = a.MapperCopy("uniques", start, end, method, thisValue || this, (a, ...args) => { return Array.from(new Set(a)); });
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function uniquesCopy(start, end, method = "replace", thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let b = (!!thisValue) ? [...thisValue] : [...this];
    return a.MapperCopy("uniques", start, end, method, thisValue || this, (a, ...args) => { return Array.from(new Set(a)); });
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="range"] // replace, inrange
 * @param {*} thisValue
 */
function duplicates(start, end, method = "range", thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let noduplicatesarray = a.uniquesCopy(), c;
    for (let i = 0; i < noduplicatesarray.length; i++) {
        c = a.indexOf(noduplicatesarray[i]);
        a[c] = (c >= 0) ? undefined : a[c];
    }
    a = a.filter((a) => { return a !== undefined });
    if (method === "inrange") {
        let b = (!!thisValue) ? [...thisValue] : [...this];
        a = [...b.splice(0, start), ...a, ...b.splice(end, b.length)];

    }
    this.length = 0;
    this.push(...a);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="range"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function duplicatesCopy(start, end, method = "range", thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let noduplicatesarray = (!!thisValue) ? [...thisValue] : [...this];
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
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function transpose(iterator, start, end, method = "replace", thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    iterator = (!!iterator) ? iterator : a;
    iterator.reverser();
    iterator.map((item) => {
        return (Array.isArray(item)) ? transpose(item) : item;
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
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function transposeCopy(iterator, start, end, method = "replace", thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    iterator = (!!iterator) ? iterator : a;
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

    }
    return iterator;
}

/**
 *
 *
 * @param {*} array
 */
function immutable(array) {
    if (!!array) {
        return Object.freeze([...array])
    } else {
        Object.freeze(this);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue 
 */
function flatten(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = (!!thisValue) ? [...thisValue] : [...this];
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
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 */
function flattenDeep(start, end, method = "replace", thisValue) {
    if (method === "inrange") {

    } else {
        let a = (!!thisValue) ? [...thisValue] : [...this];
        a = a.flat(Infinity);
        this.length = 0;
        this.push(...a);
    }
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function flattenCopy(start, end, method = "replace", thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    return a.flatMap(num => num);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [method="replace"] // replace, inrange
 * @param {*} thisValue
 * @return {*} 
 */
function flattenDeepCopy(start, end, method = "replace", thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    return a.flat(Infinity);
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
 * @param {*} thisValue
 * @return {*} 
 */
function enumerate(type = "object", thisValue) {
    if (!["object", "array"].includes(type)) { throw new Error("Type not defined"); };
    let a = (!!thisValue) ? [...thisValue] : [...this];
    let b = [], len = a.length;
    for (let i = 0; i < len; i++) {
        if (type === "object") {
            b[i] = { "index": i, "value": a[i] };
        }
        if (type === "array") {
            b[i] = [i, a[i]];
        }
    }
    return b;
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {*} thisValue
 */
function del(start, end, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    if (!end) {
        end = (!!start) ? start : a.length;
        start = 0;
    }
    this.splice(start, end - start + 1);
}

/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @param {string} [message=""]
 * @param {*} [callback=console.log]
 * @param {*} thisValue
 */
function log(start, end, message = "", callback = console.log, thisValue) {
    let a = (!!thisValue) ? [...thisValue] : [...this];
    callback(message + JSON.stringify(a));
}

// // _ lodash Functions
// // Array

// function chunk() { }
// function compact() { }

// // concatMerge // function concat() { }
// // diffBoth => // function difference() { }
// // diffSelf =>  // function differenceBy() { }
// // diff =>  // function differenceWith() { }

// del, remove =>  // function drop() { }
// del, remove =>  // function dropRight() { }
// function dropRightWhile() { }
// function dropWhile() { }
// function fill() { }
// function findIndex() { }
// function findLastIndex() { }
// function first -> head() { }

// // flatten, flattenCopy => // function flatten() { }
// // flattenDeep, flattenDeepCopy => function flattenDeep() { }
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
    // concatMerge // function concat() { }
    Object.defineProperty(SubArray.prototype, 'concatMerge', { value: concatMerge, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'merge', { value: concatMerge, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'replace', { value: replace, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'replaceCopy', { value: replaceCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'replaceAll', { value: replaceAll, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'replaceAllCopy', { value: replaceAllCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'remove', { value: remove, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'removeAll', { value: removeAll, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insertAllCopy', { value: insertAllCopy, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'insertCopy', { value: insertCopy, enumerable: true, });
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
    Object.defineProperty(SubArray.prototype, 'differenceBy', { value: diffIterable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'differenceWith', { value: diffSelf, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'difference', { value: diffBoth, enumerable: true, });
    // diffBoth => // function difference() { }
    // diffSelf =>  // function differenceBy() { }
    // diff =>  // function differenceWith() { }
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
    Object.defineProperty(SubArray.prototype, 'immutables', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'freeze', { value: immutable, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'tuple', { value: immutable, enumerable: true, });
    // flatten, flattenCopy => // function flatten() { }
    // flattenDeep, flattenDeepCopy => function flattenDeep() { }
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
    Object.defineProperty(SubArray.prototype, 'Mapper', { value: Mapper, enumerable: true, });
    Object.defineProperty(SubArray.prototype, 'MapperCopy', { value: MapperCopy, enumerable: true, });

    // Object.defineProperty(SubArray.prototype, 'duplicates', { value: duplicates, enumerable: true, });

    return SubArray;
}


function extendArray() {

    Object.defineProperty(Array.prototype, 'execute', { value: execute, enumerable: true, });
    Object.defineProperty(Array.prototype, 'extend', { value: extend, enumerable: true, });
    Object.defineProperty(Array.prototype, 'append', { value: append, enumerable: true, });
    Object.defineProperty(Array.prototype, 'isArray', { value: isArray, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insertAll', { value: insertAll, enumerable: true, });
    Object.defineProperty(Array.prototype, 'concatMerge', { value: concatMerge, enumerable: true, });
    Object.defineProperty(Array.prototype, 'merge', { value: concatMerge, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insert', { value: insert, enumerable: true, });
    Object.defineProperty(Array.prototype, 'replace', { value: replace, enumerable: true, });
    Object.defineProperty(Array.prototype, 'replaceCopy', { value: replaceCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'replaceAll', { value: replaceAll, enumerable: true, });
    Object.defineProperty(Array.prototype, 'replaceAllCopy', { value: replaceAllCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'remove', { value: remove, enumerable: true, });
    Object.defineProperty(Array.prototype, 'removeAll', { value: removeAll, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insertAllCopy', { value: insertAllCopy, enumerable: true, });
    Object.defineProperty(Array.prototype, 'insertCopy', { value: insertCopy, enumerable: true, });
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
    // diffBoth => // function difference() { }
    // diffSelf =>  // function differenceBy() { }
    // diff =>  // function differenceWith() { }
    Object.defineProperty(Array.prototype, 'differenceBy', { value: diffIterable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'differenceWith', { value: diffSelf, enumerable: true, });
    Object.defineProperty(Array.prototype, 'difference', { value: diffBoth, enumerable: true, });
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
    Object.defineProperty(Array.prototype, 'immutables', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'freeze', { value: immutable, enumerable: true, });
    Object.defineProperty(Array.prototype, 'tuple', { value: immutable, enumerable: true, });
    // flatten, flattenCopy => // function flatten() { }
    // flattenDeep, flattenDeepCopy => function flattenDeep() { }
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
    Object.defineProperty(Array.prototype, 'Mapper', { value: Mapper, enumerable: true, });
    Object.defineProperty(Array.prototype, 'MapperCopy', { value: MapperCopy, enumerable: true, });


    // Object.defineProperty(Array.prototype, 'duplicates', { value: duplicates, enumerable: true, });

}

module.exports.ArrayExtended = ArrayExtended();
module.exports.extendArray = extendArray;
