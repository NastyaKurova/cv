import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LangRU from './langRU.json'
import LangENG from './langENG.json'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  let router = useRouter()
  let { t } = useTranslation()
  const greetings = router.locale === 'en-US' ? LangENG : LangRU
  return (
    <div className={styles.container}>
      <Head>
        <title>CV Kurova Anastasia</title>
        <meta
          name="description"
          content="Kurova Anastasia frontend-developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <nav>
          <Link href="/" locale="en-US">
            <a>Eng</a>
          </Link>
          |
          <Link href="/" locale="ru-Ru">
            <a>RU</a>
          </Link>
        </nav>
        <h1 className={styles.title}>{t('common:greetings')}</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
