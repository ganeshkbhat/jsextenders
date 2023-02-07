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


import { 
    default as extenders,
    ArrayExtended, extendArray,
    // decorate,
    SubArrayExtender, SubObjectExtender,
    Freeze, extender,
    // NumbersExtended, extendNumber, 
    // ObjectExtended, extendObject, 
    // StringExtended, extendString 
} from "./index.js";

export default extenders;

export {
    ArrayExtended, extendArray,
    // decorate,
    SubArrayExtender, SubObjectExtender,
    Freeze, extender,
    // NumbersExtended, extendNumber, 
    // ObjectExtended, extendObject, 
    // StringExtended, extendString 
};
