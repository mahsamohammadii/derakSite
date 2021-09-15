import { Grid } from '@material-ui/core';
import React from 'react';
import Basictitle from '../Elements/Basictitle';
import BasicImageList from '../Partials/imagelist';
// import styles from '../../styles/Home.module.css';




export default function Service(){


    return(

        <Grid justify="center" container className="articlegrid">
         <Grid style={{marginBottom:'40px',textAlign:'right',marginRight:'60px'}} item xs={12}>
          <Basictitle  color="#013A63" title="خدمات ما" fontsize="30px"  href="#"/>
           </Grid>     
         <Grid item xs={12} md={8}>
               
         <BasicImageList/>
         </Grid>

        </Grid>

    )
}