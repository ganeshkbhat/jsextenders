"use strict";
/**
 *
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/utilsjs.js
 * File Description:
 *
 *
*/
/* eslint no-console: 0 */
// 'use strict';
/**
 *
 *
 * @param {*} ipaddress
 * @return {*}
 */
function isIP(ipaddress) {
    const net = require("net");
    // net.isIP('127.0.0.1'); // returns 4
    // net.isIP('127.000.000.001'); // returns 0
    // net.isIP('127.0.0.1/24'); // returns 0
    // net.isIP('fhqwhgads'); // returns 0 
    // net.isIP('::1'); // returns 6
    return net.isIP(ipaddress);
}
/**
 *
 *
 * @param {*} ipaddress
 * @return {*}
 */
function isIPv4(ipaddress) {
    const net = require("net");
    // net.isIPv4('127.0.0.1'); // returns true
    // net.isIPv4('127.000.000.001'); // returns false
    // net.isIPv4('127.0.0.1/24'); // returns false
    // net.isIPv4('fhqwhgads'); // returns false 
    return net.isIPv4(ipaddress);
}
/**
 *
 *
 * @param {*} ipaddress
 * @return {*}
 */
function isIPv6(ipaddress) {
    const net = require("net");
    // net.isIPv6('::1'); // returns true
    // net.isIPv6('fhqwhgads'); // returns false
    return net.isIPv6(ipaddress);
}
/**
 *
 *
 * @return {*}
 */
function Utils() {
    let utils = {};
    Object.defineProperty(utils.prototype, 'isIP', { value: isIP, enumerable: true, });
    Object.defineProperty(utils.prototype, 'isIPv4', { value: isIPv4, enumerable: true, });
    Object.defineProperty(utils.prototype, 'isIPv6', { value: isIPv6, enumerable: true, });
    return utils;
}
module.exports.UtilFunctions = Utils;
//# sourceMappingURL=utilsjs.js.map