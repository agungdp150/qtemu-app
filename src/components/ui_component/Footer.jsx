import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

function Footer() {
  return (
    <Box px={3} mt={6} mb={3}>
      <hr/>
      <Typography sx={{mt: 2}} textAlign="center" variant="subtitle1">Copyright PT. Coding Indonesia</Typography>
    </Box>
  )
}

export default Footer
