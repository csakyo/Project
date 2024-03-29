export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);

    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run();
    console.log({ parentMessage });
    return `${super.run()} ${this.speed}km.`;
  }
}

let animal = new Animal("Taro");
console.log(animal.run());

let lion = new Lion("Simba", 90);
console.log(lion.run());
