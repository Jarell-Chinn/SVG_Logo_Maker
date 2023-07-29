const { Circle, Triangle, Square } = require("../Shape");
// needed to modify the tests since I did not make a setColor function
describe("Circle", () => {
  test("it should generate a svg file containing <circle and the fill should be red", () => {
    const circle = new Circle("red");
    const result = circle.render();

    expect(result).toContain("<circle");
    expect(result).toContain('fill="red"');
  });
});
describe("Triangle", () => {
  test("it should render a svg file containing <polygon and the fill should be blue", () => {
    const triangle = new Triangle("blue");
    const result = triangle.render();

    expect(result).toContain("<polygon");
    expect(result).toContain('fill="blue"');
  });
});
describe("Square", () => {
  test("it should render a svg file containing <rect and the fill should be green", () => {
    const sqaure = new Square("green");
    const result = sqaure.render();

    expect(result).toContain("<rect");
    expect(result).toContain('fill="green"');
  });
});
