/* ========== EXTERNAL MODULES ========== */
import React, { useState } from 'react';
import Link from 'next/link';

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
export default function ResetPassword() {

  /* --- STATE HOOKS --- */
  const [ email, setEmail ]  = useState();
  const { resetPassword } = useAuth();
  const [ error, setError ] = useState('');
  const [ message, setMessage ] = useState('');

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);

  const handleLogIn = async event => {
    event.preventDefault();

    try {
      setError('');
      setMessage('');
      await resetPassword(email);
      setMessage('Check the inbox of the provided email for further instructions')
    } catch (err) {
      console.error('Log In Error: ', err);
      setError('Failed to reset password');
    }
  }

  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <p className='Header_title'>RESET</p>
        <p className='Header_title___emphasis'>PASSWORD</p>
        {error && <Alert variant='fail'>{error}</Alert>}
        {message && <Alert variant='success'>{message}</Alert>}
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
        </div>
        <Footer>
          <Button onClick={handleLogIn}>Reset Password</Button>
          <br />
           <Link href='/user/LogIn'>Login</Link>
        </Footer>
      </form>
    </Page>
  )
}