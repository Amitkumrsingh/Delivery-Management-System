import { format, startOfDay, startOfMonth, startOfYear } from 'date-fns';

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (date: string, formatStr: string = 'MMM dd, yyyy') => {
  return format(new Date(date), formatStr);
};

export const getStartOfPeriod = {
  day: (date: Date) => startOfDay(date),
  month: (date: Date) => startOfMonth(date),
  year: (date: Date) => startOfYear(date),
};