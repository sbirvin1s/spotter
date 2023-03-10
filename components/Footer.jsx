/* ========== EXTERNAL MODULES ========== */


/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Footer.module.css';

/* ========== EXPORTS ========== */
export default function Footer({ children }) {

  /* --- STATE HOOKS --- */
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <div className={styles.Footer___column}>
      {children}
    </div>
  )
}

/* ========== STYLES ========== */