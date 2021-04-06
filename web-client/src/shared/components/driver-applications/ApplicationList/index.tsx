import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { RootState } from 'shared/redux';
import { Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Paper, TablePagination, Button } from '@material-ui/core'
import { fetchApplications } from 'shared/redux/driverApplications';
import './index.module.scss'

interface Column {
    field: 'name' | 'applicationDate' | 'review';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { field: 'name', label: 'Name', minWidth: 130 },
    { field: 'applicationDate', label: 'Applications Date', minWidth: 130 },
    { field: 'review', label: '', minWidth: 160, },
];

const ApplicationList = (): React.ReactElement => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchApplications())
    }, [])

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
            <Paper className='root'>
                <TableContainer className={'container'}>
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