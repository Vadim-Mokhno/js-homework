class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return `${this.surname} ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return `${super.showFullName()} ${midleName}`;
  }

  showCourse() {
    const currentCourse = new Date().getFullYear() - this.year;
    return currentCourse < 1
      ? 'Incorrect data'
      : currentCourse > 6
      ? 'Already graduated'
      : currentCourse;
  }
}

const stud1 = new Student('Petro', 'Petrenko', 2019);
console.log(stud1.showFullName('Petrovych')); // Petrenko Petro Petrovych
console.log('Current course: ' + stud1.showCourse()); //Current course: 4
