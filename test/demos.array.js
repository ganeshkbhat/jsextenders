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

describe('test-.js::extenders: [Test A] Test Suite for extenders in main repo directory', function () {

    it('[Test A] Test for ', function (done) {
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let c = [1, 2, 3, 4, 5, [1, 2, 3], 6, 7, [1, 2, 3, 4, [1, 2, 3], 5, 6], 8, [1, 2, [1, 2, [1, 2, 3], 3, 4, 5], 3, 4, 5], 9];
        let d = [1, 2, 3, 4, 5, [1, 2, 3], 6, 7, [1, 2, 3, 4, [1, 2, 3], 5, 6], 8, [1, 2, [1, 2, [1, 2, 3], 3, 4, 5], 3, 4, 5], 9];
        let f = [1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9.0];

        let e = [...a];
        expect(e.execute((iterable) => JSON.stringify(iterable))).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.extend(b, 3)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.append(b)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, [1, 2, 3, 4, 5, 6, 7, 8, 9]]));
        e = [...a];
        expect(e.isArray()).to.equal(true);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.isArray(b)).to.equal(true);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.insertAll(2, b)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.insert(0, b)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([[[1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 2, 3, 4, 5, 6, 7, 8, 9]]));
        e = [...a];
        expect(e.replace(0, 2)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([[2, 2, 3, 4, 5, 6, 7, 8, 9]]));
        e = [...a];
        expect(e.replaceAll(4, 2)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 2, 5, 6, 7, 8, 9]));
        e = [...a, 4, 4, 4];
        expect(e.replaceAll(4, 2)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 2, 5, 6, 7, 8, 9, 2, 2, 2]));
        e = [...a];
        expect(e.remove(2)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.removeAll(4)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 5, 6, 7, 8, 9]));
        e = [...a, 4, 4, 4];
        expect(e.removeAll(4, 2, 6)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 5, 6, 7, 8, 9, 4, 4, 4]));
        e = [...a];
        expect(e.insertAllCopy(2, b)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.insertCopy(0, b)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.replaceCopy(0, 2)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.replaceAllCopy(4, 2)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a, 4, 4, 4];
        expect(e.replaceAllCopy(4, 2)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 4, 4]));
        e = [...a];
        expect(e.removeCopy(2)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.removeAllCopy(4)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a, 4, 4, 4];
        expect(e.removeAllCopy(4, 2, 6)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 4, 4]));
        e = [...a];
        expect(e.popIndex(0)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.clear()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([]));
        e = [...a];
        expect(e.index(2)).to.equal(1);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.count(2)).to.equal(1);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(JSON.stringify(e.pysort())).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.reverser()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([9, 8, 7, 6, 5, 4, 3, 2, 1]));
        e = [...a];
        expect(JSON.stringify(e.reverseCopy())).to.equal(JSON.stringify([9, 8, 7, 6, 5, 4, 3, 2, 1]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(JSON.stringify(e.copy())).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(JSON.stringify(e.diffIterable(c))).to.equal(JSON.stringify([{ "index": 5, "value": [1, 2, 3] }, { "index": 8, "value": [1, 2, 3, 4, [1, 2, 3], 5, 6] }, { "index": 10, "value": [1, 2, [1, 2, [1, 2, 3], 3, 4, 5], 3, 4, 5] }]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(JSON.stringify(e.diffSelf(c))).to.equal(JSON.stringify([{ index: 5, value: 6 }, { index: 8, value: 9 }]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        // expect(JSON.stringify(e.diffBoth(c))).to.equal(JSON.stringify({ "self": [{ "index": 5, "value": 6 }, { "index": 8, "value": 9 }], "iterable": [{ "index": 5, "value": [1, 2, 3] }, { "index": 8, "value": [1, 2, 3, 4, [1, 2, 3], 5, 6] }, { "index": 10, "value": [1, 2, [1, 2, [1, 2, 3], 3, 4, 5], 3, 4, 5] } ));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.equal(c)).to.equal(false);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.equal(b)).to.equal(true);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.similar(b)).to.equal(true);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.similar(c)).to.equal(false);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.uniques()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.uniques(2, 5)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([3, 4, 5, 6, 7]));
        e = [...a];
        expect(JSON.stringify(e.uniquesCopy())).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.duplicates()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([]));
        e = [...a];
        expect(JSON.stringify(e.duplicatesCopy())).to.equal(JSON.stringify([]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.enqueue(100)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 100]));
        e = [...a];
        expect(e.dequeue()).to.equal(1);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.transpose()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([9, 8, 7, 6, 5, 4, 3, 2, 1]));
        e = [...a];
        expect(e.transposeCopy()).to.equal(JSON.stringify([9, 8, 7, 6, 5, 4, 3, 2, 1]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        // e = [...a];
        // expect(e.immutables()).to.equal(200);
        // expect(JSON.stringify(e)).to.equal(JSON.stringify([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
        // e = [...a];
        // expect(e.freeze()).to.equal(200);
        // expect(JSON.stringify(e)).to.equal(JSON.stringify([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
        // e[2] = 12;
        // expect(JSON.stringify(e)).to.equal(JSON.stringify([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
        // e = [...a];
        // expect(e.tuple()).to.equal(200);
        // expect(JSON.stringify(e)).to.equal(JSON.stringify([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
        // e[2] = 12;
        // expect(JSON.stringify(e)).to.equal(JSON.stringify([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
        e = [...c];
        expect(e.flatten()).to.equal(undefined);  // check
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 1, 2, [1, 2, [1, 2, 3], 3, 4, 5], 3, 4, 5, [1, 2, 3], 1, 2, 3, 4, [1, 2, 3], 5, 6, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...c];
        expect(e.flatten(2, 7)).to.equal(undefined);  // check
        expect(JSON.stringify(e)).to.equal(JSON.stringify([2, 3, 4]));
        e = [...c];
        expect(JSON.stringify(e.flattenCopy())).to.equal(JSON.stringify([1, 1, 2, [1, 2, [1, 2, 3], 3, 4, 5], 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, [1, 2, 3], 5, 6, 2, 3, 4, 5, 6, 7, 8, 9]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 1, 2, [1, 2, [1, 2, 3], 3, 4, 5], 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, [1, 2, 3], 5, 6, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...c];
        expect(e.flattenDeep()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 1, 2, 1, 2, 1, 2, 3, 3, 4, 5, 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 5, 6, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...c];
        expect(JSON.stringify(e.flattenDeepCopy())).to.equal(JSON.stringify([1, 1, 2, 1, 2, 1, 2, 3, 3, 4, 5, 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 5, 6, 2, 3, 4, 5, 6, 7, 8, 9]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 1, 2, 1, 2, 1, 2, 3, 3, 4, 5, 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 5, 6, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(JSON.stringify(e.range(15))).to.equal(JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(JSON.stringify(e.enumerate())).to.equal(JSON.stringify([{ index: 0, value: 1 }, { index: 1, value: 2 }, { index: 2, value: 3 }, { index: 3, value: 4 }, { index: 4, value: 5 }, { index: 5, value: 6 }, { index: 6, value: 7 }, { index: 7, value: 8 }, { index: 8, value: 9 }]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.del(3)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.del(3, 6)).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 8, 9]));
        e = [...a];
        expect(e.del()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([]));
        e = [...a];
        expect(JSON.stringify(e.diction())).to.equal(JSON.stringify({ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8, '8': 9 }));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(JSON.stringify(e.toObject())).to.equal(JSON.stringify({ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8, '8': 9 }));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...c];
        expect(e.subset(a)).to.equal(false);  // check
        expect(e).to.equal(200);
        expect(a).to.equal(200);
        e = [...c];
        expect(e.superset(a)).to.equal(true);  // check
        expect(e).to.equal(200);
        expect(a).to.equal(200);
        e = [...a];
        expect(e.extender(function namertest() { console.log("namertest", JSON.stringify([...this])) }, Array)).to.equal(200);
        expect(JSON.stringify(e.namertest())).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.log()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.max()).to.equal(9);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];  // check
        expect(JSON.stringify(e.maxIndexes())).to.equal(JSON.stringify([{ index: 0, value: 1 }, { index: 1, value: 2 }, { index: 2, value: 3 }, { index: 3, value: 4 }, { index: 4, value: 5 }, { index: 5, value: 6 }, { index: 6, value: 7 }, { index: 7, value: 8 }, { index: 8, value: 9 }]));
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.min()).to.equal(1);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(JSON.stringify(e.minIndexes())).to.equal(JSON.stringify([])); // check
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.average()).to.equal(5);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.sum()).to.equal(45);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.factorialMap()).to.equal(362880);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.acosMap()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([0, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]));
        e = [...a];
        expect(e.sinMap()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([0.8414709848078965, 0.9092974268256817, 0.1411200080598672, -0.7568024953079282, -0.9589242746631385, -0.27941549819892586, 0.6569865987187891, 0.9893582466233818, 0.4121184852417566]));
        e = [...a];
        expect(e.asinMap()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1.5707963267948966, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]));
        e = [...f];
        expect(e.absMap()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9]));
        e = [...a];
        expect(e.cosMap()).to.equal(undefined);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([0.5403023058681398, -0.4161468365471424, -0.9899924966004454, -0.6536436208636119, 0.28366218546322625, 0.9601702866503661, 0.7539022543433046, -0.14550003380861354, -0.9111302618846769]));
        e = [...a];
        expect(e.acosMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.sinMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.asinMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.absMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.cosMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.LN2MapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.LN10MapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.LOG2EMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.LOG10EMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.LN2MapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.LN10MapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.LOG2EMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.LOG10EMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.floorMap()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.ceilMap()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.roundMap()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.squareMap()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.sqrtMap()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.powMap(3)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.multiplyMap(3)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.floorMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.ceilMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.roundMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.squareMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.sqrtMapCopy()).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.powMapCopy(3)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...f];
        expect(e.multiplyMapCopy(3)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.randomRange(10)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRandomRange(5)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRandomRange(5, 2)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRandomRange(5, 2, 7)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRandomRange(5, 0, e.length, "inrange")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRandomRange(5, 2, 5, "inrange")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRandomRange(5, 0, e.length, "replace")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRandomRange(5, 2, 5, "replace")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRange(5)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRange(5, 2)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRange(5, 2, 7)).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRange(5, 0, e.length, "inrange")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRange(5, 2, 5, "inrange")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRange(5, 0, e.length, "replace")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.fillRange(5, 2, 5, "replace")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        // e = [...a];
        // expect(e.pysort()).to.equal(200);
        // expect(JSON.stringify(e)).to.equal(JSON.stringify([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
        // e = [...a];
        // expect(e.pysort(null, true)).to.equal(200);
        // expect(JSON.stringify(e)).to.equal(JSON.stringify([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
        // e = [...a];
        // expect( e.pysort(null, false)).to.equal(200);
        // expect(JSON.stringify(e)).to.equal(JSON.stringify([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
        e = [...a];
        expect(e.Mapper("sqrt", 0, e.length, "replace")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        e = [...a];
        expect(e.MapperCopy("sqrt", 0, e.length, "replace")).to.equal(200);
        expect(JSON.stringify(e)).to.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        // a.max(count, start, end).to.equal(200);
        // a.maxIndexes(count, start, end).to.equal(200);
        // a.min(count, start, end).to.equal(200);
        // a.minIndexes(count, start, end).to.equal(200);

        expect(a.max(2).length).to.equal(2);
        expect(JSON.stringify(a.max(2))).to.equal(JSON.stringify([3, 4]));

        // expect(100).to.equal(100);
        // expect(100).to.equal(100);
        // expect(100).to.equal(100);
        // expect(100).to.equal(100);
        // expect(100).to.equal(100);

        done();
    });

});

// execute : [1,2,3,4,5,6,7,8,9]
// result [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// extend : undefined
// result [ 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 7, 8, 9 ]
// append : undefined
// result [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ]
// isArray : true
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// isArray : true
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// insertAll : undefined
// result :[ 1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 7, 8, 9 ]
// insert : undefined
// result :[ [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ]
// replace : undefined
// result :[ [ 2, 2, 3, 4, 5, 6, 7, 8, 9 ] ]
// replaceAll : undefined
// result :[ 1, 2, 3, 2, 5, 6, 7, 8, 9 ]
// replaceAll : undefined
// result :[ 1, 2, 3, 2, 5, 6, 7, 8, 9, 2, 2, 2 ]
// remove : undefined
// result :[ 1, 3, 4, 5, 6, 7, 8, 9 ]
// removeAll : undefined
// result :[ 1, 2, 3, 5, 6, 7, 8, 9 ]
// removeAll : undefined
// result :[ 1, 2, 3, 5, 6, 7, 8, 9, 4, 4, 4 ]
// insertAllCopy : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// insertCopy : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// replaceCopy : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// replaceAllCopy : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// replaceAllCopy : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 4, 4 ]
// removeCopy : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// removeAllCopy : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// removeAllCopy : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 4, 4 ]
// popIndex : undefined
// result :[ 2, 3, 4, 5, 6, 7, 8, 9 ]
// clear : undefined
// result :[]
// index : 1
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// count : 1
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// pysort : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// reverser : undefined
// result :[ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
// reverseCopy : [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// copy : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// diffIterable : [ { index: 5, value: [ 1, 2, 3 ] }, { index: 8, value: [ 1, 2, 3, 4, [Array], 5, 6 ] }, { index: 10, value: [ 1, 2, [Array], 3, 4, 5 ] } ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// diffSelf : [ { index: 5, value: 6 }, { index: 8, value: 9 } ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// diffBoth : { self: [ { index: 5, value: 6 }, { index: 8, value: 9 } ], iterable: [ { index: 5, value: [Array] }, { index: 8, value: [Array] }, { index: 10, value: [Array] } ] }
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// equal : false
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// equal : true
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// similar : true
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// similar : false
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// uniques : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// uniques : undefined
// result :[ 3, 4, 5, 6, 7 ]
// uniquesCopy : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// duplicates : undefined
// result :[]
// duplicatesCopy : []
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// enqueue : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 100 ]
// dequeue : 1
// result :[ 2, 3, 4, 5, 6, 7, 8, 9 ]
// transpose : undefined
// result :[ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
// transposeCopy : [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// flatten : undefined
// result :[ 1, 1, 2, [ 1, 2, [ 1, 2, 3 ], 3, 4, 5 ], 3, 4, 5, [ 1, 2, 3 ], 1, 2, 3, 4, [ 1, 2, 3 ], 5, 6, 2, 3, 4, 5, 6, 7, 8, 9 ]
// flatten : undefined
// result :[ 2, 3, 4 ]
// flattenCopy : [ 1, 1, 2, [ 1, 2, [ 1, 2, 3 ], 3, 4, 5 ], 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, [ 1, 2, 3 ], 5, 6, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, [ 1, 2, [ 1, 2, [Array], 3, 4, 5 ], 3, 4, 5 ], [ 1, 2, 3 ], [ 1, 2, 3, 4, [ 1, 2, 3 ], 5, 6 ], 2, 3, 4, 5, 6, 7, 8, 9 ]
// flattenDeep : undefined
// result :[ 1, 1, 2, 1, 2, 1, 2, 3, 3, 4, 5, 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 5, 6, 2, 3, 4, 5, 6, 7, 8, 9 ]
// flattenDeepCopy : [ 1, 1, 2, 1, 2, 1, 2, 3, 3, 4, 5, 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 5, 6, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, [ 1, 2, [ 1, 2, [Array], 3, 4, 5 ], 3, 4, 5 ], [ 1, 2, 3 ], [ 1, 2, 3, 4, [ 1, 2, 3 ], 5, 6 ], 2, 3, 4, 5, 6, 7, 8, 9 ]
// range : [ 0,  1,  2, 3,  4,  5, 6,  7,  8, 9, 10, 11, 12, 13, 14 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// enumerate : [ { index: 0, value: 1 }, { index: 1, value: 2 }, { index: 2, value: 3 }, { index: 3, value: 4 }, { index: 4, value: 5 }, { index: 5, value: 6 }, { index: 6, value: 7 }, { index: 7, value: 8 }, { index: 8, value: 9 } ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// del : undefined
// result :[ 5, 6, 7, 8, 9 ]
// del : undefined
// result :[ 1, 2, 3, 8, 9 ]
// del : undefined
// result :[]
// diction : { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8, '8': 9 }
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// toObject : { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8, '8': 9 }
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// subset : false
// result :e, a [ 1, [ 1, 2, [ 1, 2, [Array], 3, 4, 5 ], 3, 4, 5 ], [ 1, 2, 3 ], [ 1, 2, 3, 4, [ 1, 2, 3 ], 5, 6 ], 2, 3, 4, 5, 6, 7, 8, 9 ] [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// superset : true
// result :e, a [ 1, [ 1, 2, [ 1, 2, [Array], 3, 4, 5 ], 3, 4, 5 ], [ 1, 2, 3 ], [ 1, 2, 3, 4, [ 1, 2, 3 ], 5, 6 ], 2, 3, 4, 5, 6, 7, 8, 9 ] [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// extender: Object(0) [
//   execute: [Function: execute], extend: [Function: extend], append: [Function: append], isArray: [Function: isArray],
//   insertAll: [Function: insertAll], concatMerge: [Function: concatMerge],
//   merge: [Function: concatMerge], insert: [Function: insert],
//   replace: [Function: replace], replaceCopy: [Function: replaceCopy],
//   replaceAll: [Function: replaceAll], replaceAllCopy: [Function: replaceAllCopy],
//   remove: [Function: remove], removeAll: [Function: removeAll],
//   insertAllCopy: [Function: insertAllCopy], insertCopy: [Function: insertCopy],
//   removeCopy: [Function: removeCopy], removeAllCopy: [Function: removeAllCopy],
//   popIndex: [Function: pop], clear: [Function: clear], index: [Function: index],
//   count: [Function: count], pysort: [Function: pysort], reverser: [Function: reverser],
//   reverseCopy: [Function: reverseCopy], copy: [Function: copy],
//   diffIterable: [Function: diffIterable], diffSelf: [Function: diffSelf],
//   diffBoth: [Function: diffBoth], differenceBy: [Function: diffIterable],
//   differenceWith: [Function: diffSelf], difference: [Function: diffBoth],
//   equal: [Function: equal], similar: [Function: similar],
//   uniques: [Function: uniques], duplicates: [Function: duplicates],
//   uniquesCopy: [Function: uniquesCopy], duplicatesCopy: [Function: duplicatesCopy],
//   enqueue: [Function: enqueue], dequeue: [Function: dequeue],
//   transpose: [Function: transpose], transposeCopy: [Function: transposeCopy],
//   immutables: [Function: immutable], freeze: [Function: immutable],
//   tuple: [Function: immutable], flatten: [Function: flatten],
//   flattenCopy: [Function: flattenCopy], flattenDeep: [Function: flattenDeep],
//   flattenDeepCopy: [Function: flattenDeepCopy], range: [Function: range],
//   enumerate: [Function: enumerate], del: [Function: del],
//   diction: [Function: diction], toObject: [Function: diction],
//   subset: [Function: subset], superset: [Function: superset], extender: [Function: extender], log: [Function: log],
//   max: [Function: max], maxIndexes: [Function: maxIndexes], min: [Function: min], minIndexes: [Function: minIndexes],
//   average: [Function: average], sum: [Function: sum],
//   factorialMap: [Function: factorialMap], acosMap: [Function: acosMap], sinMap: [Function: sinMap],
//   asinMap: [Function: asinMap], absMap: [Function: absMap],
//   cosMap: [Function: cosMap], acosMapCopy: [Function: acosMapCopy],
//   sinMapCopy: [Function: sinMapCopy], asinMapCopy: [Function: asinMapCopy],
//   absMapCopy: [Function: absMapCopy], cosMapCopy: [Function: cosMapCopy],
//   LN2MapCopy: [Function: LN2MapCopy], LN10MapCopy: [Function: LN10MapCopy],
//   LOG2EMapCopy: [Function: LOG2EMapCopy], LOG10EMapCopy: [Function: LOG10EMapCopy],
//   floorMap: [Function: floorMap], ceilMap: [Function: ceilMap],
//   roundMap: [Function: roundMap], squareMap: [Function: squareMap],
//   sqrtMap: [Function: sqrtMap], powMap: [Function: powMap],
//   multiplyMap: [Function: multiplyMap], floorMapCopy: [Function: floorMapCopy],
//   ceilMapCopy: [Function: ceilMapCopy], roundMapCopy: [Function: roundMapCopy],
//   squareMapCopy: [Function: squareMapCopy], sqrtMapCopy: [Function: sqrtMapCopy],
//   powMapCopy: [Function: powMapCopy], multiplyMapCopy: [Function: multiplyMapCopy],
//   randomRange: [Function: randomRange], fillRandomRange: [Function: fillRandomRange],
//   fillRange: [Function: fillRange], Mapper: [Function: Mapper], MapperCopy: [Function: MapperCopy], namertest: [Function: namertest]
// ]
// namertest [1,2,3,4,5,6,7,8,9]
// extender : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// [1,2,3,4,5,6,7,8,9]
// log : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// max : 9
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// maxIndexes : [ { index: 0, value: 1 }, { index: 1, value: 2 }, { index: 2, value: 3 }, { index: 3, value: 4 }, { index: 4, value: 5 }, { index: 5, value: 6 }, { index: 6, value: 7 }, { index: 7, value: 8 }, { index: 8, value: 9 } ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// min : 1
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// minIndexes : []
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// average : 5
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// sum : 45
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// factorialMap : 362880
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// acosMap : undefined
// result :[ 0, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ]
// sinMap : undefined
// result :[ 0.8414709848078965, 0.9092974268256817, 0.1411200080598672, -0.7568024953079282, -0.9589242746631385, -0.27941549819892586, 0.6569865987187891, 0.9893582466233818, 0.4121184852417566 ]
// asinMap : undefined
// result :[ 1.5707963267948966, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ]
// absMap : undefined
// result :[ 1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9 ]
// cosMap : undefined
// result :[ 0.5403023058681398, -0.4161468365471424, -0.9899924966004454, -0.6536436208636119, 0.28366218546322625, 0.9601702866503661, 0.7539022543433046, -0.14550003380861354, -0.9111302618846769 ]

// acosMapCopy : [ 0, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// sinMapCopy : [ 0.8414709848078965, 0.9092974268256817, 0.1411200080598672, -0.7568024953079282, -0.9589242746631385, -0.27941549819892586, 0.6569865987187891, 0.9893582466233818, 0.4121184852417566 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// asinMapCopy : [ 1.5707963267948966, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// absMapCopy : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// cosMapCopy : [ 0.5403023058681398, -0.4161468365471424, -0.9899924966004454, -0.6536436208636119, 0.28366218546322625, 0.9601702866503661, 0.7539022543433046, -0.14550003380861354, -0.9111302618846769 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// LN2MapCopy : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// LN10MapCopy : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// LOG2EMapCopy : [ 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// LOG10EMapCopy : [ 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// LN2MapCopy : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// LN10MapCopy : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// LOG2EMapCopy : [ 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634, 1.4426950408889634 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// LOG2EMapCopy : [ 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518, 0.4342944819032518 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// floorMap : undefined
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// ceilMap : undefined
// result :[ 2, 3, 4, 5, 6, 7, 8, 9, 9 ]
// roundMap : undefined
// result :[ 1, 3, 4, 4, 6, 6, 7, 9, 9 ]
// squareMap : undefined
// result :[ 1,  4,  9, 16, 25, 36, 49, 64, 81 ]
// sqrtMap : undefined
// result :[ 1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979, 2.449489742783178, 2.6457513110645907, 2.8284271247461903, 3 ]
// powMap : undefined
// result :[ 1, 8, 27, 64, 125, 216, 343, 512, 729 ]
// multiplyMap : undefined
// result :[ 1,   8,  27,  64, 125, 216, 343, 512, 729 ]
// floorMapCopy : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// result :[ 1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9 ]
// ceilMapCopy : [ 2, 3, 4, 5, 6, 7, 8, 9, 9 ]
// result :[ 1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9 ]
// roundMapCopy : [ 1, 3, 4, 4, 6, 6, 7, 9, 9 ]
// result :[ 1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9 ]
// squareMapCopy : [ 1.44, 6.25, 12.96, 18.49, 33.64, 37.209999999999994, 50.41, 73.96, 81 ]
// result :[ 1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9 ]
// sqrtMapCopy : [ 1.0954451150103321, 1.5811388300841898, 1.8973665961010275, 2.073644135332772, 2.4083189157584592, 2.4698178070456938, 2.6645825188948455, 2.932575659723036, 3 ]
// result :[ 1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9 ]
// powMapCopy : [ 1.7279999999999998, 15.625, 46.656000000000006, 79.50699999999999, 195.11199999999997, 226.98099999999997, 357.91099999999994, 636.0559999999999, 729 ]
// result :[ 1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9 ]
// multiplyMapCopy : [ 1.7279999999999998, 15.625, 46.656000000000006, 79.50699999999999, 195.11199999999997, 226.98099999999997, 357.91099999999994, 636.0559999999999, 729 ]
// result :[ 1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9 ]
// randomRange : [ 0.42934357720308136, 0.9727024186545248, 0.751418510784444, 0.8090274288616064, 0.4915072259390185, 0.7105845246251652, 0.11054299234703135, 0.35410034051586026, 0.6041099858922121 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// fillRandomRange : undefined
// result :[ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]
// fillRandomRange start: undefined
// result :[ 1,  2, 15, 20, 25, 30, 35, 40, 45 ]
// fillRandomRange start end: undefined
// result :[ 1,  2, 15, 20, 25, 30, 35, 40, 45,  9 ]
// fillRandomRange start end replace: undefined
// result :[ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]
// fillRandomRange start end: undefined
// result :[ 1,  2, 15, 20, 25, 30, 35,  7,  8,  9 ]
// fillRandomRange start end replace: undefined
// result :[ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]
// fillRandomRange start end replace: undefined
// result :[ 15, 20, 25, 30, 35 ]
// fillRange : undefined
// result :[ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]
// fillRange start: undefined
// result :[ 1,  2, 15, 20, 25, 30, 35, 40, 45 ]
// fillRange start end: undefined
// result :[ 1, 2, 15, 20, 25, 30, 35, 40, 45, 9 ]
// fillRange start end replace: undefined
// result :[ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]
// fillRange start end: undefined
// result :[ 1,  2, 15, 20, 25, 30, 35,  7,  8,  9 ]
// fillRange start end replace: undefined
// result :[ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]
// fillRange start end replace: undefined
// result :[ 15, 20, 25, 30, 35 ]
// Mapper:  [ 1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979, 2.449489742783178, 2.6457513110645907, 2.8284271247461903, 3 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// MapperCopy:  [ 1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979, 2.449489742783178, 2.6457513110645907, 2.8284271247461903, 3 ]
// result :[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
