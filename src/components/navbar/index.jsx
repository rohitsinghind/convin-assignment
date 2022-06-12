import React from 'react'
import { styles } from './styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <Typography variant="h1" component="div" sx={styles.logo}>
            Users
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
