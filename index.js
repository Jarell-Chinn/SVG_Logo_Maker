// Identify what is being asked
    // Prompt for text and enter 3 characters
    // Prompt for text color(color or hex number)
    // Prompt with list of shapes
    // Prompt for shape color (color or hex number)
    // Create a .svg file named logo.svg
        // Console.log("Generated logo.svg")
    // Logo.svg should be 300x200 Px
    // jest testing on the render 
    // Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
    // Record a video demo of the app

// Global variables
    // inquirer 
    const inquirer = require("inquirer")
    // fileSystem fs
    const fs = require('fs')
const { Shape, Circle, Triangle, Square } = require("./lib/shape")
    // import Classes'
const shape = new Shape();



// Questions array
const questions = ["Enter 3 characters for the icon", 
"What color do you want the text to be", 
"What Shape would you like", 
"What color would you like the shape to be",
]

const choices = ["circle", "triangle", "square"]
// Prompt Questions 0-3
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'textColor',
            message: questions[1]
        },
        {
            type: 'list',
            name: 'shape',
            choices: choices,
            message: questions[2]

        },
        {
            type: 'input',
            name: 'shapeColor',
            message: questions[3]
        }
    ])
    .then((data) => {
        let Logoinfo = data
    //    Shape(data)'
    console.log(data)
    if (data.shape === "circle"){
        return "circle choosen"
    }
    else if (data.shape === "triangle"){
       return "triangle choosen"
    } 
    else if (data.shape === "sqaure") {
      return "square choosen"
    }

    })
    // generate Object

// Create .svg File by sending objects to Shape.js
// create variable logo save else if return
const logo = new Shape()
    // else if statments
    // if (data.shape === "circle"){
    //     new Circle()
    // }
    // else if (data.shape === "triangle"){
    //     new Triangle()
    // } 
    // else if (data.shape === "sqaure") {
    //     new Square()
    // }
    //     // create circle instance
        // create triangle instance
        // create sqaure instance 
    // writeToFile
    // fs.writeFile("./examples/logo.svg", logo, (err) =>
    // err ? console.error(err) : console.log("Success"))
    //     // logo variable

// Test render() of each shape