import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html" 

// 
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取り出す 
export function getPostsData() {
    // オブジェクトの配列としてファイル名を持っている
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")

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

// getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id : fileName.replace(/\.md$/, "")
            }
        }
    }) 
}


// idに基づいてブログ投稿データを返す
export async function getPostData(id) {
    // パスを取得
    const fullPath = path.join(postsDirectory, `${id}.md`);
    
    //  mdファイルの中身を読み込む
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //メタデータを解析
    const matterResult = matter(fileContents)

    // remarkライブラリを使用してhtmlへ変換して変数へ格納
    // そうでなければただの文字列で入ってしまう
    const blogContent = await remark().use(html).process(matterResult.content)
 
    // string型に変換
    const blogContentHTML = blogContent.toString()

    return {
        id,
        blogContentHTML,
        ...matterResult.data
    }
}
