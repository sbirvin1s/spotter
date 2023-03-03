/* ========== EXTERNAL MODULES ========== */
import { useEffect, useState } from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/CardButton.module.css';
import { useButtonContext } from 'contexts/CardButtonContext';

/* ========== EXPORTS ========== */

/** Card button constructor that takes:
 *
 * @param {string} name - the string value to be passed as the id and name of the component
 * @param {string} value - the string value to be passed as the id and name of the component
 * @param {function} whenClicked - function to be passed to the component and run when clicked
 * @param {*} children - anything that should be contained inside the button
 * @prop {*} props - any property that needs to be passed to the input tag
 * @returns {Component}
 */
export default function CardButton({
  name,
  value,
  whenClicked = () => null,
  children,
   ...props
}) {

  /* --- STATE HOOKS --- */
  const { buttonActive, updateButton } = useButtonContext();
  const [selected, setSelected] = useState(false);


  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    if (buttonActive === value) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [value, buttonActive])

  /* --- EVENT HANDLERS --- */
  const handleClicked = ({target: { value }}) => {
    whenClicked();
    updateButton(value);
  }

  /* --- RENDER METHODS --- */
  const renderCardButton = () => {
    if (selected) {
      return (
        <button
          id={name}
          name={name}
          value={value}
          className={`${styles.Button} ${styles.Button___selected}`}
          onClick={handleClicked}
          {...props}
        >
          {children}
        </button>
      )
    } else {
      return (
        <button
          id={name}
          name={name}
          value={value}
          className={`${styles.Button} ${styles.Button___default}`}
          onClick={handleClicked}
          {...props}
        >
          {children}
        </button>
      )
    }
  }

  /* --- RENDERER --- */
  return (
    <>
      {renderCardButton()}
    </>
  )
}