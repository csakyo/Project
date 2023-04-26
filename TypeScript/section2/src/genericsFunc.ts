const funcTest = (int: number) : number => {
    return int
}

console.log(funcTest(123))

const genFunc1 = <T>(arg: T) : T => {
    return arg
}

console.log(genFunc1<number>(123))
