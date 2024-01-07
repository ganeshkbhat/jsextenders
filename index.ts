/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: 
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import { ArrayExtended, extendArray } from "./src/array.js";
import decorate from "./src/decorator.js";
import { SubArrayExtender, SubObjectExtender, SubStringExtender, Freeze, extender } from "./src/extenders.js";
// import { NumbersExtended, extendNumber } from "./src/numbers.js";
// import { ObjectExtended, extendObject } from "./src/object.js";
import { StringExtended, extendString } from "./src/string.js";
import { singleton } from "./src/singleton.js";
import utils from "./src/utils.js";
import math from "./src/math.js";


export {
  decorate,
  Freeze,
  extender,
  ArrayExtended,
  extendArray,
  singleton,
  SubArrayExtender,
  // SubObjectExtender,
  SubStringExtender,
  // NumbersExtended,
  // extendNumber,
  // ObjectExtended,
  // extendObject,
  StringExtended,
  // extendString,
}

export default {
  decorate,
  Freeze,
  extender,
  ArrayExtended,
  extendArray,
  singleton,
  SubArrayExtender,
  // SubObjectExtender,
  SubStringExtender,
  // NumbersExtended,
  // extendNumber,
  // ObjectExtended,
  // extendObject,
  StringExtended,
  // extendString,
}

