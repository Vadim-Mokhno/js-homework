class Marker {
  constructor(inkColor, inkQuantity) {
    this.inkColor = inkColor;
    this.inkQuantity = inkQuantity;
  }

  set inkQuantity(inkQuantity) {
    this._inkQuantity =
      inkQuantity < 0 ? 0 : inkQuantity > 100 ? 100 : inkQuantity;
  }

  get inkQuantity() {
    return this._inkQuantity;
  }

  printString(inputString) {
    let outputString = '';

    for (let i = 0; i < inputString.length && this.inkQuantity > 0; i++) {
      outputString += inputString[i];

      if (inputString[i].trim()) {
        this.inkQuantity -= 0.5;
      }
    }

    if (outputString) {
      console.log(`%c${outputString}`, `color: ${this.inkColor}`);
    }

    if (!this.inkQuantity) {
      console.warn('Marker is empty!');
    }
  }
}

class RefillableMarker extends Marker {
  constructor(inkColor, inkQuantity) {
    super(inkColor, inkQuantity);
  }

  refill(inkQuantity) {
    this.inkQuantity = inkQuantity;
  }
}

const marker = new RefillableMarker('rgba(25 170 188 / 0.7)', 8);
console.log(marker);
marker.printString('123456   7 8  9   10');
marker.printString('123456   7 8  9   10');
marker.printString('123456   7 8  9   10');
marker.refill(15);
marker.printString('123456   7 8  9   10');
marker.printString('123456   7 8  9   10');
marker.printString('123456   7 8  9   10');
marker.printString('123456   7 8  9   10');
marker.refill(120);
console.log(marker);
