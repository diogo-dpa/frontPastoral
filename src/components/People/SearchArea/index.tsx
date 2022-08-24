import CommonButton from '@components/CommonButton';
import { CommonInput } from '@components/CommonInput';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

interface SearchAreaProps {
  typedName: string;
  typedCPF: string;
  typedRG: string;
  setTypedName: (value: string) => void;
  setTypedCPF: (value: string) => void;
  setTypedRG: (value: string) => void;
  handleResetFilters: () => void;
  handleSearchPersonByField: (e: any) => Promise<void>;
}

const SearchArea = ({
  typedName,
  typedCPF,
  typedRG,
  setTypedName,
  setTypedCPF,
  setTypedRG,
  handleResetFilters,
  handleSearchPersonByField
}: SearchAreaProps) => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '200px',
        m: '48px 0px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: ['20px', '24px'],
            color: '#323131'
          }}
        >
          Busque pelo Nome, CPF ou RG
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        noValidate
      >
        <Box
          sx={{
            width: 1,
            display: 'flex',
            flexDirection: ['column', 'row'],
            justifyContent: 'space-evenly',
            mt: 3,
            '& > div:not(:first-child)': {
              mt: [2, 0],
              ml: [0, 2]
            }
          }}
        >
          <CommonInput
            placeholder="Nome"
            value={typedName}
            onChange={e => setTypedName(e.target.value)}
          />
          <CommonInput
            placeholder="CPF"
            value={typedCPF}
            onChange={e => setTypedCPF(e.target.value)}
          />
          <CommonInput
            placeholder="RG"
            value={typedRG}
            onChange={e => setTypedRG(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: '80%',
            display: 'flex',
            flexDirection: ['column', 'row'],
            justifyContent: 'space-evenly'
          }}
        >
          <CommonButton
            text="Limpar filtros"
            onClickAction={handleResetFilters}
            customCSS={{
              mt: 2
            }}
          />

          <CommonButton
            text="Pesquisar"
            onClickAction={handleSearchPersonByField}
            bgcolor="secondary.main"
            bgcolorHover="secondary.light"
            customCSS={{
              mt: 2
            }}
            type="submit"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchArea;
