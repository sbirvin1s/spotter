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
export default function Set({ setNumber, reps, weight, setCompletedSets }) {

  /* --- STATE HOOKS --- */
  const { userInfo } = useUserInfo();
  const {
    coreLift,
    currentSet,
    updateCurrentSet,
    updateWorkingWeight,
    updateCompletedSets
   } = useExerciseContext();
  const [ completedReps, setCompletedReps ] = useState(6)

  /* --- EVENT HANDLERS --- */
  const handleIncreaseReps = event => {
    event.preventDefault();
    setCompletedReps(prev => {
      if (completedReps + 1 >= 14) {
        return 14;
      } else {
        return completedReps + 1
      }
    });
  }

  const handleDecreaseReps = event => {
    event.preventDefault();
    setCompletedReps(prev => {
      if (completedReps - 1 < 0) {
        return 0
      } else {
        return completedReps - 1;
      }
    });
  }

  const handleCompleteSet = nextSet => {
    const completedSet = {
      reps,
      weight,
      units: userInfo.poundsOrKilograms
    }

    if (reps === 'AMRAP') {
      if (completedReps <= 2) {
       weight = weight - 10;
      } else if (completedReps <= 4) {
       weight = weight - 5;
      } else if (completedReps >= 5 && completedReps <= 7) {
       weight = weight;
      } else if (completedReps <= 9) {
       weight = weight + 5;
      } else if (completedReps <= 11) {
       weight = weight + 10;
      } else {
       weight = weight + 15
      }

      updateWorkingWeight(weight);
    }

      setCompletedSets(prev => ([
        ...prev,
        completedSet
      ]));
      updateCurrentSet(nextSet);
  }

  /* --- RENDER METHODS --- */
  const renderSet = () => {
    const setKey = coreLift + 'Set#' + setNumber;
    const showRepModifiers = reps === 'AMRAP' ? 'visibible' : 'hidden';
    const showPlateCalculator = currentSet === setKey ? 'flex' : 'none';
    const targetReps = reps === 'AMRAP' ? (
      completedReps > 13 ? 'MAX' : completedReps
      ) : reps;

    let intensity = 0;

    if (setNumber === 1) intensity = '50% 1RM';
    if (setNumber === 2) intensity = '75% 1RM';
    if (setNumber === 3) intensity = '83% 1RM';
    if (setNumber === 4) intensity = 'MAX';



    return (
      <div
        key={setKey}
        className={styles.Set_container}
        onClick={() => currentSet === setKey ? '' : updateCurrentSet(setKey)}
      >
        <div className={styles.Set_title}>
          <p >{reps} reps at {intensity}</p>
          <p>{weight} {userInfo.poundsOrKilograms}</p>
          <CardButton
              variant="workout"
              onClick={() => handleCompleteSet(coreLift + 'Set#' + (setNumber + 1))}
          >
              {targetReps}
          </CardButton>
        </div>
        <div
          className={styles.Set_calculator}
          style={{ display: showPlateCalculator }}
        >
          <PlateCalculator
            weight={weight}
            units={userInfo.poundsOrKilograms}
            barWeight={userInfo.barWeight}
          />
          <div
            className={styles.Set_buttonContainer}
          >
            <Button
              onClick={handleIncreaseReps}
              variant="workout+"
              style={{ visibility: showRepModifiers }}
            >
              +
            </Button>
            <Button
              onClick={handleDecreaseReps}
              variant="workout-"
              style={{ visibility: showRepModifiers }}
            >
              -
            </Button>
          </div>
        </div>
      </div>
    )
  }

  /* --- RENDERER --- */
  return (
    <>
      {renderSet()}
    </>
  )
}