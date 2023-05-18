import User from './moduleExportD'
import {UserType, BlogType as Blog} from './moduleExport'

const user : UserType = {
    id: 1,
    name: '柴崎'
}

console.log(user.name)

const user2: User = {
    id: 1,
    name: 'やまだ'
}
console.log(user2.name)

const blog: Blog = {
    id: 3,
    name: 'タイトル'
}
console.log(blog.name)
