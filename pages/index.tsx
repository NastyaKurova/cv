import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { Header } from '../components/Header/Header'
import { NameInfo } from '../components/NameInfo/NameInfo'
import { MainInfo } from '../components/MainInfo/MainInfo'

const Home: NextPage = () => {
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

      <main>
        <Header />
        <NameInfo />
        <MainInfo />
      </main>
    </div>
  )
}

export default Home
