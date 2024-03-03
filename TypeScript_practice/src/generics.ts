export {};

const echo = <T>(arg: T): T => {
  return arg;
};

const echo2 = function <T>(arg: T): T {
  return arg;
};

const echo3 = {
  echo<T>(arg: T): T {
    return arg;
  },
};

console.log(echo3.echo<number>(100));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror(233).echo());
console.log(new Mirror("T").echo());
console.log(new Mirror(true).echo());
