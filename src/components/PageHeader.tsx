import { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface PageHeaderProps {
  title: string;
  sideComponent?: ReactElement | ReactElement[];
}

const Header = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: '0 0 auto',
    margin: '2.5rem 0 2rem',
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 0 1.5rem'
    }
  };
});

const Title = styled(Typography)({
  margin: '0',
  gridArea: 'title'
});

const PageHeader: FC<PageHeaderProps> = ({ title, sideComponent }) => {
  return (
    <Header>
      <Title variant="h1">{title}</Title>
      {sideComponent}
    </Header>
  );
};

export default PageHeader;
