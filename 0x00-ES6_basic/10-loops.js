export default function appendToEachArrayValue(array, appendString) {
  let count = 0;
  const newArray = [];
  for (const idx of array) {
    const value = idx;
    newArray[count] = appendString + value;
    count += 1;
  }

  return newArray;
}
