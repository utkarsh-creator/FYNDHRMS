import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Profile from './Profile';
import MobileSection from './MobileSection';

export default function HeaderContent({ onViewChange }) {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [viewType, setViewType] = useState('internal'); // State for internal/external view

  const handleViewChange = (type) => {
    setViewType(type);
    onViewChange(type); // Pass the selected type to the parent (LandingPage)
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
      {/* <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
        <Button
          variant={viewType === 'internal' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => handleViewChange('internal')}
        >
          Internal
        </Button>
        <Button
          variant={viewType === 'external' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => handleViewChange('external')}
          sx={{ ml: 1 }}
        >
          External
        </Button>
      </Box> */}
    </Box>
  );
}
