/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/decorator.js
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

function Freeze(object) {
    return Object.freeze(object);
}

module.exports.SubArrayExtender = SubArrayExtender;
module.exports.SubObjectExtender = SubObjectExtender;
module.exports.Freeze = Freeze;
