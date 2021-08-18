import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function Timelinetypetitle(props){

    
    return(
        <Typography className="title"  variant="h6" component="h1" style={{color:'white'}}>
       {props.children}
      </Typography>

    )
}