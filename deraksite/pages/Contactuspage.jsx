import { Grid } from '@material-ui/core'
import React from 'react'
import Contactus from '../Components/Component/Contactus'
import Header from '../Components/Component/Header'
import Login from '../Components/Component/Login'
import Footer from '../Components/Component/Footer'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactMapGL from 'react-map-gl';
import { Popup } from 'mapir-react-component/node_modules/react-mapbox-gl'

export default function Contactuspage(props) {
    return (
        <Grid>
            <Header/>
           <Grid>
               <Grid style={{marginTop:'20px',marginBottom:'50px'}}>
             <Contactus/></Grid>
             <hr/>
             <hr/>
              
              <Grid style={{height:'700px',width:'100%'}}>
                  {/* <Map style={{height:'700px',width:'100%'}} google={props.google} zoom={14}>
 
        <Marker onClick={Marker}
                name={'Current location'} />
 
        <InfoWindow onClose={InfoWindow}>
          
        </InfoWindow>
      </Map> */}

<ReactMapGL
  mapStyle="mapbox://styles/mapbox/streets-v11"
  mapboxApiAccessToken={process.env.MAPBOX_KEY}
  {...viewport}
  onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
  {locations.map((location) => (
    <div key={location.id}>
      <Marker
      latitude={location.center[1]}
      longitude={location.center[0]}
      offsetLeft={-20}
      offsetTop={-10}>
        <a onClick={() => {
          setSelectedLocation(location);
        }}>
          <span role="img" aria-label="push-pin">📌</span>
        </a>
      </Marker>
      {selectLocation.id === location.id ? (
      <Popup
      onClose={() => setSelectedLocation({})}
      closeOnClick={true}
      latitude={location.center[1]}
      longitude={location.center[0]}>
        {location.place_name}
      </Popup>) : (false)}
    </div>
  ))}
</ReactMapGL>

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

// export default GoogleApiWrapper({
//   apiKey: ("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY3NTZmN2EzYjNkZjEyYjQ4ZjI5NjlkMDc5Y2UyY2MxOTBjNzllNjhiODVkMmM4ZDRkMWNlNjZiY2ZlNTA0ZjI2ODI1MDFjMTU0YzMwZWQzIn0.eyJhdWQiOiIxMTUzMSIsImp0aSI6IjY3NTZmN2EzYjNkZjEyYjQ4ZjI5NjlkMDc5Y2UyY2MxOTBjNzllNjhiODVkMmM4ZDRkMWNlNjZiY2ZlNTA0ZjI2ODI1MDFjMTU0YzMwZWQzIiwiaWF0IjoxNjA1Njg5MDI1LCJuYmYiOjE2MDU2ODkwMjUsImV4cCI6MTYwODE5NDYyNSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.AbIUoZIW_L0Mjdo7HkVqJ78tlL-fvd5Zy3nADOXjLCxZ-z4KcqXJoZzOrodcjaWLytf0__1-tzmUvTABTUu-1CgKFtHCcsrIZHxtAMZHc68z3J4SYrpHT7bDMnFhC8aumN059KXrFZG38sIHPHWgUvS8ufoEFdpcs8PJiRhALYS66VF6Zn5gS35iqelT8akxw91NFS819qqL0jvdDpxlJiNEsTUg2jBUfnyc904u51ODLgWgtDhByFGzFUC-JkEHYPfBZJy63PvrZ30yQ7-9eTeMa6P_Cibp4jlEz-McZEurAtjAxaXXe4oV8cGqyeUQjs9b8wD-FrVRcDP1hU2YMQ")
// })(Contactuspage)
