// Shape Class
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render() {}
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<polygon points="150,0 250,150 50,150" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<rect x="50" y="25" width="200" height="200" fill="${this.shapeColor}" />`;
  }
}
// Triangle class extends Shape
// Circle class extends Shape
// Square class extends Shape
// export classes

module.exports = {
  Shape,
  Circle,
  Triangle,
  Square,
};
