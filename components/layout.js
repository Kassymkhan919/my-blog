import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { Navbar } from './navbar';
import { Footer } from './footer';

const name = 'Kassymkhan Bekbolatov';
export const siteTitle = 'KB';

export default function Layout({ children, home, aboutme }) {
  return (
    <>
      <Navbar />
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" contnet={siteTitle} />
        <meta name="twitter:card" content="summary large image" /> */}
        <style>@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');</style>
      </Head>

      {/* If aboutme is passed to Layout componenet then display only aboutme page w/o decorations for other pages, otherwise show decor */}
      {aboutme ? (
        <main>{children}</main>
      ) : (
        <div className={styles.container}>
          <header className={styles.header}>
            {/* If home is passed in Layout then show the home page w/o backhome button at the bottom, otherwise show other page w/ button */}
            {home ? (
              <>
                <Image
                  priority
                  src="/images/facepic.jpg"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </>
            ) : (
              <>
                {/* <Link href="/">
                  <a>
                    <Image priority src="/images/profile.jpg" height={108} width={108} alt={name} />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2> */}
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </div>
          )}
        </div>
      )}

      <Footer />
    </>
  );
}
