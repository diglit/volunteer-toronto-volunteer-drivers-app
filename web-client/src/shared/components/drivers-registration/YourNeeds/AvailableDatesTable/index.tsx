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
  handleTimeSelect?: (date: Date, time: Time) => void,
  disabled?: boolean
};

const AvailableDatesTable = ({tableRows, handleTimeSelect, disabled = false}: DatesTable): JSX.Element => {

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
              <TableCell>
                <Checkbox checked={row.Sunday} 
                  onChange={() => (handleTimeSelect ? handleTimeSelect('Sunday', row.time) : null)} 
                  inputProps={{ 'aria-label': `Sunday ${row.time}` }} 
                  disabled={disabled} 
                />
              </TableCell>
              <TableCell>
                <Checkbox checked={row.Monday} 
                  onChange={() => (handleTimeSelect ? handleTimeSelect('Monday', row.time) : null)} 
                  inputProps={{ 'aria-label': `Monday ${row.time}` }} 
                  disabled={disabled} 
                />
              </TableCell>
              <TableCell>
                <Checkbox checked={row.Tuesday} 
                  onChange={() => (handleTimeSelect ? handleTimeSelect('Tuesday', row.time) : null)} 
                  inputProps={{ 'aria-label': `Tuesday ${row.time}` }} 
                  disabled={disabled} 
                />
              </TableCell>
              <TableCell>
                <Checkbox checked={row.Wednesday} 
                  onChange={() => (handleTimeSelect ? handleTimeSelect('Wednesday', row.time) : null)} 
                  inputProps={{ 'aria-label': `Wednesday ${row.time}` }}  
                  disabled={disabled} 
                />
              </TableCell>
              <TableCell>
                <Checkbox checked={row.Thursday} 
                  onChange={() => (handleTimeSelect ? handleTimeSelect('Thursday', row.time) : null)} 
                  inputProps={{ 'aria-label': `Thursday ${row.time}` }} 
                  disabled={disabled} 
                />
              </TableCell>
              <TableCell>
                <Checkbox checked={row.Friday} 
                  onChange={() => (handleTimeSelect ? handleTimeSelect('Friday', row.time) : null)} 
                  inputProps={{ 'aria-label': `Friday ${row.time}` }} 
                  disabled={disabled} 
                />
              </TableCell>
              <TableCell>
                <Checkbox checked={row.Saturday} 
                  onChange={() => (handleTimeSelect ? handleTimeSelect('Saturday', row.time) : null)} 
                  inputProps={{ 'aria-label': `Saturday ${row.time}` }} 
                  disabled={disabled} 
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
  );
}

export default AvailableDatesTable;