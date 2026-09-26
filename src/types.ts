export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  address: {
    line1: string;
    street: string;
    neighborhood: string;
    city: string;
    postalCode: string;
    country: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  facebookUrl: string;
}

export interface DaySchedule {
  dayName: string;
  shortDay: string;
  dayIndex: number; // 0 for Sun, 1 for Mon, etc.
  sessions: {
    open: string;
    close: string;
    openDisplay: string;
    closeDisplay: string;
  }[];
  isClosed?: boolean;
}

export const VERIFIED_BUSINESS: BusinessInfo = {
  name: 'FISICO FITNESS GYM',
  tagline: 'A dedicated space for training, movement and fitness.',
  category: 'Gym / Fitness',
  address: {
    line1: 'Gulshan-e-Sufyan',
    street: 'Samungli Road',
    neighborhood: 'Arbab Town',
    city: 'Quetta',
    postalCode: '83700',
    country: 'Pakistan',
    full: 'Gulshan-e-Sufyan, Samungli Road, Arbab Town, Quetta, 83700, Pakistan',
  },
  phone: '+92 341 2386871',
  phoneRaw: '+923412386871',
  rating: 4.6,
  reviewCount: 64,
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=FISICO+FITNESS+GYM+Gulshan-e-Sufyan+Samungli+Road+Arbab+Town+Quetta+83700+Pakistan',
  facebookUrl: 'https://www.facebook.com/fiscofitnessgym',
};

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    dayName: 'Monday',
    shortDay: 'Mon',
    dayIndex: 1,
    sessions: [
      { open: '08:00', close: '15:00', openDisplay: '8:00 AM', closeDisplay: '3:00 PM' },
      { open: '16:00', close: '23:30', openDisplay: '4:00 PM', closeDisplay: '11:30 PM' },
    ],
  },
  {
    dayName: 'Tuesday',
    shortDay: 'Tue',
    dayIndex: 2,
    sessions: [
      { open: '08:00', close: '15:00', openDisplay: '8:00 AM', closeDisplay: '3:00 PM' },
      { open: '16:00', close: '23:30', openDisplay: '4:00 PM', closeDisplay: '11:30 PM' },
    ],
  },
  {
    dayName: 'Wednesday',
    shortDay: 'Wed',
    dayIndex: 3,
    sessions: [
      { open: '08:00', close: '15:00', openDisplay: '8:00 AM', closeDisplay: '3:00 PM' },
      { open: '16:00', close: '23:30', openDisplay: '4:00 PM', closeDisplay: '11:30 PM' },
    ],
  },
  {
    dayName: 'Thursday',
    shortDay: 'Thu',
    dayIndex: 4,
    sessions: [
      { open: '08:00', close: '15:00', openDisplay: '8:00 AM', closeDisplay: '3:00 PM' },
      { open: '16:00', close: '23:30', openDisplay: '4:00 PM', closeDisplay: '11:30 PM' },
    ],
  },
  {
    dayName: 'Friday',
    shortDay: 'Fri',
    dayIndex: 5,
    sessions: [
      { open: '08:00', close: '12:30', openDisplay: '8:00 AM', closeDisplay: '12:30 PM' },
      { open: '16:00', close: '23:30', openDisplay: '4:00 PM', closeDisplay: '11:30 PM' },
    ],
  },
  {
    dayName: 'Saturday',
    shortDay: 'Sat',
    dayIndex: 6,
    sessions: [
      { open: '08:00', close: '15:00', openDisplay: '8:00 AM', closeDisplay: '3:00 PM' },
      { open: '16:00', close: '23:30', openDisplay: '4:00 PM', closeDisplay: '11:30 PM' },
    ],
  },
  {
    dayName: 'Sunday',
    shortDay: 'Sun',
    dayIndex: 0,
    sessions: [],
    isClosed: true,
  },
];
