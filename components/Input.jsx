/* ========== EXTERNAL MODULES ========== */


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
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <label
      className={styles.Input_label}
      htmlFor={name}
    >
      <div className={styles.Input_title}>
        {labelName}
      </div>
      <input
        className={styles.Input_style}
        id={name}
        name={name}
        {...props}
      >
        {children}
      </input>
    </label>
  )
}