/* ========== EXTERNAL MODULES ========== */


/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Footer.module.css';

/* ========== EXPORTS ========== */
export default function Footer({ variant, children }) {

  /* --- STATE HOOKS --- */
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  switch (variant) {
    case 'compressed':
      return (
        <footer className={styles.Footer_row___10}>
          {children}
        </footer>
      )
      default:
        return (
          <footer className={styles.Footer_column}>
            {children}
          </footer>
        )
  }
}