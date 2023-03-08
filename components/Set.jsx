/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';

/* ========== INTERNAL MODULES ========== */
import { useUserInfo } from 'contexts/UserContext';
import { useExerciseContext } from 'contexts/ExerciseContext';
import PlateCalculator from './PlateCalculator';
import Button from './Button';

/* ========== EXPORTS ========== */
export default function Set({ setNumber, weight }) {

  /* --- STATE HOOKS --- */
  const { userInfo } = useUserInfo();
  const {  } = useExerciseContext();
  const [ set, setSet ] = useState(0)


  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */

  /* --- RENDER METHODS --- */
  const renderSet = () => {
    while (currentSet < coreSets.length) {
      const weight = Math.round((workingWeight[coreLift] * coreSets[currentSet].intensity) / 5) * 5;

      return (
        <div key={coreLift + 'Set#' + coreSets[currentSet].setNumber}>
          <p >
            Set {coreSets[currentSet].setNumber}: {coreSets[currentSet].reps} reps of {weight} {userInfo.poundsOrKilograms}
          </p>
          <PlateCalculator weight={weight} units={userInfo.poundsOrKilograms} />
          <Button onClick={() => currentSet++}>Next Set</Button>
        </div>
      )
    }
  }

  /* --- RENDERER --- */
  return (
    <>

    </>
  )
}