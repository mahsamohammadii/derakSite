import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Colunmonefooter from '../Partials/Columnonefooter';
import Colunmtwofooter from '../Partials/Columntwofooter';
import Colunmthreefooter from '../Partials/Columnthreefooter';
import Footercontact from '../Partials/Footercontact';

export default  function Footer(){

    return(
        <Grid style={{backgroundColor:'#0a28ac;',padding:'5px'}}>
        <Grid container  style={{padding:'5px',direction:'rtl'}}>
          
        <Grid style={{padding:'30px',direction:'rtl'}} item md={4} sx={12}>
            <Colunmonefooter  />
        </Grid>
        <Grid style={{padding:'30px',direction:'rtl'}} item md={4} xs={12}>
            <Colunmtwofooter />
        </Grid>
        <Grid style={{padding:'30px',direction:'rtl',marginTop:'10px'}} item md={4} xs={12} >
            <Colunmthreefooter/>
        </Grid>
           
        </Grid>
        <Footercontact/>
        </Grid>
    )
}