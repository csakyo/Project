type Optional = {
    foo: string,
    bar: number,
    baz?: boolean
}

const obj : Optional = {
    foo: 'TEST',
    bar: 123,
    baz: true
}

const obj2 : Optional = {
    foo: 'TEST',
    bar: 123,
}
