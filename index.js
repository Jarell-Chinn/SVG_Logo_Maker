// Identify what is being asked
// Prompt for text and enter 3 characters DONE
// Prompt for text color(color or hex number) DONE
// Prompt with list of shapes DONE
// Prompt for shape color (color or hex number) DONE
// Create a .svg file named logo.svg
// Console.log("Generated logo.svg")
// Logo.svg should be 300x200 Px
// jest testing on the render
// Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
// Record a video demo of the app

// Global variables
// inquirer
const inquirer = require("inquirer");
// fileSystem fs
const fs = require("fs");
// import Classes'
const { Shape, Circle, Triangle, Square } = require("./lib/shape");

// Questions array
const questions = [
  "Enter 3 characters for the icon",
  "What color do you want the text to be",
  "What Shape would you like",
  "What color would you like the shape to be",
];

const choices = ["circle", "triangle", "square"];

function validateText(input) {
  return input.length <= 3 ? true : "Please enter up to three characters.";
}

// Validate the color input to allow color keywords or hexadecimal numbers
function validateColor(input) {
  // A regex to match color keywords or hexadecimal numbers
  const colorRegex = /^(#([0-9A-Fa-f]{3}){1,2}|[a-zA-Z]+)$/i;
  return colorRegex.test(input)
    ? true
    : "Please enter a valid color keyword or hexadecimal number.";
}

// Prompt Questions 0-3
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: questions[0],
      validate: validateText,
    },
    {
      type: "input",
      name: "textColor",
      message: questions[1],
      validate: validateColor,
    },
    {
      type: "list",
      name: "shape",
      choices: choices,
      message: questions[2],
    },
    {
      type: "input",
      name: "shapeColor",
      message: questions[3],
      validate: validateColor,
    },
  ])
  .then((data) => {
    console.log(data);
    const text = data.text;
    const textColor = data.textColor;
    const shape = data.shape;
    const shapeColor = data.shapeColor;

    let shapeSelection;
    switch (shape) {
      case "circle":
        shapeSelection = new Circle(shapeColor);
        break;
      case "triangle":
        shapeSelection = new Triangle(shapeColor);
        break;
      case "square":
        shapeSelection = new Square(shapeColor);
        break;
    }

    // generate Object
    const svgContent = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${shapeSelection.render()}
    <text x="150" y="120" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

    fs.writeFile("./examples/logo.svg", svgContent, (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  })
  .catch((err) => {
    console.error("Error:", err);
  });

// Create .svg File by sending objects to Shape.js
// create variable logo save else if return
// else if statments
// create circle instance
// create triangle instance
// create sqaure instance
// writeToFile
// fs.writeFile("./examples/logo.svg", logo, (err) =>
// err ? console.error(err) : console.log("Success"))
//     // logo variable

// Test render() of each shape
