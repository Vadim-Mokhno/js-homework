class Circle {
  constructor(centerX, centerY, radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  clone() {
    return Object.assign(Object.create(Circle.prototype), this);
  }

  includesPoint(pointX, pointY) {
    return (
      Math.sqrt(
        Math.pow(pointX - this.centerX, 2) + Math.pow(pointY - this.centerY, 2)
      ) <= this.radius
    );
  }

  toString() {
    return `Circle(x: ${this.centerX}, y: ${this.centerY}, radius: ${this.radius})`;
  }

  static getCircumferenceByRadius(radius) {
    return 2 * Math.PI * radius;
  }

  static getCircle(centerX, centerY, radius) {
    return new Circle(centerX, centerY, radius);
  }
}

const c = new Circle(1, 1, 9);
console.log(c);
console.log(c.circumference);
console.log(Circle.getCircumferenceByRadius(9));
console.log(c.clone());
console.log(Circle.getCircle(1, 1, 9));
console.log(c.includesPoint(7, -6));
console.log(c.toString());
