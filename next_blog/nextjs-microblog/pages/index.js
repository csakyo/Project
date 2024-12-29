import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import Link from 'next/link'
import utilStyle from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          私はフロントエンドエンジニアです
        </p>
      </section>

      <section>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              TESTTEST
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              Febrary 23, 2024
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              TESTTEST
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              Febrary 23, 2024
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              TESTTEST
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              Febrary 23, 2024
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              TESTTEST
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              Febrary 23, 2024
            </small>
          </article>
        </div>
      </section>

    </Layout>
  )
}
