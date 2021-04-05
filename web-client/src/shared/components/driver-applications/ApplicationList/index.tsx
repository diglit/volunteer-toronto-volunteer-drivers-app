import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'shared/redux';
import Link from 'next/link'

import {
    Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Paper, TablePagination,
    Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// import styles from './index.module.scss'

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

    const applications = useSelector((state: RootState) => state.driverApplication.applicationList);

    const rows = applications.map(a => {
        return {
            id: a.id,
            name: `${a.application.lastName}, ${a.application.firstName}`,
            applicationDate: a.applicationDate,
            viewed: a.rejected || a.approved
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
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                                        <TableCell key='name' align='left' style={row['viewed'] ? {} : { fontWeight: 'bold' }}>
                                            {row['name']}
                                        </TableCell>
                                        <TableCell key='applicationDate' align='left' style={row['viewed'] ? {} : { fontWeight: 'bold' }}>
                                            {row['applicationDate']}
                                        </TableCell>
                                        <TableCell key='review' align='right'>
                                            <Link href={`/volunteer-toronto/applications/${row['id']}`}>
                                                <Button variant="outlined" color="primary">Review Application</Button>
                                            </Link>
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