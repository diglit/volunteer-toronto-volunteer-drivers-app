export type Community = 'Downtown Toronto' | 'North York East (East of Yonge)' | 'North York West (West of Yonge)' | 'Mid-Town Toronto (Lawrence to Batherst)'
  | 'East York / Beaches' | 'Scarborough (East of Malvern)' | 'Scarborough (West of Malvern)' | 'North Etobicoke (North of 401)' | 'South Etobicoke (South of 401)';

export type Time = '6 AM' | '7 AM' | '8 AM' | '9 AM' | '10 AM' | '11 AM' | '12 PM' | '1 PM' | '2 PM' | '3 PM' | '4 PM' | '5 PM' | '6 PM' | '7 PM' | '8 PM' | '9 PM' | '10 PM';
export type Date = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface AvailableDate {
  date: Date;
  availableTimes: Time[];
};

export type DeliveryType = 'Contact-less Delivery' | 'Being in contact with high-risk clients during delivery (e.g. seniors)' | 'Being in contact with low-risk clients during delivery'
  | 'Lifting boxes and bags up to 30 pounds during shift' | 'Lifting boxes and bags up to 50 pounds during shift' | 'Packing and/sorting items for delivery';

export interface YourNeeds {
  communities: Community[];
  availableDates: AvailableDate[];
  typesOfDelivery: DeliveryType[];
};

export const COMMUNITYNAME: Community[] = ['Downtown Toronto', 'North York East (East of Yonge)', 'North York West (West of Yonge)', 'Mid-Town Toronto (Lawrence to Batherst)',
  'East York / Beaches', 'Scarborough (East of Malvern)', 'Scarborough (West of Malvern)', 'North Etobicoke (North of 401)', 'South Etobicoke (South of 401)'];

export const DATES: Date[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const TIMES: Time[] = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];

export const DELIVERTYPES: DeliveryType[] = ['Contact-less Delivery', 'Being in contact with high-risk clients during delivery (e.g. seniors)', 'Being in contact with low-risk clients during delivery',
  'Lifting boxes and bags up to 30 pounds during shift', 'Lifting boxes and bags up to 50 pounds during shift', 'Packing and/sorting items for delivery'];
