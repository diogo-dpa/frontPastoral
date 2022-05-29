import { Card } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';
import PageContainer from '../../PageContainer';
import PageHeader from '../../PageHeader';
import SearchField from '../../SearchField';

const ListContainer = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '3rem',
  flexShrink: 0,
  padding: 0
});

const AssistancePage: FC = () => {
  return (
    <PageContainer>
      <PageHeader title="Assistência" />
      <ListContainer>
        <SearchField placeholder="Pesquisa" />
      </ListContainer>
    </PageContainer>
  );
};

export default AssistancePage;
