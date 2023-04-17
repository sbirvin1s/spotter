/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Button.module.css';

/* ========== EXPORTS ========== */

/** Button constructor that takes:
 *
 * @param {string} variant - ['link', 'card'] if none given, will return default
 * @param {*} children - anything that should be placed inside the component
 * @prop {*} props - any property or tag that needs to be passed to the component
 * @returns {Component}
 */
export default function Button({
  variant,
  handleClick,
  children,
  ...props
}) {

  /* --- STATE HOOKS --- */
  const [selected, setSelected] = useState(false);

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleSelected = event => {
    event.preventDefault();
    handleClick(event);
    setSelected(selected => !selected);
  }

  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  switch(variant) {
    case 'link':
      return (
        <button
          data-testid="link"
          role="link"
          className={`${styles.Button} ${styles.Button_link}`}
          {...props}
        >
          {children}
        </button>
      )
    case 'workout':
      return (
        <button
          data-testid="workout"
          className={`${styles.Button} ${styles.Button_workout}`}
          selected={selected}
          onClick={handleSelected}
          {...props}
        >
          {children}
        </button>
      )
    case 'workout+':
      return (
        <button
        data-testid="workout+"
          className={`${styles.Button} ${styles.Button_workout} ${styles.Button_workout___increment}`}
          selected={selected}
          onClick={handleSelected}
          {...props}
        >
          {children}
        </button>
      )
    case 'workout-':
      return (
        <button
          data-testid="workout-"
          className={`${styles.Button} ${styles.Button_workout} ${styles.Button_workout___decrement}`}
          selected={selected}
          onClick={handleSelected}
          {...props}
        >
          {children}
        </button>
      )
    default:
      return (
        <button
          data-testid="default"
          className={styles.Button}
          {...props}
        >
          {children}
        </button>
      )
  }
}
