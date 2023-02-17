/* ========== EXTERNAL MODULES ========== */
import { Router, useRouter } from 'next/router';

/* ========== INTERNAL MODULES ========== */
import styles from '@/styles/BasicInfo.module.css';
import { useUserInfo } from 'contexts/UserContext';
import { createUser } from 'controllers';
import Input from 'components/Input';
import Button from 'components/Button';
import Page from 'components/Page';
import Header from 'components/Header';
import Footer from 'components/Footer';
import CardButton from 'components/CardButton';

/* ========== EXPORTS ========== */
export default function Profile() {

  /* --- STATE HOOKS --- */
  const router = useRouter();
  const { userInfo, updateUserInfo, updateSpecificInfo } = useUserInfo();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handle1RM = () => {

  }

  /* --- RENDER METHODS --- */

  /* NOTE: should have a 1RM amount from users entered 1RM and a "current 1RM" for the users working 1RM that is calculated for each week
   */


  /* --- RENDERER --- */
  return (
    <>
      <h1>This is the Profile view</h1>
      <Input
        name='1RM'
        labelName='One Rep Max'
        // onChange={}
        placeholder='200'
      >
      </Input>
    </>
  )
}