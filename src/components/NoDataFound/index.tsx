import React from 'react';
import { Stack, Typography } from '@mui/material';

const NoDataFound = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography fontSize={15}>
        No data found.
      </Typography>
    </Stack>
  )
};

export default NoDataFound;