export {};
// * owner
// * 初期化時に設定できる
// * 途中で変更できない
// * 参照できる
// *secretNumber
// * 個人番号
// * 初期化時に設定できる
// * 途中で変更できる
// * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  // 値を設定する時のみ実行される
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("太郎", 7);

console.log(card.debugPrint());
card.secretNumber = 111;
console.log(card.debugPrint());
