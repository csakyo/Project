export {};

class VisaCars {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCars("taro");
console.log(myVisaCard.owner);
// myVisaCard.owner = "hanako";
