import React from 'react'
import PastMeetupsCard from '../molecules/PastMeetupsCard'
import {Box, Typography} from '@mui/material'
import {Gray} from '../assets/Color'
import { createStyles, makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: 24,
      background: Gray[100],      
      borderRadius: 8,
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap'
    }
  }),
);

function PastMeetupsSection(props) {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <Box className={classes.container}>
      {props.pastMeetups.lenght ? 
      <Box textAlign="center" my={8}>
        <Typography variant="h5"> There is no meetups </Typography>
      </Box>
      :
      props.pastMeetups.map((meetup, index) => {
        return (
          <Box width="31%" key={index}>
            <PastMeetupsCard            
              date={meetup.date}
              title={meetup.title}
              description={meetup.description}
              location={meetup.location}
              organizers={meetup.organizers}
              onView={() => navigate(`/meetup-detail/${meetup.id}/page`)}
            />
          </Box>)})  
      }
            
    </Box>
  )
}

export default PastMeetupsSection
