/* ========== EXTERNAL MODULES ========== */
import { Router, useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import { useAuth } from 'contexts/AuthContext';
import { useUserInfo } from 'contexts/UserContext';
import styles from '@/styles/Login.module.css';
import Alert from 'components/Alert';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PlateCalculator from 'components/PlateCalculator';


/* ========== EXPORTS ========== */
export default function Workout() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { userInfo } = useUserInfo();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <Page>
      <h1>This is the workout page</h1>
      <PlateCalculator weight={255} units={userInfo.poundsOrKilograms} />
      <Footer>
        <Button variant='link' onClick={() => router.push('/')}>Home</Button>
      </Footer>
    </Page>
  )
}