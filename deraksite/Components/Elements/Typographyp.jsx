import React from 'react';
import { Typography } from '@material-ui/core';

export default function Typographyp(props){

    return(
      
        <Typography style={{fontSize:props.size,marginTop:'10px',margin:'10px' ,color:props.textcolor}} className="typemain">
            {props.text}
        </Typography>


    )
}