/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: demos/demos.numbers.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


var singleton = require("extenders").singleton;

let key = "somename";
let object = { "test": "value" };
let replace = true;
let freeze = true;

let inst = singleton(key, object, replace, freeze);
console.log(inst);

