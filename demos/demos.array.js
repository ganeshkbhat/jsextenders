/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/array.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var { ArrayExtended, Freeze, extendArray } = require("../src/array");
extendArray();

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let c = [1, 2, 3, 4, 5, [1, 2, 3], 6, 7, [1, 2, 3, 4, [1, 2, 3], 5, 6], 8, [1, 2, [1, 2, [1, 2, 3], 3, 4, 5], 3, 4, 5], 9];
let d = [1, 2, 3, 4, 5, [1, 2, 3], 6, 7, [1, 2, 3, 4, [1, 2, 3], 5, 6], 8, [1, 2, [1, 2, [1, 2, 3], 3, 4, 5], 3, 4, 5], 9];


console.log([...a].execute((iterable) => JSON.stringify(iterable)));
console.log([...a].extend());
console.log([...a].append());
console.log([...a].isArray());
console.log([...a].insertAll());
console.log([...a].insert());
console.log([...a].replace());
console.log([...a].remove());
console.log([...a].removeAll());
console.log([...a].popIndex());
console.log([...a].clear());
console.log([...a].index());
console.log([...a].count());
console.log([...a].sort());
console.log([...a].reverse());
console.log([...a].reverseCopy());
console.log([...a].copy());
console.log([...a].diffIterable());
console.log([...a].diffSelf());
console.log([...a].diffBoth());
console.log([...a].equal());
console.log([...a].similar());
console.log([...a].uniques());
console.log([...a].duplicates());
console.log([...a].uniquesCopy());
console.log([...a].duplicatesCopy());
console.log([...a].enqueue());
console.log([...a].dequeue());
console.log([...a].transpose());
console.log([...a].transposeCopy());
console.log([...a].immutable());
console.log([...a].freeze());
console.log([...a].tuple());
console.log([...a].flatten());
console.log([...a].flattenCopy());
console.log([...a].flattenDeep());
console.log([...a].flattenDeepCopy());
console.log([...a].range());
console.log([...a].enumerate());
console.log([...a].del());
console.log([...a].diction());
console.log([...a].toObject());
console.log([...a].subset());
console.log([...a].superset());
console.log([...a].extender());
console.log([...a].log());
console.log([...a].max());
console.log([...a].maxIndexes());
console.log([...a].min());
console.log([...a].minIndexes());
console.log([...a].average());
console.log([...a].sum());
console.log([...a].factorialMap());
console.log([...a].acosMap());
console.log([...a].sinMap());
console.log([...a].asinMap());
console.log([...a].absMap());
console.log([...a].cosMap());
console.log([...a].acosMapCopy());
console.log([...a].sinMapCopy());
console.log([...a].asinMapCopy());
console.log([...a].absMapCopy());
console.log([...a].cosMapCopy());
console.log([...a].LN2MapCopy());
console.log([...a].LN10MapCopy());
console.log([...a].LOG2EMapCopy());
console.log([...a].LOG10EMapCopy());
console.log([...a].LN2MapCopy());
console.log([...a].LN10MapCopy());
console.log([...a].LOG2EMapCopy());
console.log([...a].LOG10EMapCopy());
console.log([...a].floorMap());
console.log([...a].ceilMap());
console.log([...a].roundMap());
console.log([...a].squareMap());
console.log([...a].sqrtMap());
console.log([...a].powMap());
console.log([...a].multiplyMap());
console.log([...a].floorMapCopy());
console.log([...a].ceilMapCopy());
console.log([...a].roundMapCopy());
console.log([...a].squareMapCopy());
console.log([...a].sqrtMapCopy());
console.log([...a].powMapCopy());
console.log([...a].multiplyMapCopy());
console.log([...a].randomRange());
console.log([...a].fillRandomRange());

