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

var { SubStringExtender, Freeze, extender } = require("./string.js");


function map() { }



// // _ lodash Functions
// // 

function endsWith() { }
function escaper() { }
function escapeRegExp() { }
function deburr() { }
function camelCase() { }
function capitalize() { }
function kebabCase() { }
function upperCase() { }
function lowerCase() { }
function snakeCase() { }
function upperFirst() { }
function lowerFirst() { }
function toLower() { }
function toUpper() { }
function startCase() { }
function startsWith() { }
function template() { }
function trim() { }
function trimEnd() { }
function trimStart() { }
function truncate() { }
function unescaper() { }
function pad() { }
function padEnd() { }
function padStart() { }
function parseInt() { }
function repeat() { }
function replace() { }
function split() { }
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
