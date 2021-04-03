import React, { useState } from 'react';
import { Driver } from '../../../../redux/driversSearch/index';
import DriverFullProfile from '../DriverFullProfile/index';
// Material UI Imports
import { Card, CardContent, Typography } from '@material-ui/core';

type DriverCardProps = {
  driverInfo: Driver;
};

// TODO: update the card according to:
// https://xd.adobe.com/view/4a36317f-0fd9-444a-b1cd-e135d91ce2e0-1f65/screen/4034537d-d116-4726-8539-9f7f2d42d3f4?fullscreen&hints=off

export const DriverCard = ({ driverInfo }: DriverCardProps): JSX.Element => {

  const [viewProfile, setViewProfile] = useState(false);

  // Add email, delete reset password & edit profile functions
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          <span role="driverName">
            {driverInfo.name}
          </span>
        </Typography>
        {viewProfile && <DriverFullProfile driverInfo={driverInfo} />}
      </CardContent>
    </Card>
  );
};

export default DriverCard;