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
  const { currentUser, logOut } = useAuth();
  const { userInfo, updateUserInfo, updateSpecificInfo } = useUserInfo();
  const [ error, setError ] = useState('');

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleLogOut = async () => {
    setError('');

    try {
      await logOut();
      router.push('/');
    } catch {
      setError('Failed to Log Out')
    }
  }

  const handle1RM = () => {

  }

  /* --- RENDER METHODS --- */

  /* NOTE: should have a 1RM amount from users entered 1RM and a "current 1RM" for the users working 1RM that is calculated for each week
   */


  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <p>Welcome</p>
        <h1>{userInfo && userInfo.first}</h1>
        {error && <Alert variant='fail'>{error}</Alert>}
      </Header>
      {/* <Input
        name='1RM'
        labelName='One Rep Max'
        // onChange={}
        placeholder='200'
      >
      </Input> */}

      <div>
        <h5>Name</h5>
        <p>{userInfo && userInfo.first + ' ' + userInfo.last}</p>
      </div>

      <br/>

      <div>
        <h5>email</h5>
        <p>{currentUser && currentUser.email}</p>
      </div>

      <br/>

      <div>
        <h5>1 Rep Max</h5>
        <p>Squat: 200 {userInfo.poundsOrKilograms}</p>
        <p>Bench Press: 135 {userInfo.poundsOrKilograms}</p>
        <p>Deadlift: 270 {userInfo.poundsOrKilograms}</p>
        <p>Overhead Shoulder Press: 100 {userInfo.poundsOrKilograms}</p>
      </div>

      <br/>

      <div>
        <h5>Current 1 Rep Max</h5>
        <p>Squat: 200 {userInfo.poundsOrKilograms}</p>
        <p>Bench Press: 135 {userInfo.poundsOrKilograms}</p>
        <p>Deadlift: 270 {userInfo.poundsOrKilograms}</p>
        <p>Overhead Shoulder Press: 100 {userInfo.poundsOrKilograms}</p>
      </div>

      <Footer>
        <Button /*onClick={handleNext}*/ >Update</Button>
        <div className={styles.Div___row}>
          <Button variant='link' onClick={() => router.push('/')} >Home</Button>
          <Button variant='link' onClick={handleLogOut} >Log Out</Button>
        </div>
      </Footer>
    </Page>
  )
}