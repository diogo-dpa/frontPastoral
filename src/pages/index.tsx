import { FC } from 'react';
import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)({
  backgroundColor: 'cyan'
});

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
      <main>
        <Container>
          <Typography variant="h1" color="secondary">
            Olá Mundo!!!
          </Typography>
          <Typography variant="h2">Tudo bem?</Typography>
          <Typography variant="h3">Testes</Typography>
        </Container>
      </main>
    </div>
  );
};

export default Home;
