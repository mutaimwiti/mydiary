/*
Check if an object contains a property and the property is not null.
 */
export const has = (prop, object) => {
    return object && object[prop] !== undefined && object[prop] !== null;
};
