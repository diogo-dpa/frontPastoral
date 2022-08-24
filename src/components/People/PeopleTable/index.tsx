import { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { EnhancedTableToolbarProps } from './interfaces';
import { headCells, peopleDataModal } from './peopleTableUtils';
import InfoIcon from '@mui/icons-material/Info';
import Modal from '@components/Modal';
import { PersonData } from '@utility/people/interfaces';

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow
        sx={{
          display: 'grid',
          gridTemplateColumns: '28% 22% 20% 25% 5%',
          padding: '0px 8px'
        }}
      >
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.id ? (
              <Typography
                sx={{
                  fontSize: '16px',
                  color: 'text.primary'
                }}
              >
                {headCell.label}
              </Typography>
            ) : null}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = ({
  searchedPersonFlag
}: EnhancedTableToolbarProps) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        bgcolor: '#eee',
        borderRadius: '10px 10px 0px 0px'
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%', textAlign: 'center' }}
        variant="h6"
        fontSize={['16px', '18px']}
        id="tableTitle"
        component="div"
      >
        {searchedPersonFlag
          ? 'Resultado da busca'
          : 'Pessoas adicionadas recentemente'}
      </Typography>
    </Toolbar>
  );
};

interface PeopleTableProps {
  registeredPeople: PersonData[];
  searchedPersonFlag: boolean;
}

export default function PeopleTable({
  registeredPeople = [],
  searchedPersonFlag
}: PeopleTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(15);
  const [openModal, setOpenModal] = useState(false);
  const [userSelected, setUserSelect] = useState<null | PersonData>(null);

  const handleChangePage = (_, newPage: number) => {
    setPage(newPage);
  };

  const handleClickUserInfo = (user: PersonData) => {
    setUserSelect(user);
    setOpenModal(true);
  };

  const renderModalContent = () => {
    if (userSelected) {
      return (
        <Box>
          {peopleDataModal.map(section => (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: [
                  '1fr',
                  `repeat(${section.section.length}, 1fr)`
                ],
                mb: [0, 1]
              }}
            >
              {section.section.map(field => (
                <Typography
                  sx={{
                    fontSize: field.highlight ? '16px' : '14px',
                    fontWeight: field.highlight ? 'bold' : '',
                    color: field.highlight ? 'primary.main' : '',
                    mb: [1, 0]
                  }}
                >
                  {field.label}: {userSelected[field.field]}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      );
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{ width: '100%', mb: 2, bgcolor: '#ccc', borderRadius: '10px' }}
      >
        <EnhancedTableToolbar searchedPersonFlag={searchedPersonFlag} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead />
            <TableBody>
              {registeredPeople.map((user: PersonData) => {
                return (
                  <TableRow
                    hover
                    key={user.name}
                    sx={{
                      px: '16px',
                      display: 'grid',
                      gridTemplateColumns: '30% 18% 19% 25% 8%'
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      padding="none"
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {user.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {user.birthDate}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {user.birthCity}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '15px'
                      }}
                    >
                      {user.createdAt}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <InfoIcon
                        onClick={() => handleClickUserInfo(user)}
                        fontSize="large"
                        color="secondary"
                        sx={{
                          cursor: 'pointer',
                          transition: 'color 0.2s',
                          '&:hover': {
                            color: 'secondary.dark'
                          }
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={registeredPeople?.length ?? 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          labelDisplayedRows={({ from, to, count }) =>
            `${from} – ${to} de ${count !== -1 ? count : `mais de ${to}`}`
          }
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: '18px',
            '.MuiTablePagination-displayedRows': {
              fontSize: '18px'
            },
            '.MuiTablePagination-selectLabel, .MuiInputBase-root': {
              display: 'none'
            }
          }}
        />
      </Paper>
      <Modal
        title={`Dados do usuário: ${userSelected?.name}`}
        open={openModal}
        handleClose={() => setOpenModal(false)}
        content={renderModalContent()}
      />
    </Box>
  );
}
