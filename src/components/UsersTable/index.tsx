import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { TableData, EnhancedTableProps, Order } from './interfaces';
import { getComparator, headCells, stableSort } from './usersTableUtils';
import InfoIcon from '@mui/icons-material/Info';
import Modal from '@components/Modal';
import { PersonData } from '@utility/person/interfaces';

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof TableData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

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
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.id ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : null}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = () => {
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
        id="tableTitle"
        component="div"
      >
        Pessoas adicionadas recentemente
      </Typography>
    </Toolbar>
  );
};

interface UsersTableProps {
  registeredPeople: PersonData[];
}

export default function UsersTable({ registeredPeople = [] }: UsersTableProps) {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] =
    useState<
      keyof Pick<PersonData, 'name' | 'birthCity' | 'birthDate' | 'createdAt'>
    >('createdAt');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [openModal, setOpenModal] = useState(false);
  const [userSelected, setUserSelect] = useState<null | PersonData>(null);

  const handleRequestSort = (
    _,
    property: keyof Pick<
      PersonData,
      'name' | 'birthCity' | 'birthDate' | 'createdAt'
    >
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
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
          <Box>
            <Typography>Nome: {userSelected.name}</Typography>
            <Typography>CPF: {userSelected.cpf}</Typography>
            <Typography>
              Data de Nascimento: {userSelected.birthDate}
            </Typography>
          </Box>
          <Box>
            <Typography>Naturalidade: {userSelected.birthCity}</Typography>
            <Typography>Cadastrado em: {userSelected.createdAt}</Typography>
          </Box>
        </Box>
      );
    }
  };

  let sortedRegisters = [];

  useEffect(() => {
    if (registeredPeople) {
      sortedRegisters = stableSort<
        Pick<PersonData, 'name' | 'birthCity' | 'birthDate' | 'createdAt'>
      >(
        registeredPeople?.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        ),
        getComparator(order, orderBy)
      );
    }
  }, [order, orderBy]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{ width: '100%', mb: 2, bgcolor: '#ccc', borderRadius: '10px' }}
      >
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={registeredPeople?.length ?? 0}
            />
            <TableBody>
              {registeredPeople &&
                stableSort<
                  Pick<
                    PersonData,
                    'name' | 'birthCity' | 'birthDate' | 'createdAt'
                  >
                >(
                  registeredPeople?.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  ),
                  getComparator(order, orderBy)
                ).map((user: PersonData) => {
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
                          alignItems: 'center'
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
                              color: 'red'
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
