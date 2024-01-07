/**
 * Creates a global singleton
 * Takes `key` of the global variable and associated `object` to create if not there
 * Can force replace the object if `replace` TRUE
 * Freeze boolean `freeze` will make the object immutable
 * Returns undefined if `key` not specified
 *
 * @param {string} key
 * @required
 *
 * @param {any} object
 * @optional Default: undefined
 *
 * @param {boolean} replace
 * @optional Default: false
 *
 * @param {boolean} freeze
 * @optional Default: false
 *
 * @returns global object or undefined
 *
 */
export function singleton(key: string, object: any, replace: boolean, freeze: boolean): any;
//# sourceMappingURL=singleton.d.ts.map