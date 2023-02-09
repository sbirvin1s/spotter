/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Button.module.css';

/* ========== EXPORTS ========== */

/** Button constructor that takes:
 *
 * @param {string} variant - ['', ...] if none given, will return default
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
          className={`${styles.Button} ${styles.Button_link}`}
          {...props}
        >
          {children}
        </button>
      )
    case 'card':
      return (
        <button
          className={`${styles.Button} ${styles.Button_card}`}
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
          className={styles.Button}
          {...props}
        >
          {children}
        </button>
      )
  }
}
