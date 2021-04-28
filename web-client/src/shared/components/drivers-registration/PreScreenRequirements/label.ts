import { CheckboxLabel } from "../FormInput"

/** Question options */
const policeRecordsCheckOptionsLabel = [
    'I have completed a police records check in the last 6 months',
    'I have completed a police records check in the last 12 months',
    'I am willing to complete a police records check in order to volunteer as a driver',
    'I am NOT willing to complete a police records check in order to volunteer as a driver',
]

const policeRecordsCheckTypeLabel = [
    'Criminal Record Checks',
    'Criminal Record and Judicial Matters Checks',
    'Vulnerable Sector Checks'
]

const drivingAbstractOptionsLabel = [
    'I have a clear driving abstract completed within the last 6 months',
    'I have a clear driving abstract completed within the last 12 months',
    'I am willing to complete a drving abstract in order to volunteer as a drvier',
    'I am NOT willing to complete a driving abstract in order to volunteer as a driver'
]

const LicenseAndVehicleLabel: CheckboxLabel[] = [
    { name: 'haveCar', label: 'I have access to a car that is safe to drive for deliveries' },
    { name: 'haveVan', label: 'I have access to a van or truck that is safe to drive for deliveries' },
    { name: 'have1MInsurance', label: 'I have liability insurance of $ 1 Million' },
    { name: 'have2MInsurance', label: 'I have liability insurance of $ 2 Million' },
    { name: 'haveGLicense', label: 'I have a valid G license' },
]

const LicenseClasses = ['None', 'A', 'B', 'C', 'D', 'E', 'F', 'G1', 'G2', 'M', 'M with L condition', 'M1', 'M2', 'M2 with L condition']

export { policeRecordsCheckOptionsLabel, policeRecordsCheckTypeLabel, drivingAbstractOptionsLabel, LicenseAndVehicleLabel, LicenseClasses }