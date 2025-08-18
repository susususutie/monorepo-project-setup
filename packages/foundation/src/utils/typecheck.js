export function isFunction(value) {
  return typeof value === 'function';
}

export function isObject(value) {
  return value !== null && typeof value === 'object';
}

export function isPlainObject(value) {
  return isObject(value) && value.constructor === Object;
}

export function isAsyncFunction(value) {
  return isFunction(value) && value.constructor.name === 'AsyncFunction';
}