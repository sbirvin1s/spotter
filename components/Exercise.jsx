/* ========== EXTERNAL MODULES ========== */
import { useState, useEffect } from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Workout.module.css';
import { useAuth } from 'contexts/AuthContext.js';
import { useUserInfo } from 'contexts/UserContext';
import { useExerciseContext } from 'contexts/ExerciseContext';
import { updateCurrentMax } from 'controllers/index.js';
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
  const { currentUser } = useAuth();
  const { userInfo } = useUserInfo();
  const { coreLift, workingWeight, newWorkingWeight } = useExerciseContext();

  /*--- EVENT HANDLERS --- */
  const handleCompleteExercise = event => {
    event.preventDefault();
    updateCurrentMax(currentUser.uid, coreLift, newWorkingWeight);
  }

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
          />
        )})
    }


  /* --- RENDERER --- */
  return (
    <div className={styles.Div_column}>
      {renderSets()}
      <Button onClick={handleCompleteExercise}>Complete Exercise</Button>
    </div>
  )
}