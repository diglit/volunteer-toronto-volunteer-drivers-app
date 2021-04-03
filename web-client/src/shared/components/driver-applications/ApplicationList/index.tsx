import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'shared/redux';

const ApplicationList = (): React.ReactElement => {
    // TODO: get all applications
    const Applications = useSelector((state: RootState) => state.driverApplication); 
    // TODO: handleClick: update viewed, get application by id, go to route
    console.log(Applications);
    
    return (
        <>
            {/* TODO: map applications data into the table rows */}
            <div>Last Name, First</div>
            <div>Application Data</div>
            <button>review Application</button>
        </>
    )
}

export default ApplicationList
