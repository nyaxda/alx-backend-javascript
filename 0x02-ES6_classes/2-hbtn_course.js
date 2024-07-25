export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Expected string for name');
    }
    this._name = value;
  }

  // getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set lengths(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Expected number for length');
    }
    this._length = value;
  }

  // getter for students
  get students() {
    return this._name;
  }

  // setter for name
  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Expected an array for students');
    }
    for (const student of value) {
      if (typeof student !== 'string') {
        throw new TypeError('Expected each student to be a string');
      }
    }
    this._students = value;
  }
}
