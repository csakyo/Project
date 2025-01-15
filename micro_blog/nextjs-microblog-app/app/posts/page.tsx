import Link from "next/link";

export async function generateMetadata() {
    return { 
        title: "最初の投稿",
    }
}

const Page = () => {
    return (
        <div>
            <h1>最初の投稿</h1>
            <Link href="/">ホームへ戻る</Link>
        </div>
    )
}

export default Page;
