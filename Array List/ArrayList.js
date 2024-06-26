class ArrayList {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
  }

  get(index) {
    if (index < 0 || index >= this.elements.length) {
      throw new RangeError('Index out of bounds');
    }
    return this.elements[index];
  }

  size() {
    return this.elements.length;
  }

  clear() {
    this.elements = [];
  }
}

module.exports = ArrayList;
