export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }
  if (!(set instanceof Set)) {
    throw new Error('Input is not a set');
  }
  const allInSet = array.every((element) => set.has(element));
  return allInSet;
}
