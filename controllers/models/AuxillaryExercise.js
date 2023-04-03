
/*========== EXPORTS ========== */
export default function AuxillaryExercise(
  exerciseName = '',
  description = '',
  weightMod = 0.5,
  steps = [],
  demoURL = '',
  movePattern = null,
  name = '',
) {

  /* NOTE: Group Auxillarys and modifications by body part
    - [x] weightMod property should define percentage of weight for load compared to "main" core lifts
    - [x] bodyGroup: ['Chest', 'Shoulders', 'Upper Arms', 'Lower Arms', 'Legs', 'Lower Legs', 'Upper Back', 'Lower Back', 'Core']
    - [ ] Ensure weights added into database are calculated as barbell weight, not dumbbell weight
    - [ ] Have option the the front end to offer weight of auxillary exercises as dumbbells (weight divided by 2) or barbell
    - [ ] add support for gender specific weightMods on all auxillary sets
  */

    sets = [
      {
        minReps,
        maxReps,
        weightMod
      },

    ]

  const newAuxillary = {
    [exerciseName]: {
      name,
      weightMod,
      description,
      steps,
      demoURL,
      movePattern,
    },
  }

  return  newAuxillary;

}

/* NOTE: Muscle Balance References
  REFERENCE LIFT: BACK SQUAT TO LEGAL DEPTH
    Front Squat: 85% of back squat
    Clean Deadlift: 100% of back squat
    Snatch Deadlift: 90% of back squat
    Powerlifting Deadlift: 120% of back squat

  REFERENCE LIFT: BENCH PRESS
    Close-Grip Bench Press: 90% of bench press
    Push Press: 85% of bench press
    Incline Bench Press: 80% of bench press
    Military Press (standing, strict): 60% of bench press or 75% of push press
    Weighted Dip: 105% of bench press (bodyweight included)
    Supinated Chin-Up: 90% of bench press (bodyweight included)
    Chest-Supported Barbell Row (torso parallel): 70% of bench press
    Preacher Curl: 40% of bench press
    Standing Reverse Curl: 35% of bench press

  REFERENCE LIFT: BACK SQUAT
    Bench Press: 75% of back squat
    Powerlifting Deadlift: 120% of back squat *
    Military Press (strict): 45% of back squat

  REFERENCE LIFT: BACK SQUAT 100%
    Front Squat: 85% of back squat
    Clean Deadlift: 100% of back squat
    Snatch Deadlift: 90% of back squat
    Powerlifting Deadlift: 120% of back squat
    Bench Press: 75% of back squat
    Close-Grip Bench Press: 67.5% of back squat
    Push Press: 63.75% of back squat
    Incline Bench Press: 60% of back squat
    Military Press (standing, strict): 45% of back squat
    Weighted Dip: 78.75% of back squat (bodyweight included)
    Supinated Chin-Up: 67.5% of back squat (bodyweight included)
    Chest-Supported Barbell Row (torso parallel): 52.5% of back squat
    Preacher Curl: 30% of back squat
    Standing Reverse Curl: 26.25% of back squat
    Clean & Jerk: 80% of back squat
    Snatch: 66% of back squat
    Clean: 81.6% of back squat
    Jerk: 84% of back squat
    Power Clean: 68% of back squat
    Power Jerk: 72% of back squat
    Power Snatch: 54% of back squat
    Front Squat: 85% of back squat

  REFERENCE LIFT: CLEAN & JERK
    Snatch: 82.5% of clean & jerk
    Clean: 102.5% of clean & jerk
    Jerk: 105% of clean & jerk
    Power Clean: 85% of clean & jerk
    Power Jerk: 90% of clean & jerk
    Power Snatch: 67.5% of clean & jerk
    Front Squat: 110% of clean & jerk
    Back Squat: 125% of clean & jerk
*/

export const auxChestExercises = {
  bodyPart: 'Chest',
  chestFly: {
    name: 'Chest Fly',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.17,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.17,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.17,
      },
    ]
  },
  inclineFly: {
    name: 'Incline Chest Fly',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.18,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.18,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.18,
      },
    ]
  },
  declineFly: {
    name: 'Decline Chest Fly',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.18,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.18,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.18,
      },
    ]
  },
  declineBench: {
    name: 'Decline Bench Press',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
    ]
  },
  pullOver: {
    name: 'Chest Pullover',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.25,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.25,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.25,
      },
    ]
  },
  closeGripBench: {
    name: 'Close Grip Bench Press',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.63,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.63,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.63,
      },
    ]
  },
  wideGripBench: {
    name: 'Wide Grip Bench Press',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.68,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.68,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.68,
      },
    ]
  },
  dumbbellBench: {
    name: 'Dumbbell Bench Press',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.58,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.58,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.58,
      },
    ]
  },
  inclineDBBench: {
    name: 'Incline Dumbbell Bench Press',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.56,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.56,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.56,
      },
    ]
  },
  inclineBench: {
    name: 'Incline Bench Press',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
    ]
  },
};

export const auxShoulderExercises = {
  bodyPart: 'Shoulders',
  latShoulderRaise: {
    name: 'Lateral Shoulder Raise',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.17,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.17,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.17,
      },
    ]
  },
  antShoulderRaise: {
    name: 'Dumbbell Front Raise',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
    ]
  },
  postShoulderRaise: {
    name: 'Dumbbell Reverse Fly',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
    ]
  },
  arnoldPress: {
    name: 'Arnold Press',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.53,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.53,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.53,
      },
    ]
  },
  uprightRow: {
    name: 'Upright Row',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.69,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.69,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.69,
      },
    ]
  },
  pushPress: {
    name: 'Push Press',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.9,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.9,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.9,
      },
    ]
  },
  shrugs: {
    name: 'Shoulder Shrugs',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 1.42,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 1.42,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 1.42,
      },
    ]
  },
  halo: {
    name: 'Halo Rotations',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
    ]
  },
};

export const auxUpperArmsExercises = {
  bodyPart: 'Upper Arms',
  curl: {
    name: 'Bicep Curl',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
    ]
  },
  preacherCurl: {
    name: 'Preacher Curl',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
    ]
  },
  concCurl: {
    name: 'Concentration Curl',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.31,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.31,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.31,
      },
    ]
  },
  hammerCurl: {
    name: 'Hammer Curl',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
    ]
  },
  inclineCurl: {
    name: 'Incline Curl',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.28,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.28,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.28,
      },
    ]
  },
};

export const auxLowerArmsExercises = {
  bodyPart: 'Forearms',
  reverseCurl: {
    name: 'Reverse Curl',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.3,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.3,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.3,
      },
    ]
  },
  wristCurl: {
    name: 'Wrist Curl',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.37,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.37,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.37,
      },
    ]
  },
};

export const auxUpperLegsExercises = {
  bodyPart: 'Upper Legs',
  lunge: {
    name: 'Lunges',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.16,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.16,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.16,
      },
    ]
  },
  walkingLunge: {
    name: 'Walking Lunges',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.34,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.34,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.34,
      },
    ]
  },
  reverseLunge: {
    name: 'Reverse Lunges',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.53,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.53,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.53,
      },
    ]
  },
  sideLunge: {
    name: 'Side Lunges',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.16,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.16,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.16,
      },
    ]
  },
  frontSquat: {
    name: 'Front Squat',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.57,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.57,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.57,
      },
    ]
  },
  hipThrust: {
    name: 'Hip Thrust',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.69,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.69,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.69,
      },
    ]
  },
  letExtension: {
    name: 'Leg Extension',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.52,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.52,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.52,
      },
    ]
  },
  legCurl: {
    name: 'Hamstring Curl',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.43,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.43,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.43,
      },
    ]
  },
  bulgSplitSquat: {
    name: 'Bulgarian Split Squat',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.33,
      },
    ]
  },
  splitSquat: {
    name: 'Split Squat',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.46,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.46,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.46,
      },
    ]
  },
  gobletSquat: {
    name: 'Goblet Squat',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.23,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.23,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.23,
      },
    ]
  },
  overHeadSquat: {
    name: 'Overhead Squat',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.44,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.44,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.44,
      },
    ]
  },
  gluteBridge: {
    name: 'Glute Bridge',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.63,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.63,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.63,
      },
    ]
  },
};

export const auxLowerLegsExercises = {
  bodyPart: 'Lower Legs',
  seatedCalfRaise: {
    name: 'Seated Calf Raises',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.54,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.54,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.54,
      },
    ]
  },
  calfRaise: {
    name: 'Calf Raises',
    description: '',
    movePattern: 'push',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.64,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.64,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.64,
      },
    ]
  },
};

export const auxUpperBackExercises = {
  bodyPart: 'Upper Back',
  row: {
    name: 'Seated Row',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
    ]
  },
  latPullDown: {
    name: 'Lat Pull Down',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.7,
      },
    ]
  },
};

export const auxLowerBackExercises = {
  bodyPart: 'Lower Back',
  postShoulderRaise: {
    name: 'Dumbbell Reverse Fly',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
    ]
  },
};

export const auxCoreExercises = {
  bodyPart: 'Core',
  postShoulderRaise: {
    name: 'Dumbbell Reverse Fly',
    description: '',
    movePattern: 'pull',
    demoURL: '',
    steps: [

    ],
    sets: [
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
      {
        minReps: 8,
        maxReps: 12,
        weightMod: 0.19,
      },
    ]
  },
};