/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/crypt.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const crypter = require("./cryptobase");

/**
 *
 *
 */
function CryptoExtended() {
  Object.defineProperty(Function.prototype, 'MapperCopy', { value: MapperCopy, enumerable: true, });
}

/**
 *
 *
 */
function extendCrypto() {
  Object.defineProperty(Function.prototype, 'MapperCopy', { value: MapperCopy, enumerable: true, });
}


module.exports.FunctionExtended = FunctionExtended;
module.exports.extendFunction = extendFunction;
