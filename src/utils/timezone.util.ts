import { addHours, format } from 'date-fns';

export const createTimezone = (date: Date): Date => {
  let bookingDate = new Date(date);
  bookingDate.toISOString();
  bookingDate = addHours(bookingDate, -3);
  return bookingDate;
};

export const fetchTimezone = (date: Date): string => {
  const dateFormated = addHours(date, +3);
  const newDate = format(dateFormated, 'yyyy-MM-dd HH:mm');
  return newDate;
};
