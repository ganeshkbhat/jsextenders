/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/math.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


function Mapper() {}


function MathExtended() {

}

function extendMath() {

    Object.defineProperty(Math.prototype, 'Mapper', { value: Mapper, enumerable: true, });
    // Object.defineProperty(Math.prototype, '', { value: , enumerable: true, });

    return Math;
}

module.exports.MathExtended = MathExtended();
module.exports.extendMath = extendMath;

