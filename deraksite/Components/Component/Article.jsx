import { Grid } from '@material-ui/core';
import React from 'react';
import Articleimglist from '../Partials/Articleimglist';
import Basictitle from '../Elements/Basictitle';


export default function Article(){


    return(

        <Grid  container  style={{marginTop:'50px', marginBottom:'100px'}}>
         <Grid style={{marginBottom:'40px',direction:'rtl'}} item xs={12}>
          <Basictitle margin="30px" color="black" title="مقالات ما" fontsize="30px" href="#" />
           </Grid>     
         <Grid item xs={12} >
               
          <Articleimglist  />
         </Grid>

        </Grid>

    )
}