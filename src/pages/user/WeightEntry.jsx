/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';
import { useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import styles from '../../styles/Profile.module.css';
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import { createUser } from 'controllers';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Alert from 'components/Alert';

/* ========== EXPORTS ========== */
export default function WeightEntry() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { currentUser, } = useAuth();
  const { userInfo, updateSpecificInfo } = useUserInfo();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);


  /* --- EVENT HANDLERS --- */
  const handleNext = async event => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await createUser(currentUser.uid, userInfo);
      router.push('/');
    } catch {
      setError('Failed to update profile');
    }

    setLoading(false);
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
    updateSpecificInfo('workingWeight', updatedInfo);
  }

  /*--- RENDER METHODS --- */
  const renderAlert = () => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 2000);
      return <Alert variant='fail'>{error}</Alert>;
    }
  }

  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <p>Enter your</p>
        <h1>CURRENT MAX</h1>
        {renderAlert()}
      </Header>
      <div className={styles.Div_column}>
        <Input
          name='benchPress'
          labelName='Bench Press'
          type='number'
          onChange={handleUpdate}
          placeholder='0'
          required
        />
        <Input
          name='overHeadPress'
          labelName='Overhead Press'
          type='number'
          onChange={handleUpdate}
          placeholder='0'
          required
        />
        <Input
          name='squats'
          labelName='Squats'
          type='number'
          onChange={handleUpdate}
          placeholder='0'
          required
        />
        <Input
          name='deadlift'
          labelName='Deadlift'
          type='number'
          onChange={handleUpdate}
          placeholder='0'
          required
        />
      </div>
      <Footer>
        <Button onClick={handleNext} disabled={loading} >Next</Button>
        <Button variant='link' onClick={handleBack} >Back</Button>
      </Footer>
    </Page>
  )
}