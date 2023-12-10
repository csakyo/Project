export {};

type picher = {
  throwingSpeed: number;
};

type batter = {
  battingAverage: number;
};

const test1: picher = {
  throwingSpeed: 150,
};

const test2: batter = {
  battingAverage: 100,
};

type both = picher & batter;

const test3: both = {
  throwingSpeed: 100,
  battingAverage: 100,
};
