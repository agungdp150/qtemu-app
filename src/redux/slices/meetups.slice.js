import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: null
}

export const meetupsSlice = createSlice({
  name: "meetups",
  initialState,
  reducers: {
    setAllMeetups: (state, action) => {      
      state.datas = action.payload
    }
  }
});


export const meetupsDatasSelector = (state) => state.meetupsReducer.datas

export const { name, actions, reducer } = meetupsSlice
