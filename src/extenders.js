/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/extenders.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

function SubArrayExtender() {
    var SubArray = function () {
        var arr = new Array(...arguments);
        Object.setPrototypeOf(arr, SubArray.prototype);
        return arr;
    };
    SubArray.prototype = {
        constructor: SubArray
    };
    Object.setPrototypeOf(SubArray.prototype, Array.prototype);
    return SubArray;
}


function SubObjectExtender() {
    var SubObject = function () {
        var obj = new Object(...arguments);
        Object.setPrototypeOf(obj, SubObject.prototype);
        return obj;
    };
    SubObject.prototype = {
        constructor: SubObject
    };
    Object.setPrototypeOf(SubObject.prototype, Object.prototype);
    return SubObject;
}


function SubStringExtender() {
    var SubString = function () {
        var obj = new String(...arguments);
        Object.setPrototypeOf(obj, SubString.prototype);
        return obj;
    };
    SubString.prototype = {
        constructor: SubString
    };
    Object.setPrototypeOf(SubString.prototype, String.prototype);
    return SubString;
}


function Freeze(object) {
    return Object.freeze(object);
}

function extender(func, object) {
    if (typeof func !== "function") {
        throw new Error("Error: func is not an function", func);
    }
    if (typeof func !== "object" && !object.prototype) {
        throw new Error("Error: object is not an Object with prototype", object);
    }
    return Object.defineProperty(object.prototype, func.name, { value: func, enumerable: true, writable: true });
}

module.exports.SubArrayExtender = SubArrayExtender;
module.exports.SubObjectExtender = SubObjectExtender;
module.exports.SubStringExtender = SubStringExtender;
module.exports.Freeze = Freeze;
module.exports.extender = extender;