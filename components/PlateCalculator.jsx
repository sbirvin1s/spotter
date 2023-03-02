/* ========== EXTERNAL MODULES ========== */
import { useEffect, useState } from "react";


/* ========== INTERNAL MODULES ========== */


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
  }, [])

  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */
  const render45 = () => {

  }

  const renderPlates = () => {

  }

  /* --- RENDERER --- */
  switch (units) {
    case 'pounds':
      return (
        <div>
          <h5>Weight Plates</h5>
          <p>2.5: {plates['2.5'] + ' ' + units}</p>
          <p>5: {plates['5'] + ' ' + units}</p>
          <p>10: {plates['10'] + ' ' + units}</p>
          <p>25: {plates['25'] + ' ' + units}</p>
          <p>35: {plates['35'] + ' ' + units}</p>
          <p>45: {plates['45'] + ' ' + units}</p>
        </div>
      )
    case 'kilograms':
  }
}