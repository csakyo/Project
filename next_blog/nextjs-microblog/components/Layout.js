import Head from "next/head"
import styles from "./layout.module.css"

const name = "Shin Code"
export const siteTitle = "Next.js blog"

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <header className={styles.header}>
                <img src="/images/profile.png" alt="" />
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
        
    )
}

export default Layout
