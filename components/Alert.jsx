/* ========== EXTERNAL MODULES ========== */
import React from 'react';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Alert.module.css';


/* ========== EXPORTS ========== */

/** Alert constructor that takes:
 *
 * @param {string} variant - ['success', 'warn', 'fail'] if none given, will return default
 * @param {string} children - the message that should be displayed in the alert
 * @prop {*} props - any property or tag that needs to be passed to the component
 * @returns {Component}
 */
export default function Alert({ variant = '', children, ...props}) {

/* --- STATE HOOKS --- */
/* --- LIFECYCLE METHODS --- */
/* --- EVENT HANDLERS --- */
/* --- RENDER METHODS --- */
  switch(variant) {
    case 'success':
      return (
        <div
          data-testid="success"
          role="alert"
          className={`${styles.Alert} ${styles.Alert___success}`}
          {...props}
        >
          {children}
        </div>
      )
    case 'warn':
        return (
          <div
            data-testid="warn"
            role="alert"
            className={`${styles.Alert} ${styles.Alert___warn}`}
            {...props}
          >
            {children}
          </div>
        )
    case 'fail':
      return (
        <div
          data-testid="fail"
          role="alert"
          className={`${styles.Alert} ${styles.Alert___fail}`}
          {...props}
        >
          {children}
        </div>
      )
    default:
      return (
        <div
          data-testid="default"
          role="alert"
          className={styles.Alert}
          {...props}
        >
          {children}
        </div>
      )
  }
}
