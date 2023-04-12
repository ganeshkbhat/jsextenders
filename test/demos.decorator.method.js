/**
 *
 * Package:
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: Tests for src/.js in test/demos.decorator.js
 * File Description:
 *
*/

/* eslint no-console: 0 */

'use strict';

const { expect } = require('chai');
const createMethodDecorator = require('./src/decorator').createMethodDecorator;


describe('createMethodDecorator', () => {
    it('should return a decorator function', () => {
        const decorator = createMethodDecorator(() => { });

        expect(decorator).to.be.a('function');
    });

    it('should decorate a method with the given decorator function', () => {
        const decoratorFn = (result) => result * 2;
        const decorator = createMethodDecorator(decoratorFn);

        class TestClass {
            @decorator()
            method(value) {
                return value;
            }
        }

        const instance = new TestClass();
        const result = instance.method(5);

        expect(result).to.equal(decoratorFn(5));
    });

    it('should pass arguments to the decorator function', () => {
        const decoratorFn = (result, multiplier) => result * multiplier;
        const multiplier = 3;
        const decorator = createMethodDecorator(decoratorFn);

        class TestClass {
            @decorator(multiplier)
            method(value) {
                return value;
            }
        }

        const instance = new TestClass();
        const result = instance.method(5);

        expect(result).to.equal(decoratorFn(5, multiplier));
    });
});

