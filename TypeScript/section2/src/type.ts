type MemberType = {
    name: string,
    age: number
}

const memberT: MemberType = {
    name: '田中',
    age: 22
}


type MemberHobby = {
    hobby: string
}

type MemberProfile = MemberType & MemberHobby

const memberInfo: MemberProfile = {
    name: '佐藤',
    age: 25,
    hobby: 'サッカー'
}

console.log(memberInfo.hobby)
