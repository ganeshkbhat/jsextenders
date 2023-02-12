/**
 *
 * Package:
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: Tests for src/.js in test/demos.array.js
 * File Description:
 *
*/

/* eslint no-console: 0 */

'use strict';


const expect = require('chai').expect;
var { ArrayExtended, extendArray } = require("../index.js");
extendArray();

describe('test-.mjs::extenders: Test Suite for extenders Files', function () {


    describe('test-.js::extenders: [Test A] Test Suite for extenders in main repo directory', function () {

        it('[Test A] Test for max and min of the array', function (done) {
            let a = [1, 2, 3, 4];

            // a.max(count, start, end);
            // a.maxIndexes(count, start, end);
            // a.min(count, start, end);
            // a.minIndexes(count, start, end);

            expect(a.max(2).length).to.equal(2);
            expect(JSON.stringify(a.max(2))).to.equal(JSON.stringify([3,4]));
            
            a = [1, 2, 3, 4];
            console.log(a.maxIndexes(2));
            expect(a.maxIndexes(2).length).to.equal(2);
            expect(JSON.stringify(a.maxIndexes(2))).to.equal(JSON.stringify([3, 4]));
            
            a = [1, 2, 3, 4];
            expect(a.min(2).length).to.equal(2);
            expect(JSON.stringify(a.min(2))).to.equal(JSON.stringify([1,2]));

            a = [1, 2, 3, 4];
            expect(a.minIndexes(2).length).to.equal(2);
            expect(JSON.stringify(a.minIndexes(2))).to.equal(JSON.stringify([1, 2]));

            // expect(100).to.equal(100);
            // expect(100).to.equal(100);
            // expect(100).to.equal(100);
            // expect(100).to.equal(100);
            // expect(100).to.equal(100);

            done();
        });

        // it('[Test A] Test for cos and sin of the array', function (done) {
        //     let a = [1, 2, 3, 4];
        //     a.acosMap(start, end, method = "replace")
        //     a.cosMap(start, end, method = "replace")
        //     a.sinMap(start, end, method = "replace")
        //     a.asinMap(start, end, method = "replace")
        //     a.absMap(start, end, method = "replace")

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for cos and sin of the array', function (done) {
        //     let a = [1, 2, 3, 4];
        //     a.cosMapCopy(start, end)
        //     a.acosMapCopy(start, end)
        //     a.sinMapCopy(start, end)
        //     a.asinMapCopy(start, end)
        //     a.absMapCopy(start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for log map function for the array', function (done) {
        //     let a = [1, 2, 3, 4];
        //     a.LN2Map(start, end, method = "replace")
        //     a.LN10Map(start, end, method = "replace")
        //     a.LOG2EMap(start, end, method = "replace")
        //     a.LOG10EMap(start, end, method = "replace")
        //     a.LN2MapCopy(start, end)
        //     a.LN10MapCopy(start, end)
        //     a.LOG2EMapCopy(start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for floor, ceiling, round of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.floorMap(start, end, method = "replace")
        //     a.ceilMap(start, end, method = "replace")
        //     a.roundMap(start, end, method = "replace")

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for floor, ceiling, round of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.floorMapCopy(start, end)
        //     a.ceilMapCopy(start, end)
        //     a.roundMapCopy(start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for square, power, squareroot, and multiple map of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.squareMap(start, end, method = "replace")
        //     a.sqrtMap(start, end, method = "replace")
        //     a.powMap(power, start, end, method = "replace")
        //     a.multiplyMap(multiplier, start, end, method = "replace")

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for square, power, squareroot, and multiple map of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.squareMapCopy(start, end)
        //     a.sqrtMapCopy(start, end)
        //     a.powMapCopy(power, start, end)
        //     a.multiplyMapCopy(multiplier, start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for aferage, sum, factorial of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.average(start, end)
        //     a.sum(start, end)
        //     a.factorialMap(start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for replace, remove, pop, del, and clear of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.replace(index, item, start, end)
        //     a.remove(item)
        //     a.removeAll(item, start, end)
        //     a.pop(index)
        //     a.enqueue(item)
        //     a.dequeue()
        //     a.del(start, end)
        //     a.clear(start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for subset, superset, diff iterators of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.subset(iterable, start, end)
        //     a.superset(iterable, start, end)
        //     a.diffIterable(iterable, start, end)
        //     a.diffSelf(iterable, start, end)
        //     a.diffBoth(iterable, start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for equals, similar, uniques, and duplicates of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.equal(iterable, start, end)
        //     a.similar(iterable, start, end)
        //     a.uniques(start, end, method = "replace")
        //     a.uniquesCopy(start, end)
        //     a.duplicates(start, end, method = "replace")
        //     a.duplicatesCopy(start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for transpose, flatten, flattendeep of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.immutable()
        //     a.transpose(iterator, start, end, method = "replace")
        //     a.transposeCopy(iterator, start, end)
        //     a.flatten(start, end, method = "replace")
        //     a.flattenDeep(start, end, method = "replace")
        //     a.flattenCopy(start, end)
        //     a.flattenDeepCopy(start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for sort, reverse, copy, count, and index of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.index(item, start, end)
        //     a.sort(key = null, reverse = false, start, end)
        //     a.reverse(start, end, method = "replace")
        //     a.reverseCopy(start, end)
        //     a.copy(start, end)
        //     a.count(item, start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for random, insert diction, range, and enumerate of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.randomRange(count, multiplier)
        //     a.fillRandomRange(count, multiplier, start, end, method = "replace")
        //     a.append(item)
        //     a.insert(index, item)
        //     a.insertAll(index, array)
        //     a.diction(mapFunction, arg, start, end)
        //     a.range(start, stop, step)
        //     a.enumerate(type = "object")

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });

        // it('[Test A] Test for execute, expand, isArray, and log of the array', function (done) {
        //     let a = [1, 2, 3, 4];

        //     a.execute(executeFunction)
        //     a.extend(iterable, index)
        //     a.isArray(iterable)
        //     a.log(start, end)

        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);
        //     expect(100).to.equal(100);

        //     done();
        // });


    });

});

