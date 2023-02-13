/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: demos/demos.array.js
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
let f = [1.2, 2.5, 3.6, 4.3, 5.8, 6.1, 7.1, 8.6, 9.0];

let e = [...a];
// console.log("execute :", e.execute((iterable) => JSON.stringify(iterable)));
// console.log("result", e);
// e = [...a];
// console.log("extend :", e.extend(b, 3));
// console.log("result", e);
// e = [...a];
// console.log("append :", e.append(b));
// console.log("result", e);
// e = [...a];
// console.log("isArray :", e.isArray());
// console.log("result", e);
// e = [...a];
// console.log("isArray :", e.isArray(b));
// console.log("result", e);
// e = [...a];
// console.log("insertAll :", e.insertAll(2, b));
// console.log("result", e);
// e = [...a];
// console.log("insert :", e.insert(0, b));
// console.log("result", e);
// e = [...a];
// console.log("replace :", e.replace(0, 2));
// console.log("result", e);
// e = [...a];
// console.log("replaceAll :", e.replaceAll(4, 2));
// console.log("result", e);
// e = [...a, 4, 4, 4];
// console.log("replaceAll :", e.replaceAll(4, 2));
// console.log("result", e);
// e = [...a];
// console.log("remove :", e.remove(2));
// console.log("result", e);
// e = [...a];
// console.log("removeAll :", e.removeAll(4));
// console.log("result", e);
// e = [...a, 4, 4, 4];
// console.log("removeAll :", e.removeAll(4, 2, 6));
// console.log("result", e);
// e = [...a];
// console.log("insertAllCopy :", e.insertAllCopy(2, b));
// console.log("result", e);
// e = [...a];
// console.log("insertCopy :", e.insertCopy(0, b));
// console.log("result", e);
// e = [...a];
// console.log("replaceCopy :", e.replaceCopy(0, 2));
// console.log("result", e);
// e = [...a];
// console.log("replaceAllCopy :", e.replaceAllCopy(4, 2));
// console.log("result", e);
// e = [...a, 4, 4, 4];
// console.log("replaceAllCopy :", e.replaceAllCopy(4, 2));
// console.log("result", e);
// e = [...a];
// console.log("removeCopy :", e.removeCopy(2));
// console.log("result", e);
// e = [...a];
// console.log("removeAllCopy :", e.removeAllCopy(4));
// console.log("result", e);
// e = [...a, 4, 4, 4];
// console.log("removeAllCopy :", e.removeAllCopy(4, 2, 6));
// console.log("result", e);
// e = [...a];
// console.log("popIndex :", e.popIndex(0));
// console.log("result", e);
// e = [...a];
// console.log("clear :", e.clear());
// console.log("result", e);
// e = [...a];
// console.log("index :", e.index(2));
// console.log("result", e);
// e = [...a];
// console.log("count :", e.count(2));
// console.log("result", e);
// e = [...a];
// console.log("pysort [Not Implemented]:", e.pysort());
// console.log("result", e);
// e = [...a];
// console.log("reverser :", e.reverser());
// console.log("result", e);
// e = [...a];
// console.log("reverseCopy :", e.reverseCopy());
// console.log("result", e);
// e = [...a];
// console.log("copy :", e.copy());
// console.log("result", e);
// e = [...a];
// console.log("diffIterable :", e.diffIterable(c));
// console.log("result", e);
// e = [...a];
// console.log("diffSelf :", e.diffSelf(c));
// console.log("result", e);
// e = [...a];
// console.log("diffBoth :", e.diffBoth(c));
// console.log("result", e);
// e = [...a];
// console.log("equal :", e.equal(c));
// console.log("result", e);
// e = [...a];
// console.log("equal :", e.equal(b));
// console.log("result", e);
// e = [...a];
// console.log("similar :", e.similar(b));
// console.log("result", e);
// e = [...a];
// console.log("similar :", e.similar(c));
// console.log("result", e);
e = [...a];
console.log("uniques :", e.uniques());
console.log("result", e);
e = [...a];
console.log("uniques :", e.uniques(2, 5));
console.log("result", e);
e = [...a];
console.log("uniquesCopy :", e.uniquesCopy());
console.log("result", e);
// e = [...a];
// console.log("duplicates :", e.duplicates());
// console.log("result", e);
// e = [...a];
// console.log("duplicatesCopy :", e.duplicatesCopy());
// console.log("result", e);
// e = [...a];
// console.log("enqueue :", e.enqueue(100));
// console.log("result", e);
// e = [...a];
// console.log("dequeue :", e.dequeue());
// console.log("result", e);
// e = [...a];
// console.log("transpose :", e.transpose());
// console.log("result", e);
// e = [...a];
// console.log("transposeCopy :", e.transposeCopy());
// console.log("result", e);
// // e = [...a];
// // console.log(e.immutables());
// // console.log("result", e);
// // e = [...a];
// // console.log("freeze :", e.freeze());
// // console.log("result", e);
// // e[2] = 12;
// // console.log("result", e);
// // e = [...a];
// // console.log("tuple :", e.tuple());
// // console.log("result", e);
// // e[2] = 12;
// // console.log("result", e);
// e = [...c];
// console.log("flatten :", e.flatten());
// console.log("result", e);
// e = [...c];
// console.log("flatten :", e.flatten(2, 7));
// console.log("result", e);
// e = [...c];
// console.log("flattenCopy :", e.flattenCopy());
// console.log("result", e);
// e = [...c];
// console.log("flattenDeep :", e.flattenDeep());
// console.log("result", e);
// e = [...c];
// console.log("flattenDeepCopy :", e.flattenDeepCopy());
// console.log("result", e);
// e = [...a];
// console.log("range :", e.range(15));
// console.log("result", e);
// e = [...a];
// console.log("enumerate :", e.enumerate());
// console.log("result", e);
// e = [...a];
// console.log("del :", e.del(3));
// console.log("result", e);
// e = [...a];
// console.log("del :", e.del(3, 6));
// console.log("result", e);
// e = [...a];
// console.log("del :", e.del());
// console.log("result", e);
// e = [...a];
// console.log("diction :", e.diction());
// console.log("result", e);
// e = [...a];
// console.log("toObject :", e.toObject());
// console.log("result", e);
// e = [...c];
// console.log("subset :", e.subset(a));
// console.log("result e, a", e, a);
// e = [...c];
// console.log("superset :", e.superset(a));
// console.log("result e, a", e, a);
// e = [...a];
// console.log(" extender:", e.extender(function namertest() { console.log("namertest", JSON.stringify([...this])) }, Array));
// console.log("extender", e.namertest());
// console.log("result", e);
// e = [...a];
// console.log("log :", e.log());
// console.log("result", e);
// e = [...a];
// console.log("max :", e.max());
// console.log("result", e);
// e = [...a];
// console.log("maxIndexes :", e.maxIndexes());
// console.log("result", e);
// e = [...a];
// console.log("min :", e.min());
// console.log("result", e);
// e = [...a];
// console.log("minIndexes :", e.minIndexes());
// console.log("result", e);
// e = [...a];
// console.log("average :", e.average());
// console.log("result", e);
// e = [...a];
// console.log("sum :", e.sum());
// console.log("result", e);
// e = [...a];
// console.log("factorialMap :", e.factorialMap());
// console.log("result", e);
// e = [...a];
// console.log("acosMap :", e.acosMap());
// console.log("result", e);
// e = [...a];
// console.log("sinMap :", e.sinMap());
// console.log("result", e);
// e = [...a];
// console.log("asinMap :", e.asinMap());
// console.log("result", e);
// e = [...f];
// console.log("absMap :", e.absMap());
// console.log("result", e);
// e = [...a];
// console.log("cosMap :", e.cosMap());
// console.log("result", e);
// e = [...a];
// console.log("acosMapCopy :", e.acosMapCopy());
// console.log("result", e);
// e = [...a];
// console.log("sinMapCopy :", e.sinMapCopy());
// console.log("result", e);
// e = [...a];
// console.log("asinMapCopy :", e.asinMapCopy());
// console.log("result", e);
// e = [...a];
// console.log("absMapCopy :", e.absMapCopy());
// console.log("result", e);
// e = [...a];
// console.log("cosMapCopy :", e.cosMapCopy());
// console.log("result", e);
// e = [...a];
// console.log("LN2MapCopy :", e.LN2MapCopy());
// console.log("result", e);
// e = [...a];
// console.log("LN10MapCopy :", e.LN10MapCopy());
// console.log("result", e);
// e = [...a];
// console.log("LOG2EMapCopy :", e.LOG2EMapCopy());
// console.log("result", e);
// e = [...a];
// console.log("LOG10EMapCopy :", e.LOG10EMapCopy());
// console.log("result", e);
// e = [...a];
// console.log("LN2MapCopy :", e.LN2MapCopy());
// console.log("result", e);
// e = [...a];
// console.log("LN10MapCopy :", e.LN10MapCopy());
// console.log("result", e);
// e = [...a];
// console.log("LOG2EMapCopy :", e.LOG2EMapCopy());
// console.log("result", e);
// e = [...a];
// console.log("LOG2EMapCopy :", e.LOG10EMapCopy());
// console.log("result", e);
// e = [...f];
// console.log("floorMap :", e.floorMap());
// console.log("result", e);
// e = [...f];
// console.log("ceilMap :", e.ceilMap());
// console.log("result", e);
// e = [...f];
// console.log("roundMap :", e.roundMap());
// console.log("result", e);
// e = [...a];
// console.log("squareMap :", e.squareMap());
// console.log("result", e);
// e = [...a];
// console.log("sqrtMap :", e.sqrtMap());
// console.log("result", e);
// e = [...a];
// console.log("powMap :", e.powMap(3));
// console.log("result", e);
// e = [...a];
// console.log("multiplyMap :", e.multiplyMap(3));
// console.log("result", e);
// e = [...f];
// console.log("floorMapCopy :", e.floorMapCopy());
// console.log("result", e);
// e = [...f];
// console.log("ceilMapCopy :", e.ceilMapCopy());
// console.log("result", e);
// e = [...f];
// console.log("roundMapCopy :", e.roundMapCopy());
// console.log("result", e);
// e = [...f];
// console.log("squareMapCopy :", e.squareMapCopy());
// console.log("result", e);
// e = [...f];
// console.log("sqrtMapCopy :", e.sqrtMapCopy());
// console.log("result", e);
// e = [...f];
// console.log("powMapCopy :", e.powMapCopy(3));
// console.log("result", e);
// e = [...f];
// console.log("multiplyMapCopy :", e.multiplyMapCopy(3));
// console.log("result", e);
// e = [...a];
// console.log("randomRange :", e.randomRange(10));
// console.log("result", e);
// e = [...a];
// console.log("fillRandomRange :", e.fillRandomRange(5));
// console.log("result", e);
// e = [...a];
// console.log("fillRandomRange start:", e.fillRandomRange(5, 2));
// console.log("result", e);
// e = [...a];
// console.log("fillRandomRange start end:", e.fillRandomRange(5, 2, 7));
// console.log("result", e);
// e = [...a];
// console.log("fillRandomRange start end replace:", e.fillRandomRange(5, 0, e.length, "inrange"));
// console.log("result", e);
// e = [...a];
// console.log("fillRandomRange start end:", e.fillRandomRange(5, 2, 5, "inrange"));
// console.log("result", e);
// e = [...a];
// console.log("fillRandomRange start end replace:", e.fillRandomRange(5, 0, e.length, "replace"));
// console.log("result", e);
// e = [...a];
// console.log("fillRandomRange start end replace:", e.fillRandomRange(5, 2, 5, "replace"));
// console.log("result", e);
// e = [...a];
// console.log("fillRange :", e.fillRange(5));
// console.log("result", e);
// e = [...a];
// console.log("fillRange start:", e.fillRange(5, 2));
// console.log("result", e);
// e = [...a];
// console.log("fillRange start end:", e.fillRange(5, 2, 7));
// console.log("result", e);
// e = [...a];
// console.log("fillRange start end replace:", e.fillRange(5, 0, e.length, "inrange"));
// console.log("result", e);
// e = [...a];
// console.log("fillRange start end:", e.fillRange(5, 2, 5, "inrange"));
// console.log("result", e);
// e = [...a];
// console.log("fillRange start end replace:", e.fillRange(5, 0, e.length, "replace"));
// console.log("result", e);
// e = [...a];
// console.log("fillRange start end replace:", e.fillRange(5, 2, 5, "replace"));
// console.log("result", e);
e = [...a];
console.log(e.Mapper("sqrt", 0, e.length, "replace"));
console.log("result", e);
// e = [...a];
// console.log(e.MapperCopy("sqrt", 0, e.length, "replace"));
// console.log("result", e);
