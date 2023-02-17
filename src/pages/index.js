/* ========== EXTERNAL MODULES ========== */
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';


/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Home.module.css';
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import { getUser } from 'controllers';
import Button from 'components/Button';


/* ========== EXPORTS ========== */
export default function Home() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { currentUser } = useAuth();
  const { userInfo, updateInfo } = useUserInfo();

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    if (!currentUser) {
      router.push('/user/LogIn')
    } else {
      const updateUser = async () => {
        const loggedInUser = await getUser(currentUser.uid);
        updateInfo(loggedInUser);
      };

      updateUser();
    }
  }, [])

  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <>
      <Head>
        <title>Spotter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Button variant='link' onClick={() => router.push('/user/Profile')} >Profile</Button>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
      </main>
    </>
  )
}
