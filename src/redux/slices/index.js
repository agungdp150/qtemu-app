import { combineReducers } from '@reduxjs/toolkit'

import {reducer as meetupsReducer} from './meetups.slice'

const rootReducer = combineReducers({
  meetupsReducer
})

export default rootReducer
