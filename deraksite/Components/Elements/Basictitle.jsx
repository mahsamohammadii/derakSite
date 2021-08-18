import React from 'react';
import Link from '@material-ui/core/Link';
export default function Basictitle(props){

    return(
      
        <Link style={{direction:'rtl' ,textDecoration:'none',margin:props.margin, marginTop:props.margintop , fontSize:props.fontsize , color:props.color}} className="basictitle" href={props.href}>
           {props.title} 
       </Link>


    )
}