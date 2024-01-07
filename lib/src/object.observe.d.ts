declare const _exports: any;
export = _exports;
/**
 * This represents the data relative to an observed object
 */
export type ObjectData = {
    handlers: Map<Handler, HandlerData>;
    properties: string[];
    values: any[];
    descriptors: Descriptor[];
    notifier: Notifier;
    frozen: boolean;
    extensible: boolean;
    proto: Object;
};
/**
 * Function definition of a handler
 */
export type Handler = (changes: ChangeRecord[]) => any;
/**
 * This represents the data relative to an observed object and one of its
 * handlers
 */
export type HandlerData = {
    observed: Map<Object, ObservedData>;
    changeRecords: ChangeRecord[];
};
export type ObservedData = {
    acceptList: string[];
    data: ObjectData;
};
/**
 * Type definition for a change. Any other property can be added using
 * the notify() or performChange() methods of the notifier.
 */
export type ChangeRecord = {
    type: string;
    object: Object;
    name?: string | undefined;
    oldValue?: any;
    index?: number | undefined;
};
/**
 * Type definition for a notifier (what Object.getNotifier returns)
 */
export type Notifier = {
    notify: Function;
    performChange: Function;
};
/**
 * Function called with Notifier.performChange. It may optionally return a
 * ChangeRecord that gets automatically notified, but `type` and `object`
 * properties are overridden.
 */
export type Performer = () => ChangeRecord | undefined;
//# sourceMappingURL=object.observe.d.ts.map