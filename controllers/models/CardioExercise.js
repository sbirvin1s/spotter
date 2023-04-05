
/*========== EXPORTS ========== */
export default function CardioExercise(
  exerciseName = '',
  description = '',
  steps = [],
  duration = 0,
) {

  const newCardioExercise = {
    [exerciseName]: {
      intensity: {
        recovery: {
          heartRateMin: 60,
          heartRateMax: 110,
        },
        veryLight: {
          heartRateMin: 110,
          heartRateMax: 132,
        },
        light: {
          heartRateMin: 132,
          heartRateMax: 154,
        },
        moderate: {
          heartRateMin: 154,
          heartRateMax: 176,
        },
        hard: {
          heartRateMin: 176,
          heartRateMax: 198,
        },
        max: {
          heartRateMin: 198,
          heartRateMax: 220,
        },
      },
      description,
      steps,
      duration,
    },
  }

  return  newCardioExercise

}