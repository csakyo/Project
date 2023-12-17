export {};

let bmi: (height: number, weight: number) => number = function bmi(
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.69, 51));
