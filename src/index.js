// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"

// let veggie = 'carrot';
// veggie = 'onion';
// console.log(veggie);

//
//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")

// const animals = ['tiger', 'panda', 'raccoon'];
// animals.push('opossum');
// console.log(animals);

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True

// const dog = {'name': 'Sprinkles', 'age': 3};
// dog.isFriendly = true;
// console.log(dog);

//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)

// for (let num = 0; num < 5; num++) {
//   console.log(num);
// }

// for animal in animals:
//    print(animal)

// for (let animal of animals) {
//   console.log(animal);
// }

// for k, v in dog.items():
//    print(f"{k}: {v}")

// console.log(dog);

//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num

// Old way: Function Declaration

// function fizzBuzz(num) {
//   if (num%15 === 0) {
//     return 'FizzBuzz';
//   } else if (num%3 === 0) {
//     return 'Fizz';
//   } else if (num%5 === 0) {
//     return 'Buzz';
//   }
// }

//
// ES6 way: Function Expression

// const fizzBuzz = function(num) {
//   if (num%15 === 0) {
//     return 'FizzBuzz';
//   } else if (num%3 === 0) {
//     return 'Fizz';
//   } else if (num%5 === 0) {
//     return 'Buzz';
//   }
// }

// console.log(fizzBuzz(0));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));

//
//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
  toString() {
    return `${this.name} is a ${this.species}`;
  }
}

// const myAnimal = new Animal('racoon', 'cuty pie')
// console.log(myAnimal);

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"

class Dog extends Animal {
  constructor(species, name, trick) {
    super(species, name);
    this.trick = trick;
  }
  toString() {
    return `${super.toString()} that can ${this.trick}`;
  }
}

const myDog = new Dog('dog', 'Lizzy', 'talk');
console.log(myDog);
console.log(myDog.toString());
