import React from 'react';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';


export default function Timelineseparator(props){
       
            return(
                <TimelineSeparator>    
          <TimelineDot style={{marginBottom:'15px', marginTop:'15px'}} className="dot1" />
          <TimelineDot style={{marginBottom:'.1px'}}  className="dot"/>
          <TimelineDot style={{marginBottom:'.1px',marginTop:'.1px'}}  className="dot" />
          <TimelineDot style={{marginBottom:'.1px',marginTop:'.1px'}}  className="dot" />
          <TimelineDot style={{marginBottom:'.1px',marginTop:'.1px'}}  className="dot" />
          <TimelineDot style={{marginTop:'.1px'}}  className="dot" />
        </TimelineSeparator>
            )

}