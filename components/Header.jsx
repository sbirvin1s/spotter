/* ========== EXTERNAL MODULES ========== */
import React from "react";

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Header.module.css';

/* ========== EXPORTS ========== */
export default function Header({ variant, children }) {

  /* --- STATE HOOKS --- */
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  switch (variant) {
    case 'compressed':
      return (
        <div className={styles.Header_10___row}>
          {children}
        </div>
        )
    default:
      return (
        <div className={styles.Header_column}>
          {children}
        </div>
        )
  }
}