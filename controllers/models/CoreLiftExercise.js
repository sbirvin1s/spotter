
/*========== EXPORTS ========== */
export default function CoreLiftExercise(
  exerciseName = '',
  description = '',
  weightMod = 1,
  steps = [],
  demoURL = '',
  movePattern = null,
  name = '',
) {

  const newCoreLift = {
    [exerciseName]: {
      name,
      weightMod,
      description,
      steps,
      demoURL,
      movePattern,
    },
  }

  return  newCoreLift;

}