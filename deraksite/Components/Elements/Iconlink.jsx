import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid, Link, Typography } from '@material-ui/core';

export default function Iconlink(props){

    return(
        <form className="linkform">
         <Grid container> 
       
         <Link className="iconformcontact" href={props.linkicon}>
         < ArrowBackIcon  style={{ fontSize: 25 }} className="iconinsta" />
         </Link>
     
   <Link > 
    <Typography   style={{ color:'white',fontSize:'18px',padding:'5px' }} className="linkp">
        {props.children}
     </Typography></Link></Grid> 
     <hr className="linkhr" />

        </form>
    )
}