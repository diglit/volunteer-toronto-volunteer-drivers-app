import React from 'react';
import DriverCard from './DriverCard/index';
// Redux Imports
import { useSelector } from 'react-redux';
import { Driver } from '../../../redux/driversSearch/index';
import { RootState } from '../../../redux/index';

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
