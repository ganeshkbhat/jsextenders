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
/**
 *
 *
 * @param {*} decoratorFn
 * @return {*}
 */
function createMethodDecorator(decoratorFn) {
    return function (...args) {
        return function (target, name, descriptor) {
            const originalFn = descriptor.value;
            descriptor.value = function (...fnArgs) {
                const result = originalFn.apply(this, fnArgs);
                return decoratorFn(result, ...args);
            };
            return descriptor;
        };
    };
}
/**
 *
 *
 * @param {*} decoratorFn
 * @return {*}
 */
function createClassDecorator(decoratorFn) {
    return function (...args) {
        return function (target) {
            decoratorFn(target, ...args);
            return target;
        };
    };
}
module.exports.createMethodDecorator = createMethodDecorator;
module.exports.createClassDecorator = createClassDecorator;
//# sourceMappingURL=decorator.js.map