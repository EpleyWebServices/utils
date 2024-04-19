type PlainObjectFunction = (value: any) => boolean;

/**
 * Check if a value is a plain JavaScript (or JSON) object.
 * @param value The value to check.
 * @returns Whether the value is a plain JavaScript object (or JSON object).
 */
export const isPlainObject: PlainObjectFunction = function (value) {
  return Object.prototype.toString.call(value) === "[object Object]";
};
