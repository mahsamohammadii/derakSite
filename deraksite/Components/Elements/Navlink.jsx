import React,{component} from 'react';
import Grid from '@material-ui/core/Grid';
import Navhr from '../Elements/Navhr';
import Link from 'next/link'




export default function Navlink(props){

  const preventDefault = (event) => event.preventDefault();
  
    return(
      <Grid  className="navroot">
        
         <Link href={props.href} 
         passHref
         className="navlink"
           style={{textDecoration:'none',color:props.color}}>
             {props.title}  
          </Link> 
                   <Navhr color={props.hrColor}/>
                  
         
        
        </Grid>
    );
}