/* ========== EXTERNAL MODULES ========== */
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  updateDoc,
  query,
  where,
 } from 'firebase/firestore';


/* ========== INTERNAL MODULES ========== */
import { default as app } from '../firebase/index';
import {
  auxChestExercises,
  auxShoulderExercises,
  auxUpperArmsExercises,
  auxLowerArmsExercises,
  auxUpperBackExercises,
  auxLowerBackExercises,
  auxCoreExercises,
  auxUpperLegsExercises,
  auxLowerLegsExercises
 } from './models/AuxillaryExercise';


/* ========== EXPORTS ========== */
const db = getFirestore(app);


/* --- USER DB FUNCTIONS --- */
export async function createUser(uid, {
  first,
  last,
  poundsOrKilograms,
  max,
}) {
  const data = {
    first,
    last,
    poundsOrKilograms,
    max,
    workingWeight: max,
    }

  try {
    await setDoc(doc( db, 'users', uid), data);
  } catch (error) {
    console.error(`Unable to create user due to error: ${error}`)
  }
}

export async function getUser(uid) {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    console.error('User not found');
  }
}

export async function updateUser(uid) {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    console.log('User data: ', userSnap.data());
  } else {
    console.error('User not found');
  }
}

export async function update1RM(uid, exercise, weight) {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    await updateDoc(userRef, {[`max.${exercise}`]: weight }, {merge: true})
  } else {
    console.error(`Unable to update your max for ${exercise}`);
  }
}

export async function updateCurrentMax(uid, exercise, weight) {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    await updateDoc(userRef, {[`workingWeight.${exercise}`]: weight }, {merge: true})
  } else {
    console.error('User not found');
  }
}

/* --- WORKOUT DB FUNCTIONS --- */
  export async function createWorkout(uid, workoutData) {
    // id potentially be date + uid to ensure uniqueness
    // const {
    //   name,
    //   date,
    //   exercises: {
    //     squats: {
    //       set1: weight,
    //       set2: weight,
    //       set3: weight,
    //       set4: weight,
    //       set5: weight
    //     },
    //     lunges: {
    //       set1: weight,
    //       set2: weight,
    //       set3: weight,
    //     },
    //     etc...
    //   }
    // } = workoutData

    const userRef = (doc(db, 'workoutHistory', uid));
    const userSnap = await getDoc(userRef);

    const data = {
      [workoutData.date]: workoutData
    }

    try {
      if (userSnap.exists()) {
        await updateDoc(userRef, data, {merge: true});
      } else {
        setDoc(doc(db, 'workoutHistory', uid), data);
      }
    } catch (error) {
      console.error(`Unable to record workout due to error: ${error}`);
    }
  }

  export async function getWorkouts(uid) {

  }

/* --- EXERCISES DB FUNCTIONS --- */

// const coreSets = [
//   {
//     'setNumber': 1,
//     'reps': 10,
//     'intensity': 0.5
//   },
//   {
//     'setNumber': 2,
//     'reps': 6,
//     'intensity': 0.75
//   },
//   {
//     'setNumber': 3,
//     'reps': 'AMRAP',
//     'intensity': 0.83
//   },
//   {
//     'setNumber': 4,
//     'reps': 'AMRAP',
//     'intensity': 0
//   },
// ]

const accessoryExercises = {
  benchPress: {
    cardio: [
      {
        name: 'Waterfall Run',
        intensity: {
          heartRateMin: null,
          heartRateMax: null,
        },
        description: [
          'Sprint: 1/4 of track',
          'Jog: 1/2 of track',
          'Walk: Remaining 1/4 of track',
          'Rest: 60 seconds',
        ],
        duration: '8 sets',
      },
      {
        name: 'Jog',
        intensity: {
          heartRateMin: 135,
          heartRateMax: 155,
        },
        description: 'Light jog at 50% intensity',
        duration: 'Remainder of session',
      },
    ],
    exercises: [null]
  },
  overHeadPress: {
    cardio: {
      name: 'Distance Run',
      intensity: {
        heartRateMin: 150,
        heartRateMax: 160,
      },
      description: 'Run for max distance covered',
      duration: 'Remainder of workout session',
    },
    exercises: [
      {
        name: 'Lateral Shoulder Raise',
        reps: {
          min: 8,
          max: 12
        },
        sets: 3,
        intensity: 0.5,
      },
      {
        name: 'Halo Shoulder Rotation',
        reps: {
          min: 10,
          max: 10
        },
        sets: 2,
        intensity: 0.5,
      },
    ]
  },
  deadlift: {
    cardio: [
      {
        name: 'Stair Climb',
        intensity: {
          heartRateMin: 150,
          heartRateMax: 160,
        },
        description: 'Climb stairs, Stair Master, or other incline',
        duration: 'Remainder of workout session',
      },
    ],
    exercises: [
      {
        name: 'Seated Row',
        reps: {
          min: 8,
          max: 12
        },
        sets: 3,
        intensity: 0.45,
      },
      {
        name: 'Lat Pull Down',
        reps: {
          min: 8,
          max: 12
        },
        sets: 3,
        intensity: 0.5,
      },
    ]
  },
  squats: {
    cardio: {
      name: 'Bicycle',
      intensity: {
        heartRateMin: 150,
        heartRateMax: 160,
      },
      description: 'Bike ride for distance',
      duration: 'Remainder of workout session',
    },
    exercises: [
      {
        name: 'Alternating Lunges',
        reps: {
          min: 8,
          max: 12
        },
        sets: 3,
        intensity: 0.5,
      },
      {
        name: 'Calf Raises',
        reps: {
          min: 8,
          max: 12
        },
        sets: 3,
        intensity: 0.5,
      },
    ]
  },
}

export async function loadAuxLifts() {
  const data = {
    'chest': auxChestExercises,
    'shoulders': auxShoulderExercises,
    'upperArms': auxUpperArmsExercises,
    'lowerArms': auxLowerArmsExercises,
    'upperBack': auxUpperBackExercises,
    'lowerBack': auxLowerBackExercises,
    'core': auxCoreExercises,
    'upperLegs': auxUpperLegsExercises,
    'lowerLegs': auxLowerLegsExercises
  }

  try {
    await setDoc(doc( db, 'exercises', 'auxillaryLifts'), data);
  } catch (error) {
    console.error(`Unable to upload Exercises to database due to error: ${error}`);
  }
}

/*
export async function addExercise(exerciseType, exerciseName, exerciseDescription) {
  const exerciseData = {
    exerciseName:
    bodyGroup: ['Chest', 'Shoulders', 'Upper Arms', 'Lower Arms', 'Legs', 'Lower Legs', 'Upper Back', 'Lower Back', 'Core']
  }

  const data = CardioExercise(exerciseName, exerciseDescription);

    try {
    await setDoc(doc( db, 'exercises', exerciseType), data);
  } catch (error) {
    console.error(`Unable to create user due to error: ${error}`)
  }
}
*/

/* NOTE: Muscle Balance comparison & reference guide
  Muscle Groups                           Muscle Balance        Ratio Weight(example)
    Ankle Inverters & Everters                  1:1                 25::25  -
    Ankle Plantar Flexors & Dorsiflexors	      3:1                 75::25  - Calves : Anterior Tibialis
    Elbow Flexors & Extensors	                  1:1                 25::25  - Bicep : Tricep
    Hip Flexors & Extensors	                    1:1                 25::25  - Lunge? : Hip Trusts?
    Knee Flexors & Extensors                    2:3                 50::75  - Quads/Squats : Hamstrings/Deadlift
    Shoulder Internal & External Rotators	      3:2                 75::50  - Bench Press : Seated Row
    Shoulder Flexors & Extensors                2:3                 50::75  -
    Trunk Flexors & Extensors	                  1:1                 25::25  - Core : Back Extension
*/