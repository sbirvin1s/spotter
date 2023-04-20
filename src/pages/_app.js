/* ========== INTERNAL MODULES ========== */
import '@/styles/globals.scss';
import { AuthProvider } from 'contexts/AuthContext';
import { UserProvider } from 'contexts/UserContext';
import { CardButtonProvider } from 'contexts/CardButtonContext';
import { ExerciseProvider } from 'contexts/ExerciseContext';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <UserProvider>
        <CardButtonProvider>
          <ExerciseProvider>
            <Component {...pageProps} />
          </ExerciseProvider>
        </CardButtonProvider>
      </UserProvider>
    </AuthProvider>
  )
}
