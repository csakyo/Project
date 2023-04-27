type genObject<T, U> = {
    name: string,
    age: number,
    memo: T,
    value: U
}

const soccerMember: genObject<string, number> = {
    name: 'takahashi',
    age: 22,
    memo: 'Message',
    value: 123
}
