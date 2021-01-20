import React from 'react';
// Redux Imports
import { useSelector } from 'react-redux';
import { Driver } from '../../../redux/driversSearch/index';
import { RootState } from '../../../redux/index';
// Material UI Imports
import { Card, CardContent, Typography } from '@material-ui/core';

type DriverCardProps = {
  driverInfo: Driver;
};

export const DriverCard = ({ driverInfo }: DriverCardProps): JSX.Element => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5"><span role="driverName">{driverInfo.name}</span></Typography>
        <Typography>Licence Class: <span role="licenceClass">{driverInfo.licenceClass}</span></Typography>
        <Typography>Vehicle Type: <span role="vehicleType">{driverInfo.vehicleType}</span></Typography>
        <Typography>Police Check: <span role="policeCheck">{driverInfo.policeCheck}</span></Typography>
        <Typography>Driving Abstract: <span role="drivingAbstract">{driverInfo.drivingAbstract}</span></Typography>
        <Typography>Willing to Lift: <span role="willingToLift">{driverInfo.willingToLift}</span></Typography>
        <Typography> 
          Packing and Sorting: <span role="packingAndSorting">{driverInfo.packingAndSorting}</span>
        </Typography>
        <Typography>
          Risk Comfort Level:{' '}
          {driverInfo.riskComfortLevel.map((item) => (
            <span key={item} role="riskComfortItem">{item}, </span>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

const DriversSearchList = React.memo(function DriversSearchList() {
  const driversList: Driver[] = useSelector(
    (state: RootState) => state.driversSearch.drivers,
  );

  return (
    <div>
      {driversList.map((driver) => (
        <div role="driverCard" key={driver.id} >
          <DriverCard driverInfo={driver} />
        </div>
      ))}
    </div>
  );
});

export default DriversSearchList;
