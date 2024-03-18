export {};

let name = "Atsushi";

name = "Ham";

let nickname = "Ham" as const;
nickname = "Ham";

let profile = {
  name: "Atsushi",
  height: 170,
} as const;

profile.name = "Hana";
profile.height = 180;
