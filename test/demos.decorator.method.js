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
// const sinon = require('sinon');
// const createMethodDecorator = require('../src/decorator').createMethodDecorator;


// describe('createMethodDecorator', () => {
//     it('should return a decorator function', () => {
//         const decorator = createMethodDecorator(() => { });

//         expect(decorator).to.be.a('function');
//     });

//     it('should decorate a method with the given decorator function', () => {
//         const decoratorFn = (result) => result * 2;
//         const decorator = createMethodDecorator(decoratorFn);

//         class TestClass {
//             @decorator()
//             method(value) {
//                 return value;
//             }
//         }

//         const instance = new TestClass();
//         const result = instance.method(5);

//         expect(result).to.equal(decoratorFn(5));
//     });

//     it('should pass arguments to the decorator function', () => {
//         const decoratorFn = (result, multiplier) => result * multiplier;
//         const multiplier = 3;
//         const decorator = createMethodDecorator(decoratorFn);

//         class TestClass {
//             @decorator(multiplier)
//             method(value) {
//                 return value;
//             }
//         }

//         const instance = new TestClass();
//         const result = instance.method(5);

//         expect(result).to.equal(decoratorFn(5, multiplier));
//     });
// });


// describe('createMethodDecorator', () => {
//   it('should return a function that returns a descriptor', () => {
//     const decoratorFn = sinon.spy();
//     const methodDecorator = createMethodDecorator(decoratorFn);
//     const descriptor = methodDecorator({}, 'testMethod', { value: () => {} });
//     expect(descriptor).to.have.keys(['value']);
//     expect(descriptor.value).to.be.a('function');
//   });

//   it('should call the decorator function with the result and arguments', () => {
//     const decoratorFn = sinon.spy();
//     const methodDecorator = createMethodDecorator(decoratorFn);
//     const target = {};
//     const methodName = 'testMethod';
//     const descriptor = { value: () => {} };
//     const fnArgs = [1, 2, 3];
//     methodDecorator(target, methodName, descriptor).value(...fnArgs);
//     expect(decoratorFn.calledOnceWithExactly(undefined, 1, 2, 3)).to.be.true;
//   });

//   it('should call the original method with the correct arguments', () => {
//     const decoratorFn = sinon.stub().returnsArg(0);
//     const methodDecorator = createMethodDecorator(decoratorFn);
//     const target = {};
//     const methodName = 'testMethod';
//     const originalFn = sinon.spy();
//     const descriptor = { value: originalFn };
//     const fnArgs = [1, 2, 3];
//     methodDecorator(target, methodName, descriptor).value(...fnArgs);
//     expect(originalFn.calledOnceWithExactly(...fnArgs)).to.be.true;
//   });

//   it('should return the result of the decorator function', () => {
//     const decoratorFn = sinon.stub().returns('decorated result');
//     const methodDecorator = createMethodDecorator(decoratorFn);
//     const target = {};
//     const methodName = 'testMethod';
//     const originalFn = () => 'original result';
//     const descriptor = { value: originalFn };
//     const fnArgs = [1, 2, 3];
//     const result = methodDecorator(target, methodName, descriptor).value(...fnArgs);
//     expect(result).to.equal('decorated result');
//   });
// });


