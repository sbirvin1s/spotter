/* ========== EXTERNAL MODULES ========== */

/* ========== INTERNAL MODULES ========== */
import '@/styles/globals.css';
import { AuthProvider } from 'contexts/AuthContext';
import { UserProvider } from 'contexts/UserContext';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </AuthProvider>
  )
}
