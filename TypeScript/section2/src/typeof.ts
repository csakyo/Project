const objType = {
    foo: 123,
    bar: 'hi'
}

type R = typeof objType;
const objType2: R = {
    foo: 23,
    bar: 'test'
}
