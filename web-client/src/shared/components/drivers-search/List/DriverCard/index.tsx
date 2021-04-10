import React, { useState } from 'react';
import { Driver } from '../../../../redux/driversSearch/index';

//Popup Functionality
import Modal from 'react-modal';

// Material UI Imports
import { Card, CardContent, Typography } from '@material-ui/core';

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
    
    //For displaying and hiding the Popup
    const [modalIsOpen, setModalIsOpen] = useState(false)
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          <span role="driverName">
            {driverInfo.name}
          </span>
        </Typography>
        {/* Added a placeholder button for the Email icon since it has not been added to the component */}
        <Typography>
          <button onClick={() => setModalIsOpen(true)}>Placeholder for Email Icon</button>
        </Typography>
        {/* Added a placeholder for the Card component since it has not bee created (#83) */}
        <Typography>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            ariaHideApp={false}
          >
            Placeholder for Card Content
            <div>
              <button onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
          </Modal>
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