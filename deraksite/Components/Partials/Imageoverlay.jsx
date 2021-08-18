import React from 'react';
import {Typography,Grid, Link} from '@material-ui/core';


export default function Imageoverlay(props){
    // const classes = useStyles();
    // const src=require('C:/Users\InteL\Desktop\nextproject\next-app\public\static');
      return(
        <Grid container>
          <Grid className="container"> <img className="image" src={props.srcoverlay} alt={props.altoverlay}  />

             <Typography  className="overlay">
                <Link href={props.linkoverlay} className="text" style={{textDecoration:'none'}}>{props.titleoverlay}
                </Link>
             </Typography>
             </Grid>
        </Grid>



      );
}