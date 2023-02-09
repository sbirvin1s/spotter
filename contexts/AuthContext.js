/* ========== EXTERNAL MODULES ========== */
import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

/* ========== INTERNAL MODULES ========== */
import { default as app } from '../firebase/index';


/* ========== CONTEXTS ========== */
const AuthContext = createContext();


/* ========== EXPORTS ========== */
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {

  /* --- STATE HOOKS --- */
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsubscribe;
  }, [auth])

  /* --- EVENT HANDLERS --- */
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  /* --- RENDERER --- */
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signUp,
        logIn,
        logOut,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}