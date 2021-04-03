import React from 'react';
import { Driver } from '../../../../redux/driversSearch/index';
// Material UI Imports
import { Card, CardContent, Typography } from '@material-ui/core';

type DriverCardProps = {
  driverInfo: Driver;
};

// TODO: Update the card based on the design: 
// https://xd.adobe.com/view/4a36317f-0fd9-444a-b1cd-e135d91ce2e0-1f65/screen/4034537d-d116-4726-8539-9f7f2d42d3f4/?fullscreen&hints=off
export const DriverCard = ({ driverInfo }: DriverCardProps): JSX.Element => {

  const riskComforlLevelSpanList 
    = driverInfo
    .riskComfortLevel
    .map(item => (
      <span key={item} role="riskComfortItem">
        {item}, 
      </span>
    ))
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          <span role="driverName">
            {driverInfo.name}
          </span>
        </Typography>

        <Typography>
          Licence Class: 
          <span role="licenceClass">
            {driverInfo.licenceClass}
          </span>
        </Typography>

        <Typography>
          Vehicle Type: 
          <span role="vehicleType">
            {driverInfo.vehicleType}
          </span>
        </Typography>

        <Typography>
          Police Check: 
          <span role="policeCheck">
            {driverInfo.policeCheck}
          </span>
        </Typography>

        <Typography>
          Driving Abstract: 
          <span role="drivingAbstract">
            {driverInfo.drivingAbstract}
          </span>
        </Typography>

        <Typography>
          Willing to Lift: 
          <span role="willingToLift">
            {driverInfo.willingToLift}
          </span>
        </Typography>

        <Typography> 
          Packing and Sorting: 
          <span role="packingAndSorting">
            {driverInfo.packingAndSorting}
          </span>
        </Typography>

        <Typography>
          Risk Comfort Level:{' '}
          {riskComforlLevelSpanList}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DriverCard;