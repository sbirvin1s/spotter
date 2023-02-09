/* ========== EXTERNAL MODULES ========== */
import React from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/BasicInfo.module.css';
import { useUserInfo } from 'contexts/UserContext';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';


/* ========== EXPORTS ========== */
export default function BasicInfo() {

  /* --- STATE HOOKS --- */
  const { userInfo, updateUserInfo } = useUserInfo();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleNext = event => {
    event.preventDefault();
    navigate('/WeightSelector');
  }

  const handleBack = event => {
    event.preventDefault();
    navigate('/BasicInfo');
  }
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <Page>
      <Header>
        <h1>Lets get some Baseline Information</h1>
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
          <label className={styles.Label} htmlFor='poundsOrKilograms'>
            Do you want your weights in Pounds or Kilograms
              <select
                id='poundsOrKilograms'
                name='poundsOrKilograms'
                onChange={updateUserInfo}
                value={(userInfo && userInfo.poundsOrKilograms) || ''}
              >
                <option value={null}>--</option>
                <option value={'pounds'}>Pounds</option>
                <option value={'kilograms'}>Kilograms</option>
              </select>
          </label>
        <Footer>
          <Button variant='link' onClick={handleBack} >Back</Button>
          <Button onClick={handleNext} >Next</Button>
        </Footer>
      </form>
    </Page>
  )
}