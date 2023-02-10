/* ========== EXTERNAL MODULES ========== */
import React, { useState } from 'react';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

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
  const [email, setEmail]  = useState();
  const [password, setPassword] = useState();
  const { signUp, currentUser, logIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);

  const handleLogIn = async () => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      const user = await logIn(email, password);

      axios.get(`/user/${user.user.uid}`)
      .then(userData => updateInfo(userData.data.rows[0]))
      .catch(err => console.error(`Unable to retrieve user data due to error: ${err}`))

    } catch (err) {
      console.error('Log In Error: ', err);
      setError('Failed to Log In');
    }

    setLoading(false);
    router.push('/');
  }

  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <h1>Welcome to <strong>SPOTTER</strong></h1>
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
          <h5>Don&apos;t have and account? <Link href='/user/SignUp'>Sign Up</Link></h5>
        </Footer>
      </form>
    </Page>
  )
}