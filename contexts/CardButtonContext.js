/* ========== EXTERNAL MODULES ========== */
import React, {useContext, useState } from 'react';


/* ========== CONTEXTS ========== */
const CardButtonContext = React.createContext();


/* ========== EXPORTS ========== */
export function useButtonContext() {
  return useContext(CardButtonContext)
}

export function CardButtonProvider({ children }) {

/* --- STATE HOOKS --- */
const [buttonActive, setButtonActive] = useState();

/* --- LIFECYCLE METHODS --- */
/* --- EVENT HANDLERS --- */
const updateButton = name => {
  event.preventDefault();
  setButtonActive(name);
}


/* --- RENDERER --- */
  return (
    <CardButtonContext.Provider
      value={{
        buttonActive,
        updateButton,
      }}
    >
{children}
    </CardButtonContext.Provider>
  )
}