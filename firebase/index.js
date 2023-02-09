/* ========== EXTERNAL MODULES ========== */
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

/* ========== INTERNAL MODULES ========== */

const firebaseConfig = {
  apiKey: "AIzaSyBN8U9FAhu6tO1_aaj_XpWUXcDGWq25Wjs",
  authDomain: "spotter-dev-5248a.firebaseapp.com",
  projectId: "spotter-dev-5248a",
  storageBucket: "spotter-dev-5248a.appspot.com",
  messagingSenderId: "196463476055",
  appId: "1:196463476055:web:7df10b2357fa8cb9151212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* ========== EXPORTS ========== */
export const auth = getAuth(app);
export default app;