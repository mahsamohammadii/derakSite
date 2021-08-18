import { Grid } from '@material-ui/core'
import React from 'react'
import Image from '../Elements/image'
import Contactusbox from '../Partials/Contactusbox'
export default function Contactus() {
    return (
        <Grid container spacing={2}>
            <Grid item md={6}>
              <Contactusbox/>
            </Grid>
            <Grid item md={6}>
                 <Image  width="100%" height="300px" src="/static/marketing1.jpg" alt="ax"/>
            </Grid>
        </Grid>
    )
}
