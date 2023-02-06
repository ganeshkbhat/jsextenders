/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: 
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var { ArrayExtended, extendArray } = require("./array.js");
var { decorate } = require("./decorator.js");
var { SubArrayExtender, SubObjectExtender, Freeze, extender } = require("./extenders.js");
var { NumbersExtended, extendNumber } = require("./numbers.js");
var { ObjectExtended, extendObject } = require("./object.js");
var { StringExtended, extendString } = require("./string.js");

module.exports.decorate = decorate;
module.exports.Freeze = Freeze;
module.exports.extender = extender;

module.exports.ArrayExtended = ArrayExtended;
module.exports.extendArray = extendArray;

module.exports.SubArrayExtender = SubArrayExtender;
module.exports.SubObjectExtender = SubObjectExtender;

module.exports.NumbersExtended = NumbersExtended;
module.exports.extendNumber = extendNumber;

module.exports.ObjectExtended = ObjectExtended;
module.exports.extendObject = extendObject;

module.exports.StringExtended = StringExtended;
module.exports.extendString = extendString;

module.exports.default = {
    ArrayExtended, extendArray,
    decorate,
    SubArrayExtender, SubObjectExtender, Freeze, extender,
    NumbersExtended, extendNumber,
    ObjectExtended, extendObject,
    StringExtended, extendString
}

