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

describe('test-.mjs::extenders: Test Suite for extenders Files', function () {

    // before(async function(){
    // });

    describe('test-.js::extenders: [Test A] Test Suite for extenders in main repo directory', function () {

        it('[Test A] Test for ', function (done) {

            // [1, 2, 3, 4].execute(executeFunction)
            // [1, 2, 3, 4].extend(iterable, index)
            // [1, 2, 3, 4].max(count, start, end)
            // [1, 2, 3, 4].maxIndexes(count, start, end)
            // [1, 2, 3, 4].min(count, start, end)
            // [1, 2, 3, 4].minIndexes(count, start, end)
            // [1, 2, 3, 4].average(start, end)
            // [1, 2, 3, 4].sum(start, end)
            // [1, 2, 3, 4].acosMap(start, end, method = "replace")
            // [1, 2, 3, 4].cosMap(start, end, method = "replace")
            // [1, 2, 3, 4].sinMap(start, end, method = "replace")
            // [1, 2, 3, 4].asinMap(start, end, method = "replace")
            // [1, 2, 3, 4].absMap(start, end, method = "replace")
            // [1, 2, 3, 4].factorialMap(start, end)
            // [1, 2, 3, 4].cosMapCopy(start, end)
            // [1, 2, 3, 4].acosMapCopy(start, end)
            // [1, 2, 3, 4].sinMapCopy(start, end)
            // [1, 2, 3, 4].asinMapCopy(start, end)
            // [1, 2, 3, 4].absMapCopy(start, end)
            // [1, 2, 3, 4].LN2Map(start, end, method = "replace")
            // [1, 2, 3, 4].LN10Map(start, end, method = "replace")
            // [1, 2, 3, 4].LOG2EMap(start, end, method = "replace")
            // [1, 2, 3, 4].LOG10EMap(start, end, method = "replace")
            // [1, 2, 3, 4].LN2MapCopy(start, end)
            // [1, 2, 3, 4].LN10MapCopy(start, end)
            // [1, 2, 3, 4].LOG2EMapCopy(start, end)
            // [1, 2, 3, 4].floorMap(start, end, method = "replace")
            // [1, 2, 3, 4].ceilMap(start, end, method = "replace")
            // [1, 2, 3, 4].roundMap(start, end, method = "replace")
            // [1, 2, 3, 4].floorMapCopy(start, end)
            // [1, 2, 3, 4].ceilMapCopy(start, end)
            // [1, 2, 3, 4].roundMapCopy(start, end)
            // [1, 2, 3, 4].squareMap(start, end, method = "replace")
            // [1, 2, 3, 4].sqrtMap(start, end, method = "replace")
            // [1, 2, 3, 4].powMap(power, start, end, method = "replace")
            // [1, 2, 3, 4].multiplyMap(multiplier, start, end, method = "replace")
            // [1, 2, 3, 4].squareMapCopy(start, end)
            // [1, 2, 3, 4].sqrtMapCopy(start, end)
            // [1, 2, 3, 4].powMapCopy(power, start, end)
            // [1, 2, 3, 4].multiplyMapCopy(multiplier, start, end)
            // [1, 2, 3, 4].randomRange(count, multiplier)
            // [1, 2, 3, 4].fillRandomRange(count, multiplier, start, end, method = "replace")
            // [1, 2, 3, 4].append(item)
            // [1, 2, 3, 4].isArray(iterable)
            // [1, 2, 3, 4].insert(index, item)
            // [1, 2, 3, 4].insertAll(index, array)
            // [1, 2, 3, 4].count(item, start, end)
            // [1, 2, 3, 4].replace(index, item, start, end)
            // [1, 2, 3, 4].remove(item)
            // [1, 2, 3, 4].removeAll(item, start, end)
            // [1, 2, 3, 4].pop(index)
            // [1, 2, 3, 4].clear(start, end)
            // [1, 2, 3, 4].index(item, start, end)
            // [1, 2, 3, 4].sort(key = null, reverse = false, start, end)
            // [1, 2, 3, 4].reverse(start, end, method = "replace")
            // [1, 2, 3, 4].reverseCopy(start, end)
            // [1, 2, 3, 4].copy(start, end)
            // [1, 2, 3, 4].diction(mapFunction, arg, start, end)
            // [1, 2, 3, 4].subset(iterable, start, end)
            // [1, 2, 3, 4].superset(iterable, start, end)
            // [1, 2, 3, 4].diffIterable(iterable, start, end)
            // [1, 2, 3, 4].diffSelf(iterable, start, end)
            // [1, 2, 3, 4].diffBoth(iterable, start, end)
            // [1, 2, 3, 4].equal(iterable, start, end)
            // [1, 2, 3, 4].similar(iterable, start, end)
            // [1, 2, 3, 4].uniques(start, end, method = "replace")
            // [1, 2, 3, 4].uniquesCopy(start, end)
            // [1, 2, 3, 4].duplicates(start, end, method = "replace")
            // [1, 2, 3, 4].duplicatesCopy(start, end)
            // [1, 2, 3, 4].enqueue(item)
            // [1, 2, 3, 4].dequeue()
            // [1, 2, 3, 4].transpose(iterator, start, end, method = "replace")
            // [1, 2, 3, 4].transposeCopy(iterator, start, end)
            // [1, 2, 3, 4].immutable()
            // [1, 2, 3, 4].flatten(start, end, method = "replace")
            // [1, 2, 3, 4].flattenDeep(start, end, method = "replace")
            // [1, 2, 3, 4].flattenCopy(start, end)
            // [1, 2, 3, 4].flattenDeepCopy(start, end)
            // [1, 2, 3, 4].range(start, stop, step)
            // [1, 2, 3, 4].enumerate(type = "object")
            // [1, 2, 3, 4].del(start, end)
            // [1, 2, 3, 4].log(start, end)

            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);

            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);

            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);

            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);

            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);
            expect(100).to.equal(100);

            done();
        });

        it('[Test A] Test for ', function (done) {

            // [1, 2, 3, 4].execute(executeFunction)
            // [1, 2, 3, 4].extend(iterable, index)
            // [1, 2, 3, 4].max(count, start, end)
            // [1, 2, 3, 4].maxIndexes(count, start, end)
            // [1, 2, 3, 4].min(count, start, end)
            // [1, 2, 3, 4].minIndexes(count, start, end)
            // [1, 2, 3, 4].average(start, end)
            // [1, 2, 3, 4].sum(start, end)
            // [1, 2, 3, 4].acosMap(start, end, method = "replace")
            // [1, 2, 3, 4].cosMap(start, end, method = "replace")
            // [1, 2, 3, 4].sinMap(start, end, method = "replace")
            // [1, 2, 3, 4].asinMap(start, end, method = "replace")
            // [1, 2, 3, 4].absMap(start, end, method = "replace")
            // [1, 2, 3, 4].factorialMap(start, end)
            // [1, 2, 3, 4].cosMapCopy(start, end)
            // [1, 2, 3, 4].acosMapCopy(start, end)
            // [1, 2, 3, 4].sinMapCopy(start, end)
            // [1, 2, 3, 4].asinMapCopy(start, end)
            // [1, 2, 3, 4].absMapCopy(start, end)
            // [1, 2, 3, 4].LN2Map(start, end, method = "replace")
            // [1, 2, 3, 4].LN10Map(start, end, method = "replace")
            // [1, 2, 3, 4].LOG2EMap(start, end, method = "replace")
            // [1, 2, 3, 4].LOG10EMap(start, end, method = "replace")
            // [1, 2, 3, 4].LN2MapCopy(start, end)
            // [1, 2, 3, 4].LN10MapCopy(start, end)
            // [1, 2, 3, 4].LOG2EMapCopy(start, end)
            // [1, 2, 3, 4].floorMap(start, end, method = "replace")
            // [1, 2, 3, 4].ceilMap(start, end, method = "replace")
            // [1, 2, 3, 4].roundMap(start, end, method = "replace")
            // [1, 2, 3, 4].floorMapCopy(start, end)
            // [1, 2, 3, 4].ceilMapCopy(start, end)
            // [1, 2, 3, 4].roundMapCopy(start, end)
            // [1, 2, 3, 4].squareMap(start, end, method = "replace")
            // [1, 2, 3, 4].sqrtMap(start, end, method = "replace")
            // [1, 2, 3, 4].powMap(power, start, end, method = "replace")
            // [1, 2, 3, 4].multiplyMap(multiplier, start, end, method = "replace")
            // [1, 2, 3, 4].squareMapCopy(start, end)
            // [1, 2, 3, 4].sqrtMapCopy(start, end)
            // [1, 2, 3, 4].powMapCopy(power, start, end)
            // [1, 2, 3, 4].multiplyMapCopy(multiplier, start, end)
            // [1, 2, 3, 4].randomRange(count, multiplier)
            // [1, 2, 3, 4].fillRandomRange(count, multiplier, start, end, method = "replace")
            // [1, 2, 3, 4].append(item)
            // [1, 2, 3, 4].isArray(iterable)
            // [1, 2, 3, 4].insert(index, item)
            // [1, 2, 3, 4].insertAll(index, array)
            // [1, 2, 3, 4].count(item, start, end)
            // [1, 2, 3, 4].replace(index, item, start, end)
            // [1, 2, 3, 4].remove(item)
            // [1, 2, 3, 4].removeAll(item, start, end)
            // [1, 2, 3, 4].pop(index)
            // [1, 2, 3, 4].clear(start, end)
            // [1, 2, 3, 4].index(item, start, end)
            // [1, 2, 3, 4].sort(key = null, reverse = false, start, end)
            // [1, 2, 3, 4].reverse(start, end, method = "replace")
            // [1, 2, 3, 4].reverseCopy(start, end)
            // [1, 2, 3, 4].copy(start, end)
            // [1, 2, 3, 4].diction(mapFunction, arg, start, end)
            // [1, 2, 3, 4].subset(iterable, start, end)
            // [1, 2, 3, 4].superset(iterable, start, end)
            // [1, 2, 3, 4].diffIterable(iterable, start, end)
            // [1, 2, 3, 4].diffSelf(iterable, start, end)
            // [1, 2, 3, 4].diffBoth(iterable, start, end)
            // [1, 2, 3, 4].equal(iterable, start, end)
            // [1, 2, 3, 4].similar(iterable, start, end)
            // [1, 2, 3, 4].uniques(start, end, method = "replace")
            // [1, 2, 3, 4].uniquesCopy(start, end)
            // [1, 2, 3, 4].duplicates(start, end, method = "replace")
            // [1, 2, 3, 4].duplicatesCopy(start, end)
            // [1, 2, 3, 4].enqueue(item)
            // [1, 2, 3, 4].dequeue()
            // [1, 2, 3, 4].transpose(iterator, start, end, method = "replace")
            // [1, 2, 3, 4].transposeCopy(iterator, start, end)
            // [1, 2, 3, 4].immutable()
            // [1, 2, 3, 4].flatten(start, end, method = "replace")
            // [1, 2, 3, 4].flattenDeep(start, end, method = "replace")
            // [1, 2, 3, 4].flattenCopy(start, end)
            // [1, 2, 3, 4].flattenDeepCopy(start, end)
            // [1, 2, 3, 4].range(start, stop, step)
            // [1, 2, 3, 4].enumerate(type = "object")
            // [1, 2, 3, 4].del(start, end)
            // [1, 2, 3, 4].log(start, end)

            done();
        });
    });

});

