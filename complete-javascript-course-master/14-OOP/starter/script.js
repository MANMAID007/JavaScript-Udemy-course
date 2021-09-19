'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   this.calcAge = function () {                  // never do this
  //     console.log(2037 - this.birthYear);
  //   };
};
const youkti = new Person('Youkti', 1993);
console.log(youkti);
console.log(youkti instanceof Person);

Person.hey = function () {
  console.log('Hey There!');
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(youkti.calcAge());
console.log(youkti.__proto__);
console.log(youkti.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [2, 6, 6, 8];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (company, speed) {
  this.company = company;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  return this.speed;
};
Car.prototype.brake = function () {
  this.speed -= 5;
  return this.speed;
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(`Car BMW: Acc: ${bmw.accelerate()}, brake: ${bmw.brake()}`);
console.log(`Car BMW: Acc: ${bmw.accelerate()}, brake: ${bmw.brake()}`);
console.log(
  `Car Mercedes: Acc: ${mercedes.accelerate()}, brake: ${mercedes.brake()}`
);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  static hey() {
    console.log('Hey There!!!');
  }
}
const youkti2 = new PersonCl('Youkti', 1993);
youkti2.calcAge();

const PersonProto = {
  calcAge: function () {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const youktiProto = Object.create(PersonProto);
youktiProto.init('Youkti', 1993);
youktiProto.calcAge();
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
// class CarCl {
//   constructor(company, speed) {
//     this.company = company;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// inhetence
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study at ${this.course}`);
};
const youktiSt = new Student('Youkti', 1993, 'Statistics');
console.log(youktiSt.introduce());
console.log(youktiSt.calcAge());
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
const EV = function (company, speed, charge = 80) {
  Car.call(this, company, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.company} going at ${this.speed}, with a charge of ${this.charge}`
  );
};
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(80);
console.log(tesla.accelerate());
console.log(tesla.accelerate());
console.log(tesla.brake());

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`Hi, I am ${this.fullName}, doing course ${this.course}`);
  }
}
const youktiStCl = new StudentCl('Youkti', 1993, 'Statistics');
console.log(youktiStCl);
console.log(youktiStCl.fullName);
youktiStCl.calcAge();
youktiStCl.introduce();
class BankAccount {
  locale = navigator.language;
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks ${this.owner} for creating an account.`);
  }
  getMovementsSummary() {
    const arr = this.#movements;
    const total = arr.reduce((val, inc) => val + inc, 0);
    console.log(`Your transactions are ${arr}. Total valuation ${total}`);
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  #approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan) {
      this.deposit(val);
    }
    console.log('Loan approved!!');
  }
}
const youktiAcc = new BankAccount('Youkti', 'INR', 1993);
youktiAcc.deposit(1200);
youktiAcc.withdraw(400);
youktiAcc.getMovementsSummary();
console.log(youktiAcc);
// console.log(youktiAcc.#movements);
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
  constructor(company, speed) {
    this.company = company;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed += 10;
    return this;
  }
  brake() {
    this.speed -= 5;
    return this;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(company, speed, charge) {
    super(company, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return chargeTo;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
console.log(rivian.accelerate().brake());
