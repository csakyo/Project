import path from "path"
import fs from "fs"
import matter from "gray-matter"

// 
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取り出す 
export function getPostsData() {
    // オブジェクトの配列としてファイル名を持っている
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")
        console.log(id)

        // マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName);
        // 中身のデータを文字列として認識する
        const fileContents = fs.readFileSync(fullPath, "utf8")

        // mdファイルのメタデータを解析する
        const matterResult = matter(fileContents);

        // idとデータを返す
        return {
            id,
            ...matterResult.data,
        }
    })
    return allPostsData
}
