import { FC } from 'react';
import { Box, InputBase } from '@mui/material';
import { styled } from '@mui/system';

interface SearchFieldProps {
  placeholder: string;
}

const Container = styled(Box)({
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  padding: '0.2rem 0.4rem',
  borderRadius: '4px',
  gridArea: 'search'
});

const SearchField: FC<SearchFieldProps> = ({ placeholder }) => {
  return (
    <Container>
      <InputBase
        id="search-field"
        placeholder={placeholder}
        onKeyDown={e => e}
        onFocus={e => e.target.select()}
        autoFocus
        fullWidth
      />
    </Container>
  );
};

export default SearchField;
