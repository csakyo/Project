export {};

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
