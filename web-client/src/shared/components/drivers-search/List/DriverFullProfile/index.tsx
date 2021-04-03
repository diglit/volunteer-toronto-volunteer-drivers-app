import React, { useState } from 'react';
import { Driver } from '../../../../redux/driversSearch/index';
import RequestPage from './RequestPage';

import { Card, CardContent, Typography } from '@material-ui/core';

type DriverInfoProps = {
  driverInfo: Driver;
};

const DriverFullProfile = ({driverInfo}: DriverInfoProps): JSX.Element => {
  const [sendRequest, setSendRequest] = useState(false);
  const riskComforlLevelSpanList 
    = driverInfo
    .riskComfortLevel
    .map(item => (
      <span key={item} role="riskComfortItem">
        {item}, 
      </span>
    ));

  return (
    <div>
      Driver Full Profile
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

        {sendRequest && <RequestPage />}
      </CardContent>
    </Card>
    </div>
  );
}

export default DriverFullProfile;