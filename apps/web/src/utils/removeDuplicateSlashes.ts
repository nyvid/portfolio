export const removeDuplicateSlashes = (str: string) =>
  str.replace(/([^:]\/)\/+/g, '$1');
