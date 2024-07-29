export default function hasValuesFromArray(mySet, myArray) {
  if (!Array.isArray(myArray)) {
    throw new Error('Input is not an array');
  }
  if (!(mySet instanceof Set)) {
    throw new Error('Input is not a set');
  }
  const allInSet = myArray.every((element) => mySet.has(element));
  return allInSet;
}
