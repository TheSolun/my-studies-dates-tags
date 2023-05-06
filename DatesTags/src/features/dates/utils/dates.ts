const dateNumberToStringWithZeroAtLeftIfNecessary = (dateNumber: number) =>
  (dateNumber < 10 ? '0' : '') + dateNumber;

const dayOfTheMonthToString = (day: number) =>
  dateNumberToStringWithZeroAtLeftIfNecessary(day);

const monthToString = (month: number) =>
  dateNumberToStringWithZeroAtLeftIfNecessary(month + 1);

export const dateToString = (date: Date) =>
  '' +
  dayOfTheMonthToString(date.getDate()) +
  '/' +
  monthToString(date.getMonth()) +
  '/' +
  date.getFullYear();
