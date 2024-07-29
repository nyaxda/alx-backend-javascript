export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new Error('Input is not a set');
  }
  if (typeof startString !== 'string') {
    throw new Error('Start string is not a string');
  }
  if (startString === '') {
    return '';
  }
  const myNewSet = [...set].filter((x) => (x.includes(startString)));
  return myNewSet.map((x) => x.replace(startString, '')).join('-');
}
