/* ========== EXTERNAL MODULES ========== */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const { signUp } = useAuth();
  const [ email, setEmail ]  = useState();
  const [ password, setPassword ] = useState();
  const [ passwordConfirmation, setPasswordConfirmation ] = useState();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);
  const handlePasswordConfirmationEntry = ({ target: { value } }) => setPasswordConfirmation(value);


  const handleSignUp = async event => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      return setError('Passwords do not match')
    }

    try{
      setError('');
      setLoading(true);
      await signUp(email, password);
      router.push('/user/BasicInfo');
    } catch (err){
      // console.error('Sign Up Error: ', err);
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
          placeholder='Enter your Email Address'
        />
        <Input
          name={'password'}
          labelName={'Password'}
          onChange={handlePasswordEntry}
          type='password'
          placeholder='Enter your Password'
        />
        <Input
          name={'confirmPassword'}
          labelName={'Confirm Password'}
          onChange={handlePasswordConfirmationEntry}
          type='password'
          placeholder='Confirm your Password'
        />
        <Footer>
          <Button onClick={handleSignUp} disabled={loading}>Sign Up</Button>
          <br />
          <p><strong>Already have an account? <Link href='/user/LogIn'>Log In</Link></strong></p>
        </Footer>
      </form>
    </Page>
  )
}