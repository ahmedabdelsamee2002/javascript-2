class Shape {
}

class Rectangle extends Shape {
static objectCount = 0;

constructor(width, height) {
  super();
  this.width = width;
  this.height = height;
  Rectangle.objectCount++;
}

static getObjectCount() {
  return Rectangle.objectCount;
}

getArea() {
  return this.width * this.height;
}

getPerimeter() {
  return 2 * (this.width + this.height);
}

displayInfo() {
  console.log(`Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
}

toString() {
  return Rectangle [`Width: ${this.width}, Height: ${this.height}, Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`];
}
}

class Square extends Rectangle {
constructor(side) {
  super(side, side);
}


displayInfo() {
  console.log(`Square - Side: ${this.width}, Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
}


toString() {
  return Square [`Side: ${this.width}, Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`];
}
}


const rect = new Rectangle(5, 7);
rect.displayInfo();
console.log(rect.toString());
console.log(`Number of Rectangle objects: ${Rectangle.getObjectCount()}`);

const square = new Square(8);
square.displayInfo();
console.log(square.toString());
console.log(`Number of Rectangle objects: ${Rectangle.getObjectCount()}`);