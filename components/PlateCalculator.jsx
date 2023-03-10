/* ========== EXTERNAL MODULES ========== */
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
export default function PlateCalculator({ weight = 0, units = 'pounds', barWeight = 45 }) {

  /* --- STATE HOOKS --- */
  const [ plates, setPlates ] = useState({});
  const [ weightUnit, setWeightUnit ] = useState(units === 'pounds' ? 'lbs' : 'kgs')

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    let updatedPlates = {};

    if (units === 'pounds') {
      if (weight <= barWeight ) return;

      let weightMinusBar = (weight - barWeight) / 2;

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
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_half}`} />;
        case '5|pounds':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_5}`} />;
        case '10|pounds':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_10}`} />;
        case '25|pounds':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_25}`} />;
        case '35|pounds':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_35}`} />;
        case '45|pounds':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_45}`} />;

        case '1.25|kilograms':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_half}`} />;
        case '2.5|kilograms':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_5}`} />;
        case '5|kilograms':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_10}`} />;
        case '10|kilograms':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_25}`} />;
        case '15|kilograms':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_35}`} />;
        case '20|kilograms':
          return <div key={index + plate} className={`${styles.Plate} ${styles.Plate_45}`} />;
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
      </div>
    )
  }

  const renderPlateLegend = () => {
    let plateList = [];
    let filteredList = [];

    for (let weights in plates) {
      if (plates[weights] > 0) {
        const newPlate = {
          weight: weights,
          count: plates[weights]
        };
        plateList.push(newPlate) ;
      }
    }

    for (let i = plateList.length - 1; i >= 0 ; i--) {
      filteredList.push(plateList[i]);
    }

    filteredList.sort((a, b) => b.weight - a.weight);

    return filteredList.map((plate, index) => {
      let plateUnit = plate.count > 1 ? 'plates' : 'plate';

      switch (plate.weight + '|' + units) {
        case '2.5|pounds':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___half}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '5|pounds':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___5}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '10|pounds':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___10}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '25|pounds':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___25}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '35|pounds':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___35}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '45|pounds':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___45}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )

        case '1.25|kilograms':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___half}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '2.5|kilograms':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___5}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '5|kilograms':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___10}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '10|kilograms':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___25}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '15|kilograms':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___35}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
        case '20|kilograms':
          return (
            <p
              key={index + plate}
              className={styles.PlateCalculator_legend___45}
            >
              {plate.weight} {weightUnit} x {plate.count} {plateUnit}
            </p>
          )
      }
    })
  }

  /* --- RENDERER --- */
  return (
    <div className={styles.PlateCalculator_body}>
      {renderBar()}
      <div className={styles.PlateCalculator_legend}>
        {renderPlateLegend()}
      </div>
      <div className={styles.PlateCalculator_barWeight}>
        <p>Bar Weight: {barWeight} {weightUnit}</p>
      </div>
    </div>
  )
}