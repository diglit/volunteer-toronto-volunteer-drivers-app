import React, { useState } from 'react';
import AvailableDatesTable from './AvailableDatesTable/index';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/index';
import { Community, YourNeeds, Time, DeliveryType, Date, COMMUNITYNAME, DATES, TIMES, DELIVERTYPES } from '../../../redux/driversRegistration/yourNeeds/index';
import { saveYourNeeds } from '../../../redux/driversRegistration/index';

import { FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox, Button, Box } from '@material-ui/core';

const YourNeedsSection = (): JSX.Element => {

  const communities = useSelector((state: RootState) => state.driversRegistration.yourNeeds.communities);
  const availableDates = useSelector((state: RootState) => state.driversRegistration.yourNeeds.availableDates);
  const typesOfDelivery = useSelector((state: RootState) => state.driversRegistration.yourNeeds.typesOfDelivery);

  // Community state contains two attributes: name and selected
  const [communityState, setCommunityState] = useState(COMMUNITYNAME.map(community => {
    if (communities.includes(community)) {
      return ({
        name: community,
        selected: true
      })
    } else return ({
      name: community,
      selected: false
    })
  }));

  // Available dates state contains boolean value of every date for each time
  const [availableDatesState, setAvailableDatesState] = useState([...TIMES.map(time => ({
    time: time,
    Sunday: availableDates.filter(ele => ele.date === 'Sunday')[0].availableTimes.includes(time),
    Monday: availableDates.filter(ele => ele.date === 'Monday')[0].availableTimes.includes(time),
    Tuesday: availableDates.filter(ele => ele.date === 'Tuesday')[0].availableTimes.includes(time),
    Wednesday: availableDates.filter(ele => ele.date === 'Wednesday')[0].availableTimes.includes(time),
    Thursday: availableDates.filter(ele => ele.date === 'Thursday')[0].availableTimes.includes(time),
    Friday: availableDates.filter(ele => ele.date === 'Friday')[0].availableTimes.includes(time),
    Saturday: availableDates.filter(ele => ele.date === 'Saturday')[0].availableTimes.includes(time)
  }))]);

  // Delivery type state contains two attributes: name and selected
  const [typesOfDeliveryState, setTypesOfDeliveryState] = useState(DELIVERTYPES.map(delivery => {
    if (typesOfDelivery.includes(delivery)) {
      return ({
        name: delivery,
        selected: true
      })
    } else return ({
      name: delivery,
      selected: false
    })
  }));

  // used for documenting error if any
  const [validateError, setValidateError] = useState('');

  const dispatch = useDispatch();

  const handleCommunitySelect = (communityName: Community) => {
    const newCommunityState = communityState.map(community => {
      if (community.name === communityName) {
        return ({
          ...community,
          selected: !community.selected
        })
      } else return community;
    });
    setCommunityState(newCommunityState);
  };

  const handleTimeSelect = (date: Date, time: Time) => {
    const newAvailableDates = availableDatesState.map(dateTime => {
      if (dateTime.time === time) {
        const newDateTime = dateTime;
        newDateTime[date] = !dateTime[date];
        return newDateTime;
      } else return dateTime;
    });
    setAvailableDatesState(newAvailableDates);
  };

  const handleDeliverySelect = (delivery: DeliveryType) => {
    const newDeliveryTypesState = typesOfDeliveryState.map(deliveryType => {
      if (deliveryType.name === delivery) {
        return ({
          ...deliveryType,
          selected: !deliveryType.selected
        })
      } else return deliveryType;
    });
    setTypesOfDeliveryState(newDeliveryTypesState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedCommunities: Community[] = communityState.filter(community => community.selected === true).map(community => community.name);
    const selectedDates = [...DATES.map(date => (
      {
        date: date,
        availableTimes: availableDatesState.filter(ele => ele[date]).map(ele => ele.time)
      }
    ))];
    const selectedDeliveryTypes: DeliveryType[] = typesOfDeliveryState.filter(delivery => delivery.selected === true).map(delivery => delivery.name);

    const yourNeedsData: YourNeeds = {
      communities: selectedCommunities,
      availableDates: selectedDates,
      typesOfDelivery: selectedDeliveryTypes
    };

    // Check if there is any available times for all dates. If none, then error
    const validateSelectedDates = yourNeedsData.availableDates.map(date => date.availableTimes).filter(times => times.length !== 0);

    //validate if all required areas of your needs section have data
    if (yourNeedsData.communities.length === 0 || validateSelectedDates.length === 0 || yourNeedsData.typesOfDelivery.length === 0) {
      setValidateError('Please select at least one option for above areas');
    } else {
      setValidateError('');
      dispatch(saveYourNeeds(yourNeedsData));
    }
  }

  return (
    <div>
      <div className="needs-communities">
        <form onSubmit={handleSubmit}>
          <FormControl>

            <Box m={3}>
              <FormLabel>I want to deliver in these communities (select all the apply)</FormLabel>
              <FormGroup>
                {communityState.map(community =>
                  <FormControlLabel
                    control={
                      <Checkbox checked={community.selected} onChange={() => handleCommunitySelect(community.name)} name={community.name} />
                    }
                    label={community.name}
                    key={community.name}
                  />
                )}
              </FormGroup>
            </Box>

            <Box m={3}>
              <FormLabel>I am available to deliver (select all that apply)</FormLabel>
              <FormGroup>
                <AvailableDatesTable tableRows={availableDatesState} handleTimeSelect={handleTimeSelect} />
              </FormGroup>
            </Box>

            <Box m={3}>

              <FormLabel>I am comfortable with (choose all that apply):</FormLabel>
              <FormGroup>
                {typesOfDeliveryState.map(delivery =>
                  <FormControlLabel
                    control={
                      <Checkbox checked={delivery.selected} onChange={() => handleDeliverySelect(delivery.name)} name={delivery.name} />
                    }
                    label={delivery.name}
                    key={delivery.name}
                  />
                )}
              </FormGroup>
            </Box>

            {/* This button here is used to test if the states in redux store have been updated correctly. Will move it when we apply the local storage */}
            <Box m={3}>
              <Button type='submit'>Save</Button>
            </Box>
          </FormControl>

        </form>
        <div>
          <p>{validateError}</p>
        </div>
      </div>
    </div>
  )
}

export default YourNeedsSection;