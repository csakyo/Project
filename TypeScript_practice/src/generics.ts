export {};

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror(233).echo());
console.log(new Mirror("T").echo());
console.log(new Mirror(true).echo());
