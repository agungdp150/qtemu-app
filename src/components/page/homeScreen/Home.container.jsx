import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { meetupsDatasSelector } from '../../../redux/slices/meetups.slice'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import HomeScreen from './Home.screen'

function HomeContainer() {  
  const {id} = useParams()
  const meetupsItem = useSelector(meetupsDatasSelector)
  const [meetup, setMeetup] = useState({})
  
  useEffect(() => {
    getMeetup()    
  }, [id])

  const getMeetup = async () => {
    try {
      const result = await axios.get(`https://fierce-wildwood-03231.herokuapp.com/meetups/${id}`)
      if(result.data) {
        setMeetup(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <HomeScreen 
      meetupsItem={meetupsItem} 
      meetup={meetup}
    />
  )
}

export default HomeContainer
