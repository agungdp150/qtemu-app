import React from 'react'
import { Box, TextField, Button, Checkbox, FormControlLabel, FormGroup  } from '@mui/material'

function FormCreateSection(props) {
  const {
    title,
    date,
    location,
    members,
    organizers,
    description,
    attendees,
    past,
    handleCreateMeetup,
    handleChangeForm
  } = props

  return (
    <form>
      <Box display="flex" flexDirection="column" gap={3}>
        <TextField
          id="outlined-required"
          label="Title" 
          name="title"
          type="text"       
          fullWidth
          size='small'
          value={title}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        <TextField
          id="outlined-required"          
          type="date"
          name="date"
          fullWidth
          size='small'
          value={date}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        <TextField
          id="outlined-required"
          label="Address"
          name="location"
          type="text"
          fullWidth
          size='small'
          value={location}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        <TextField
          id="outlined-required"
          label="Members"
          name="members"
          type="number"
          fullWidth
          size='small'
          value={members}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        <TextField
          id="outlined-required"
          label="Organizers"
          type="text"
          name="organizers"   
          fullWidth
          size='small'
          value={organizers}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        <TextField
          id="outlined-required"
          label="Description"
          name="description"  
          multiline
          rows={4}    
          fullWidth
          size='small'
          type="text"
          value={description}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        <TextField
          id="outlined-required"
          label="Attendees" 
          name="attendees"       
          fullWidth          
          size='small'
          value={attendees}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
          type="number"
        />
        <Box>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox name="past" value={past}/>}
            label="Past"
            labelPlacement="end"
            onChange={(e) => handleChangeForm(e)}
          />     
        </FormGroup>     
        </Box>
      </Box>
      <Box mt={3}>
        <Button size="small" variant="contained" onClick={handleCreateMeetup}>Create Meetup</Button>
      </Box>
    </form>
  )
}

export default FormCreateSection
