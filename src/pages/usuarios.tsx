import React from 'react';
import nookies from 'nookies';
import PageWrapper from '@components/PageWrapper';
import { isAuthenticated } from '@services/firebase/authentication';
import { GetServerSidePropsContext } from 'next';
import PageHead from '@components/PageHead';

const UsersPage = () => {
  return (
    <PageWrapper authenticatedPage>
      <>
        <PageHead title="Usuários | Pastoral" />
        <h1>Usuários</h1>
        <section>
          <span>Filtrar por</span>
          <div></div>
        </section>
      </>
    </PageWrapper>
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

export default UsersPage;
