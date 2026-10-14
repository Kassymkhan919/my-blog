import { IBM_Plex_Mono, Permanent_Marker } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { Navbar } from './navbar';
import { Footer } from './footer';

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-extra',
});

const name = 'Kassymkhan Bekbolatov';
export const siteTitle = 'KB';

export default function Layout({ children, home, aboutme }) {
  return (
    <div className={`flex min-h-screen flex-col ${permanentMarker.variable} ${ibmPlexMono.variable}`}>
      <Navbar />

      {/* If aboutme is passed to Layout componenet then display only aboutme page w/o decorations for other pages, otherwise show decor */}
      {home ? (
        <main className="flex flex-1 flex-col">{children}</main>
      ) : (
        <div className={`${styles.container} flex-1`}>
          <header className={styles.header}>
            {/* If home is passed in Layout then show the home page w/o backhome button at the bottom, otherwise show other page w/ button */}
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                Back to home
              </Link>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}
