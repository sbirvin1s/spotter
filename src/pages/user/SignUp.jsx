/* ========== EXTERNAL MODULES ========== */
import React, { useState } from 'react';
import Link from 'next/link';

/* ========== INTERNAL MODULES ========== */
import { useAuth } from 'contexts/AuthContext';
import styles from '@/styles/SignUp.module.css';
import Input from 'components/Input';
import Button from 'components/Button';
import Alert from 'components/Alert';

/* ========== EXPORTS ========== */
export default function SignUp() {

  /* --- STATE HOOKS --- */
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

    } catch (err){
      console.error('Sign Up Error: ', err);
      setError('Failed to Sign Up');
    }

    setLoading(false);
    navigate('/BasicInfo');
  }

  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <div className={styles.Div_100}>
      <div className={styles.Div_33}>
        <h1>Create your <strong>ACCOUNT</strong></h1>
        {error && <Alert variant='fail'>{error}</Alert>}
      </div>
      <form className={styles.Form}>
        <Input
          name={'firstName'}
          labelName={'First Name'}
          onChange={handleEmailEntry}
          type='text'
          placeholder='Iman'
        />
        <Input
          name={'lastName'}
          labelName={'Last Name'}
          onChange={handleEmailEntry}
          type='text'
          placeholder='Example'
        />
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
          onChange={handlePasswordEntry}
          type='password'
          placeholder='************'
        />
        <div className={styles.Div_33}>
          <Button onClick={handleSignUp} disabled={loading}>Sign Up</Button>
          <h5>Already have an account? <Link href='/user/LogIn'>Log In</Link></h5>
        </div>
      </form>
    </div>
  )
}