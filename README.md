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
### Array prototype extended function

#### Array - List

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

##### .extend 
[1,2,3].extend()


##### .append 
[1,2,3].append()


##### .isArray 
[1,2,3].isArray()


##### .insertAll 
[1,2,3].insertAll()


##### .insert 
[1,2,3].insert()


##### .replace 
[1,2,3].replace()


##### .remove 
[1,2,3].remove()


##### .removeAll 
[1,2,3].removeAll()


##### .popIndex 
[1,2,3].popIndex()


##### .clear 
[1,2,3].clear()


##### .index 
[1,2,3].index()


##### .count 
[1,2,3].count()


##### .sort 
[1,2,3].sort()


##### .reverse 
[1,2,3].reverse()


##### .reverseCopy 
[1,2,3].reverseCopy()


##### .copy 
[1,2,3].copy()


##### .diffIterable 
[1,2,3].diffIterable()


##### .diffSelf 
[1,2,3].diffSelf()


##### .diffBoth 
[1,2,3].diffBoth()


##### .equal 
[1,2,3].equal()


##### .similar 
[1,2,3].similar()


##### .uniques 
[1,2,3].uniques()


##### .duplicates 
[1,2,3].duplicates()


##### .enqueue 
[1,2,3].enqueue()


##### .dequeue 
[1,2,3].dequeue()


##### .transpose 
[1,2,3].transpose()


##### .immutable 
[1,2,3].immutable()


##### .freeze 
[1,2,3].immutable()


##### .tuple 
[1,2,3].immutable()


##### .flatten 
[1,2,3].flatten()


##### .flattenCopy 
[1,2,3].flattenCopy()


##### .range 
[1,2,3].range()


##### .enumerate 
[1,2,3].enumerate()


##### .del 
[1,2,3].del()


##### .diction 
[1,2,3].diction()


##### .toObject 
[1,2,3].diction()


##### .subset 
[1,2,3].subset()


##### .superset 
[1,2,3].superset()


##### .extender 
[1,2,3].extender()


##### .log 
[1,2,3].log()


##### .max 
[1,2,3].max()


##### .maxIndexes 
[1,2,3].maxIndexes()


##### .min 
[1,2,3].min()


##### .minIndexes 
[1,2,3].minIndexes()


##### .average 
[1,2,3].average()


##### .sum 
[1,2,3].sum()


##### .factorialMap 
[1,2,3].factorialMap()


##### .acosMap 
[1,2,3].acosMap()


##### .sinMap 
[1,2,3].sinMap()


##### .asinMap 
[1,2,3].asinMap()


##### .absMap 
[1,2,3].absMap()


##### .cosMap 
[1,2,3].cosMap()


##### .acosMapCopy 
[1,2,3].acosMapCopy()


##### .sinMapCopy 
[1,2,3].sinMapCopy()


##### .asinMapCopy 
[1,2,3].asinMapCopy()


##### .absMapCopy 
[1,2,3].absMapCopy()


##### .cosMapCopy 
[1,2,3].cosMapCopy()

<!-- 
##### .LN2Map 
[1,2,3].LN2Map()


##### .LN10Map 
[1,2,3].LN10Map()


##### .LOG2EMap 
[1,2,3].LOG2EMap()


##### .LOG10EMap 
[1,2,3].LOG10EMap()
 -->

##### .floorMap 
[1,2,3].floorMap()


##### .ceilMap 
[1,2,3].ceilMap()


##### .roundMap 
[1,2,3].roundMap()


##### .squareMap 
[1,2,3].squareMap()


##### .sqrtMap 
[1,2,3].sqrtMap()


##### .powMap 
[1,2,3].powMap()


##### .multiplyMap 
[1,2,3].multiplyMap()


##### .randomRange 
[1,2,3].randomRange()


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

#### String

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

<a name="numbers"></a>
### Numbers prototype extended function


<a name="math"></a>
### Math prototype extended function


<a name="utils"></a>
### Utils prototype extended function


<a name="decorators"></a>
### Decorators prototype extended function

#### Decorator

```

```


<a name="extenders"></a>
### Extenders functions



# Current Status

* In development 


# Todo

Check [.todo](./.todo) file for latest TODO list

<!-- # References -->


# License

The MIT License (MIT) - See [LICENSE](./LICENSE) for further details

Copyright © 2023 - till library works
