/**
 *? Clas Super Methode
 */

class Shape {
  paint() {
    console.log(`Paint Sahpe`);
  }
}

class Circle extends Shape {
  paint() {
    console.log(`Paint Circle`);
    super.paint();
  }
}

const circle = new Circle();
circle.paint();
