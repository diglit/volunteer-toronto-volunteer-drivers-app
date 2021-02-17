import React from 'react';
import { DATES } from '../../../../redux/driversRegistration/yourNeeds/index';

import { Time, Date } from '../../../../redux/driversRegistration/yourNeeds/index';

import { Table, TableBody, TableCell, TableRow, TableHead, TableContainer, Checkbox } from '@material-ui/core';

type DatesRow = {
  time: Time,
  Sunday: boolean,
  Monday: boolean,
  Tuesday: boolean,
  Wednesday: boolean,
  Thursday: boolean,
  Friday: boolean,
  Saturday: boolean
}

type DatesTable = {
  tableRows: DatesRow[],
  handleTimeSelect: (date: Date, time: Time) => void
};

const AvailableDatesTable = ({tableRows, handleTimeSelect}: DatesTable): JSX.Element => {

  return (
    <TableContainer style={{maxHeight: '440px'}}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {['', ...DATES].map( ele => (
              <TableCell key={ele}>{ele}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map(row => (
            <TableRow key={row.time}>
              <TableCell>{row.time}</TableCell>
              <TableCell><Checkbox checked={row.Sunday} onChange={() => handleTimeSelect('Sunday', row.time)} /></TableCell>
              <TableCell><Checkbox checked={row.Monday} onChange={() => handleTimeSelect('Monday', row.time)} /></TableCell>
              <TableCell><Checkbox checked={row.Tuesday} onChange={() => handleTimeSelect('Tuesday', row.time)} /></TableCell>
              <TableCell><Checkbox checked={row.Wednesday} onChange={() => handleTimeSelect('Wednesday', row.time)}/></TableCell>
              <TableCell><Checkbox checked={row.Thursday} onChange={() => handleTimeSelect('Thursday', row.time)} /></TableCell>
              <TableCell><Checkbox checked={row.Friday} onChange={() => handleTimeSelect('Friday', row.time)} /></TableCell>
              <TableCell><Checkbox checked={row.Saturday} onChange={() => handleTimeSelect('Saturday', row.time)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
  );
}

export default AvailableDatesTable;