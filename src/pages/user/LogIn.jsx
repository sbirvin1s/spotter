/* ========== EXTERNAL MODULES ========== */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import { useAuth } from 'contexts/AuthContext';
import styles from '@/styles/Login.module.css';
import Alert from 'components/Alert';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';

/* ========== EXPORTS ========== */
export default function Login() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const [ email, setEmail ]  = useState();
  const [ password, setPassword ] = useState();
  const { logIn } = useAuth();
  const [ error, setError ] = useState('');

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);

  const handleLogIn = async event => {
    event.preventDefault();

    try {
      setError('');
      const user = await logIn(email, password);
      router.push('/');
    } catch (err) {
      console.error('Log In Error: ', err);
      setError('Failed to Log In');
    }
  }

  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <p>Welcome to</p>
        <h1>SPOTTER</h1>
        {error && <Alert variant='fail'>{error}</Alert>}
      </Header>
      <form className={styles.Form}>
        <div className={styles.Div_33___column}>
          <Input
            name={'email'}
            labelName={'Email'}
            onChange={handleEmailEntry}
            type='email'
            placeholder='iman@example.com'
          />
          <Input
            name={'password'}
            labelName={'Password'}
            onChange={handlePasswordEntry}
            type='password'
            placeholder='************'
          />
        </div>
        <Footer>
          <Button onClick={handleLogIn}>Log In</Button>
          <Link href='/user/ResetPassword'>Reset Password</Link>
          <br />
          <p><strong>Don&apos;t have and account? <Link href='/user/SignUp'>Sign Up</Link></strong></p>
        </Footer>
      </form>
    </Page>
  )
}