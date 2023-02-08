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
`[1, 2, 3, 4].execute(executeFunction)`

###### .extend
`[1, 2, 3, 4].extend(iterable)`

###### .max
`[1, 2, 3, 4].max(count, start, end)`

###### .maxIndexes
`[1, 2, 3, 4].maxIndexes(count, start, end)`

###### .min
`[1, 2, 3, 4].min(count, start, end)`

###### .minIndexes
`[1, 2, 3, 4].minIndexes(count, start, end)`

###### .average
`[1, 2, 3, 4].average(start, end)`

###### .sum
`[1, 2, 3, 4].sum(start, end)`

###### .acosMap
`[1, 2, 3, 4].acosMap(start, end, method = "replace")`

###### .cosMap
`[1, 2, 3, 4].cosMap(start, end, method = "replace")`

###### .sinMap
`[1, 2, 3, 4].sinMap(start, end, method = "replace")`

###### .asinMap
`[1, 2, 3, 4].asinMap(start, end, method = "replace")`

###### .absMap
`[1, 2, 3, 4].absMap(start, end, method = "replace")`

###### .factorialMap
`[1, 2, 3, 4].factorialMap(start, end)`

###### .cosMapCopy
`[1, 2, 3, 4].cosMapCopy(start, end)`

###### .acosMapCopy
`[1, 2, 3, 4].acosMapCopy(start, end)`

###### .sinMapCopy
`[1, 2, 3, 4].sinMapCopy(start, end)`

###### .asinMapCopy
`[1, 2, 3, 4].asinMapCopy(start, end)`

###### .absMapCopy
`[1, 2, 3, 4].absMapCopy(start, end)`

###### .LN2Map
`[1, 2, 3, 4].LN2Map(start, end, method = "replace")`

###### .LN10Map
`[1, 2, 3, 4].LN10Map(start, end, method = "replace")`

###### .LOG2EMap
`[1, 2, 3, 4].LOG2EMap(start, end, method = "replace")`

###### .LOG10EMap
`[1, 2, 3, 4].LOG10EMap(start, end, method = "replace")`

###### .LN2MapCopy
`[1, 2, 3, 4].LN2MapCopy(start, end)`

###### .LN10MapCopy
`[1, 2, 3, 4].LN10MapCopy(start, end)`

###### .LOG2EMapCopy
`[1, 2, 3, 4].LOG2EMapCopy(start, end)`

###### .floorMap
`[1, 2, 3, 4].floorMap(start, end, method = "replace")`

###### .ceilMap
`[1, 2, 3, 4].ceilMap(start, end, method = "replace")`

###### .roundMap
`[1, 2, 3, 4].roundMap(start, end, method = "replace")`

###### .floorMapCopy
`[1, 2, 3, 4].floorMapCopy(start, end)`

###### .ceilMapCopy
`[1, 2, 3, 4].ceilMapCopy(start, end)`

###### .roundMapCopy
`[1, 2, 3, 4].roundMapCopy(start, end)`

###### .squareMap
`[1, 2, 3, 4].squareMap(start, end, method = "replace")`

###### .sqrtMap
`[1, 2, 3, 4].sqrtMap(start, end, method = "replace")`

###### .powMap
`[1, 2, 3, 4].powMap(power, start, end, method = "replace")`

###### .multiplyMap
`[1, 2, 3, 4].multiplyMap(multiplier, start, end, method = "replace")`

###### .squareMapCopy
`[1, 2, 3, 4].squareMapCopy(start, end)`

###### .sqrtMapCopy
`[1, 2, 3, 4].sqrtMapCopy(start, end)`

###### .powMapCopy
`[1, 2, 3, 4].powMapCopy(power, start, end)`

###### .multiplyMapCopy
`[1, 2, 3, 4].multiplyMapCopy(multiplier, start, end)`

###### .randomRange
`[1, 2, 3, 4].randomRange(count, multiplier)`

###### .fillRandomRange
`[1, 2, 3, 4].fillRandomRange(count, multiplier, start, end, method = "replace")`

###### .append
`[1, 2, 3, 4].append(item)`

###### .isArray
`[1, 2, 3, 4].isArray(iterable)`

###### .insert
`[1, 2, 3, 4].insert(index, item)`

###### .insertAll
`[1, 2, 3, 4].insertAll(index, array /* array or item */)`

###### .count
`[1, 2, 3, 4].count(item, start, end)`

###### .replace
`[1, 2, 3, 4].replace(index, item, start, end)`

###### .remove
`[1, 2, 3, 4].remove(item)`

###### .removeAll
`[1, 2, 3, 4].removeAll(item, start, end)`

###### .pop
`[1, 2, 3, 4].pop(index)`

###### .clear
`[1, 2, 3, 4].clear(start, end)`

###### .index
`[1, 2, 3, 4].index(item, start, end)`

###### .sort
`[1, 2, 3, 4].sort(key = null, reverse = false)`

###### .reverse
`[1, 2, 3, 4].reverse(start, end, method = "replace")`

###### .reverseCopy
`[1, 2, 3, 4].reverseCopy(start, end)`

###### .copy
`[1, 2, 3, 4].copy(start, end)`

###### .diction
`[1, 2, 3, 4].diction(mapFunction, arg, start, end)`

###### .subset
`[1, 2, 3, 4].subset(iterable, start, end)`

###### .superset
`[1, 2, 3, 4].superset(iterable, start, end)`

###### .diffIterable
`[1, 2, 3, 4].diffIterable(iterable, start, end)`

###### .diffSelf
`[1, 2, 3, 4].diffSelf(iterable, start, end)`

###### .diffBoth
`[1, 2, 3, 4].diffBoth(iterable, start, end)`

###### .equal
`[1, 2, 3, 4].equal(iterable, start, end)`

###### .similar
`[1, 2, 3, 4].similar(iterable, start, end)`

###### .uniques
`[1, 2, 3, 4].uniques(start, end, method = "replace")`

###### .uniquesCopy
`[1, 2, 3, 4].uniquesCopy(start, end)`

###### .duplicates
`[1, 2, 3, 4].duplicates(start, end, method = "replace")`

###### .duplicatesCopy
`[1, 2, 3, 4].duplicatesCopy(start, end)`

###### .enqueue
`[1, 2, 3, 4].enqueue(item)`

###### .dequeue
`[1, 2, 3, 4].dequeue()`

###### .transpose
`[1, 2, 3, 4].transpose(iterator, start, end, method = "replace")`

###### .transposeCopy
`[1, 2, 3, 4].transposeCopy(iterator, start, end)`

###### .immutable
`[1, 2, 3, 4].immutable()`

###### .flatten
`[1, 2, 3, 4].flatten(start, end, method = "replace")`

###### .flattenDeep
`[1, 2, 3, 4].flattenDeep(start, end, method = "replace")`

###### .flattenCopy
`[1, 2, 3, 4].flattenCopy(start, end)`

###### .flattenDeepCopy
`[1, 2, 3, 4].flattenDeepCopy(start, end)`

###### .range
`[1, 2, 3, 4].range(start, stop, step)`

###### .enumerate
`[1, 2, 3, 4].enumerate(type = "object")`

###### .del
`[1, 2, 3, 4].del(start, end)`

###### .log
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
