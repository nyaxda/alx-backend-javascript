export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string' || startString === '') {
    return '';
  }
  const myNewSet = [...set].filter((x) => (x.startsWith(startString)));
  return myNewSet.map((x) => x.replace(startString, '')).join('-');
}
