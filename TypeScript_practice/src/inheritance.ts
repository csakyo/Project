export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  constructor(public name: string) {
    super(name);
  }
  run(): string {
    return "I can run 89km.";
  }
}

let animal = new Animal();
console.log(animal.run());

let lion = new Lion();
console.log(lion.run());
