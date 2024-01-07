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
import { ArrayExtended, extendArray } from "./src/array.js";
import decorate from "./src/decorator.js";
import { SubArrayExtender, SubStringExtender, Freeze, extender } from "./src/extenders.js";
import { StringExtended } from "./src/string.js";
import { singleton } from "./src/singleton.js";
export { decorate, Freeze, extender, ArrayExtended, extendArray, singleton, SubArrayExtender, SubStringExtender, StringExtended, };
declare const _default: {
    decorate: typeof decorate;
    Freeze: typeof Freeze;
    extender: typeof extender;
    ArrayExtended: any;
    extendArray: typeof extendArray;
    singleton: (key: string, object: any, replace: boolean, freeze: boolean) => any;
    SubArrayExtender: typeof SubArrayExtender;
    SubStringExtender: typeof SubStringExtender;
    StringExtended: any;
};
export default _default;
//# sourceMappingURL=index.d.ts.map