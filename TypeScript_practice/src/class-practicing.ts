export {};

class Person {
  name: string = "";
  readonly age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const taro = new Person("taro", 12);
console.log(taro.age);

taro.age = 23;
