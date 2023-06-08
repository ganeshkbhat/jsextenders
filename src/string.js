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

var { SubStringExtender, Freeze, extender } = require("./extenders.js");


function map() { }

// // _ lodash Functions
// // 

function endsWith() { }

function escaper() { }
function escapeRegExp() { }
function deburr() { }

function camelCase(thisValue) {
    // "this is a camel case" => "thisIsACamelCase"
    thisValue = thisValue || this;
    const arr = thisValue.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    thisValue = arr.join("");
    return thisValue;
}

function capitalize(thisValue) {
    // "This is capitalised"
    thisValue = thisValue || this;
    return thisValue.charAt(0).toUpperCase() + thisValue.slice(1);
}

function capitalizeAllWords(thisValue) {
    // "This Is All Captitals"
    thisValue = thisValue || this;
    const arr = thisValue.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    thisValue = arr.join(" ");
    return thisValue;
}

function kebabCase(thisValue) {
    // this-is-kebab-case
    thisValue = thisValue || this;
    const arr = thisValue.toLowerCase().split(" ");
    thisValue = arr.join("-");
    return thisValue;
}

function snakeCase(thisValue) {
    // THIS_IS_SNAKE_CASE
    thisValue = thisValue || this;
    const arr = thisValue.toUpperCase().split(" ");
    thisValue = arr.join("_");
    return thisValue;
}

function pascalCase(thisValue) {
    // "this is a pascal case" => "ThisIsAPascalCase"
    thisValue = thisValue || this;
    const arr = thisValue.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    thisValue = arr.join("");
    return thisValue;
}


function upperCase(thisValue) {
    thisValue = thisValue || this;
    return thisValue.toUpperCase();
}

function lowerCase(thisValue) {
    thisValue = thisValue || this;
    return thisValue.toLowerCase();
}

function upperFirst(thisValue) { }

function lowerFirst(thisValue) { }

function toLower(thisValue) { }

function toUpper(thisValue) { }

function startCase(thisValue) { }

function startsWith(thisValue) { }

function template(thisValue) { }
function trim(thisValue) { }
function trimEnd(thisValue) { }
function trimStart(thisValue) { }
function truncate(thisValue) { }
function unescaper(thisValue) { }
function pad(thisValue) { }
function padEnd(thisValue) { }
function padStart(thisValue) { }
function parseInt(thisValue) { }
function repeat(thisValue) { }
function replace(thisValue) { }
function split(thisValue) { }
function words() { }


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


// // _ lodash Functions
// // Object

// function assign() { }
// function assignIn() { }
// function assignInWith() { }
// function assignWith() { }
// function at() { }
// function create() { }
// function defaults() { }
// function defaultsDeep() { }
// function entries -> toPairs() { }
// function entriesIn -> toPairsIn() { }
// function extend -> assignIn() { }
// function extendWith -> assignInWith() { }
// function findKey() { }
// function findLastKey() { }
// function forIn() { }
// function forInRight() { }
// function forOwn() { }
// function forOwnRight() { }
// function functions() { }
// function functionsIn() { }
// function get() { }
// function has() { }
// function hasIn() { }
// function invert() { }
// function invertBy() { }
// function invoke() { }
// function keys() { }
// function keysIn() { }
// function mapKeys() { }
// function mapValues() { }
// function merge() { }
// function mergeWith() { }
// function omit() { }
// function omitBy() { }
// function pick() { }
// function pickBy() { }
// function result() { }
// function set() { }
// function setWith() { }
// function toPairs() { }
// function toPairsIn() { }
// function transform() { }
// function unset() { }
// function update() { }
// function updateWith() { }
// function values() { }
// function valuesIn() { }


// // _ lodash Functions
// // Lang

// function castArray() { }
// function clone() { }
// function cloneDeep() { }
// function cloneDeepWith() { }
// function cloneWith() { }
// function conformsTo() { }
// function eq() { }
// function gt() { }
// function gte() { }
// function isArguments() { }
// function isArray() { }
// function isArrayBuffer() { }
// function isArrayLike() { }
// function isArrayLikeObject() { }
// function isBoolean() { }
// function isBuffer() { }
// function isDate() { }
// function isElement() { }
// function isEmpty() { }
// function isEqual() { }
// function isEqualWith() { }
// function isError() { }
// function isFinite() { }
// function isFunction() { }
// function isInteger() { }
// function isLength() { }
// function isMap() { }
// function isMatch() { }
// function isMatchWith() { }
// function isNaN() { }
// function isNative() { }
// function isNil() { }
// function isNull() { }
// function isNumber() { }
// function isObject() { }
// function isObjectLike() { }
// function isPlainObject() { }
// function isRegExp() { }
// function isSafeInteger() { }
// function isSet() { }
// function isString() { }
// function isSymbol() { }
// function isTypedArray() { }
// function isUndefined() { }
// function isWeakMap() { }
// function isWeakSet() { }
// function lt() { }
// function lte() { }
// function toArray() { }
// function toFinite() { }
// function toInteger() { }
// function toLength() { }
// function toNumber() { }
// function toPlainObject() { }
// function toSafeInteger() { }
// function toString() { }

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

function StringExtended() {

    let SubString = SubStringExtender();

    Object.defineProperty(SubString.prototype, 'deburr', { value: deburr, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'escape', { value: escaper, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'escapeRegExp', { value: escapeRegExp, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'camelCase', { value: camelCase, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'capitalize', { value: capitalize, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'kebabCase', { value: kebabCase, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'lowerCase', { value: lowerCase, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'upperCase', { value: upperCase, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'snakeCase', { value: snakeCase, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'upperFirst', { value: upperFirst, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'lowerFirst', { value: lowerFirst, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'toLower', { value: toLower, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'toUpper', { value: toUpper, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'pad', { value: pad, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'padEnd', { value: padEnd, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'padStart', { value: padStart, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'parseInt', { value: parseInt, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'repeat', { value: repeat, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'replace', { value: replace, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'startCase', { value: startCase, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'startsWith', { value: startsWith, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'endsWith', { value: endsWith, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'template', { value: template, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'split', { value: split, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'words', { value: words, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'isArray', { value: isArray, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'trim', { value: trim, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'trimEnd', { value: trimEnd, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'trimStart', { value: trimStart, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'truncate', { value: truncate, enumerable: true, });
    Object.defineProperty(SubString.prototype, 'unescape', { value: unescaper, enumerable: true, });

    // Object.defineProperty(SubString.prototype, '', { value: , enumerable: true, });

    return SubString;
}


function extendString() {

    Object.defineProperty(String.prototype, 'deburr', { value: deburr, enumerable: true, });
    Object.defineProperty(String.prototype, 'escape', { value: escaper, enumerable: true, });
    Object.defineProperty(String.prototype, 'escapeRegExp', { value: escapeRegExp, enumerable: true, });
    Object.defineProperty(String.prototype, 'camelCase', { value: camelCase, enumerable: true, });
    Object.defineProperty(String.prototype, 'capitalize', { value: capitalize, enumerable: true, });
    Object.defineProperty(String.prototype, 'kebabCase', { value: kebabCase, enumerable: true, });
    Object.defineProperty(String.prototype, 'lowerCase', { value: lowerCase, enumerable: true, });
    Object.defineProperty(String.prototype, 'upperCase', { value: upperCase, enumerable: true, });
    Object.defineProperty(String.prototype, 'snakeCase', { value: snakeCase, enumerable: true, });
    Object.defineProperty(String.prototype, 'upperFirst', { value: upperFirst, enumerable: true, });
    Object.defineProperty(String.prototype, 'lowerFirst', { value: lowerFirst, enumerable: true, });
    Object.defineProperty(String.prototype, 'toLower', { value: toLower, enumerable: true, });
    Object.defineProperty(String.prototype, 'toUpper', { value: toUpper, enumerable: true, });
    Object.defineProperty(String.prototype, 'pad', { value: pad, enumerable: true, });
    Object.defineProperty(String.prototype, 'padEnd', { value: padEnd, enumerable: true, });
    Object.defineProperty(String.prototype, 'padStart', { value: padStart, enumerable: true, });
    Object.defineProperty(String.prototype, 'parseInt', { value: parseInt, enumerable: true, });
    Object.defineProperty(String.prototype, 'repeat', { value: repeat, enumerable: true, });
    Object.defineProperty(String.prototype, 'replace', { value: replace, enumerable: true, });
    Object.defineProperty(String.prototype, 'startCase', { value: startCase, enumerable: true, });
    Object.defineProperty(String.prototype, 'startsWith', { value: startsWith, enumerable: true, });
    Object.defineProperty(String.prototype, 'endsWith', { value: endsWith, enumerable: true, });
    Object.defineProperty(String.prototype, 'template', { value: template, enumerable: true, });
    Object.defineProperty(String.prototype, 'split', { value: split, enumerable: true, });
    Object.defineProperty(String.prototype, 'words', { value: words, enumerable: true, });
    Object.defineProperty(String.prototype, 'isArray', { value: isArray, enumerable: true, });
    Object.defineProperty(String.prototype, 'trim', { value: trim, enumerable: true, });
    Object.defineProperty(String.prototype, 'trimEnd', { value: trimEnd, enumerable: true, });
    Object.defineProperty(String.prototype, 'trimStart', { value: trimStart, enumerable: true, });
    Object.defineProperty(String.prototype, 'truncate', { value: truncate, enumerable: true, });
    Object.defineProperty(String.prototype, 'unescape', { value: unescaper, enumerable: true, });
    // Object.defineProperty(String.prototype, '', { value: , enumerable: true, });

    return String;
}

module.exports.StringExtended = StringExtended();
module.exports.extendString = extendString;
