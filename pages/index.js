import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <div className={styles.grida}>
          <h1 className={styles.welcome}>
            Welcome to <a target="_blank" href="/ranaverse">RanaVerse!</a>
          </h1>
        </div>

        <div className={styles.gridb}>
          <Link target="_blank" href="/home" className={styles.card1home}>
            <h3 className={styles.homecardtext}>Home &rarr;</h3>
          </Link>

          <Link
            target="_blank"
            href="/ranaverse" className={styles.ranaversecord}>
            <h3 className={styles.ranaversecordtext}>RanaVerse &rarr;</h3>
          </Link>

          <Link
            target="_blank"
            href="/about"
            className={styles.aboutcard}
          >
            <h3 className={styles.aboutcardtext}>about &rarr;</h3>
          </Link>

          <Link
            target="_blank"
            href="/contact"
            className={styles.contactcard}
          >
            <h3 className={styles.contactcardtext}>contact &rarr;</h3>
          </Link>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
