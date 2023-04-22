const arrayTest1:string[] = ['aaa', 'bbb']
arrayTest1.push('ccc')

//ユニオン型
const arrayTest2:(string | number)[] = ['aaa', 123]
arrayTest2.push(456)

//タプル型
const arrayTest3: [string, number, boolean] = ['aaa', 123, true]
