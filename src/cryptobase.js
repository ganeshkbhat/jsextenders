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

const cryptor = require("hasher-apis");

/**
 *
 *
 * @param {*} data
 * @param {*} salt
 */
function encrypt(data, salt) {

}

/**
 *
 *
 * @param {*} hashData
 * @param {*} salt
 */
function decrypt(hashData, salt) {

}

/**
 *
 *
 * @param {*} data
 * @param {*} key
 */
function encryptWithKey(data, key) {

}

/**
 *
 *
 * @param {*} hashData
 * @param {*} key
 */
function decryptWithKey(hashData, key) {

}

/**
 *
 *
 * @param {*} data
 * @param {*} key
 */
function encryptWithRSAKey(data, key) {

}

/**
 *
 *
 * @param {*} hashData
 * @param {*} key
 */
function decryptWithRSAKey(hashData, key) {

}

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;
module.exports.encryptWithKey = encryptWithKey;
module.exports.decryptWithKey = decryptWithKey;
module.exports.encryptWithRSAKey = encryptWithRSAKey;
module.exports.decryptWithRSAKey = decryptWithRSAKey;
