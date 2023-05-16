import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateInput = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker />
    </LocalizationProvider>
  );
};

export default DateInput;
