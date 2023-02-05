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


// Object.defineProperty(Object.prototype, 'duplicates', { value: duplicates, enumerable: true, });


// https://www.geeksforgeeks.org/what-are-decorators-and-how-are-they-used-in-javascript/

// // DECORATORS SIMPLE
//
// let variable = function (color) {
//
//   return function (target) {
//     target.property = color;
//   }
// };
//
// // The value is passed in the decorator
// @variable('GFG is Green')
// class GFG { }
//
// console.log(GFG.property);
//


// // DECORATORS CLASS METHODS
//
// function gfg(target, name, descriptor) {
//
//   var fn = descriptor.value;
//   // Checks if "descriptor.value"
//   // is a function or not
//
//   if (typeof fn == 'function') {
//     descriptor.value = function (...args) {
//       // Document.write(`parameters: ${args}`+"<br>");
//       console.log(`parameters: ${args}`);
//       var result = fn.apply(this, args);
//       // Document.write(`addition: ${result}`);
//       // Print the addition of passed arguments
//       console.log(`addition: ${result}`);
//       return result;
//     }
//   }
//
//   return descriptor;
//
// }
//

// // DECORATORS CLASS
//
// class geek {
//   @gfg
//   add(a, b) {
//     return a + b;
//   }
// }
//
// var e = new geek();
// e.add(100, 200);
//

// // DECORATORS CLASS METHODS
//
// let readonly = function (target, key, descriptor) {
//   descriptor.writable = false;
//   return descriptor;
// }
//
// class car {
//   constructor(color) {
//     this.color = color;
//   }
//   // Decorator
//   @readonly
//   getColor() {
//     return this.color;
//   }
// }
// const rCar = new car('car is Black');
// // When descriptor.writable = false;
// rCar.getColor = function () {
//   // When descriptor.writable = true;
//   return 'car is not Black'
// }
// console.log(rCar.getColor());
//


// // DECORATORS NEW CLASS MODIFICATION
//
// function log()
// // Decorator function
// {
//   return function decorator() {
//     // "arrow" function
//     return (...args) => {
//       console.log(`Parameters : args`);
//       return new Class(...args);
//     };
//   }
// }
//
// // Decorators
// @log
// class gfg {
//   constructor(name, category) { }
// }
//
// const e = new gfg('geek', 'code');
// // Arguments for Demo: args
// console.log(e);
// 
