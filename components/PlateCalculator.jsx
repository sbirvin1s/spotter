/* ========== EXTERNAL MODULES ========== */
import { connectFirestoreEmulator } from "firebase/firestore";
import { useEffect, useState } from "react";


/* ========== INTERNAL MODULES ========== */
import styles from '../src/styles/PlateCalculator.module.css';

/* ========== EXPORTS ========== */
/** Plate Calculator component that takes:
 *
 * @param {number} weight - number indicating total weight desired for the lift
 * @param {string} units - 'pounds' or 'kilograms', default 'pounds'
 * @returns {Component}
 */

export default function PlateCalculator({ weight = 0, units = 'pounds' }) {

  /* --- STATE HOOKS --- */
  const [plates, setPlates] = useState({});
  // const [plateOrder, setPlateOrder] = useState([]);

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    let updatedPlates = {};

    if (units === 'pounds') {
      if (weight <= 45 ) return;

      let weightMinusBar = (weight - 45) / 2;

      updatedPlates = {
        '2.5': 0,
        '5': 0,
        '10': 0,
        '25': 0,
        '35': 0,
        '45': 0,
      }

      while (weightMinusBar > 0) {
         if (weightMinusBar >= 45) {
          updatedPlates['45'] = updatedPlates['45'] + 1;
          weightMinusBar = weightMinusBar - 45;
         } else if (weightMinusBar >= 35) {
          updatedPlates['35'] = updatedPlates['35'] + 1;
          weightMinusBar = weightMinusBar - 35;
         } else if (weightMinusBar >= 25) {
          updatedPlates['25'] = updatedPlates['25'] + 1;
          weightMinusBar = weightMinusBar - 25;
         } else if (weightMinusBar >= 10) {
          updatedPlates['10'] = updatedPlates['10'] + 1;
          weightMinusBar = weightMinusBar - 10;
         } else if (weightMinusBar >= 5) {
          updatedPlates['5'] = updatedPlates['5'] + 1;
          weightMinusBar = weightMinusBar - 5;
         } else if (weightMinusBar >= 2.5) {
          updatedPlates['2.5'] = updatedPlates['2.5'] + 1;
          weightMinusBar = weightMinusBar - 2.5;
         }
      }
    }

    if (units === 'kilograms') {
      if (weight <= 20 ) return;

      let weightMinusBar = (weight - 20) / 2;

      updatedPlates = {
        '1.25': 0,
        '2.5': 0,
        '5': 0,
        '10': 0,
        '15': 0,
        '20': 0,
      }

      while (weightMinusBar > 0) {
         if (weightMinusBar >= 20) {
          updatedPlates['20'] = updatedPlates['20'] + 1;
          weightMinusBar = weightMinusBar - 20;
         } else if (weightMinusBar >= 15) {
          updatedPlates['15'] = updatedPlates['15'] + 1;
          weightMinusBar = weightMinusBar - 15;
         } else if (weightMinusBar >= 10) {
          updatedPlates['10'] = updatedPlates['10'] + 1;
          weightMinusBar = weightMinusBar - 10;
         } else if (weightMinusBar >= 5) {
          updatedPlates['5'] = updatedPlates['5'] + 1;
          weightMinusBar = weightMinusBar - 5;
         } else if (weightMinusBar >= 2.5) {
          updatedPlates['2.5'] = updatedPlates['2.5'] + 1;
          weightMinusBar = weightMinusBar - 2.5;
         } else if (weightMinusBar >= 1.25) {
          updatedPlates['1.25'] = updatedPlates['1.25'] + 1;
          weightMinusBar = weightMinusBar - 1.25;
         }
      }
    }

    setPlates(updatedPlates)
  }, [weight, units])

  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */
  const renderPlates = () => {
    let currentPlates = Object.assign({}, plates);
    let plateOrder = [];

    for (let plate in currentPlates) {
      while (currentPlates[plate] > 0) {
        plateOrder.push(plate);
        currentPlates[plate] = currentPlates[plate] - 1;
      }
    }

    plateOrder.sort((a, b) => b - a);

    return plateOrder.map((plate, index) => {
      switch (plate + '|' + units) {
        case '2.5|pounds':
          return <div key={index + plate} className={styles.Plate_half} />;
        case '5|pounds':
          return <div key={index + plate} className={styles.Plate_5} />;
        case '10|pounds':
          return <div key={index + plate} className={styles.Plate_10} />;
        case '25|pounds':
          return <div key={index + plate} className={styles.Plate_25} />;
        case '35|pounds':
          return <div key={index + plate} className={styles.Plate_35} />;
        case '45|pounds':
          return <div key={index + plate} className={styles.Plate_45} />;

        case '1.25|kilograms':
          return <div key={index + plate} className={styles.Plate_half} />;
        case '2.5|kilograms':
          return <div key={index + plate} className={styles.Plate_5} />;
        case '5|kilograms':
          return <div key={index + plate} className={styles.Plate_10} />;
        case '10|kilograms':
          return <div key={index + plate} className={styles.Plate_25} />;
        case '15|kilograms':
          return <div key={index + plate} className={styles.Plate_35} />;
        case '20|kilograms':
          return <div key={index + plate} className={styles.Plate_45} />;
      }
    })
  }

  const renderBar = () => {
    return (
      <div className={styles.Bar_container}>
        <div className={styles.Bar_body} />
        <div className={styles.Bar_divider} />
        <div className={styles.Bar_plateContainer}>
          {renderPlates()}
        </div>
        <p className={styles.Bar_caption}>Total Weight: {weight}</p>
      </div>
    )
  }

  /* --- RENDERER --- */
  switch (units) {
    case 'pounds':
      return (
        <div className={styles.PlateCalculator_body}>
          {renderBar()}
          <h5>Weight Plates</h5>
          <p>2.5 x {plates['2.5'] + ' plates'}</p>
          <p>5 x {plates['5'] + ' plates'}</p>
          <p>10 x {plates['10'] + ' plates'}</p>
          <p>25 x {plates['25'] + ' plates'}</p>
          <p>35 x {plates['35'] + ' plates'}</p>
          <p>45 x {plates['45'] + ' plates'}</p>
        </div>
      )
    case 'kilograms':
      return (
        <div className={styles.PlateCalculator_body}>
          <h5>Weight Plates</h5>
          <p>1.25 x {plates['1.25'] + ' plates'}</p>
          <p>2.5 x {plates['2.5'] + ' plates'}</p>
          <p>5 x {plates['5'] + ' plates'}</p>
          <p>10 x {plates['10'] + ' plates'}</p>
          <p>15 x {plates['15'] + ' plates'}</p>
          <p>20 x {plates['20'] + ' plates'}</p>
      </div>
      )
  }
}