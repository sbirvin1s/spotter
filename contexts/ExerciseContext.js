/* ========== EXTERNAL MODULES ========== */
import React, {useContext, useState } from 'react';


/* ========== CONTEXTS ========== */
const ExerciseContext = React.createContext();


/* ========== EXPORTS ========== */
export function useExerciseContext() {
  return useContext(ExerciseContext)
}

export function ExerciseProvider({ children }) {

/* --- STATE HOOKS --- */
const [ currentSet, setCurrentSet ] = useState();
const [ coreLift, setCoreLift ] = useState();
const [ workingWeight, setWorkingWeight ] = useState();
const [ newWorkingWeight, setNewWorkingWeight ] = useState();

/* --- LIFECYCLE METHODS --- */
/* --- EVENT HANDLERS --- */
const selectCoreLift = value => {
  event.preventDefault();
  setCoreLift(value);
}

const updateCurrentSet = nextSet => {
  event.preventDefault();
  setCurrentSet(nextSet);
}

const loadWorkingWeight = weights => {
  event.preventDefault();
  setWorkingWeight(weights);
}

const updateWorkingWeight = newWeight => {
  event.preventDefault();
  setNewWorkingWeight(newWeight);
}

/* --- RENDERER --- */
  return (
    <ExerciseContext.Provider
      value={{
        currentSet,
        coreLift,
        workingWeight,
        newWorkingWeight,
        selectCoreLift,
        updateCurrentSet,
        loadWorkingWeight,
        updateWorkingWeight,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  )
}