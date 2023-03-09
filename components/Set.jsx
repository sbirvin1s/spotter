/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';

/* ========== INTERNAL MODULES ========== */
import { useUserInfo } from 'contexts/UserContext';
import { useExerciseContext } from 'contexts/ExerciseContext';
import PlateCalculator from './PlateCalculator';
import Button from './Button';

/* ========== EXPORTS ========== */
export default function Set({ setNumber, reps, weight, intensity }) {

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
          <PlateCalculator weight={weight} units={userInfo.poundsOrKilograms} />
          <Button onClick={() => updateCurrentSet(coreLift + 'Set#' + (setNumber - 1))}>Prev Set</Button>
          <Button onClick={() => updateCurrentSet(coreLift + 'Set#' + (setNumber + 1))}>Next Set</Button>
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