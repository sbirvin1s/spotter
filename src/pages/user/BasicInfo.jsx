/* ========== EXTERNAL MODULES ========== */
import React from 'react';
import { Router, useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/BasicInfo.module.css';
import { useUserInfo } from 'contexts/UserContext';
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
    router.push('/user/Profile');
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
        <p>Lets get some</p>
        <h1>Baseline Information</h1>
      </Header>
      <form className={styles.Form} >
          <Input
            name={'firstName'}
            labelName={'First Name'}
            onChange={updateUserInfo}
            placeholder='Iman'
            value={(userInfo && userInfo.firstName) || ''}
            required
          />
          <Input
            name={'lastName'}
            labelName={'Last Name'}
            onChange={updateUserInfo}
            placeholder='Example'
            value={(userInfo && userInfo.lastName) || ''}
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