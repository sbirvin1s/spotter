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
    <div className={styles.Div_100}>
      <div className={styles.Div_33}>
        <h1>Welcome to <strong>SPOTTER</strong></h1>
      </div>
      <div className={styles.Div_33}>
        <Input
          type='email'
          placeholder='iman@example.com'
        />
        <Input
          type='password'
          placeholder='************'
        />
      </div>
      <div className={styles.Div_33}>
        <Button>Log In</Button>
        <h5>Don&apos;t have and account? <Link href='/user/SignUp'>Sign Up</Link></h5>
      </div>
    </div>
  )
}