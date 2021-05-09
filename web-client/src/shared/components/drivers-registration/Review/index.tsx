import React from 'react';
import AvailableDatesTable from '../YourNeeds/AvailableDatesTable/index';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/index';
import { languageOption, licenseAndVehicle, agreement } from '../../../redux/driversRegistration/index';
import { COMMUNITYNAME, TIMES, DELIVERTYPES } from '../../../redux/driversRegistration/yourNeeds/index';
import { policeRecordsCheckOptionsLabel, drivingAbstractOptionsLabel, LicenseAndVehicleLabel } from '../PreScreenRequirements/label';
import { agreementLabel } from '../Agreement/index';

import { Typography, TextField, FormControlLabel, Checkbox, Box } from '@material-ui/core';

const ReviewSection = (): React.ReactElement => {

  const { firstName, lastName, emailAddress, phoneNumber, languagesSpoken, languageOther } = useSelector(
    (state: RootState) => state.driversRegistration.personalInfo
  );
  const { communities, availableDates, typesOfDelivery } = useSelector(
    (state: RootState) => state.driversRegistration.yourNeeds
  );
  const { policeRecordsCheckOptions,
    policeRecordsCheckDate,
    policeRecordsCheckType,
    drivingAbstractOptions,
    drivingAbstractDate,
    LicenseAndVehicle,
    LicenseClasses } = useSelector((state: RootState) => state.driversRegistration.preScreen);

  const { agreementOptions, signiture } = useSelector((state: RootState) => state.driversRegistration.agreement);

  const languages = Object.keys(languagesSpoken) as languageOption[];
  const licenses = Object.keys(LicenseAndVehicle) as licenseAndVehicle[];
  const agreements = Object.keys(agreementOptions) as agreement[];

  const availableDatesAndTimes = TIMES.map(time => ({
    time: time,
    Sunday: availableDates.find(ele => ele.date === 'Sunday')?.availableTimes?.includes(time),
    Monday: availableDates.find(ele => ele.date === 'Monday')?.availableTimes?.includes(time),
    Tuesday: availableDates.find(ele => ele.date === 'Tuesday')?.availableTimes?.includes(time),
    Wednesday: availableDates.find(ele => ele.date === 'Wednesday')?.availableTimes?.includes(time),
    Thursday: availableDates.find(ele => ele.date === 'Thursday')?.availableTimes?.includes(time),
    Friday: availableDates.find(ele => ele.date === 'Friday')?.availableTimes?.includes(time),
    Saturday: availableDates.find(ele => ele.date === 'Saturday')?.availableTimes?.includes(time)
  }));

  const checkedLicenseAndVehicles = licenses.map(license => {
    return {
      name: license,
      checked: LicenseAndVehicle[license],
      label: LicenseAndVehicleLabel.find(label => label.name === license)?.label
    }
  });

  const checkedAgreements = agreements.map(agreement => {
    return {
      name: agreement,
      checked: agreementOptions[agreement],
      label: agreementLabel.find(label => label.name === agreement)?.label
    }
  });

  return (
    <div>
      <Typography>Please confirm all the following information is correct</Typography>

      <Box m={3}>
        <Typography variant='h5'>Personal Info</Typography>
        <div>
          <TextField disabled id="firstName" label="First Name" defaultValue={firstName} />
          <TextField disabled id="lastName" label="Last Name" defaultValue={lastName} />
          <TextField disabled id="emailAddress" label="Email Address" defaultValue={emailAddress} />
          <TextField disabled id="phoneNumber" label="Phone Number" defaultValue={phoneNumber} />
        </div>

        <div>
          <Typography>Language Spoken</Typography>
          {languages.map((language) => {
            if (languagesSpoken[language] === true) {
              return <FormControlLabel disabled control={<Checkbox checked name={language} />} label={language[0] + language.slice(1)} key={language} />
            } else {
              return <FormControlLabel disabled control={<Checkbox name={language} />} label={language[0] + language.slice(1)} key={language} />
            }
          })}

          {languagesSpoken.other ?
            <TextField disabled id="other language" defaultValue={languageOther} />
            :
            null
          }
        </div>
      </Box>

      <Box m={3}>
        <Typography variant='h5'>Your Needs</Typography>

        <div>
          <Typography>I want to deliver in these communities:</Typography>
          {COMMUNITYNAME.map(community => {
            if (communities.includes(community)) {
              return <FormControlLabel disabled control={<Checkbox checked name={community} />} label={community} key={community} />
            } else {
              return <FormControlLabel disabled control={<Checkbox name={community} />} label={community} key={community} />
            }
          })}
        </div>

        <div>
          <Typography>I am available to deliver (select all that apply):</Typography>
          <AvailableDatesTable tableRows={availableDatesAndTimes} disabled={true} />
        </div>

        <div>
          <Typography>I am comfortable with (choose all that apply):</Typography>
          {DELIVERTYPES.map(type => {
            if (typesOfDelivery.includes(type)) {
              return <FormControlLabel disabled control={<Checkbox checked name={type} />} label={type} key={type} />
            } else {
              return <FormControlLabel disabled control={<Checkbox name={type} />} label={type} key={type} />
            }
          })}
        </div>
      </Box>

      <Box m={3}>
        <Typography variant='h5'>Pre-Screen Requirements</Typography>

        <div>
          <Typography>Police Records Check Requirements (choose all that apply)</Typography>
          {policeRecordsCheckOptionsLabel.map(check => {
            if (check === policeRecordsCheckOptions) {
              return <FormControlLabel disabled control={<Checkbox checked name={check} />} label={check} key={check} />
            } else {
              return <FormControlLabel disabled control={<Checkbox name={check} />} label={check} key={check} />
            }
          })}
        </div>

        <div>
          <Typography>If you have completed a police records check, please indicate the date and type of check completed</Typography>
          <TextField id="date" type="date" defaultValue={policeRecordsCheckDate} disabled />
          <TextField id="police records check type" defaultValue={policeRecordsCheckType} disabled />
        </div>

        <div>
          <Typography>Driving Abstract Requirements (choose all that apply) </Typography>
          {drivingAbstractOptionsLabel.map(requirement => {
            if (requirement === drivingAbstractOptions) {
              return <FormControlLabel disabled control={<Checkbox checked name={requirement} />} label={requirement} key={requirement} />
            } else {
              return <FormControlLabel disabled control={<Checkbox name={requirement} />} label={requirement} key={requirement} />
            }
          })}

          <div>
            <Typography>If you have completed a driving abstract, please indicate the date it was completed</Typography>
            <TextField id="date" type="date" defaultValue={drivingAbstractDate} disabled />
          </div>
        </div>

        <div>
          <Typography>Vehicle/License Requirements (choose all that apply)</Typography>
          {checkedLicenseAndVehicles.map(license => {
            if (license.checked) {
              return <FormControlLabel disabled control={<Checkbox checked name={license.label} />} label={license.label} key={license.label} />
            } else {
              return <FormControlLabel disabled control={<Checkbox name={license.label} />} label={license.label} key={license.label} />
            }
          })}

          <div>
            <Typography>Please indicate other license classes here</Typography>
            <TextField id="license class" defaultValue={LicenseClasses} disabled />
          </div>
        </div>
      </Box>

      <Box m={3}>
        <Typography variant='h5'>Agreements</Typography>
        <div>
          <Typography>Please confirm the following:</Typography>
          {checkedAgreements.map(agreement => {
            if (agreement.checked) {
              return <FormControlLabel disabled control={<Checkbox checked name={agreement.name} />} label={agreement.label} key={agreement.name} />
            } else {
              return <FormControlLabel disabled control={<Checkbox name={agreement.name} />} label={agreement.label} key={agreement.name} />
            }
          })}
        </div>

        <TextField id="signiture" label='signature' defaultValue={signiture} disabled />
      </Box>

    </div>
  );
}

export default ReviewSection;