/* ========== EXTERNAL MODULES ========== */
import React, {useContext, useState } from 'react';


/* ========== CONTEXTS ========== */
const ExerciseContext = React.createContext();


/* ========== EXPORTS ========== */
export function useExerciseContext() {
  return useContext(ExerciseContext)
}

export function ExerciseProvider({ children }) {

/* --- STATE HOOKS --- */
const [ currentSet, setCurrentSet ] = useState();
const [ coreLift, setCoreLift ] = useState();
const [ workingWeight, setWorkingWeight ] = useState();
const [ newWorkingWeight, setNewWorkingWeight ] = useState();
const [ workout, setWorkout ] = useState();

const coreSets = [
  {
    'setNumber': 1,
    'reps': 10,
    'intensity': 0.5
  },
  {
    'setNumber': 2,
    'reps': 6,
    'intensity': 0.75
  },
  {
    'setNumber': 3,
    'reps': 'AMRAP',
    'intensity': 0.83
  },
  {
    'setNumber': 4,
    'reps': 'AMRAP',
    'intensity': 0
  },
]

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

/* --- LIFECYCLE METHODS --- */
/* --- EVENT HANDLERS --- */
const selectCoreLift = value => {
  setCoreLift(value);
}

const updateCurrentSet = nextSet => {
  setCurrentSet(nextSet);
}

const loadWorkingWeight = weights => {
  setWorkingWeight(weights);
}

const updateWorkingWeight = newWeight => {
  setNewWorkingWeight(newWeight);
}

const updateCompletedSets = (exercise, finishedSet) => {
  setWorkout(prev => ({
    ...prev,
    [exercise]: finishedSet
  }));
}

/* --- RENDERER --- */
  return (
    <ExerciseContext.Provider
      value={{
        currentSet,
        coreSets,
        coreLift,
        workingWeight,
        newWorkingWeight,
        accessoryExercises,
        workout,
        selectCoreLift,
        updateCurrentSet,
        loadWorkingWeight,
        updateWorkingWeight,
        updateCompletedSets,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  )
}