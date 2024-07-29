export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number') throw new Error('Length must be a number');
  if (typeof position !== 'number') throw new Error('Position must be a number');
  if (typeof value !== 'number') throw new Error('Value must be a number');

  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  try {
    dataView.setInt8(position, value);
    return dataView;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
