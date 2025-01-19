import Image from "next/image";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link"
import {getPostsData} from '../lib/post'

// SSG
export async function getProps() {
  const allPostsData = getPostsData(); // id, title, data, thumbnail

  return allPostsData;
}

export default async function Home() {
  const allPostdata = await getProps();
  console.log(allPostdata)
  return (
    <div className={styles.page}>
      <section className={utilStyles.headingMd}>
        <p>私はフロントエンドエンジニアです</p>
      </section>

      <section>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostdata.map(({id,title,date,thumbnail}) => (
              <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
              </Link>
              <Link href="/" className={utilStyles.boldText}>
              {`${title}`}
              </Link>
              <br />
              <small className={utilStyles.lightText}>{`${date}`}</small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
