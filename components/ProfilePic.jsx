/* ========== EXTERNAL MODULES ========== */


/* ========== INTERNAL MODULES ========== */
import styles from '../src/styles/ProfilePic.module.css'
import { useUserInfo } from 'contexts/UserContext';

/* ========== EXPORTS ========== */
export default function ProfilePic() {

  /* --- STATE HOOKS --- */
  const { userInfo } = useUserInfo();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <div
      className={styles.Badge}
      onClick={() => router.push('/user/Profile')}
    >
      {userInfo && userInfo.first[0].toUpperCase()}
    </div>
  )
}