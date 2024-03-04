export {};

const echo = <T>(arg: T): T => {
  return arg;
};

const echo2 = function <T>(arg: T): T {
  return arg;
};

console.log(echo<number>(100));

const echo3 = {
  echo<T>(arg: T): T {
    return arg;
  },
};

console.log(echo3.echo<number>(100));

const echo4 = <T>(x: T, y: T, z: T) => {
  return [x, y, z];
};

console.log(echo4("foo", "biz", "baz"));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(233).echo());
console.log(new Mirror<string>("T").echo());
console.log(new Mirror<boolean>(true).echo());
