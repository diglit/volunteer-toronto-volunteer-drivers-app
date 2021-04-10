import React, { useState } from 'react';
import RequestPage from './RequestPage';

import { Button } from '@material-ui/core';

const DriverFullProfile = (): JSX.Element => {
  const [sendRequest, setSendRequest] = useState(false);

  const sendRequestHandle = () => {
    setSendRequest(true);
    // TODO: update the sendRequest state
  }

  return (
    <div>
      Driver Full Profile
      {sendRequest && <RequestPage />}
      <Button onClick={sendRequestHandle}>Send Request</Button>
    </div>
  );
}

export default DriverFullProfile;