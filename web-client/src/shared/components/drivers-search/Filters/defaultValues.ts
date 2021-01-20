export interface DefaultValue {
  [name: string]: boolean | undefined
}


export const languageFilterdata: DefaultValue[] = [
  { English: false },
  { French: false },
  { Tagalog: false },
  { Portuguese: false },
  { Chinese: false },
  { Mandarin: false },
  { Cantonese: false },
  { Farci: false },
  { Other: false },
];


export const locationFilterdata: DefaultValue[] = [
  { "Downtown Toronto": false },
  { "North York East (East of Yonge)": false },
  { "North York West (West of Yonge)": false },
  { "Mid-Town Toronto (Lawrence to Bloor)": false },
  { "East York/Beaches": false },
  { "Scarborough East (East of Malvern)": false },
  { "Scarborough West (West of Malvern)": false },
  { "North Etobicoke (North of 401)": false },
  { "South Etobicoke (South of 401)": false },
  { "Toronto West (Dufferin to Islington)": false },
]

export const availabilityFilterdata = [
  { "Morning": false },
  { "Afternoon": false },
  { "Evening": false },
  { "Monday": false },
  { "Tuesday": false },
  { "Wednesday": false },
  { "Thursday": false },
  { "Friday": false },
  { "Saturday": false },
  { "Sunday": false },
];

export const comfortLevelFilterdata: DefaultValue[] = [
  { "Contact-less": false },
  { "Being in contact with high risk clients": false },
  { "Being in contact with low risk clients": false },
];

export const policeCheckFilterdata: DefaultValue[] = [
  { "Has within the last 6 months": false },
  { "Has within the last 12 months": false },
  { "Willing to get one": false },
  { "Not willing to get one": false },
];

export const drivingAbstractFilterdata: DefaultValue[] = [
  { "Has within the last 6 months": false },
  { "Has within the last 12 months": false },
  { "Willing to get one": false },
  { "Not willing to get one": false },
];

export const licenseClassFilterdata: DefaultValue[] = [
  { A: false },
  { B: false },
  { C: false },
  { D: false },
  { E: false },
  { F: false },
  { G: false }
];

export const vehicleTypeFilterdata: DefaultValue[] = [
  { "Car": false },
  { "Truck": false },
  { "Van": false },
  { "Cargo Van": false },
  { "Cube Van": false }
];

export const insurancePolicyFilterdata: DefaultValue[] = [
  { "Up to $1 Million": false },
  { "Up to $2 Million": false },
];


export const willingToLiftFilterdata: DefaultValue[] = [
  { "Up to 30lb": false },
  { "Up to 50lb": false },
];


export const packingSortingFilterdata: DefaultValue[] = [
  { "Packing": false },
  { "Sorting": false },
  { "Both": false }
];