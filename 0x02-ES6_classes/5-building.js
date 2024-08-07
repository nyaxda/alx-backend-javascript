export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  // getter for sqft
  get sqft() {
    return this._sqft;
  }

  // setter for sqft
  set sqft(value) {
    if (typeof value !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }
}
