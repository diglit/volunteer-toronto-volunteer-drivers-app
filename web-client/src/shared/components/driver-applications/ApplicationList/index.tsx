import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'shared/redux';

import {
    Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Paper, TablePagination,
    Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

interface Column {
    field: 'name' | 'applicationDate' | 'review';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const columns: Column[] = [
    { field: 'name', label: 'Name', minWidth: 130 },
    { field: 'applicationDate', label: 'Applications Date', minWidth: 130 },
    { field: 'review', label: '', minWidth: 160, },
];

const ApplicationList = (): React.ReactElement => {
    const classes = useStyles();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    // TODO: get all applications
    const applications = useSelector((state: RootState) => state.driverApplication);
    // TODO: handleClick: update viewed, get application by id, go to route
    console.log(applications);

    const rows = applications.map(a => {
        return {
            id: a.id,
            name: `${a.application.lastName}, ${a.application.firstName}`,
            applicationDate: a.applicationDate
        }
    });

    return (
        <>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.field}
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
                                        <TableCell key='name' align='left'>
                                            {row['name']}
                                        </TableCell>
                                        <TableCell key='applicationDate' align='left'>
                                            {row['applicationDate']}
                                        </TableCell>
                                        <TableCell key='review' align='right'>
                                            <Button>Review Application</Button>
                                        </TableCell>
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
        </>
    )
}

export default ApplicationList