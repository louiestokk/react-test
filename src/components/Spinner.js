import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  )
}

export default Spinner