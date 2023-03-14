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
    first: first,
    last: last,
    poundsOrKilograms: poundsOrKilograms,
    max: max,
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
/*
  export async function createWorkout(uid, workoutData) {
    // id potentially be date + uid to ensure uniqueness
    const {
      name
      date
      exercises: {
        squats: {
          set1: weight,
          set2: weight,
          set3: weight,
          set4: weight,
          set5: weight
        },
        lunges: {
          set1: weight,
          set2: weight,
          set3: weight,
        },
        etc...
      }
    } = workoutData
    addDoc(collection(db, 'workouts'), workoutData)

  }

  export async function getWorkouts(uid) {

  }
*/

/* --- EXERCISES DB FUNCTIONS --- */

/*
export async function addExercise() {
  const exerciseData = {
    exerciseName:
    bodyGroup: 'Chest' OR 'Shoulders' OR 'Arms' OR 'Legs' OR 'Back' OR 'Core'
  }
}
*/