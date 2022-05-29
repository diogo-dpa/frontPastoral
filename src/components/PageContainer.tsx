import { FC } from 'react';
import { Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(MuiContainer)({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 0,
  height: '100%',
  flex: 1
});

const PageContainer: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
