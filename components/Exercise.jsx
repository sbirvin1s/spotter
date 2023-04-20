/* ========== EXTERNAL MODULES ========== */
import { useState, useEffect } from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Workout.module.css';
import { useExerciseContext } from '@/contexts/ExerciseContext';
import { updateCurrentMax } from '@/controllers/index.js';
import Set from './Set.jsx';
import Button from './Button.jsx';

/* ========== EXPORTS ========== */
/** Set component that takes:
 *
 * @param {string} coreLift - ['benchPress', 'overHeadPress', 'deadlift', 'squat'] core lift identifier
 * @param {string} units - 'pounds' or 'kilograms', default 'pounds'
 * @returns {Component}
 */
export default function Exercise({ coreSets }) {

  /* --- STATE HOOKS --- */
  const {
    coreLift,
    workingWeight,
    newWorkingWeight,
    updateCompletedSets
  } = useExerciseContext();
  const [ exercise, setExercise ] = useState();
  const [ completedSets, setCompletedSets ] = useState([]);

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    if (coreLift === 'benchPress') setExercise('BENCH PRESS');
    if (coreLift === 'overHeadPress') setExercise('OVERHEAD PRESS');
    if (coreLift === 'squats') setExercise('SQUATS');
    if (coreLift === 'deadlift') setExercise('DEADLIFT');
  }, [coreLift]);

  /* --- RENDER METHODS --- */
    const renderSets = () => {
      return coreSets.map(({ setNumber, reps, intensity })=> {
        let weight = 0;

        if (newWorkingWeight && setNumber === 4) {
          weight = newWorkingWeight;
        } else {
          weight = Math.round((workingWeight[coreLift] * intensity) / 5) * 5;
        }

        return (
          <Set
            key={coreLift + 'Set#' + setNumber}
            setNumber={setNumber}
            reps={reps}
            weight={weight}
            setCompletedSets={setCompletedSets}
          />
        )})
    }


  /* --- RENDERER --- */
  return (
    <div className={styles.Exercise_container}>
      <div className={styles.Div_row___left}>
        <h6>{exercise}</h6>
      </div>
      {renderSets()}
      <Button
        onClick={() => updateCompletedSets(exercise, completedSets)}
      >
        Complete Sets
      </Button>
    </div>
  )
}