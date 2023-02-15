/* ========== EXTERNAL MODULES ========== */
import React from "react";

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Header.module.css';

/* ========== EXPORTS ========== */
export default function Header({ children }) {

  /* --- STATE HOOKS --- */
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <div className={styles.Header_column}>
      {children}
    </div>
  )
}

/* ========== STYLES ========== */