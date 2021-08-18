import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Timelineseparator from '../Elements/Timelineseparator';
import Timelinetypetitle from '../Elements/Timelinetypetitle';


export default function Timelineelement(props) {
 

    return (
  
     
         <TimelineItem>
         
           <Timelineseparator/>
         <TimelineContent>
         <Typography elevation={1} className="paper">
         <Typography className="title"  variant="h6" component="h1" style={{color:'white'}}>
       {props.titletimeline}
      </Typography>
          <Grid >
           <Typography style={{color:'white'}} >
             {props.typetimeline}
                
           </Typography></Grid>
         </Typography>
         </TimelineContent>
         </TimelineItem>

         );
         }
  