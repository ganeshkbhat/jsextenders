/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: demos/demos.decorator.method.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const createMethodDecorator = require('./src/decorator').createMethodDecorator;


// Method
const addPrefix = createMethodDecorator((result, prefix) => {
    return `${prefix}: ${result}`;
});
class Example {
    @addPrefix("Result")
    add(a, b) {
        return a + b;
    }
}

const exaddPrefix = new Example();
console.log(exaddPrefix.add(2, 3)); // logs "Result: 5"


