import React from 'react';
import DriverCardVT from './DriverCardVT/index';
import DriverCard from './DriverCard/index';
// Redux Imports
import { useSelector } from 'react-redux';
import { Driver } from '../../../redux/driversSearch/index';
import { RootState } from '../../../redux/index';

// TODO: add state for managing if the user is VT or not & update driver card component based on the role of user.

const DriversSearchList = React.memo(function DriversSearchList() {
  const driversList: Driver[] = useSelector(
    (state: RootState) => state.driversSearch.response.drivers,
  );

  return (
    <div>
      {driversList.map((driver) => (
        <div 
          role="driverCard" 
          key={driver.id} 
        >
          {/* The two driver card component will be chose by the role of the user */}
          <DriverCardVT
            driverInfo={driver} 
          />
          <DriverCard 
            driverInfo={driver} 
          />
        </div>
      ))}
    </div>
  );
});

export default DriversSearchList;
