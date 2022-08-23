import React, { useEffect, useState } from 'react';
import nookies from 'nookies';
import PageWrapper from '@components/PageWrapper';
import { isAuthenticated } from '@services/firebase/authentication';
import { GetServerSidePropsContext } from 'next';
import PageHead from '@components/PageHead';
import { Box } from '@mui/system';
import { CommonInput } from '@components/CommonInput';
import UsersTable from '@components/UsersTable';
import { Button, Skeleton, Typography } from '@mui/material';
import Link from 'next/link';
import { getPeople, getPeopleByFields } from '@services/strapi/person';

const UsersPage = () => {
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [typedName, setTypedName] = useState('');
  const [typedCPF, setTypedCPF] = useState('');
  const [typedRG, setTypedRG] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRegisteredPeople = async () => {
      try {
        setLoading(true);
        const response = await getPeople();
        setUsers(response);
        setFilteredUsers(response);
      } catch (err) {
        setUsers([]);
        setFilteredUsers([]);
      } finally {
        setLoading(false);
      }
    };

    getRegisteredPeople();
  }, []);

  const handleSearchPersonByField = async e => {
    e.preventDefault();
    if (typedName !== '' || typedCPF !== '' || typedRG !== '') {
      setLoading(true);
      try {
        const searchedUsers = await getPeopleByFields(
          typedName,
          typedCPF,
          typedRG
        );

        setFilteredUsers(searchedUsers);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleResetFilters = () => {
    setTypedName('');
    setTypedCPF('');
    setTypedRG('');
    setFilteredUsers(users);
  };

  const renderSkeletonWhileLoading = () => {
    return (
      <Box width="100%" mt="32px">
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            mb: '32px',
            fontSize: '1rem'
          }}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          height="40px"
          width="100%"
          sx={{ mb: 1 }}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          height="40px"
          width="100%"
          sx={{ mb: 1 }}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          height="40px"
          width="100%"
          sx={{ mb: 1 }}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          height="40px"
          width="100%"
          sx={{ mb: 1 }}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          height="40px"
          width="100%"
          sx={{ mb: 1 }}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          height="40px"
          width="100%"
          sx={{ mb: 1 }}
        />
      </Box>
    );
  };

  return (
    <PageWrapper authenticatedPage>
      <>
        <PageHead title="Usuários | Pastoral" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            width: '100%',
            maxWidth: '85%'
          }}
        >
          <Box
            component="section"
            sx={{
              width: '100%',
              minHeight: '200px',
              m: '48px 0px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Typography>Filtrar por</Typography>
              <Typography>Busque pelo nome, cpf ou rg</Typography>
            </Box>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              noValidate
            >
              <Box
                sx={{
                  width: 1,
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  mt: 3
                }}
              >
                <CommonInput
                  placeholder="Nome"
                  value={typedName}
                  onChange={e => setTypedName(e.target.value)}
                />
                <CommonInput
                  placeholder="CPF"
                  value={typedCPF}
                  onChange={e => setTypedCPF(e.target.value)}
                />
                <CommonInput
                  placeholder="RG"
                  value={typedRG}
                  onChange={e => setTypedRG(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  width: '80%',
                  display: 'flex',
                  justifyContent: 'space-evenly'
                }}
              >
                <Button
                  sx={{
                    mt: 2,
                    bgcolor: 'blue',
                    p: '8px 24px'
                  }}
                  onClick={handleResetFilters}
                >
                  Limpar filtros
                </Button>

                <Button
                  sx={{
                    mt: 2,
                    bgcolor: 'red',
                    p: '8px 24px'
                  }}
                  onClick={handleSearchPersonByField}
                  type="submit"
                >
                  Pesquisar
                </Button>
              </Box>
            </Box>
          </Box>

          <Button
            sx={{
              mb: 2,
              bgcolor: 'red'
            }}
          >
            <Link href="/pessoas/cadastro">Cadastrar</Link>
          </Button>
          {loading ? (
            renderSkeletonWhileLoading()
          ) : (
            <UsersTable registeredPeople={filteredUsers} />
          )}
        </Box>
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
