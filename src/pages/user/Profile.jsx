/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';
import { Router, useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Profile.module.css';
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import Alert from 'components/Alert';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';

/* ========== EXPORTS ========== */
export default function Profile() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { currentUser, logOut, updatePassword } = useAuth();
  const { userInfo } = useUserInfo();
  const [ password, setPassword ] = useState();
  const [ passwordConfirmation, setPasswordConfirmation ] = useState();
  const [ error, setError ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ loading, setLoading ] = useState(false);

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);
  const handlePasswordConfirmationEntry = ({ target: { value } }) => setPasswordConfirmation(value);

  const handleLogOut = async () => {
    setError('');

    try {
      await logOut();
      router.push('/');
    } catch {
      setError('Failed to Log Out')
    }
  }

  const handleUpdatePasswsord = async event => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      return setError('Passwords do not match')
    }

    try{
      setError('');
      setMessage('')
      setLoading(true);
      await updatePassword(password);
      setMessage('Password Updated')
    } catch (err){
      setError('Failed to update password');
    }

    setLoading(false);
  }

  const handle1RM = () => {

  }

  /* --- RENDER METHODS --- */
  const renderMax = () => {
    return (
      <div>
        <p><strong>1 REP MAX (1RM)</strong></p>
        <p>Squat: {userInfo && userInfo.max.squats} {userInfo && userInfo.poundsOrKilograms}</p>
        <p>Bench Press: {userInfo && userInfo.max.benchPress} {userInfo && userInfo.poundsOrKilograms}</p>
        <p>Deadlift: {userInfo && userInfo.max.deadlift} {userInfo && userInfo.poundsOrKilograms}</p>
        <p>Overhead Press: {userInfo && userInfo.max.overHeadPress} {userInfo && userInfo.poundsOrKilograms}</p>
    </div>
    )
  }

  const renderWorkingWeight = () => {
    return (
      <div>
        <p><strong>WORKING WEIGHT</strong></p>
        <p>Squat: {userInfo && userInfo.workingMax.squats} {userInfo && userInfo.poundsOrKilograms}</p>
        <p>Bench Press: {userInfo && userInfo.workingMax.benchPress} {userInfo && userInfo.poundsOrKilograms}</p>
        <p>Deadlift: {userInfo && userInfo.workingMax.deadlift} {userInfo && userInfo.poundsOrKilograms}</p>
        <p>Overhead Press: {userInfo && userInfo.workingMax.overHeadPress} {userInfo && userInfo.poundsOrKilograms}</p>
      </div>
    )
  }

  const renderAlert = () => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 2000);
      return <Alert variant='fail'>{error}</Alert>;
    }

    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return <Alert variant='success'>{message}</Alert>;
    }
  }

  /* NOTE: should have a 1RM amount from users entered 1RM and a "current 1RM" for the users working 1RM that is calculated for each week

  - [ ] Add option for users to choose days of the week to workout
  - [ ] Add option for users to choose their core lifts
  - [ ] Add users age for lift muscle strength categories
  - [ ] Add add indicator for users training levels: [untrained, novice, intermediate, advanced, elite]
        Untrained
          An individual who has not trained on the exercises before, but can perform them correctly.
        Novice
          An individual who has trained regularly for up to several months.
        Intermediate
          An individual who has trained regularly for up to a couple years.
        Advanced
          An individual who has trained multiple years.
        Elite
          An athlete competing in strength sports. Keep in mind, the standards shown in the tables do not represent the highest level of strength performance possible.
   */


  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <p>Welcome</p>
        <h1>{userInfo && userInfo.first.toUpperCase()}</h1>
        {renderAlert()}
      </Header>
      <div className={styles.Div_column}>
        <div className={styles.Div_row___spread}>
          <div>
            <p><strong>NAME</strong></p>
            <p>{userInfo && userInfo.first + ' ' + userInfo.last}</p>
          </div>
          <div>
            <p><strong>EMAIL</strong></p>
            <p>{currentUser && currentUser.email}</p>
          </div>
        </div>

        <br/>

        <div className={styles.Div_column}>
          <div className={styles.Div_row___spread}>
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
          </div>
          <Button onClick={handleUpdatePasswsord} disabled={loading} >Update Password</Button>
        </div>

        <br/>

        {renderMax()}
        <br/>
        {renderWorkingWeight()}
      </div>
      <Footer>
        <Button onClick={() => router.push('/user/WeightEntry')} >Update Max</Button>
        <div className={styles.Div_row}>
          <Button variant='link' onClick={() => router.push('/')} >Home</Button>
          <Button variant='link' onClick={handleLogOut} >Log Out</Button>
        </div>
      </Footer>
    </Page>
  )
}