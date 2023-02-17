/* ========== EXTERNAL MODULES ========== */
import { useState, useEffect } from "react";

/* ========== INTERNAL MODULES ========== */


/* ========== EXPORTS ========== */
export default function CurrentDate() {

  /* --- STATE HOOKS --- */
  const [currentDate, setCurrentDate] = useState('');

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    const newDate = new Date(Date.now());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const stringDate = newDate.toLocaleDateString(undefined, options);

    setCurrentDate(stringDate)
  }, [currentDate])

  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return <p>{currentDate && currentDate}</p>
}
