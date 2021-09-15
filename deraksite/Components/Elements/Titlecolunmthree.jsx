import React from 'react';
import { Typography } from '@material-ui/core';

export default function Titlecolunmthree(props){

    return(
         
        <Typography style={{fontSize:'16px'}} className="typefootercolunmthree">
            {props.children}
        </Typography>


    )
}