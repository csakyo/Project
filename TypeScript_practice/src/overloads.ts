export {};

type Hello = {
  (person: string): void;
  (numberOfPerson: number): void;
};

const hello: Hello = (person: string | number): any => {
  if (typeof person === "string") {
    return person + person;
  } else {
    return person * 2;
  }
};

console.log(hello(100));
console.log(hello("test"));
