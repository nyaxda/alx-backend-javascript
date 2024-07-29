export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    return '';
  }
  if (typeof startString !== 'string') {
    return '';
  }
  if (startString === '') {
    return '';
  }
  const myNewSet = [...set].filter((x) => (x.includes(startString)));
  return myNewSet.map((x) => x.replace(startString, '')).join('-');
}
