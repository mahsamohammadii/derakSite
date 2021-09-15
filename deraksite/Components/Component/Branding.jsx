import React from 'react';
import Basictitle from '../Elements/Basictitle';
import { Grid } from '@material-ui/core';
import Navlink from '../Elements/Navlink';
// import styles from '../../styles/Home.module.css'

export default function Branding(){

    return(

        <Grid className="brandinggrid">
             <Grid style={{marginBottom:'40px',direction:'rtl'}} item xs={12}>
             <Basictitle margin="30px" color="#013A63" title="دوره های برندینگ" fontsize="30px" href="#" />
           </Grid>
         
            <Grid className="brandroot">
               <Grid className="linkbranding">
            <Navlink color='#0D60B5' href='#' title="مشاهده همه دوره های ما " hrColor='#0D60B5'/>
             </Grid>
            </Grid>
            
        </Grid>

    )
}