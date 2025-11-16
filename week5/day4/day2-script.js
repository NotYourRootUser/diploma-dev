class User {
  constructor(prop1, prop2, prop3, prop4) {
    this.firstName = prop1;
    this.lastName = prop2;
    this.gender = prop3;
    this.age = prop4
  }
}

const user1 = new User("John", "Snow", 'male', '29');
const user2 = new User("Ned", "Stark", "male", 50);

console.log(user1);             // User { firstName: "John", lastName: "Snow" }
console.log(user1.firstName);   // John
console.log(user1.lastName);    // Snow
console.log(user2); // age: 50 firstName: "Ned" gender: "male" lastName: "Stark"

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    // defined INSIDE the constructor
    this.sayHi = function () {
      console.log(this.name + " say Hi");
    };
  }

  // defined DIRECTLY in the class body 
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Arya", 18);
person1.sayHi();   // "Arya say Hi"
person1.greet();   // "Hello, my name is Arya and I am 18 years old."
console.log(person1)

// exercise 1 
class Vehicle {
 
  constructor(model, manufacturer, year, colour) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.colour = colour;
  }

  printColour() {
    console.log(`The colour of the ${this.model} is ${this.colour}.`);
  }
}

const car1 = new Vehicle("Corolla", "Toyota", 2018, "Red");
const car2 = new Vehicle("Civic", "Honda", 2020, "Blue");
const car3 = new Vehicle("Model 3", "Tesla", 2023, "White");
car1.printColour();  // The colour of the Corolla is Red.
car2.printColour();  // The colour of the Civic is Blue.
car3.printColour();  // The colour of the Model 3 is White.


// Polymorphism
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Create an instance of the parent class
const genericAnimal = new Animal("Generic");
console.log(genericAnimal);
genericAnimal.speak(); // Output: "Generic makes a sound."

// Subclass from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // ✅ Calls the parent (Animal) constructor
    this.breed = breed;
  }

  // Method override — changes behavior for Dog
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Create an instance of the subclass
const dog = new Dog("Buddy", "Labrador");
dog.speak(); // Output: "Buddy barks."
