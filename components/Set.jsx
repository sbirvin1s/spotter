/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '../src/styles/Workout.module.css';
import { useUserInfo } from 'contexts/UserContext';
import { useExerciseContext } from 'contexts/ExerciseContext';
import PlateCalculator from './PlateCalculator';
import Button from './Button';
import CardButton from './CardButton';

/* ========== EXPORTS ========== */
export default function Set({ setNumber, reps, weight }) {

  /* --- STATE HOOKS --- */
  const { userInfo } = useUserInfo();
  const { coreLift, currentSet, updateCurrentSet } = useExerciseContext();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */

  /* --- RENDER METHODS --- */
  const renderSet = () => {
    const setKey = coreLift + 'Set#' + setNumber;
    console.log('setKey: ', setKey);

    if (currentSet === setKey) {
      return (
        <div key={setKey}>
          <p >
            Set {setNumber}: {reps} reps of {weight} {userInfo.poundsOrKilograms}
          </p>
          <div className={styles.Div___row}>
            <PlateCalculator weight={weight} units={userInfo.poundsOrKilograms} />
            <div className={styles.Div___column}>
              <Button
                variant='workout'
                onClick={() => updateCurrentSet(coreLift + 'Set#' + (setNumber - 1))}
              >
                Prev Set
              </Button>
              <CardButton
                variant='small'
                onClick={() => updateCurrentSet(coreLift + 'Set#' + (setNumber + 1))}
              >
                {reps}
              </CardButton>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div key={setKey}>
          <p >
            Set {setNumber}: {reps} reps of {weight} {userInfo.poundsOrKilograms}
          </p>
      </div>
      )
    }
  }

  /* --- RENDERER --- */
  return (
    <>
      {renderSet()}
    </>
  )
}