export default function concatArrays(array1, array2, string) {
  const finArray = [...array1, ...array2, ...string];
  return finArray;
}
