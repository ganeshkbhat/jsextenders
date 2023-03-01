# extenders

Node module for Array, Object, String, Decorator, extention Utils like for Python and more for Node.js

Find the demos in the [demos folder](./demos)



#### USAGE



###### JS

```
var ArrayExtended = require("extenders").ArrayExtended;

let arr = ArrayExtended([1,2,3,4,5,6]);
console.log(arr);
arr.clear();
console.log(arr);
```



###### CJS

```
var ArrayExtended = import("extenders").ArrayExtended;

let arr = ArrayExtended([1,2,3,4,5,6]);
console.log(arr);
arr.clear();
console.log(arr);
```



###### ESM

```
import ArrayExtended from "extenders";

let arr = ArrayExtended([1,2,3,4,5,6]);
console.log(arr);
arr.clear();
console.log(arr);
```



### Different modules and functions

- [Array](#array)
- [Object](#object)
- [String](#string)
- [Numbers](#numbers)
- [Math](#math)
- [Utils](#utils)
- [Decorators](#decorators)
- [Extenders](#extenders)
- [Numpyjs](#numpyjs)
- [Pandas](#pandas)


<a name="array"></a>

### Array Prototype extended functions

The extenders library's array extended functions tries to add many common use cases of array modifiers and functions missing or used constantly in projects. This library tries to provide/ incorporate all (or atleast most)
    1. python list/ tuple functions
    2. common use cases of Math, and other array like functions
    3. _ (underscore) functions missing from python list, tuple, common functions


```
var extendArray = require("extenders").extendArray;
extendArray();

let arr = [1,2,3,4,5,6];
console.log(arr);
arr.clear();
console.log(arr);
```

```
var ArrayExtended = require("extenders").ArrayExtended;

let arr = ArrayExtended([1,2,3,4,5,6]);
console.log(arr);
arr.clear();
console.log(arr);
```

```
var extendArray = require("extenders").extendArray;
extendArray();

// Below find the usage of the extended functions

```


#### Array - API List

###### .execute

Execute the function provided that takes the iterator as an argument of the function.

`[1, 2, 3, 4].execute(executeFunction)`

###### .extend

Extend or Concat the provided iterable at provided `index`. The default is last index of the array.

`[1, 2, 3, 4].extend(iterable, index)`

###### .max

Returns the provided number (count) of maximum values in the array from `start` index to `end` index.

`[1, 2, 3, 4].max(count, start, end)`

###### .maxIndexes

Returns the provided number (count) of maximum values with their indexes in the array from `start` index to `end` index.

`[1, 2, 3, 4].maxIndexes(count, start, end)`

###### .min

Returns the provided number (count) of minimal values in the array from `start` index to `end` index.

`[1, 2, 3, 4].min(count, start, end)`

###### .minIndexes

Returns the provided number (count) of minimal values with their indexes in the array from `start` index to `end` index.

`[1, 2, 3, 4].minIndexes(count, start, end)`

###### .average

Returns the average of all the number or decimal values in the array from `start` index to `end` index.

`[1, 2, 3, 4].average(start, end)`

###### .sum

Returns the sum of all the number or decimal values in the array from `start` index to `end` index.

`[1, 2, 3, 4].sum(start, end)`

###### .acosMap

Modifies the array with `acos` of all the values. Modifies the whole array in place. The method option has two options - `replace` (replace the whole array with these values) and `inrange` (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].acosMap(start, end, method = "replace", thisValue)`

###### .cosMap

Modifies the array with `cos` of all the values. Modifies the whole array in place. The method option has two options - `replace` (replace the whole array with these values) and `inrange` (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].cosMap(start, end, method = "replace", thisValue)`

###### .sinMap

Modifies the array with `sin` of all the values. Modifies the whole array in place. The method option has two options - `replace` (replace the whole array with these values) and `inrange` (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].sinMap(start, end, method = "replace", thisValue)`

###### .asinMap

Modifies the array with `asin` of all the values. Modifies the whole array in place. The method option has two options - `replace` (replace the whole array with these values) and `inrange` (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].asinMap(start, end, method = "replace", thisValue)`

###### .absMap

Modifies the array with `absolute` of all the values. Modifies the whole array in place. The method option has two options - `replace` (replace the whole array with these values) and `inrange` (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].absMap(start, end, method = "replace", thisValue)`

###### .factorialMap

Returns the `factorial value` of all number values of the array from `start` index to `end` index.

`[1, 2, 3, 4].factorialMap(start, end, thisValue)`

###### .cosMapCopy

Returns the array with `cos` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].cosMapCopy(start, end, method = "replace", thisValue)`

###### .acosMapCopy

Returns the array with `acos` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].acosMapCopy(start, end, method = "replace", thisValue)`

###### .sinMapCopy

Returns the array with `sin` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].sinMapCopy(start, end, method = "replace", thisValue)`

###### .asinMapCopy

Returns the array with `asin` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].asinMapCopy(start, end, method = "replace", thisValue)`

###### .absMapCopy

Returns the array with `absMap` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].absMapCopy(start, end, method = "replace", thisValue)`

<!-- 
###### .LN2Map

Modifies the array with `LN2` of all the values from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].LN2Map(start, end, method = "replace", thisValue)`

###### .LN10Map

Modifies the array with `LN10` of all the values from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].LN10Map(start, end, method = "replace", thisValue)`

###### .LOG2EMap

Modifies the array with `Log2` of all the values from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].LOG2EMap(start, end, method = "replace", thisValue)`

###### .LOG10EMap

Modifies the array with `Log10` of all the values from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].LOG10EMap(start, end, method = "replace", thisValue)`

###### .LN2MapCopy

Returns the copy array with `LN2` of all the values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].LN2MapCopy(start, end, method = "replace", thisValue)`

###### .LN10MapCopy

Returns the copy array with `LN10` of all the values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].LN10MapCopy(start, end, method = "replace", thisValue)`

###### .LOG2EMapCopy

Returns the copy array with `Log2E` of all the values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].LOG2EMapCopy(start, end, method = "replace", thisValue)` 
-->

###### .floorMap

Modifies the array with `floor` of all the number values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].floorMap(start, end, method = "replace", thisValue)`

###### .ceilMap

Modifies the array with `ceil` of all the number values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].ceilMap(start, end, method = "replace", thisValue)`

###### .roundMap

Modifies the array with `round` of all the number values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].roundMap(start, end, method = "replace", thisValue)`

###### .floorMapCopy

Returns the copy of array with `floor` of all the number values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].floorMapCopy(start, end, method = "replace", thisValue)`

###### .ceilMapCopy

Returns the copy of array with `ceil` of all the number values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].ceilMapCopy(start, end, method = "replace", thisValue)`

###### .roundMapCopy

Returns the copy of array with `round` of all the number values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].roundMapCopy(start, end, method = "replace", thisValue)`

###### .squareMap

Modifies the array with `square` of all the array values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].squareMap(start, end, method = "replace", thisValue)`

###### .sqrtMap

Modifies the array with `square root` of all the array values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].sqrtMap(start, end, method = "replace", thisValue)`

###### .powMap

Modifies the array with `power` of all the array values with the provided power value from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].powMap(power, start, end, method = "replace", thisValue)`

###### .multiplyMap

Modifies the array with `multiplication` of all the array values from `start` index to `end` index with provided multiplier. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].multiplyMap(multiplier, start, end, method = "replace", thisValue)`

###### .squareMapCopy

Returns the array with `square` of all the array values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].squareMapCopy(start, end, method = "replace", thisValue)`

###### .sqrtMapCopy

Returns the array with `square root` of all the array values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].sqrtMapCopy(start, end, method = "replace", thisValue)`

###### .powMapCopy

Returns the array with `power` of all the array values with provided power value from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].powMapCopy(power, start, end, method = "replace", thisValue)`

###### .multiplyMapCopy

Returns the array with `multiplication` of provided multiplier with all the array values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].multiplyMapCopy(multiplier, start, end, method = "replace", thisValue)`

###### .randomRange

Returns the array with count number of array items with random values multiplied with the provided multiplier. Modifies the array in place.

`[1, 2, 3, 4].randomRange(count, multiplier)`

<!-- 
###### .fillRandomRange

Modifies the array with array items with random values multiplied with the provided multiplier from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].fillRandomRange(count, multiplier, start, end, method = "replace", thisValue)` 
-->

###### .fillRange

Modifies the array with array items with random values multiplied with the provided multiplier from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].fillRange(item, start, end, method = "inrange", thisValue)`

###### .append

Append the item to the array. Modifies the array in place.

`[1, 2, 3, 4].append(item)`

###### .isArray

Returns if the provided iterable is an array. Alternatively, if the iterable is not provided then it check if the object is an Array.

`[1, 2, 3, 4].isArray(iterable)`

###### .insert

Insert the item to the array at index provided. Modifies the array in place.

`[1, 2, 3, 4].insert(index, item, thisArray)`

###### .insertAll

Insert the array or list of items to the array at index provided. Modifies the array in place.

`[1, 2, 3, 4].insertAll(index, array, thisArray)`

###### .concatMerge

Concat the array or list of items to the array at index provided. Modifies the array in place.

`[1, 2, 3, 4].concatMerge(array, thisValue, ...args)`

###### .merge

Concat the array or list of items to the array at index provided. Modifies the array in place.

`[1, 2, 3, 4].merge(array, thisValue, ...args)`

###### .count

Count the number of items in the array from `start` index to `end` index.

`[1, 2, 3, 4].count(item, start, end, method = "replace", thisValue)`

###### .replace

Replace the item to the array at index provided from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].replace(index, item, thisValue)`

###### .replaceCopy

Replace the item to the array at index provided from `start` index to `end` index. Returns an new modified array.

`[1, 2, 3, 4].replaceCopy(index, item, thisValue)`

###### .replaceAll

Replace the item to the array at index provided from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].replaceAll(item, replaceValue, start, end, method = "replace", thisValue)`

###### .replaceAllCopy

Replace the item to the array at index provided from `start` index to `end` index. Returns an new modified array.

`[1, 2, 3, 4].replaceAllCopy(item, replaceValue, start, end, method = "replace", thisValue)`

###### .remove

Removes the first found equal item and Returns the removed item of array from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].remove(item, thisArray)`

###### .removeAll

Removes all items and Returns the removed items of array from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].removeAll(item, start, end, method = "replace", thisValue)`

###### .removeCopy

Removes the first found equal item and Returns the removed item of array from `start` index to `end` index. Returns a new modified array object.

`[1, 2, 3, 4].removeCopy(item, thisArray)`

###### .removeAllCopy

Removes all items and Returns the removed items of array from `start` index to `end` index. Returns a new modified array object.

`[1, 2, 3, 4].removeAllCopy(item, start, end, method = "replace", thisValue)`

###### .pop

Removes and Returns the removed item index of array. Modifies the array in place.

`[1, 2, 3, 4].pop(index)`

###### .clear

Clears the array from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].clear(start, end)`

###### .index

Returns the index of array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].index(item, start, end, thisArray)`

###### .sort

Modifies the array with a sort from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].sort(key = null, reverse = false, start, end, method = "replace", thisValue)`

###### .reverse

Return a one level reverse copy of the array from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].reverse(start, end, thisValue)`

###### .reverseCopy

Returns a deep reverse copy of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].reverseCopy(start, end, thisValue)`

###### .copy

Returns a deep copy of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].copy(start, end, thisValue)`

###### .diction

Returns the converted dictionary from the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].diction(mapperFunction, arg, start, end, keyconvertor, thisValue, keyArrayValue)`

###### .subset

Check if the array from `start` index to `end` index is a subset of the other provided iterator. Returns a boolean.

`[1, 2, 3, 4].subset(iterable, start, end, thisValue)`

###### .superset

Check if the array from `start` index to `end` index is a superset of the other provided iterator. Returns a boolean.

`[1, 2, 3, 4].superset(iterable, start, end, thisValue)`

###### .diffIterable

Returns an object that has different items from `start` index to `end` index in the provided iterator when compared to the array. Returns a new object and does not modify the array in place

`[1, 2, 3, 4].diffIterable(iterable, start, end, thisValue)`

###### .diffSelf

Returns an object that has different items from `start` index to `end` index in the array when compared to other provided iterator. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].diffSelf(iterable, start, end, thisValue)`

###### .diffBoth

Returns an object that has different items from `start` index to `end` index in both the array when compared to other provided iterator. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].diffBoth(iterable, start, end, thisValue)`

###### .equal

Check is the array from `start` index to `end` index and provided iterator have similar number of items, similar items, and similar indexes.

`[1, 2, 3, 4].equal(iterable, start, end, thisValue)`

###### .similar

Check if the array from `start` index to `end` index and provided iterator have similar number of items and similar item values.

`[1, 2, 3, 4].similar(iterable, start, end, thisValue)`

###### .uniques

Modifies the array from `start` index to `end` index into all the unique items in an array. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].uniques(start, end, method = "replace", thisValue)`

###### .uniquesCopy

Returns all the unique items of an array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].uniquesCopy(start, end, method = "replace", thisValue)`

###### .duplicates

Modifies the array from `start` index to `end` index into (only) all the duplicate items in an array. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].duplicates(start, end, method = "replace", thisValue)`

###### .duplicatesCopy

Returns (only) all the duplicate items of an array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].duplicatesCopy(start, end, method = "replace", thisValue)`

###### .enqueue

Insert the item of into an array using the push method (Bottom FIFO queue execution)

`[1, 2, 3, 4].enqueue(item)`

###### .dequeue

Remove the first item of an array using the shift method (Bottom FIFO queue execution)

`[1, 2, 3, 4].dequeue()`

###### .transpose

Transpose the array from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].transpose(iterator, start, end, method = "replace", thisValue)`

###### .transposeCopy

Transpose the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].transposeCopy(iterator, start, end, method = "replace", thisValue)`

###### .immutable, .freeze, .tuple

Create an array into immutable array using the `freeze` method. Modifies the array in place unless an `array` is provided. `array` option provided returns a frozen object as if `.freeze` is a frozen array object creator.

`[1, 2, 3, 4].immutables(array)`
`[1, 2, 3, 4].freeze(array)`
`[1, 2, 3, 4].tuple(array)`

`[1, 2, 3, 4].immutables()`
`[1, 2, 3, 4].freeze()`
`[1, 2, 3, 4].tuple()`

###### .flatten

Flatten the array from `start` index to `end` index . Modify's the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].flatten(start, end, method = "replace", thisValue)`

###### .flattenDeep

Deep Flatten the array from `start` index to `end` index . Modify's the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].flattenDeep(start, end, method = "replace", thisValue)`

###### .flattenCopy

Flatten the array from `start` index to `end` index . Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].flattenCopy(start, end, method = "replace", thisValue)`

###### .flattenDeepCopy

Deep Flatten the array from `start` index to `end` index . Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].flattenDeepCopy(start, end, method = "replace", thisValue)`

###### .range

Create a range of numbers from `start` index to `end` index with a increment of provided `step`.

`[1, 2, 3, 4].range(start, stop, step)`

###### .enumerate

Enumerate an array into an iteratable array of objects with structure `{index, value}` or `[index, value]` in each item. Type can be object or array.

`[1, 2, 3, 4].enumerate(type = "object", thisValue)`

###### .generator

Generator is a function that returns a generator function from an array into a iteratable generator function with its values of objects with structure `{index, value}` or `[index, value]`. Type can be object or array.

`[1, 2, 3, 4].generator(type = "object", thisValue)`

###### .del

Delete items of an array from start index to end index.

`[1, 2, 3, 4].del(start, end, thisValue)`

###### .log

Log items of an array from `start` index to `end` index to console.

`[1, 2, 3, 4].log(start, end, message = "", callback = console.log, thisValue)`



<a name="object"></a>

### Object prototype extended function



#### Object - Dictionary [TODO <sub>indevelopment</sub>]


```
var extendObject = require("extenders").extendObject;
extendObject();

let arr = [1,2,3,4,5,6];
console.log(arr);
arr.clear();
console.log(arr);
```

```
var ObjectExtended = require("extenders").ObjectExtended;

let obj = ObjectExtended.create({ "test" : "test", "tester" : "100" });
console.log(obj);
obj.clear();
console.log(obj);
```


#### Object - API List [TODO <sub>indevelopment</sub>]


###### .clear [TODO <sub>indevelopment</sub>]



<a name="string"></a>

### String prototype extended function



#### String [TODO <sub>indevelopment</sub>]



```
var StringExtended = require("extenders").StringExtended;

let str = new StringExtended("Tesing my modified String JS object functions");
console.log(str);
str.clear();
console.log(str);
```

```
var extendString = require("extenders").extendString;
extendString();

let str = "Tesing my modified String JS object functions";
console.log(str);
str.clear();
console.log(str);
```


#### String - API List [TODO <sub>indevelopment</sub>]


###### .clear

`"Test string".clear(start, end)`



<a name="numbers"></a>

### Numbers prototype extended function



#### Numbers [TODO <sub>indevelopment</sub>]


```
var NumberExtended = require("extenders").NumberExtended;

let str = new NumberExtended("Tesing my modified String JS object functions");
console.log(str);
str.clear();
console.log(str);
```

```
var extendNumber = require("extenders").extendNumber;
extendNumber();

let str = "Tesing my modified String JS object functions";
console.log(str);
str.clear();
console.log(str);
```


#### Numbers - API List [TODO <sub>indevelopment</sub>]


###### .imul

`.imul(...args)`



<a name="math"></a>

### Math prototype extended function



#### Math [TODO <sub>indevelopment</sub>]


```
var extendMath = require("extenders").extendMath;
extendMath();

let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
arr.imul();
console.log(arr);
```


#### Math - API List [TODO <sub>indevelopment</sub>]


###### .imul

`.imul(...args)`



<a name="utils"></a>

### Utils prototype extended function



#### Utils [TODO <sub>indevelopment</sub>]


```

```


#### Utils - API List [TODO <sub>indevelopment</sub>]


###### .clear

`.clear(start, end)`



<a name="decorators"></a>

### Decorators prototype extended function



#### Decorators [TODO <sub>indevelopment</sub>]


```

```


#### Decorators - API List [TODO <sub>indevelopment</sub>]


###### .decorate

`.decorate()`



<a name="extenders"></a>

### Extenders functions



#### Extenders [TODO <sub>indevelopment</sub>]


```

```


#### Extenders - API List [TODO <sub>indevelopment</sub>]


###### .clear

`.clear()`



<a name="numpyjs"></a>

### Numpyjs functions



#### Numpyjs [TODO <sub>considering</sub>]


```

```


#### Numpyjs - API List [TODO <sub>considering</sub>]


###### .clear

`.clear()`



<a name="pandas"></a>

### Pandas functions



#### Pandas [TODO <sub>considering</sub>]


```

```


#### Pandas - API List [TODO <sub>considering</sub>]


###### .clear

`.clear()`



# Current Status

- In development for Object, String, Decorator, Math, Numbers.

# Todo

Check [.todo](./.todo) file for latest TODO list

<!-- # References -->

# License

The MIT License (MIT) - See [LICENSE](./LICENSE) for further details

Copyright © 2023 - till library works
