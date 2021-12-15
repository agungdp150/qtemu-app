import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box';
import HomeContainer from './components/page/homeScreen/Home.container';
import ExploreContainer from './components/page/explore/Explore.container';
import CreateMeetupScreen from './components/page/CreateMeetup.screen';
import Header from './components/ui_component/Header'
import Footer from './components/ui_component/Footer'

// REDUX
import store from './redux/store'
import {Provider} from 'react-redux'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      maxWidth: 1248,
      paddingRight: 24,
      paddingLeft: 24,
      margin: 'auto'
    },
  }),
);

function App() {
  const classes = useStyles()
  return (        
    <Provider store={store}>
      <BrowserRouter>
        <Header/>    
          <Box className={classes.container}>
            <Routes>                      
              <Route path="/" element={<ExploreContainer/>} />          
              <Route path="/create-meetup" element={<CreateMeetupScreen/>} />          
              <Route path="/meetup-detail/:id/page" element={<HomeContainer/>} />                  
            </Routes>
          </Box>
        <Footer/>
      </BrowserRouter>    
    </Provider>
  );
}

export default App;
