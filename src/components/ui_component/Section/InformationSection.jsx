import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { createStyles, makeStyles } from '@mui/styles';

import {Gray} from '../assets/Color'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: 24,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 40,
      background: Gray[100],      
      borderRadius: 8
    },
    blockInfoText: {
      display: 'flex',
      flexDirection: 'column',
      width: 286,      
      gap: 8,
      marginBottom: 40
    },
    infoText: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24
    },
    button: {
      width: 96
    }
  }),
);

function InformationSection(props) {
  const classes = useStyles()  
  const {
    image,
    title,
    location,
    members,
    organizers,
    handleJoin
  } = props
  return (
    <Box className={classes.container}>
      <Box>
        <img src={image} alt="profile"/>
      </Box>
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Box className={classes.blockInfoText} mt={2}>
          <Box className={classes.infoText}>
            <Typography variant="body2">Location: </Typography>
            <Typography variant="body2">{location}</Typography>
          </Box>
          <Box className={classes.infoText}>
            <Typography variant="body2">Members: </Typography>
            <Typography variant="body2">{members}</Typography>
          </Box>
          <Box className={classes.infoText}>
            <Typography variant="body2">Oraganizers: </Typography>
            <Typography variant="body2">{organizers}</Typography>
          </Box>
        </Box>
        <Button onClick={handleJoin} className={classes.button} size="small" variant="contained">Join Us</Button>
      </Box>  
    </Box>
  )
}

export default InformationSection
