import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {Gray} from '../assets/Color'
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: 24,
      background: Gray[100],      
      borderRadius: 8
    }
  }),
);

function NextMeetupSection(props) {
  const {
    title,
    date,
    message
  } = props
  const classes = useStyles()
  return (    
  <Box className={classes.container}>
    <Box>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography sx={{mt: 2}} variant="body2">{date}</Typography>
    </Box>        
    <p>
      {message}
    </p>        
  </Box>      
  )
}

export default NextMeetupSection

   
