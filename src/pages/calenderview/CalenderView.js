import React from 'react';
import { Box, Grid, Card, Typography } from '@mui/material';

const CalendarView = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">February 2022</Typography>
      <Grid container spacing={2}>
        {/* Calendar grid here */}
        {Array.from({ length: 28 }, (_, index) => (
          <Grid item xs={12 / 7} key={index}>
            <Box
              sx={{
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: index === 6 ? '#EEE' : '#FFF', // Highlighting the 7th for example
                border: '1px solid #CCC',
              }}
            >
              {index + 1}
              {/* Add your icons for marked dates */}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Card View */}
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={3}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant="h6">Name: Jay Sawant</Typography>
            <Typography>Company: FYND - IT</Typography>
            <Typography>EA: Divya Shah</Typography>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant="h6">Name: Parth Sawant</Typography>
            <Typography>Company: FYND - IT</Typography>
            <Typography>EA: Komal Rao</Typography>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant="h6">Name: Soham Dev</Typography>
            <Typography>Company: FYND - IT</Typography>
            <Typography>EA: Roma Shaikh</Typography>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant="h6">Name: Niya Vijay</Typography>
            <Typography>Company: FYND - IT</Typography>
            <Typography>EA: Deepak NA</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CalendarView;
