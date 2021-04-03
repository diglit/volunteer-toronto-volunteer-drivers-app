import React, { useState } from 'react';
import { Driver } from '../../../../redux/driversSearch/index';
import RequestPage from './RequestPage';

import { Card, CardContent, Typography, Button } from '@material-ui/core';

type DriverInfoProps = {
  driverInfo: Driver;
};

const DriverFullProfile = ({driverInfo}: DriverInfoProps): JSX.Element => {
  const [sendRequest, setSendRequest] = useState(false);

  const sendRequestHandle = () => {
    setSendRequest(true);
    // TODO: update the sendRequest state
  }


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
      {sendRequest && <RequestPage />}
      <Button onClick={sendRequestHandle}>Send Request</Button>
    </div>
  );
}

export default DriverFullProfile;