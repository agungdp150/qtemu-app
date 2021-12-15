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
    },
  }),
);

function AboutMeetupSection(props) {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography> {props.description} </Typography>
      <br/>      
      <Typography>Twitter: @JakartaJS and we use the hashtag #jakartajs</Typography>
    </Box>
  )
}

export default AboutMeetupSection
