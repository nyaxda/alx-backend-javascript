export default class Car {
  constructor(brand = undefined, motor = undefined, color = undefined) {
    if (brand !== undefined && typeof brand !== 'string') {
      throw TypeError('Brand must be a string.');
    }
    if (motor !== undefined && typeof motor !== 'string') {
      throw TypeError('Motor must be a string.');
    }
    if (color !== undefined && typeof color !== 'string') {
      throw TypeError('Color must be a string.');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species] || this.constructor;
    return new Species();
  }
}
