type ObjectInArray1 = {
    id: number,
    name: string,
    hobby: string
}[]

type ObjectInArray2 = {
    [key: string] : string | number
}[]

const members : ObjectInArray2 = [
    {
        id: 1,
        name: '伊藤',
        hobby: '読書'
    }
]

for(const member of members) {
    console.log(`id: ${member.id}, name: ${member.name}`)
}
