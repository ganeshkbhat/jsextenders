# extenders
Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js

### IN DEVELOPMENT - DO NOT INSTALL


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


<a name="array"></a>
### Array Prototype extended functions

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

`[1, 2, 3, 4].acosMap(start, end, method = "replace")`


###### .cosMap
Modifies the array with `cos` of all the values. Modifies the whole array in place. The method option has two options - `replace` (replace the whole array with these values) and `inrange` (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].cosMap(start, end, method = "replace")`


###### .sinMap
Modifies the array with `sin` of all the values. Modifies the whole array in place. The method option has two options - `replace` (replace the whole array with these values) and `inrange` (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].sinMap(start, end, method = "replace")`


###### .asinMap
Modifies the array with `asin` of all the values. Modifies the whole array in place. The method option has two options - `replace` (replace the whole array with these values) and `inrange` (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].asinMap(start, end, method = "replace")`


###### .absMap
Modifies the array with `absolute` of all the values. Modifies the whole array in place. The method option has two options - `replace` (replace the whole array with these values) and `inrange` (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].absMap(start, end, method = "replace")`


###### .factorialMap
Returns the `factorial value` of all number values of the array from `start` index to `end` index.

`[1, 2, 3, 4].factorialMap(start, end)`


###### .cosMapCopy
Returns the array with `cos` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].cosMapCopy(start, end)`


###### .acosMapCopy
Returns the array with `acos` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].acosMapCopy(start, end)`


###### .sinMapCopy
Returns the array with `sin` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].sinMapCopy(start, end)`


###### .asinMapCopy
Returns the array with `asin` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].asinMapCopy(start, end)`


###### .absMapCopy
Returns the array with `absMap` of all the values of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].absMapCopy(start, end)`


###### .LN2Map
Modifies the array with `LN2` of all the values from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].LN2Map(start, end, method = "replace")`


###### .LN10Map
Modifies the array with `LN10` of all the values from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].LN10Map(start, end, method = "replace")`


###### .LOG2EMap
Modifies the array with `Log2` of all the values from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].LOG2EMap(start, end, method = "replace")`


###### .LOG10EMap
Modifies the array with `Log10` of all the values from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].LOG10EMap(start, end, method = "replace")`


###### .LN2MapCopy
Returns the copy array with `LN2` of all the values from `start` index to `end` index. Returns a new object and does not modify the array in place.
`[1, 2, 3, 4].LN2MapCopy(start, end)`


###### .LN10MapCopy
Returns the copy array with `LN10` of all the values from `start` index to `end` index. Returns a new object and does not modify the array in place.
`[1, 2, 3, 4].LN10MapCopy(start, end)`


###### .LOG2EMapCopy
Returns the copy array with `Log2E` of all the values from `start` index to `end` index. Returns a new object and does not modify the array in place.
`[1, 2, 3, 4].LOG2EMapCopy(start, end)`


###### .floorMap
Modifies the array with `floor` of all the number values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].floorMap(start, end, method = "replace")`


###### .ceilMap
Modifies the array with `ceil` of all the number values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].ceilMap(start, end, method = "replace")`


###### .roundMap
Modifies the array with `round` of all the number values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].roundMap(start, end, method = "replace")`


###### .floorMapCopy
Returns the copy of array with `floor` of all the number values from `start` index to `end` index. Returns a new object and does not modify the array in place. 

`[1, 2, 3, 4].floorMapCopy(start, end)`


###### .ceilMapCopy
Returns the copy of array with `ceil` of all the number values from `start` index to `end` index. Returns a new object and does not modify the array in place. 

`[1, 2, 3, 4].ceilMapCopy(start, end)`


###### .roundMapCopy
Returns the copy of array with `round` of all the number values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].roundMapCopy(start, end)`


###### .squareMap
Modifies the array with `square` of all the array values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].squareMap(start, end, method = "replace")`


###### .sqrtMap
Modifies the array with `square root` of all the array values from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].sqrtMap(start, end, method = "replace")`


###### .powMap
Modifies the array with `power` of all the array values with the provided power value from `start` index to `end` index. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].powMap(power, start, end, method = "replace")`


###### .multiplyMap
Modifies the array with `multiplication` of all the array values from `start` index to `end` index with provided multiplier. Modifies the whole array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].multiplyMap(multiplier, start, end, method = "replace")`


###### .squareMapCopy
Returns the array with `square` of all the array values from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].squareMapCopy(start, end)`


###### .sqrtMapCopy
Returns the array with `square root` of all the array values from `start` index to `end` index. Returns a new object and does not modify the array in place. 

`[1, 2, 3, 4].sqrtMapCopy(start, end)`


###### .powMapCopy
Returns the array with `power` of all the array values with provided power value from `start` index to `end` index. Returns a new object and does not modify the array in place. 

`[1, 2, 3, 4].powMapCopy(power, start, end)`


###### .multiplyMapCopy
Returns the array with `multiplication` of provided multiplier with all the array values from `start` index to `end` index. Returns a new object and does not modify the array in place. 

`[1, 2, 3, 4].multiplyMapCopy(multiplier, start, end)`


###### .randomRange
Returns the array with count number of array items with random values multiplied with the provided multiplier. Modifies the array in place.

`[1, 2, 3, 4].randomRange(count, multiplier)`


###### .fillRandomRange

`[1, 2, 3, 4].fillRandomRange(count, multiplier, start, end, method = "replace")`


###### .append
Append the item to the array. Modifies the array in place.

`[1, 2, 3, 4].append(item)`


###### .isArray
Returns if the provided iterable is an array. Alternatively, if the iterable is not provided then it check if the object is an Array.

`[1, 2, 3, 4].isArray(iterable)`


###### .insert
Insert the item to the array at index provided. Modifies the array in place.

`[1, 2, 3, 4].insert(index, item)`


###### .insertAll
Insert the array or list of items to the array at index provided. Modifies the array in place.

`[1, 2, 3, 4].insertAll(index, array)`


###### .count
Count the number of items in the array from `start` index to `end` index.

`[1, 2, 3, 4].count(item, start, end)`


###### .replace
Replace the item to the array at index provided from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].replace(index, item, start, end)`


###### .remove
Removes the first found equal item and Returns the removed item of array from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].remove(item)`


###### .removeAll
Removes all items and Returns the removed items of array from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].removeAll(item, start, end)`


###### .pop
Removes and Returns the removed item index of array. Modifies the array in place.

`[1, 2, 3, 4].pop(index)`


###### .clear
Clears the array from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].clear(start, end)`


###### .index
Returns the index of array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].index(item, start, end)`


###### .sort
Modifies the array with a sort from `start` index to `end` index. Modifies the array in place.

`[1, 2, 3, 4].sort(key = null, reverse = false, start, end)`


###### .reverse
Return a one level reverse copy of the array from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place)

`[1, 2, 3, 4].reverse(start, end, method = "replace")`


###### .reverseCopy
Returns a deep reverse copy of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].reverseCopy(start, end)`


###### .copy
Returns a deep copy of the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].copy(start, end)`


###### .diction
Returns the converted dictionary from the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].diction(mapFunction, arg, start, end)`


###### .subset
Check if the array from `start` index to `end` index is a subset of the other provided iterator. Returns a boolean.

`[1, 2, 3, 4].subset(iterable, start, end)`


###### .superset
Check if the array from `start` index to `end` index is a superset of the other provided iterator. Returns a boolean.

`[1, 2, 3, 4].superset(iterable, start, end)`


###### .diffIterable
Returns an object that has different items from `start` index to `end` index in the provided iterator when compared to the array. Returns a new object and does not modify the array in place

`[1, 2, 3, 4].diffIterable(iterable, start, end)`


###### .diffSelf
Returns an object that has different items from `start` index to `end` index in the array when compared to other provided iterator. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].diffSelf(iterable, start, end)`


###### .diffBoth
Returns an object that has different items from `start` index to `end` index in both the array when compared to other provided iterator. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].diffBoth(iterable, start, end)`


###### .equal
Check is the array from `start` index to `end` index and provided iterator have similar number of items, similar items, and similar indexes.

`[1, 2, 3, 4].equal(iterable, start, end)`


###### .similar
Check if the array from `start` index to `end` index and provided iterator have similar number of items and similar item values.

`[1, 2, 3, 4].similar(iterable, start, end)`


###### .uniques
Modifies the array from `start` index to `end` index into all the unique items in an array. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].uniques(start, end, method = "replace")`


###### .uniquesCopy
Returns all the unique items of an array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].uniquesCopy(start, end)`


###### .duplicates
Modifies the array from `start` index to `end` index into (only) all the duplicate items in an array. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].duplicates(start, end, method = "replace")`


###### .duplicatesCopy
Returns (only) all the duplicate items of an array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].duplicatesCopy(start, end)`


###### .enqueue
Insert the item of into an array using the push method (Bottom FIFO queue execution)

`[1, 2, 3, 4].enqueue(item)`


###### .dequeue
Remove the first item of an array using the shift method (Bottom FIFO queue execution)

`[1, 2, 3, 4].dequeue()`


###### .transpose
Transpose the array from `start` index to `end` index. Modifies the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].transpose(iterator, start, end, method = "replace")`


###### .transposeCopy
Transpose the array from `start` index to `end` index. Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].transposeCopy(iterator, start, end)`


###### .immutable, .freeze, .tuple
Create an array into immutable array using the freeze method.

`[1, 2, 3, 4].immutable()`


###### .flatten
Flatten the array from `start` index to `end` index . Modify's the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].flatten(start, end, method = "replace")`


###### .flattenDeep
Deep Flatten the array from `start` index to `end` index . Modify's the array in place. The method option has two options - replace (replace the whole array with these values) and inrange (just replace the range of items with the new array values keeping the left and right array items in place).

`[1, 2, 3, 4].flattenDeep(start, end, method = "replace")`


###### .flattenCopy
Flatten the array from `start` index to `end` index . Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].flattenCopy(start, end)`


###### .flattenDeepCopy
Deep Flatten the array from `start` index to `end` index . Returns a new object and does not modify the array in place.

`[1, 2, 3, 4].flattenDeepCopy(start, end)`


###### .range
Create a range of numbers from `start` index to `end` index with a increment of provided `step`.

`[1, 2, 3, 4].range(start, stop, step)`


###### .enumerate
Enumerate an array into an iteratable array of objects with structure `{index, value}` in each item.

`[1, 2, 3, 4].enumerate(type = "object")`


###### .del
Delete items of an array from start index to end index.

`[1, 2, 3, 4].del(start, end)`


###### .log
Log items of an array from `start` index to `end` index to console.

`[1, 2, 3, 4].log(start, end)`



<a name="object"></a>
### Object prototype extended function

#### Object - Dictionary

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


<a name="string"></a>
### String prototype extended function


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

#### String - API List

###### .clear
`"Test string".clear(start, end)`


<a name="numbers"></a>
### Numbers prototype extended function

#### Numbers

```

```

#### Numbers - API List

###### .clear
`.clear(start, end)`


<a name="math"></a>
### Math prototype extended function

#### Math

```

```


#### Math - API List

###### .clear
`.clear(start, end)`


<a name="utils"></a>
### Utils prototype extended function

#### Utils

```

```


#### Utils - API List

###### .clear
`.clear(start, end)`



<a name="decorators"></a>
### Decorators prototype extended function

#### Decorators

```

```


#### Decorators - API List

###### .clear
`.clear(start, end)`



<a name="extenders"></a>
### Extenders functions

#### Extenders

```

```

###### .clear
`.clear(start, end)`



# Current Status

* In development 


# Todo

Check [.todo](./.todo) file for latest TODO list

<!-- # References -->


# License

The MIT License (MIT) - See [LICENSE](./LICENSE) for further details

Copyright © 2023 - till library works
