export {};

type Profile = {
  name: string;
  age?: number;
  zipcode: number;
};

type RequiredType = Required<Profile>;
