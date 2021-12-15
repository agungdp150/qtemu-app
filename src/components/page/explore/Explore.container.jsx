import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ExploreScreen from './Explore.screen'
import { useDispatch } from "react-redux"
import { actions } from '../../../redux/slices/meetups.slice'

function ExploreContainer() {
  const dispatch = useDispatch()
  const [meetupsItem, setMeetupsItem] = useState(null)
  
  useEffect(() => {
    getAllMeetups()    
  }, [])

  const getAllMeetups = async () => {
    try {
      const result = await axios.get('https://fierce-wildwood-03231.herokuapp.com/meetups')
      if(result.data) {
        dispatch(actions.setAllMeetups(result.data))
        setMeetupsItem(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <ExploreScreen meetupsItem={meetupsItem}/>
  )
}

export default ExploreContainer
