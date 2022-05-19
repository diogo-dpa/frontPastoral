import { useAuth } from '@contexts/userContext';
import { isAuthenticated } from '@services/firebase/authentication';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

const PaginaAutenticada = () => {
  const { SignOut, allUserData } = useAuth();

  const handleSignOut = () => {
    SignOut();
  };

  return (
    <div>
      <h1>Página Autenticada, {allUserData?.username}</h1>
      {allUserData?.custom_role == 'admin' && <h2>Bem vindo, admin</h2>}
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = cookies.token;

    const { authenticated } = await isAuthenticated(token);

    if (!authenticated) {
      throw new Error('Não autenticado');
    }

    // Autenticação ok

    return {
      props: {}
    };
  } catch (err) {
    // Autenticação falhou ou não está logado
    return {
      redirect: {
        permanent: false,
        destination: '/'
      },
      props: {}
    };
  }
};

export default PaginaAutenticada;
