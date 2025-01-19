import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Next.js Practice"
export const siteTitle = "Next.js blog"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
        <header className={styles.header}>
          <img src="/images/profile.png" className={utilStyles.borderCircle}/>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
        <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
