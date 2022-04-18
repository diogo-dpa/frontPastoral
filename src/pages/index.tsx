import Head from 'next/head';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Api } from '../services/api';

const Home = () => {
  async function getInitiatives() {
    const response = await Api.get('/api/initiatives');
    console.log('response', response);
  }

  useEffect(() => {
    getInitiatives();
  }, []);

  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <DefaultPage>
        <Container>
          <Typography variant="h1" color="secondary">
            Olá Mundo!!
          </Typography>
          <Typography variant="h2">Tudo bem?</Typography>
          <Typography variant="h3">Testes</Typography>
        </Container>
      </DefaultPage>
    </>
  );
};

const Container = styled(Box)({
  width: '200px',
  height: '200px',
  backgroundColor: 'cyan'
});

const DefaultPage = styled(Box)({
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  placeItems: 'center',
  backgroundColor: '#eee',
  padding: '0px'
});

export default Home;
