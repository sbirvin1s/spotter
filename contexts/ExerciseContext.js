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

/* --- LIFECYCLE METHODS --- */
/* --- EVENT HANDLERS --- */
const selectCoreLift = value => {
  event.preventDefault();
  setCoreLift(value);
}


/* --- RENDERER --- */
  return (
    <ExerciseContext.Provider
      value={{
        currentSet,
        coreLift,
        selectCoreLift,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  )
}