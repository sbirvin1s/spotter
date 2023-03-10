/* ========== EXTERNAL MODULES ========== */


/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Page.module.css';

/* ========== EXPORTS ========== */
export default function Page({ children }) {

  /* --- STATE HOOKS --- */
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <div className={styles.Div_100___column}>
      {children}
    </div>
  )
}