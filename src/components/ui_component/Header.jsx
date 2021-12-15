import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link as LinkRouter} from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" gap={3}>
          <Box mr={4}>
            <Link component={LinkRouter} to="/">
              <Typography sx={{color: '#fff'}} variant="h6">
                QTemu
              </Typography>          
            </Link>
          </Box>
          <Link component={LinkRouter} to="/create-meetup" sx={{textDecoration: 'unset'}} color="inherit">Create Meetup</Link>
          <Link component={LinkRouter} to="/" sx={{textDecoration: 'unset'}} color="inherit">Explore</Link>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default  Header
