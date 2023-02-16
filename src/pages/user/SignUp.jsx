/* ========== EXTERNAL MODULES ========== */
import React, { useState } from 'react';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import { useAuth } from 'contexts/AuthContext';
import styles from '@/styles/SignUp.module.css';
import Input from 'components/Input';
import Button from 'components/Button';
import Alert from 'components/Alert';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';

/* ========== EXPORTS ========== */
export default function SignUp() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const [email, setEmail]  = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const { signUp, currentUser, logIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);
  const handlePasswordConfirmationEntry = ({ target: { value } }) => setPasswordConfirmation(value);


  const handleSignUp = async () => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      return setError('Passwords do not match')
    }

    try{
      setError('');
      setLoading(true);
      await signUp(email, password);
      // createUser(email);
      router.push('/user/BasicInfo');
    } catch (err){
      console.error('Sign Up Error: ', err);
      setError('Failed to Sign Up');
    }

    setLoading(false);
  }

  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <p>Create your</p>
        <h1>ACCOUNT</h1>
        {error && <Alert variant='fail'>{error}</Alert>}
      </Header>
      <form className={styles.Form}>
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
        <Input
          name={'confirmPassword'}
          labelName={'Confirm Password'}
          onChange={handlePasswordConfirmationEntry}
          type='password'
          placeholder='************'
        />
        <Footer>
          <Button onClick={handleSignUp} disabled={loading}>Sign Up</Button>
          <h5>Already have an account? <Link href='/user/LogIn'>Log In</Link></h5>
        </Footer>
      </form>
    </Page>
  )
}