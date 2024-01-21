export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("taro");
console.log(myVisaCard.owner);
