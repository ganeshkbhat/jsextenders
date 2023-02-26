/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/numbers.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

function Mapper() {}

function NumbersExtended() {

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

function extendNumber() {
    Object.defineProperty(Number.prototype, 'Mapper', { value: Mapper, enumerable: true, });
    // Object.defineProperty(Number.prototype, '', { value: , enumerable: true, });

    return Number;
}

module.exports.NumbersExtended = NumbersExtended;
module.exports.extendNumber = extendNumber;
