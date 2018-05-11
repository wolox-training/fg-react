import { isArray } from './utils';

export function min(...args) {
  if (args[0] === undefined) {
    return undefined;
  }
  if (isArray(args[0])) {
    return Math.min(...args[0]);
  }
  return Math.min(...args);
}

export function copy(args) {
  const copied = {};
  if (isArray(args)) {
    return [...args];
  }
  return Object.assign(copied, args);
}

export function reverseMerge(a, b) {
  return [...b, ...a];
}

export function filterAttribs(args) {
  const { a, b, ...c } = args;
  return c;
}

