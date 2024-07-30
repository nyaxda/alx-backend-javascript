// export default function cleanSet(set, startString) {
//   if (!set || !startString || !(set instanceof Set) ||
// typeof startString !== 'string' || startString === '') {
//     return '';
//   }
//   const myNewSet = [...set].filter((x) => (x.startsWith(startString)));
//   return myNewSet.map((x) => x.replace(startString, '')).join('-');
// }
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
