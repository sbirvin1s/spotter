/* ========== EXTERNAL MODULES ========== */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/BasicInfo.module.css';
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import { getUser } from 'controllers';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';
import CardButton from 'components/CardButton';


/* ========== EXPORTS ========== */
export default function BasicInfo() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { userInfo, updateUserInfo, updateSpecificInfo } = useUserInfo();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleNext = event => {
    event.preventDefault();
    router.push('/user/WeightEntry');
  }

  const handleBack = event => {
    event.preventDefault();
    router.push('/user/SignUp');
  }
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <p className='Header_title'>LETS GET SOME </p>
        <p className='Header_title___emphasis'>BASIC INFORMATION</p>
      </Header>
      <form className={styles.Form} >
          <Input
            name={'first'}
            labelName={'First Name'}
            onChange={updateUserInfo}
            placeholder='First Name'
            defaultValue={(userInfo && userInfo.first) || ''}
            required
          />
          <Input
            name={'last'}
            labelName={'Last Name'}
            onChange={updateUserInfo}
            placeholder='Last Name'
            defaultValue={(userInfo && userInfo.last) || ''}
            required
          />
          <div className={styles.Div___column}>
            <p> Do you use pounds or kilograms?</p>
            <div className={styles.Div___row}>
              <CardButton
                name='poundsOrKilograms'
                value={'pounds'}
                whenClicked={() => updateSpecificInfo('poundsOrKilograms', 'pounds')}
              >
                LBS
              </CardButton>
              <CardButton
                name='poundsOrKilograms'
                value={'kilograms'}
                whenClicked={() => updateSpecificInfo('poundsOrKilograms', 'kilograms')}
              >
                KG
              </CardButton>
            </div>
          </div>
        <Footer>
          <Button onClick={handleNext} >Next</Button>
          <Button variant='link' onClick={handleBack} >Back</Button>
        </Footer>
      </form>
    </Page>
  )
}