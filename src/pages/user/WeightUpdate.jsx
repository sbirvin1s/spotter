/* ========== EXTERNAL MODULES ========== */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import styles from '../../styles/Profile.module.css';
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import { createUser, getUser } from 'controllers';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';

/* ========== EXPORTS ========== */
export default function WeightUpdate() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { currentUser, } = useAuth();
  const { userInfo, updateInfo, updateSpecificInfo } = useUserInfo();

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    if (!currentUser) {
      router.push('/user/LogIn')
    } else {
      const updateUser = async () => {
        const loggedInUser = await getUser(currentUser.uid);
        updateInfo(loggedInUser);
      };

      updateUser();
    }
  }, [])

  /* --- EVENT HANDLERS --- */
  const handleNext = event => {
    event.preventDefault();

    createUser(currentUser.uid, userInfo);
    router.push('/user/Profile');
  }

  const handleBack = event => {
    event.preventDefault();
    router.push('/user/Profile');
  }

  const handleUpdate = ({ target: { name, value } }) => {
    let updatedInfo = {};

    if (userInfo.max) {
      updatedInfo = Object.assign({}, userInfo.max);
      updatedInfo[name] = value;
    }

    updateSpecificInfo('max', updatedInfo);
  }

  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <p>Enter your</p>
        <h1>NEW MAX</h1>
      </Header>
      <div className={styles.Div_column}>
        <Input
          name='benchPress'
          labelName='Bench Press'
          type='number'
          onChange={handleUpdate}
          defaultValue={(userInfo && userInfo.workingWeight.benchPress) || 0}
          required
        />
        <Input
          name='overHeadPress'
          labelName='Overhead Press'
          type='number'
          onChange={handleUpdate}
          defaultValue={(userInfo && userInfo.workingWeight.overHeadPress) || 0}
          required
        />
        <Input
          name='squats'
          labelName='Squats'
          type='number'
          onChange={handleUpdate}
          defaultValue={(userInfo && userInfo.workingWeight.squats) || 0}
          required
        />
        <Input
          name='deadlift'
          labelName='Deadlift'
          type='number'
          onChange={handleUpdate}
          defaultValue={(userInfo && userInfo.workingWeight.deadlift) || 0}
          required
        />
      </div>
      <Footer>
        <Button onClick={handleNext} >Submit</Button>
        <Button variant='link' onClick={handleBack} >Cancel</Button>
      </Footer>
    </Page>
  )
}