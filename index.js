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

var { ArrayExtended, extendArray } = require("./src/array.js");
var { decorate } = require("./src/decorator.js");
var { SubArrayExtender, SubObjectExtender, SubStringExtender, Freeze, extender } = require("./src/extenders.js");
// var { NumbersExtended, extendNumber } = require("./src/numbers.js");
// var { ObjectExtended, extendObject } = require("./src/object.js");
var { StringExtended, extendString } = require("./src/string.js");
var { singleton } = require("./src/singleton.js");
var utils = require("./src/utils.js");
var math = require("./src/math.js");


module.exports.decorate = decorate;
module.exports.Freeze = Freeze;
module.exports.extender = extender;

module.exports.ArrayExtended = ArrayExtended;
module.exports.extendArray = extendArray;
module.exports.singleton = singleton;

module.exports.SubArrayExtender = SubArrayExtender;
// module.exports.SubObjectExtender = SubObjectExtender;
module.exports.SubStringExtender = SubStringExtender;

// module.exports.NumbersExtended = NumbersExtended;
// module.exports.extendNumber = extendNumber;

// module.exports.ObjectExtended = ObjectExtended;
// module.exports.extendObject = extendObject;

module.exports.StringExtended = StringExtended;
// module.exports.extendString = extendString;

module.exports.default = {
    ArrayExtended, extendArray,
    // decorate,
    SubArrayExtender,
    // SubObjectExtender, 
    SubStringExtender,
    Freeze, extender,
    singleton,
    // NumbersExtended, extendNumber,
    // ObjectExtended, extendObject,
    // StringExtended, extendString
}

