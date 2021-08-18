import React from 'react';
import Basictitle from '../Elements/Basictitle';
import { Grid } from '@material-ui/core';
import Navlink from '../Elements/Navlink';
// import styles from '../../styles/Home.module.css'

export default function Branding(){

    return(

        <Grid className="brandinggrid">
             <Grid style={{marginBottom:'40px',direction:'rtl'}} item xs={12}>
             <Basictitle margin="30px" color="black" title="دوره های برندینگ" fontsize="30px" href="#" />
           </Grid>
         
            <Grid className="brandroot">
      
            <Navlink color='blue' href='#' title="مشاهده همه دوره های ما " hrColor='blue'/>
            </Grid>
            
        </Grid>

    )
}