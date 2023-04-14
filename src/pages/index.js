/* ========== EXTERNAL MODULES ========== */
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter} from 'next/navigation';


/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/Home.module.css';
import { useAuth } from '@/contexts/AuthContext';
import { useUserInfo } from '@/contexts/UserContext';
import { getUser, loadAuxLifts } from '@/controllers/index';
import CurrentDate from '@/components/CurrentDate';
import Page from '@/components/Page';
import ProfilePic from '@/components/ProfilePic';
import Button from '@/components/Button';
import Header from '@/components/Header';


/* ========== EXPORTS ========== */

/* NOTE:
  - [ ] Add option for users to add new exercises to the app
    - [ ] Needs type of lift (Core vs Accessory)
    - [ ] Needs body part targeted
    - [ ] Needs % of 1RM for weight calculation
  - [ ] Add workout record to the database
    - [ ] Contains array / object of core lifts
    - [ ] Contains array / object of accessory lifts divided by targeted body part
      - [ ] Ex: {
              chest: {
                benchPress: {
                  name: Bench Press,
                  bodyPart: Chest,
                  level: [untrained, novice, intermediate, advanced, elite],
                  weight: 1RM,
                  instructions: Notes on how to properly perform a bench press,
                  modifications: [
                    Close Grip Bench Press,
                    Wide Grip Bench Press,
                    etc.
                  ],
                },
                pushUp: {
                  name: Push Ups,
                  bodyPart: Chest,
                  level: [untrained, novice, intermediate, advanced, elite],
                  weight: 1RM,
                  instructions: Notes on how to properly perform the exercise,
                  modifications: [
                    Knee Push Ups,
                    Wall Push Ups,
                    Triangle Push Ups,
                    etc.
                  ],
                },
              },
              legs: {
                squats: {

                }
              }
            }

 */

export default function Home() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { currentUser } = useAuth();
  const { userInfo, updateInfo } = useUserInfo();

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    if (!currentUser) {
      router.push('/user/LogIn')
    } else {
      const updateUser = async () => {
        const loggedInUser = await getUser(currentUser.uid);
        updateInfo(loggedInUser);
        // loadAuxLifts();
      };

      updateUser();
    }
  }, [])


  /* --- EVENT HANDLERS --- */
  const handleWorkoutSelect = e => {
    e.preventDefault();
    router.push('/Workout')
  }
  /* --- RENDER METHODS --- */
  const renderCurrentWorkout = () => {
    const weight = (userInfo && userInfo.poundsOrKilograms === 'pounds' ? 'lbs' : 'kg');

    return (
      <div
        className={styles.MainWorkout}
        onClick={handleWorkoutSelect}
      >
        <div className={styles.MainWorkout_title}>
          <h2 className={styles.MainWorkout_workoutNumber}>#31</h2>
          <h2 className={styles.MainWorkout_bodyPart}>LEGS</h2>
        </div>
        <div>
          <p><strong>Squats:</strong> 100 {weight}  150 {weight}  160 {weight} 170 {weight}</p>
        </div>
        <br/>
        <div>
          <p><strong>Lunges:</strong> 100 {weight} x 10 reps x 3 sets</p>
          <p><strong>Cossack Squats:</strong>150 {weight} x 10 reps x 3 sets</p>
          <p><strong>Calf Raises:</strong> 100 {weight} x 10 reps x 3 sets</p>
        </div>
      </div>
    )
  }

  const renderUpcomingWorkouts = () => {
    return (
      <section>
        <h4>Upcoming Workouts</h4>
        <div className={styles.UpcomingWorkout_feed}>
          <div className={styles.UpcomingWorkout}>
            <h5>SHOULDERS</h5>
            <CurrentDate/>
          </div>
          <div className={styles.UpcomingWorkout}>
            <h5>CHEST</h5>
            <CurrentDate/>
          </div>
          <div className={styles.UpcomingWorkout}>
            <h5>BACK</h5>
            <CurrentDate/>
          </div>
          <div className={styles.UpcomingWorkout}>
            <h5>LEGS</h5>
            <CurrentDate/>
          </div>
        </div>
      </section>
    )
  }

  const renderStartWorkout = () => {
    return (
      <button
        className={styles.MainWorkout_button}
        onClick={handleWorkoutSelect}
      >
        START WORKOUT
      </button>
    )
  }

  const renderWorkingWeight = () => {
    const weight = (userInfo && userInfo.poundsOrKilograms === 'pounds' ? 'lbs' : 'kg');

    return (
      <section>
        <h4>Current Weights</h4>
        <div className={styles.UpcomingWorkout_feed}>
          <div className={styles.UpcomingWorkout}>
            <h5>Bench Press</h5>
            <p>{userInfo && userInfo.workingWeight.benchPress + weight}</p>
          </div>
          <div className={styles.UpcomingWorkout}>
            <h5>Overhead Press</h5>
            <p>{userInfo && userInfo.workingWeight.overHeadPress + weight}</p>
          </div>
          <div className={styles.UpcomingWorkout}>
            <h5>Squats</h5>
            <p>{userInfo && userInfo.workingWeight.squats + weight}</p>
          </div>
          <div className={styles.UpcomingWorkout}>
            <h5>Deadlift</h5>
            <p>{userInfo && userInfo.workingWeight.deadlift + weight}</p>
          </div>
        </div>
      </section>
    )
  }

  /* --- RENDERER --- */
  return (
    <>
      <Head>
        <title>Spotter</title>
        <meta name="instructions" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Header variant="compressed" >
          <div>
            <p>Today is</p>
            <CurrentDate/>
          </div>
          <ProfilePic/>
        </Header>
        {/* {renderCurrentWorkout()} */}
        {/* {renderUpcomingWorkouts()} */}
        {renderStartWorkout()}
        <br/>
        {renderWorkingWeight()}
      </Page>
    </>
  )
}
