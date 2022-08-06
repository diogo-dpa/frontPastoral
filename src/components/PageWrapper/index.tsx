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
        width: '100vw',
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
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageWrapper;
