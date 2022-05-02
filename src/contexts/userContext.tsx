import React, {
  ReactChild,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import firebaseClient from '@services/firebase/firebaseClient';
import nookies from 'nookies';
import { useRouter } from 'next/router';
import { getUserDataMe } from '@services/strapi';

interface IUser {
  username: string;
  custom_role: string;
}

interface AuthContextProps {
  user: firebaseClient.User | null;
  allUserData: IUser | null;
  setAllUserData: (user: IUser | null) => void;
  SignOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  allUserData: null,
  setAllUserData: () => null,
  SignOut: () => null
});

export function AuthProvider({ children }: { children: ReactChild }) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);
  const [allUserData, setAllUserData] = useState<IUser | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).nookies = nookies; //eslint-disable-line
    }
    return firebaseClient.auth().onIdTokenChanged(async user => {
      // Token mudou
      if (!user) {
        // Não encontrou token correspondente
        setUser(null);
        setAllUserData(null);
        nookies.destroy(null, 'token');
        nookies.destroy(null, 'token_strapi');
        nookies.set(null, 'token', '', { path: '/' });
        return;
      }

      // Atualizando token
      const token = await user.getIdToken();
      const responseStrapi = nookies.get(null, 'token_strapi');
      if (responseStrapi['token_strapi']) {
        const userData = await getUserDataMe(responseStrapi['token_strapi']);
        setAllUserData(userData);
      }
      setUser(user);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, { path: '/' });
    });
  }, []);

  // Atualiza o token a cada 10 minutos para evitar que expire durante a sessão
  useEffect(() => {
    const handle = setInterval(async () => {
      // Atualizando token
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  const SignOut = async () => {
    await firebaseClient
      .auth()
      .signOut()
      .then(() => {
        router.push('/');
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, allUserData, setAllUserData, SignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
