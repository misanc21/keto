import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'limSuperior', label: 'Superior', minWidth: 100, align: 'center' },
    { id: 'limInferior', label: 'Inferior', minWidth: 100, align: 'center' },
    {
      id: 'resultado',
      label: 'resultado',
      minWidth: 100,
      align: 'center',
    }
  ];
  
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
    table: {
        fontSize: 15,
    }
  });
  
  const Listado = ({ lista }) => {
    const rows = [...lista];
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
        <Fragment >
            <h2>Listado</h2>
            <label className="center">Iteraciones hechas para encontrar el punto medio</label>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                        <TableCell
                            className={classes.table}
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell className={classes.table} key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                </TableCell>
                            );
                            })}
                        </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
      </Fragment>
    );
  }

export default Listado