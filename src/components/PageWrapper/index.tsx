import { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
// import Header from '@components/Header';

interface PageWrapperProps {
  children: ReactElement;
  authenticatedPage?: boolean;
}

const PageWrapper = ({ children, authenticatedPage }: PageWrapperProps) => {
  return (
    <MainContainer>
      {/* {authenticatedPage && <Header />} */}
      <PageContent>{children}</PageContent>
    </MainContainer>
  );
};

const MainContainer = styled(Box)({
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flex: 1
});

const PageContent = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default PageWrapper;
