// Your code here
class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((accum, curr) => accum + curr)
    }
}

class Triangle extends Polygon {

    get isValid() {
        if ((this.sides[0] + this.sides[1] > this.sides[2]) &&
        (this.sides[0] + this.sides[2] > this.sides[1]) &&
        (this.sides[2] + this.sides[1] > this.sides[0])) {
            return true
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.perimeter % this.countSides === 0) {
            return true
        }
        else {
            return false
        }
    }

    get area() {
        if (this.isValid) {
            return (this.perimeter / 4) ** 2
        }
    }
}