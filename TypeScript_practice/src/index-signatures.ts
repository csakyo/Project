export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: 'Ham',
  underTwenty: false,
};

profile.name = 'Ham';
profile.age = 23;
profile.nationality = 'Japan';
