/* ========== EXTERNAL MODULES ========== */
import { useState } from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Input.module.css'

/* ========== EXPORTS ========== */

/** Input constructor that takes:
 *
 * @param {string} name - the string value to be passed as the id and name of the component
 * @param {string} labelName - text to be displayed as a label
 * @param {*} children - anything that should be contained inside the input tag
 * @prop {*} props - any property that needs to be passed to the input tag
 * @returns {Component}
 */
export default function Input({
  name,
  labelName,
  children,
   ...props
}) {

  /* --- STATE HOOKS --- */
  const [ value, setValue ] = useState(null);

  let isVisible = value ? {
    dislay: 'none',
    position: 'absolute',
    fontSize: '0.8rem',
    paddingLeft: '4px',
    paddingRight: '4px',
    top: '0',
    left: '0.5rem',
    backgroundColor: '#000',
    color: '#fff',
    transition: 'none',
  } : {};

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleInput = ({target: { value }}) => {
    setValue(value);
  }

  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <label
      className={styles.Input_container}
      htmlFor={name}
    >
      <input
        className={styles.Input}
        id={name}
        label={name}
        name={name}
        onInput={handleInput}
        {...props}
      >
        {children}
      </input>
      <div className={styles.Input_title}
        style={isVisible}
      >
        {labelName}
      </div>
      <div
        className={styles.Input_title___noFocus}
        style={isVisible}
      >
        {labelName}
      </div>
    </label>
  )
}