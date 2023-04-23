interface MemberInterface {
    name: string,
    age: number
}


const memberI: MemberInterface = {
    name: '前田',
    age: 25
}

interface HobbyInterface {
    hobby: string
}

interface ProfileInterface extends MemberInterface, HobbyInterface {}

const memberInfoI: ProfileInterface = {
    name: '田中',
    age: 26,
    hobby: '読書'
}

console.log(memberInfoI.age)
