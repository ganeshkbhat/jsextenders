// /**
//  *
//  * Package:
//  * Author: Ganesh B
//  * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
//  * Install: npm i extenders --save
//  * Github: https://github.com/ganeshkbhat/jsextenders
//  * npmjs Link: https://www.npmjs.com/package/extenders
//  * File: Tests for src/.js in test/demos.decorator.js
//  * File Description:
//  *
// */

// /* eslint no-console: 0 */

// 'use strict';

// const { expect } = require('chai');
// const createClassDecorator = require('./src/decorator').createClassDecorator;

// describe('createClassDecorator', () => {
//     it('should return a decorator function', () => {
//         const decorator = createClassDecorator(() => { });

//         expect(decorator).to.be.a('function');
//     });

//     it('should call the decorator function with the target and arguments', () => {
//         let target;
//         const args = [1, 2, 3];
//         const decorator = createClassDecorator((t, ...a) => {
//             target = t;
//             expect(a).to.eql(args);
//         });

//         @decorator(...args)
//         class TestClass { }

//         expect(target).to.equal(TestClass);
//     });

//     it('should return the target after the decorator is applied', () => {
//         const decorator = createClassDecorator(() => { });

//         @decorator()
//         class TestClass { }

//         expect(TestClass).to.exist;
//     });
// });


