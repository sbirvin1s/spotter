/* ========== EXTERNAL MODULES ========== */
import React from "react";

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Header.module.css';

/* ========== EXPORTS ========== */
/** Header constructor that takes:
 *
 * @param {string} variant - ['compressed'] if none given, will return default
 * @param {number} level - define aria-level, default is 1
 * @param {*} children - anything that should be placed inside the component
 * @returns {Component}
 */
export default function Header({ variant, level = 1, children }) {

  /* --- STATE HOOKS --- */
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  switch (variant) {
    case 'compressed':
      return (
        <header
          role="heading"
          aria-level={level}
          className={styles.Header_10___row}
        >
          {children}
        </header>
        )
    default:
      return (
        <header
          role="heading"
          aria-level={level}
          className={styles.Header_column}
        >
          {children}
        </header>
        )
  }
}