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

function extendNumber() {
    Object.defineProperty(Number.prototype, 'Mapper', { value: Mapper, enumerable: true, });
    // Object.defineProperty(Number.prototype, '', { value: , enumerable: true, });

    return Number;
}

module.exports.NumbersExtended = NumbersExtended;
module.exports.extendNumber = extendNumber;
