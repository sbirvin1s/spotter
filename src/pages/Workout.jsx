/* ========== EXTERNAL MODULES ========== */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Workout.module.css';
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import { useExerciseContext } from 'contexts/ExerciseContext';
import { getUser, updateCurrentMax } from 'controllers';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProfilePic from 'components/ProfilePic';
import CurrentDate from 'components/CurrentDate';
import CardButton from 'components/CardButton';
import Exercise from 'components/Exercise';


/* ========== EXPORTS ========== */
export default function Workout() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { currentUser } = useAuth();
  const { userInfo, updateInfo, updateSpecificInfo } = useUserInfo();
  const {
    coreSets,
    coreLift,
    accessoryExercises,
    selectCoreLift,
    workingWeight,
    loadWorkingWeight,
    updateCurrentSet,
    newWorkingWeight,
    updateWorkingWeight,
  } = useExerciseContext();

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    if (!currentUser) {
      router.push('/user/LogIn')
    } else {
      const updateUser = async () => {
        const loggedInUser = await getUser(currentUser.uid);
        updateInfo(loggedInUser);
      };

      updateUser();
    }
  }, [])

  useEffect(() => {
    loadWorkingWeight(userInfo.workingWeight);
    if (newWorkingWeight) updateWorkingWeight(0);
  }, []);


  /* --- EVENT HANDLERS --- */
  const handleSelectExercise = exercise => {
    selectCoreLift(exercise);
    updateCurrentSet(coreLift + 'Set#' + 1);
  }

  const handleCompleteWorkout = event => {
    event.preventDefault();
    updateCurrentMax(currentUser.uid, coreLift, newWorkingWeight);
    router.push('/');
  }

  /* --- RENDER METHODS --- */
  const renderSelectExercise = () => {
    return (
      <div className={styles.Div_row}>
        <CardButton
          variant='small'
          name='benchPress'
          value='benchPress'
          whenClicked={() => handleSelectExercise('benchPress')}
        >
          Bench Press
        </CardButton>
        <CardButton
          variant='small'
          name='overHeadPress'
          value='overHeadPress'
          whenClicked={() => handleSelectExercise('overHeadPress')}
        >
          Overhead Press
          </CardButton>
        <CardButton
          variant='small'
          name='deadlift'
          value='deadlift'
          whenClicked={() => handleSelectExercise('deadlift')}
        >
          Deadlift
        </CardButton>
        <CardButton
          variant='small'
          name='squats'
          value='squats'
          whenClicked={() => handleSelectExercise('squats')}
        >
          Squats
        </CardButton>
      </div>
    )
  }

  const renderCurrentWorkout = () => {
    switch (coreLift) {
      case 'benchPress':
        return (
          <>
            <Exercise coreSets={coreSets} />
            <br />
            <p>Cardio: Waterfall Runs</p>
          </>
        );
      case 'overHeadPress':
        return (
          <>
            <Exercise coreSets={coreSets} />
            <br />
            <p>Lateral Shoulder Raise: 3 sets x 8 to 12 reps at {Math.round((workingWeight[coreLift] * 0.5) / 5) * 5} {userInfo.poundsOrKilograms}</p>
            <br/>
            <p>Halo Shoulder Rotation: 10 revolutions each direction at {Math.round((workingWeight[coreLift] * 0.5) / 5) * 5} {userInfo.poundsOrKilograms}</p>
            <br/>
            <br/>
            <p>Cardio: Distance Run - Remainder of hour with Heart Rate at 150 - 160 Beats per Minute</p>
          </>
        );
      case 'deadlift':
        return (
          <>
            <Exercise coreSets={coreSets} />
            <br />
            <p>Seated Row: 3 sets x 8 to 12 reps of {Math.round((workingWeight[coreLift] * 0.45) / 5) * 5} {userInfo.poundsOrKilograms}</p>
            <br/>
            <p>Lat Pulldowns: 3 sets x 8 to 12 reps of {Math.round((workingWeight[coreLift] * 0.45) / 5) * 5} {userInfo.poundsOrKilograms}</p>
            <br/>
            <br/>
            <p>Cardio: Remainder of hour spent on Stairs or Stair Master. Adjust level (resistance) so that Heart Rate is between 150-160 beats per minute</p>
          </>
        );
      case 'squats':
        return (
          <>
            <Exercise coreSets={coreSets} />
            <br/>
            <p>Lunges: 3 sets x 8 to 12 reps of {Math.round((workingWeight[coreLift] * 0.5) / 5) * 5} {userInfo.poundsOrKilograms}</p>
            <br />
            <p>Calf Raises: 3 sets x 8 to 12 reps of {Math.round((workingWeight[coreLift] * 0.5) / 5) * 5} {userInfo.poundsOrKilograms}</p>
            <br/>
            <br/>
            <p>Cardio: Remainder of hour spent on bicycle. Adjust level (resistance) so that Heart Rate is between 150-160 beats per minute</p>
          </>

        );
    }
  }

  /* --- RENDERER --- */
  return (
    <Page>
      <Header variant='compressed' >
        <div>
          <p>Today is</p>
          <CurrentDate/>
        </div>
        <ProfilePic/>
      </Header>
      <div className={styles.Div_column___attached}>
        <h3>Choose your Core Lift</h3>
        {renderSelectExercise()}
      </div>
      <div className={styles.Workout_container}>
        {renderCurrentWorkout()}
      </div>
      <Footer variant='compressed'>
        <Button variant='link' onClick={() => router.push('/')}>Home</Button>
        <Button onClick={handleCompleteWorkout}>Complete Workout</Button>
      </Footer>
    </Page>
  )
}