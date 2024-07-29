export default function setFromArray(yourArray) {
  const myNewSet = new Set();
  yourArray.forEach((element) => {
    myNewSet.add(element);
  });
  return myNewSet;
}
