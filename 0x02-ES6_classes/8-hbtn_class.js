export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // Overriding toString method to return location
  toString() {
    return this._location;
  }

  // Overriding valueOf method to return the size
  valueOf() {
    return this._size;
  }
}
