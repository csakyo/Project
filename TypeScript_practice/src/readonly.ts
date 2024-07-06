export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Tom',
  age: 22,
};

me.age++;

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Dave',
  age: 33,
};

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
