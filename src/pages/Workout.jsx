/* ========== EXTERNAL MODULES ========== */
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import { useExerciseContext } from 'contexts/ExerciseContext';
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
import Exercise from 'components/Exercise';


/* ========== EXPORTS ========== */
export default function Workout() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { userInfo, updateSpecificInfo } = useUserInfo();
  const {
    coreLift,
    selectCoreLift,
    workingWeight,
    loadWorkingWeight,
    updateCurrentSet,
  } = useExerciseContext();
  const [ newWorkingWeight, setNewWorkingWeight ] = useState();

  const coreSets = [
    {
      'setNumber': 1,
      'reps': 10,
      'intensity': 0.5
    },
    {
      'setNumber': 2,
      'reps': 6,
      'intensity': 0.75
    },
    {
      'setNumber': 3,
      'reps': 'AMRAP',
      'intensity': 0.83
    },
    {
      'setNumber': 4,
      'reps': 'AMRAP',
      'intensity': newWorkingWeight
    },
  ]

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => loadWorkingWeight(userInfo.working1RM), []);

  /* --- EVENT HANDLERS --- */
  // const handleSetCoreLift = value => {
  //   event.preventDefault();
  //   setCoreLift(value);
  // }

  const handleSelectExercise = exercise => {
    selectCoreLift(exercise);
    updateCurrentSet(coreLift + 'Set#' + 1);
  }

  /* --- RENDER METHODS --- */
  const renderSelectExercise = () => {
    return (
      <div className={styles.Div___row}>
        <CardButton
          variant='small'
          name='benchPress'
          value='benchPress'
          whenClicked={() => handleSelectExercise('benchPress')}
        >
          Bench Press
        </CardButton>
        <CardButton
          variant='small'
          name='overHeadPress'
          value='overHeadPress'
          whenClicked={() => handleSelectExercise('overHeadPress')}
        >
          Overhead Press
          </CardButton>
        <CardButton
          variant='small'
          name='deadlift'
          value='deadlift'
          whenClicked={() => handleSelectExercise('deadlift')}
        >
          Deadlift
        </CardButton>
        <CardButton
          variant='small'
          name='squats'
          value='squats'
          whenClicked={() => handleSelectExercise('squats')}
        >
          Squats
        </CardButton>
      </div>
    )
  }

  const renderSet = () => {
    return coreSets.map(set => {
      const weight = Math.round((workingWeight[coreLift] * set.intensity) / 5) * 5;

      return (
        <div key={coreLift + 'Set#' + set.setNumber}>
          <p >
            Set {set.setNumber}: {set.reps} reps of {weight} {userInfo.poundsOrKilograms}
          </p>
          {/* <PlateCalculator weight={weight} units={userInfo.poundsOrKilograms} /> */}
        </div>
      )
    })
  }

  const renderCurrentWorkout = () => {

   /* NOTE: APRE6 Adjustments:
      - Reps 0 - 2: - 10 lbs
      - Reps 3 - 4: - 5 lbs
      - Reps 5 - 7: No Change
      - Reps 8 - 9: + 5 lbs
      - Reps 10 - 11: + 10 lbs
      - Reps 12 - 13: + 15 lbs
   */

    switch (coreLift) {
      case 'benchPress':
        return (
          <Exercise coreSets={coreSets} />
          // <div className={styles.Div___column}>
          //   <p><strong>BENCH PRESS:</strong></p>
          //   {renderSet()}
          //   <br/>
          //   <p>Cardio: Waterfall Runs</p>
          // </div>
        );
      case 'overHeadPress':
        return (
          <Exercise coreSets={coreSets} />
          // <div className={styles.Div___column}>
          //   <p><strong>OVERHEAD PRESS:</strong></p>
          //   {renderSet()}
          //   <br/>
          //   <p>Lateral Shoulder Raise: 3 sets x 8 to 12 reps at {workingWeight[coreLift] * 0.5} {userInfo.poundsOrKilograms}</p>
          //   <p>Halo Shoulder Rotation: 10 revolutions each direction at {workingWeight[coreLift] * 0.5} {userInfo.poundsOrKilograms}</p>
          //   <br/>
          //   <p>Cardio: Distance Run - Remainder of hour with Heart Rate at 150 - 160 Beats per Minute</p>
          // </div>
        );
      case 'deadlift':
        return (
          <Exercise coreSets={coreSets} />
          // <div className={styles.Div___column}>
          //   <p><strong>DEADLIFT:</strong></p>
          //   {renderSet()}
          //   <br/>
          //   <p>Lunges: 3 sets – 20 yards – {workingWeight[coreLift] * 0.5} {userInfo.poundsOrKilograms}</p>
          //   <p>Calf Raises: 3 sets – 10 reps – {workingWeight[coreLift] * 0.5} {userInfo.poundsOrKilograms}</p>
          //   <br/>
          //   <p>Cardio: Remainder of hour spent on Stairs or Stair Master. Adjust level (resistance) so that Heart Rate is between 150-160 beats per minute</p>
          // </div>
        );
      case 'squats':
        return (
          // <div className={styles.Div___column}>
          //   <p><strong>SQUATS:</strong></p>
          //   {renderSet()}
          //   <br/>
          //   <p>Lunges: 3 sets x 20 yards of {workingWeight[coreLift] * 0.5} {userInfo.poundsOrKilograms}</p>
          //   <p>Calf Raises: 3 sets x 10 reps of {workingWeight[coreLift] * 0.5} {userInfo.poundsOrKilograms}</p>
          //   <br/>
          //   <p>Cardio: Remainder of hour spent on bicycle. Adjust level (resistance) so that Heart Rate is between 150-160 beats per minute</p>
          // </div>
          <Exercise coreSets={coreSets} />
        );
    }
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
      <div>
        <h3>Choose your Core Lift</h3>
        {renderSelectExercise()}
      </div>
      {renderCurrentWorkout()}
      <Footer>
        <Button variant='link' onClick={() => router.push('/')}>Home</Button>
      </Footer>
    </Page>
  )
}