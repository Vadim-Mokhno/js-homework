class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
  }

  showSalaryWithExperience() {
    console.log(`${this.fullName} salary: ${this.salary}`);
  }

  get showExp() {
    return this.#experience;
  }

  set setExp(expirience) {
    this.#experience = expirience;
  }

  get salary() {
    return this.dayRate * this.workingDays * this.#experience;
  }

  static sortWorkersBySalary(...workers) {
    return workers.sort((worker1, worker2) => {
      if (worker1.salary > worker2.salary) {
        return 1;
      } else if (worker1.salary < worker2.salary) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}

const worker1 = new Worker('John Johnson', 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log('New experience: ' + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log('New experience: ' + worker1.showExp);
worker1.showSalaryWithExperience();

const worker2 = new Worker('Tom Tomson', 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
worker2.setExp = 1.5;
console.log('New experience: ' + worker2.showExp);
worker2.showSalaryWithExperience();

const worker3 = new Worker('Andy Ander', 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
worker3.setExp = 1.5;
console.log('New experience: ' + worker3.showExp);
worker3.showSalaryWithExperience();

console.log('Sorted salary:');
if (worker1.salary < worker2.salary) {
  if (worker1.salary < worker3.salary) {
    console.log(`${worker1.fullName}: ${worker1.salary}`);

    if (worker2.salary < worker3.salary) {
      console.log(`${worker2.fullName}: ${worker2.salary}`);
      console.log(`${worker3.fullName}: ${worker3.salary}`);
    } else {
      console.log(`${worker3.fullName}: ${worker3.salary}`);
      console.log(`${worker2.fullName}: ${worker2.salary}`);
    }
  } else {
    console.log(`${worker3.fullName}: ${worker3.salary}`);
    console.log(`${worker1.fullName}: ${worker1.salary}`);
    console.log(`${worker2.fullName}: ${worker2.salary}`);
  }
} else if (worker2.salary < worker3.salary) {
  console.log(`${worker2.fullName}: ${worker2.salary}`);

  if (worker1.salary < worker3.salary) {
    console.log(`${worker1.fullName}: ${worker1.salary}`);
    console.log(`${worker3.fullName}: ${worker3.salary}`);
  } else {
    console.log(`${worker3.fullName}: ${worker3.salary}`);
    console.log(`${worker1.fullName}: ${worker1.salary}`);
  }
} else {
  console.log(`${worker3.fullName}: ${worker3.salary}`);
  console.log(`${worker2.fullName}: ${worker2.salary}`);
  console.log(`${worker1.fullName}: ${worker1.salary}`);
}

console.log('Sorted salary:');
for (const worker of Worker.sortWorkersBySalary(worker1, worker2, worker3)) {
  console.log(`${worker.fullName}: ${worker.salary}`);
}
