export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }
    console.log(numerator / denominator);
  } catch (err) {
    console.error(err.message);
  }
}
