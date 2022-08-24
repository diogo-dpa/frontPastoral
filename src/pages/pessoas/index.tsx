import React, { useEffect, useState } from 'react';
import nookies from 'nookies';
import PageWrapper from '@components/PageWrapper';
import { isAuthenticated } from '@services/firebase/authentication';
import { GetServerSidePropsContext } from 'next';
import PageHead from '@components/PageHead';
import { Box } from '@mui/system';
import PeopleTable from '@components/People/PeopleTable';
import { Skeleton } from '@mui/material';
import Link from 'next/link';
import { getPeople, getPeopleByFields } from '@services/strapi/person';
import SearchArea from '@components/People/SearchArea';
import CommonButton from '@components/CommonButton';

const UsersPage = () => {
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [typedName, setTypedName] = useState('');
  const [typedCPF, setTypedCPF] = useState('');
  const [typedRG, setTypedRG] = useState('');
  const [loading, setLoading] = useState(false);
  const [usedSearchedArea, setUsedSearchedArea] = useState(false);

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
      setUsedSearchedArea(true);
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
    setUsedSearchedArea(false);
  };

  const renderSkeletonWhileLoading = () => {
    const skeletonLinesQuantity = new Array(6).fill(1);
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
        {skeletonLinesQuantity.map(_ => (
          <Skeleton
            variant="rectangular"
            animation="wave"
            height="40px"
            width="100%"
            sx={{ mb: 1 }}
          />
        ))}
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
          <SearchArea
            typedName={typedName}
            typedCPF={typedCPF}
            typedRG={typedRG}
            setTypedName={setTypedName}
            setTypedCPF={setTypedCPF}
            setTypedRG={setTypedRG}
            handleResetFilters={handleResetFilters}
            handleSearchPersonByField={handleSearchPersonByField}
          />

          <Link href="/pessoas/cadastro">
            <CommonButton
              text="Cadastrar"
              bgcolor="secondary.main"
              bgcolorHover="secondary.light"
              customCSS={{
                mb: 2
              }}
            />
          </Link>

          {loading ? (
            renderSkeletonWhileLoading()
          ) : (
            <PeopleTable
              registeredPeople={filteredUsers}
              searchedPersonFlag={usedSearchedArea}
            />
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
