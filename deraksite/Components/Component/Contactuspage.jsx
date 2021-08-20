import { Grid } from '@material-ui/core'
import React from 'react'
import Contactus from './Contactus'
import Header from './Header'
import Login from './Login'
import Footer from './Footer'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 function Contactuspage(props) {
    return (
        <Grid>
            <Header/>
           <Grid>
               <Grid style={{marginTop:'20px',marginBottom:'50px'}}>
             <Contactus/></Grid>
             <hr/>
             <hr/>
              
              <Grid style={{height:'700px',width:'100%'}}>
                  <Map style={{height:'700px',width:'100%'}} google={props.google} zoom={14}>
 
        <Marker onClick={Marker}
                name={'Current location'} />
 
        <InfoWindow onClose={InfoWindow}>
          
        </InfoWindow>
      </Map>

              </Grid>
              <hr/>
             <hr/>
             <Grid style={{marginTop:'30px',marginBottom:'20px'}}>
             <Login/></Grid>
           </Grid>
             <Footer/>
        </Grid>
    )
}

export default GoogleApiWrapper({
  apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
})(Contactuspage)