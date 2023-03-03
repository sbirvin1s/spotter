/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';
import { Router, useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import styles from '@/styles/Workout.module.css';
import Alert from 'components/Alert';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PlateCalculator from 'components/PlateCalculator';
import CurrentDate from 'components/CurrentDate';
import CardButton from 'components/CardButton';


/* ========== EXPORTS ========== */
export default function Workout() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { userInfo, updateSpecificInfo } = useUserInfo();
  const [ workingWeight, setWorkingWeight ] = useState();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */
  const renderSelectExercise = () => {
    return (
      <div className={styles.Div___row}>
        <CardButton name='benchPress' value='benchPress'>Bench Press</CardButton>
        <CardButton name='overHeadPress' value='overHeadPress'>Overhead Press</CardButton>
        <CardButton name='deadlift' value='deadlift'>Deadlift</CardButton>
        <CardButton name='squats' value='squats'>Squats</CardButton>
      </div>
    )
  }

  /* --- RENDERER --- */
  return (
    <Page>
      <Header variant='compressed' >
        <div>
          <p>Today is</p>
          <CurrentDate/>
        </div>
        <Button variant='link' onClick={() => router.push('/user/Profile')} >P</Button>
      </Header>
      <h1>This is the workout page</h1>
      {renderSelectExercise()}
      <PlateCalculator weight={255} units={userInfo.poundsOrKilograms} />
      <Footer>
        <Button variant='link' onClick={() => router.push('/')}>Home</Button>
      </Footer>
    </Page>
  )
}