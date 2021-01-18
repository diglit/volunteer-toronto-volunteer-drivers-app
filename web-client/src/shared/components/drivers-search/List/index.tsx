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

const DriverCard = ({ driverInfo }: DriverCardProps): JSX.Element => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{driverInfo.name}</Typography>
        <Typography>Licence Class: {driverInfo.licenceClass}</Typography>
        <Typography>Vehicle Type: {driverInfo.vehicleType}</Typography>
        <Typography>Police Check: {driverInfo.policeCheck}</Typography>
        <Typography>Driving Abstract: {driverInfo.drivingAbstract}</Typography>
        <Typography>Willing to Lift: {driverInfo.willingToLift}</Typography>
        <Typography>
          Packing and Sorting: {driverInfo.packingAndSorting}
        </Typography>
        <Typography>
          Risk Comfort Level:{' '}
          {driverInfo.riskComfortLevel.map((item) => (
            <span key={item}>{item}, </span>
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
  console.log(driversList);

  return (
    <div>
      {driversList.map((driver) => (
        <DriverCard key={driver.id} driverInfo={driver} />
      ))}
    </div>
  );
});

export default DriversSearchList;
