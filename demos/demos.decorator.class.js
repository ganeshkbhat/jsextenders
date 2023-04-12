/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: demos/demos.decorator.class.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const createClassDecorator = require('./src/decorator').createClassDecorator;


function addLogMethod(target, prefix = "") {
    target.prototype.log = function (msg) {
        console.log(`[${prefix}${this.constructor.name}] ${msg}`);
    };
}

const loggable = createClassDecorator(addLogMethod);
@loggable("Prefix ")
class Example {
    constructor(name) {
        this.name = name;
    }
}
const exloggable = new Example("example");
exloggable.log("Hello, world!"); // logs "[Prefix Example] Hello, world!"
