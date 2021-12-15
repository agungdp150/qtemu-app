import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import {Gray} from '../assets/Color'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: 24,
      background: Gray[100],      
      borderRadius: 8,
      display: 'flex',
      gap: 40
    }
  }),
);

function MembersSection(props) {
  const {
    avatar,
    name,
    totalOraganizers
  } = props
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Avatar src={avatar} sx={{ width: 78, height: 78 }} />
      <Box>
        <Typography>Organizers</Typography>
        <Box mt={2} display="flex" gap={3}>
          <Typography>{name}</Typography>
          <Typography>{totalOraganizers} Others</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MembersSection
