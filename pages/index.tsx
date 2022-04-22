import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gorrion Summer Camp 2022 - recruitment task</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a className={styles.link} href='https://gorrion.io'>
            Gorrion
          </a>{' '}
          Summer Camp 2022
        </h1>

        <div className={styles.buttonsContainer}>
          <Link href='/users'>
            <a className={styles.button}>Frontend</a>
          </Link>
          <Link href='/api/users'>
            <a className={styles.button}>Backend</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
