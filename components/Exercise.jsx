/* ========== EXTERNAL MODULES ========== */
import { useState, useEffect } from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Workout.module.css';
import { useUserInfo } from 'contexts/UserContext';
import { useExerciseContext } from 'contexts/ExerciseContext';
import Set from './Set.jsx';

/* ========== EXPORTS ========== */
/** Set component that takes:
 *
 * @param {string} coreLift - ['benchPress', 'overHeadPress', 'deadlift', 'squat'] core lift identifier
 * @param {string} units - 'pounds' or 'kilograms', default 'pounds'
 * @returns {Component}
 */
export default function Exercise({ coreSets }) {

  /* NOTE: APRE6 Adjustments:
    - Reps 0 - 2: - 10 lbs
    - Reps 3 - 4: - 5 lbs
    - Reps 5 - 7: No Change
    - Reps 8 - 9: + 5 lbs
    - Reps 10 - 11: + 10 lbs
    - Reps 12 - 13: + 15 lbs
  */

  /* --- STATE HOOKS --- */
  const { userInfo } = useUserInfo();
  const { coreLift, workingWeight } = useExerciseContext();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* NOTE: move this into own component
    - [ ] Create setContext handler to manage which set is active
    - [ ] Should only handle rendering one set
    - [ ] Should a render and input / verify field for 1st max set to input reps completed
    - [ ] Should supply an updated working max based on rep results of 1st max set
  */

    const renderSets = () => {
      return coreSets.map(({ setNumber, reps, intensity })=> {
        const weight = Math.round((workingWeight[coreLift] * intensity) / 5) * 5;

        return (
          <Set
            key={coreLift + 'Set#' + setNumber}
            setNumber={setNumber}
            reps={reps}
            weight={weight}
            intensity={intensity}
          />
        )})
    }


  /* --- RENDERER --- */
  return (
    <div className={styles.Div___column}>
      <p><strong>SQUATS:</strong></p>
      {renderSets()}
      <br/>
      <p>Lunges: 3 sets x 20 yards of {workingWeight[coreLift] * 0.5} {userInfo.poundsOrKilograms}</p>
      <p>Calf Raises: 3 sets x 10 reps of {workingWeight[coreLift] * 0.5} {userInfo.poundsOrKilograms}</p>
      <br/>
      <p>Cardio: Remainder of hour spent on bicycle. Adjust level (resistance) so that Heart Rate is between 150-160 beats per minute</p>
    </div>
  )
}