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
  const {
    coreLift,
    currentSet,
    updateCurrentSet,
    updateWorkingWeight,
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

  const handleCompleteAMRAP = nextSet => {
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
    updateCurrentSet(nextSet);
  }

  /* --- RENDER METHODS --- */
  const renderSet = () => {
    const setKey = coreLift + 'Set#' + setNumber;

    if (currentSet === setKey) {
      if (reps === 'AMRAP') {
        return (
          <div key={setKey}>
            <p >
              Set {setNumber}: {reps} reps of {weight} {userInfo.poundsOrKilograms}
            </p>
            <div className={styles.Div___row}>
              <PlateCalculator
                weight={weight}
                units={userInfo.poundsOrKilograms}
                barWeight={userInfo.barWeight}
              />
              <div className={styles.Div_column___center}>
                <Button
                  variant='workout+'
                  onClick={handleIncreaseReps}
                >
                  +
                </Button>
                <CardButton
                  variant='tiny'
                  onClick={() => handleCompleteAMRAP(coreLift + 'Set#' + (setNumber + 1))}
                >
                  {completedReps > 13 ? 'MAX' : completedReps}
                </CardButton>
                <Button
                  variant='workout-'
                  onClick={handleDecreaseReps}
                  >
                    -
                  </Button>
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
            <div className={styles.Div___row}>
              <PlateCalculator
                weight={weight}
                units={userInfo.poundsOrKilograms}
                barWeight={userInfo.barWeight}
              />
              <CardButton
                variant='tiny'
                onClick={() => updateCurrentSet(coreLift + 'Set#' + (setNumber + 1))}
              >
                {reps}
              </CardButton>
            </div>
          </div>
        )
      }
    } else {
      return (
        <div
          className={styles.Set_container}
          key={setKey}
          onClick={() => updateCurrentSet(setKey)}
        >
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