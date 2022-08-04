import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Authenticated</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Not authenticated</title>
        <meta name="description" content="Generated by easypeasyvisa app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
