import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { CardActions, CardContent, Typography, Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: 8,
      width: '100%'
    }
  }),
);

function PastMeetupsCard(props) {
  const {date, title, onView, description, location, organizers} = props
  const classes = useStyles()
  return (
    <Card className={classes.container}>
      <CardContent>
      <Typography variant="subtitle2">{date}</Typography>
      <hr/>
      <Typography variant="body2"><strong> {title} </strong></Typography>
      <Typography variant='caption'> {description}</Typography>
      <Box mt={1} display="flex" gap={0.5} flexDirection="column">
        <Typography variant='caption'> <strong>Location:</strong></Typography>
        <Typography variant='caption'>{location}</Typography>
      </Box>
      <Box mt={1} display="flex" gap={0.5} flexDirection="column">
        <Typography variant='caption'><strong>Organizers:</strong></Typography>
        <Typography variant='caption'>{organizers}</Typography>
      </Box>
      </CardContent>
      <CardActions>
      <Button onClick={onView} variant="contained" color="secondary" size="small">View</Button>
      </CardActions>
    </Card>
  )
}

export default PastMeetupsCard
