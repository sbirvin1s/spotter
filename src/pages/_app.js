/* ========== EXTERNAL MODULES ========== */

/* ========== INTERNAL MODULES ========== */
import '@/styles/globals.css';
import { AuthProvider } from 'contexts/AuthContext';
import { UserProvider } from 'contexts/UserContext';
import { CardButtonProvider } from 'contexts/CardButtonContext';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <UserProvider>
        <CardButtonProvider>
          <Component {...pageProps} />
        </CardButtonProvider>
      </UserProvider>
    </AuthProvider>
  )
}
