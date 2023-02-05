# extenders
Array, Object, Decorator Utils like Python and more for Node.js

### IN DEVELOPMENT - DO NOT INSTALL


#### USAGE


###### JS

```
var extendArray = require("extenders");
extendArray();

let arr = [1,2,3,4,5,6];
console.log(arr);
arr.clear();
console.log(arr);
```


###### CJS

```
var extendArray = import("extenders");
extendArray();

let arr = [1,2,3,4,5,6];
console.log(arr);
arr.clear();
console.log(arr);
```


###### ESM

```
import extendArray from "./extenders";
extendArray();

let arr = [1,2,3,4,5,6];
console.log(arr);
arr.clear();
console.log(arr);
```


### Array - List

```
var extendArray = require("extenders");
extendArray()

let arr = [1,2,3,4,5,6];
console.log(arr);
arr.clear();
console.log(arr);
```

```
var ArrayExtended = require("extenders");

let arr = new ArrayExtended([1,2,3,4,5,6]);
console.log(arr);
arr.clear();
console.log(arr);
```


### Object - Dictionary

```
var extendObject = require("extenders");
extendObject()

let obj = { "test" : "test", "tester" : "100" };
console.log(obj);
obj.clear();
console.log(obj);
```

```
var ObjectExtended = require("extenders");

let obj = new ObjectExtended.create({ "test" : "test", "tester" : "100" });
console.log(obj);
obj.clear();
console.log(obj);
```


### String

```
var extendString = require("extenders");
extendString()

let str = "Tesing my modified String JS object functions";
console.log(str);
str.clear();
console.log(str);
```

```
var StringExtended = require("extenders");

let arr = new StringExtended("Tesing my extended String JS object and functions");
console.log(str);
str.clear();
console.log(str);
```


### Decorator

```

```


# Current Status

* In development 


# Todo

Check [.todo](./.todo) file for latest TODO list

<!-- # References -->


# License

The MIT License (MIT) - See [LICENSE](./LICENSE) for further details

Copyright © 2023 - till library works
