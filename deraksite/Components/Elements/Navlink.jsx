import React from 'react';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Navhr from '../Elements/Navhr';

export default function Navlink(props){

  const preventDefault = (event) => event.preventDefault();
  
    return(
      <Grid  className="navroot">
        <Link className="navlink" href={props.href} style={{textDecoration:'none',color:props.color}} onClick={preventDefault} >
        {props.title}  
         <Navhr color={props.hrColor}/>
        </Link> 
        </Grid>
    );
}