import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import { Typography, Link, CircularProgress, Box } from '@mui/material';
import { 
  NextMeetupSection, 
  InformationSection, 
  AboutMeetupSection, 
  MembersSection, 
  PastMeetupsSection 
} from '../../ui_component/Section'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: 24
    }
  }),
);

function HomeScreen(props) {
  const { meetupsItem, meetup } = props
  const classes = useStyles()

  if(!meetup.title) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress/>
      </Box>  
    )
  }

  return (
    <Box className={classes.container}>
      <InformationSection
        image="https://tinyurl.com/wxzyc9zr"
        title={meetup.title}
        location={meetup.location}
        members={meetup.members}
        organizers={meetup.organizers}
        handleJoin={() => console.log('JOIN')}
      />
      <Box mt={4}>
        <Typography sx={{mb: 2}} variant="h5">Next Meetup</Typography>
        <NextMeetupSection
          title={meetup.title}
          date={meetup.date}
          message={meetup.description}
        />
      </Box>
      <Box mt={4}>
        <Typography sx={{mb: 2}} variant="h5">About Meetup</Typography>
        <AboutMeetupSection
          description={meetup.description}
        />
      </Box>
      <Box mt={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography sx={{mb: 2}} variant="h5">Members</Typography>
          <Link href="#">See All</Link>
        </Box>
        <MembersSection
          avatar="https://tinyurl.com/wxzyc9zr"
          name={meetup.organizers}
          totalOraganizers={meetup.attendees}
        />
      </Box>
      <Box mt={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography sx={{mb: 2}} variant="h5">Past Meetups</Typography>
          <Link href="/">See All</Link>
        </Box>
        {!meetupsItem ? 
          <Box textAlign="center" my={2}>
            <CircularProgress/>
          </Box> 
        :
          <PastMeetupsSection
            pastMeetups={meetupsItem.filter(meet => !meet.past) ?? []}
          />
        }              
      </Box>
    </Box>
  )
}

export default HomeScreen
