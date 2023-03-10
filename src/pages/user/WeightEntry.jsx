/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';
import { Router, useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import styles from '../../styles/Profile.module.css';
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import { createUser } from 'controllers';
import Alert from 'components/Alert';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';

/* ========== EXPORTS ========== */
export default function WeightEntry() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { currentUser, } = useAuth();
  const { userInfo, updateUserInfo, updateSpecificInfo } = useUserInfo();
  const [ error, setError ] = useState('');


  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleNext = event => {
    event.preventDefault();
    createUser(currentUser.uid, userInfo);
    router.push('/user/Profile');
  }

  const handleBack = event => {
    event.preventDefault();
    router.push('/user/BasicInfo');
  }

  const handleUpdate = ({ target: { name, value } }) => {
    let updatedInfo = {};

    if (userInfo.max) {
      updatedInfo = Object.assign({}, userInfo.max);
      updatedInfo[name] = value;
    }

    updateSpecificInfo('max', updatedInfo);
  }
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <p>Enter your</p>
        <h1>CURRENT MAX</h1>
      </Header>
      <div className={styles.Div_column}>
        <Input
          name='benchPress'
          labelName='Bench Press'
          type='number'
          onChange={handleUpdate}
          // value={userInfo['workingMax'].benchPress || 0}
          required
        />
        <Input
          name='overHeadPress'
          labelName='Overhead Press'
          type='number'
          onChange={handleUpdate}
          // value={userInfo['workingMax'].overHeadPress || 0}
          required
        />
        <Input
          name='squats'
          labelName='Squats'
          type='number'
          onChange={handleUpdate}
          // value={userInfo['workingMax'].squats || 0}
          required
        />
        <Input
          name='deadlift'
          labelName='Deadlift'
          type='number'
          onChange={handleUpdate}
          // value={userInfo['workingMax'].deadlift || 0}
          required
        />
      </div>
      <Footer>
        <Button onClick={handleNext} >Next</Button>
        <Button variant='link' onClick={handleBack} >Back</Button>
      </Footer>
    </Page>
  )
}