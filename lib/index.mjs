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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleton = exports.extender = exports.Freeze = exports.SubStringExtender = exports.SubObjectExtender = exports.SubArrayExtender = exports.extendArray = exports.ArrayExtended = void 0;
const index_js_1 = __importStar(require("./index.js"));
Object.defineProperty(exports, "ArrayExtended", { enumerable: true, get: function () { return index_js_1.ArrayExtended; } });
Object.defineProperty(exports, "extendArray", { enumerable: true, get: function () { return index_js_1.extendArray; } });
Object.defineProperty(exports, "SubArrayExtender", { enumerable: true, get: function () { return 
    // decorate,
    index_js_1.SubArrayExtender; } });
Object.defineProperty(exports, "SubObjectExtender", { enumerable: true, get: function () { return index_js_1.SubObjectExtender; } });
Object.defineProperty(exports, "SubStringExtender", { enumerable: true, get: function () { return index_js_1.SubStringExtender; } });
Object.defineProperty(exports, "Freeze", { enumerable: true, get: function () { return index_js_1.Freeze; } });
Object.defineProperty(exports, "extender", { enumerable: true, get: function () { return index_js_1.extender; } });
Object.defineProperty(exports, "singleton", { enumerable: true, get: function () { return index_js_1.singleton; } });
exports.default = index_js_1.default;
//# sourceMappingURL=index.mjs.map