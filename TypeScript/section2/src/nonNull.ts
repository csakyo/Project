type Member = {name: string}
const getMemberName = (string?: Member) => {
    console.log(string!.name)
};

getMemberName({ name: '田中'})


let memberName! :string
const addName = (val: string) => {
    memberName = val
}
addName('佐藤')

console.log(memberName)
