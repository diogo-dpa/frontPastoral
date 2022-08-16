import { ReactElement } from 'react';
import { Box } from '@mui/material';
import Header from '@components/Header';

interface PageWrapperProps {
  children: ReactElement;
  authenticatedPage?: boolean;
}

const PageWrapper = ({ children, authenticatedPage }: PageWrapperProps) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {authenticatedPage && <Header />}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flex: 1,
          padding: '32px 0px 56px 0px'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageWrapper;
