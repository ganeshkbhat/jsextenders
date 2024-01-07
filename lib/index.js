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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringExtended = exports.SubStringExtender = exports.SubArrayExtender = exports.singleton = exports.extendArray = exports.ArrayExtended = exports.extender = exports.Freeze = exports.decorate = void 0;
const array_js_1 = require("./src/array.js");
Object.defineProperty(exports, "ArrayExtended", { enumerable: true, get: function () { return array_js_1.ArrayExtended; } });
Object.defineProperty(exports, "extendArray", { enumerable: true, get: function () { return array_js_1.extendArray; } });
const decorator_js_1 = __importDefault(require("./src/decorator.js"));
exports.decorate = decorator_js_1.default;
const extenders_js_1 = require("./src/extenders.js");
Object.defineProperty(exports, "SubArrayExtender", { enumerable: true, get: function () { return extenders_js_1.SubArrayExtender; } });
Object.defineProperty(exports, "SubStringExtender", { enumerable: true, get: function () { return extenders_js_1.SubStringExtender; } });
Object.defineProperty(exports, "Freeze", { enumerable: true, get: function () { return extenders_js_1.Freeze; } });
Object.defineProperty(exports, "extender", { enumerable: true, get: function () { return extenders_js_1.extender; } });
// import { NumbersExtended, extendNumber } from "./src/numbers.js";
// import { ObjectExtended, extendObject } from "./src/object.js";
const string_js_1 = require("./src/string.js");
Object.defineProperty(exports, "StringExtended", { enumerable: true, get: function () { return string_js_1.StringExtended; } });
const singleton_js_1 = require("./src/singleton.js");
Object.defineProperty(exports, "singleton", { enumerable: true, get: function () { return singleton_js_1.singleton; } });
exports.default = {
    decorate: decorator_js_1.default,
    Freeze: extenders_js_1.Freeze,
    extender: extenders_js_1.extender,
    ArrayExtended: array_js_1.ArrayExtended,
    extendArray: array_js_1.extendArray,
    singleton: singleton_js_1.singleton,
    SubArrayExtender: extenders_js_1.SubArrayExtender,
    // SubObjectExtender,
    SubStringExtender: extenders_js_1.SubStringExtender,
    // NumbersExtended,
    // extendNumber,
    // ObjectExtended,
    // extendObject,
    StringExtended: string_js_1.StringExtended,
    // extendString,
};
//# sourceMappingURL=index.js.map