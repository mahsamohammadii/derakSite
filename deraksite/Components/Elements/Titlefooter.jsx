import React from 'react';
import { Typography } from '@material-ui/core';

export default function Titlefooter(props){

    return(
      
        <Typography style={{fontSize:'20px'}} className="footertitle">
            {props.titlefooter}
        </Typography>


    )
}