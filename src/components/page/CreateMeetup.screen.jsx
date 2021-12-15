import { Typography, Box } from '@mui/material'
import { FormCreateSection } from '../ui_component/Section'
import axios from 'axios'
import React, {useState} from 'react'

function CreateMeetupScreen() {
  const initialStateValue = {
    title: '',
    date: '',
    location: '',
    members: '',
    organizers: '',
    description: '',
    attendees: '',
    past: false
  }
  const [value, setValue] = useState(initialStateValue)
  const [isCreate, setIsCreate] = useState(false)


   const handleChangeForm = (event) => {
    setValue({...value, [event.target.name]: event.target.value})
   }

   const handleCreateMeetup = async (event) => {
    event.preventDefault()
    console.log(value)
    try {
      const result = await axios.post('https://fierce-wildwood-03231.herokuapp.com/meetups', value)
      if(result.data) {
        setIsCreate(true)
      }
    } catch (error) {
      console.log(error)
    }
   }


  return (
    <Box my={3}>
      {isCreate ? 
      <Box textAlign="center" my={8}>
        <Typography variant="h5"> Success create meetup...!! </Typography>
      </Box>
      :
      <FormCreateSection
        title={value.title}
        date={value.date}
        location={value.location}
        members={value.members}
        organizers={value.organizers}
        description={value.description}
        attendees={value.attendees}
        past={value.past}
        handleCreateMeetup={(e) => handleCreateMeetup(e)}
        handleChangeForm={(e) => handleChangeForm(e)}
      />
      }
    </Box>
  )
}

export default CreateMeetupScreen
