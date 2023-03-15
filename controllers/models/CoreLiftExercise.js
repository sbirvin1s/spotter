
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

  /* NOTE: Group corelifts and modifications by body part
    - [x] Remove 'levels' property to keep exercise object simple
    - [x] Keep description to describe what the exercise is
    - [x] weightMod property should define percentage of weight for load compared to "main" core lifts
      - [x] Main core lifts - [benchPress, overHeadPress, deadLift, squat, pullUps, latPullDown, row]
    - [x] Modifications of core lifts should also be stored as a core lift, but will have their load ratios set to the main core lift of their bodypart
    - [x]
  */

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