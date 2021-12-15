import { Typography, Box, CircularProgress } from '@mui/material'
import { PastMeetupsSection } from '../../ui_component/Section'
import React from 'react'

function ExploreScreen(props) {
  const { meetupsItem } = props  
  return (
    <Box mt={5}>
      <Typography variant='h4'>Explore your meetups</Typography>
      <Box mt={4}>
        {!meetupsItem ? 
        <Box textAlign="center" my={2}>
          <CircularProgress/>
        </Box>        
        :
        <PastMeetupsSection pastMeetups={meetupsItem ?? []}/>
        }        
      </Box>
    </Box>
  )
}

export default ExploreScreen
