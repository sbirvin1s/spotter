/* ========== EXTERNAL MODULES ========== */
import React from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/BasicInfo.module.css';
import { useUserInfo } from '../../contexts/UserContext';
import Input from 'components/Input';
import Button from 'components/Button';


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
    <div className={styles.Div_100___column}>
      <div className={styles.Div_33___row} >
        <h1>Lets get some Baseline Information</h1>
      </div>
      <form className={styles.Form} >
          <Input
            name={'firstName'}
            labelName={'First Name'}
            onChange={updateUserInfo}
            placeholder='Iman'
            value={(userInfo && userInfo.first_name) || ''}
            required
          />
          <Input
            name={'lastName'}
            labelName={'Last Name'}
            onChange={updateUserInfo}
            placeholder='Example'
            value={(userInfo && userInfo.last_name) || ''}
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
        <div className={styles.Div_33___row}>
          <Button variant='link' onClick={handleBack} >Back</Button>
          <Button onClick={handleNext} >Next</Button>
        </div>
      </form>
    </div>
  )
}