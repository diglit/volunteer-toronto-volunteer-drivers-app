export interface DefaultValues {
  [name: string]: boolean | undefined
}
export interface AllFilters {
  [name: string]: DefaultValues
}

export const languageFilterdata: DefaultValues = {
  English: false,
  French: false,
  Tagalog: false,
  Portuguese: false,
  Chinese: false,
  Mandarin: false,
  Cantonese: false,
  Farci: false,
  Other: false
};


export const locationFilterdata: DefaultValues = {
  "Downtown Toronto": false,
  "North York East (East of Yonge)": false,
  "North York West (West of Yonge)": false,
  "Mid-Town Toronto (Lawrence to Bloor)": false,
  "East York/Beaches": false,
  "Scarborough East (East of Malvern)": false,
  "Scarborough West (West of Malvern)": false,
  "North Etobicoke (North of 401)": false,
  "South Etobicoke (South of 401)": false,
  "Toronto West (Dufferin to Islington)": false
}

export const availabilityFilterdata: DefaultValues = {
  "Morning": false,
  "Afternoon": false,
  "Evening": false,
  "Monday": false,
  "Tuesday": false,
  "Wednesday": false,
  "Thursday": false,
  "Friday": false,
  "Saturday": false,
  "Sunday": false
};

export const comfortLevelFilterdata: DefaultValues = {
  "Contact-less": false,
  "Being in contact with high risk clients": false,
  "Being in contact with low risk clients": false
};

export const policeCheckFilterdata: DefaultValues = {
  "Has within the last 6 months": false,
  "Has within the last 12 months": false,
  "Willing to get one": false,
  "Not willing to get one": false
};

export const drivingAbstractFilterdata: DefaultValues = {
  "Has within the last 6 months": false,
  "Has within the last 12 months": false,
  "Willing to get one": false,
  "Not willing to get one": false
};

export const licenseClassFilterdata: DefaultValues = {
  A: false,
  B: false,
  C: false,
  D: false,
  E: false,
  F: false,
  G: false
};

export const vehicleTypeFilterdata: DefaultValues = {
  "Car": false,
  "Truck": false,
  "Van": false,
  "Cargo Van": false,
  "Cube Van": false
};

export const insurancePolicyFilterdata: DefaultValues = {
  "Up to $1 Million": false,
  "Up to $2 Million": false
};


export const willingToLiftFilterdata: DefaultValues = {
  "Up to 30lb": false,
  "Up to 50lb": false
};


export const packingSortingFilterdata: DefaultValues = {
  "Packing": false,
  "Sorting": false,
  "Both": false
};


export const globalFilterData: AllFilters = {
  "Language(s)": languageFilterdata,
  "Location": locationFilterdata,
  "Availability": availabilityFilterdata,
  "Comfort Level": comfortLevelFilterdata,
  "Police Check": policeCheckFilterdata,
  "Driving Abstract": drivingAbstractFilterdata,
  "License Class": licenseClassFilterdata,
  "Vehicle Type": vehicleTypeFilterdata,
  "Insurance Policy": insurancePolicyFilterdata,
  "Willing to Lift": willingToLiftFilterdata,
  "Packing and Sorting": packingSortingFilterdata,
}