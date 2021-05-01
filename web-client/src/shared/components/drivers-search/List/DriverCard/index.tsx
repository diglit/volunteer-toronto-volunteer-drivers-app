import React, { useState } from 'react';
import { Driver } from '../../../../redux/driversSearch/index';
import MessagingPopup from "../../MessagingPopup"
// Material UI Imports
import { Button, Card, CardContent, Typography } from '@material-ui/core';

type DriverCardProps = {
  driverInfo: Driver;
};


export const DriverCard = ({ driverInfo }: DriverCardProps): JSX.Element => {

  const riskComforlLevelSpanList
    = driverInfo
      .riskComfortLevel
      .map(item => (
        <span key={item} role="riskComfortItem">
          {item},
        </span>
      ))

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          <span role="driverName">
            {driverInfo.name}
          </span>
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>Email</Button>
        <MessagingPopup
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        />
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