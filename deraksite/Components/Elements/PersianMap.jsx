import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import Mapir from "mapir-react-component";
import { setRTLTextPlugin } from "mapbox-gl";
import Autocomplete from '@material-ui/lab/Autocomplete';

const Map = Mapir.setToken({
    transformRequest: (url) => {
        return {
            url: url,
            headers: {
                'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY3NTZmN2EzYjNkZjEyYjQ4ZjI5NjlkMDc5Y2UyY2MxOTBjNzllNjhiODVkMmM4ZDRkMWNlNjZiY2ZlNTA0ZjI2ODI1MDFjMTU0YzMwZWQzIn0.eyJhdWQiOiIxMTUzMSIsImp0aSI6IjY3NTZmN2EzYjNkZjEyYjQ4ZjI5NjlkMDc5Y2UyY2MxOTBjNzllNjhiODVkMmM4ZDRkMWNlNjZiY2ZlNTA0ZjI2ODI1MDFjMTU0YzMwZWQzIiwiaWF0IjoxNjA1Njg5MDI1LCJuYmYiOjE2MDU2ODkwMjUsImV4cCI6MTYwODE5NDYyNSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.AbIUoZIW_L0Mjdo7HkVqJ78tlL-fvd5Zy3nADOXjLCxZ-z4KcqXJoZzOrodcjaWLytf0__1-tzmUvTABTUu-1CgKFtHCcsrIZHxtAMZHc68z3J4SYrpHT7bDMnFhC8aumN059KXrFZG38sIHPHWgUvS8ufoEFdpcs8PJiRhALYS66VF6Zn5gS35iqelT8akxw91NFS819qqL0jvdDpxlJiNEsTUg2jBUfnyc904u51ODLgWgtDhByFGzFUC-JkEHYPfBZJy63PvrZ30yQ7-9eTeMa6P_Cibp4jlEz-McZEurAtjAxaXXe4oV8cGqyeUQjs9b8wD-FrVRcDP1hU2YMQ', //Mapir access token
                'Mapir-SDK': 'reactjs'
            }
        }

    }
});
const styles = {}




class PersianMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [51.420470, 35.729054],
            locationSearch: { value: [] },
            disableAutoComplete: false
        }
        this.setMarkerCenter = this.setMarkerCenter.bind(this);
    }
    

    setMarkerCenter(loc) {
        this.setState({ center: loc })
        this.props.MapChangeProp('location', loc);
    }

    render() {
        const {
            center,
            locationSearch,
            disableAutoComplete
        } = this.state;
        const {
            classes,
            zoom,
            userLocation,
            address

        } = this.props;
        return (
            <Grid container direction='column' >
                <Grid item xs={12} >
                    <Autocomplete
                        options={locationSearch.value}
                        freeSolo
                        disabled={disableAutoComplete}
                        getOptionLabel={(location) => location.title + ' ' + location.province + ' ' + location.city}
                        id={(location) => location.address}
                        onChange={(event, location) => {

                            if (location)
                            //set location
                            {
                                this.props.getMapAddressByLanLng(location.geom.coordinates[1], location.geom.coordinates[0])
                                this.setState({ center: location.geom.coordinates, disableAutoComplete: true })

                            }
                        }}
                        onClick={() => {
                            this.setState({ disableAutoComplete: false })
                        }}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField
                            fullWidth
                            onChange={(e) => {
                                this.props.searchLocationByAddress(e.target.value,
                                    (response) => {
                                        this.setState({ locationSearch: response })
                                    })

                                this.setState({ locationToSearch: e.target.value })
                            }}
                            {...params}
                            label="مکان خود را جستجو کنید" margin="normal" />}
                    />
                    {/* <Button
                        onClick={(e) => { this.props.searchLocationByAddress(this.state.locationToSearch, (response) => { this.setState({ locationSearch: response }) }) }}
                        color="primary">جستجو</Button> */}
                </Grid>
                {address && <Grid item xs={12} justify='flex-start'>مکان شما : {address}</Grid>}
                <Mapir Map={Map}
                    // zoom={zoom}
                    onDrag={(map, e) => {
                        this.setMarkerCenter([map.getCenter().lng, map.getCenter().lat])
                    }}
                    onZoom={(map, e) => {
                        this.setMarkerCenter([map.getCenter().lng, map.getCenter().lat])
                    }}
                    onStyleLoad={(map, e) => {
                        this.setMarkerCenter([map.getCenter().lng, map.getCenter().lat])
                    }}
                    onDragEnd={(map, e) => { this.props.getMapAddressByLanLng(map.getCenter().lat, map.getCenter().lng) }}
                    center={center} userLocation={userLocation}>
                    <Mapir.Layer
                        type="symbol"
                        layout={{ "icon-image": "harbor-15" }}>
                    </Mapir.Layer>
                    {this.props.markers ? this.props.markers.map((marker, m) => {
                        return (
                            <Mapir.Marker key={m} coordinates={[marker[0], marker[1]]}
                                Image={require('../../public/static/marker.png')}
                                anhcor="top" />
                        )
                    }) :
                        <Mapir.Marker coordinates={center}
                            Image={require('../../public/static/marker.png')}
                            anhcor="top" />
                    }
                </Mapir>
            </Grid>
        );
    }
}


export default PersianMap