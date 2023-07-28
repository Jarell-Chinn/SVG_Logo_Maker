// Shape Class
class Shape {
    constructor(text, textColor, shapeColor, shape) {
       this.text = text
       this.textColor = textColor
       this.shapeColor = shapeColor
       this.shape
    }
    render() {

    }
}

class Circle extends Shape{
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor, shape)
        const circleShape = "41"
        

    }
}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor, shape)
    }
}

class Square extends Shape{
    constructor(text, textColor, shapeColor, shape){
    super(text, textColor, shapeColor, shape)
    this.square
}}
    // Triangle class extends Shape
    // Circle class extends Shape
    // Square class extends Shape
    // export classes

module.exports = {
    Shape, Circle, Triangle, Square
}    




    