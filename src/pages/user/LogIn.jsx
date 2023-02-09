/* ========== EXTERNAL MODULES ========== */
import React from 'react';
import Link from 'next/link';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Login.module.css';
import Input from 'components/Input';
import Button from 'components/Button';

/* ========== EXPORTS ========== */
export default function Login() {

  /* --- STATE HOOKS --- */
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <div className={styles.Div_100___column}>
      <div className={styles.Div_33___row}>
        <h1>Welcome to <strong>SPOTTER</strong></h1>
      </div>
      <form className={styles.Form}>
        <div className={styles.Div_33___column}>
        <Input
          name={'email'}
          labelName={'Email'}
          // onChange={handleEmailEntry}
          type='email'
          placeholder='iman@example.com'
        />
        <Input
          name={'password'}
          labelName={'Password'}
          // onChange={handlePasswordEntry}
          type='password'
          placeholder='************'
        />
        </div>
        <div className={styles.Div_33___column}>
          <Button>Log In</Button>
          <h5>Don&apos;t have and account? <Link href='/user/SignUp'>Sign Up</Link></h5>
        </div>
      </form>
    </div>
  )
}