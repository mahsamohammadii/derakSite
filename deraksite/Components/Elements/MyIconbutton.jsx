import React from 'react';
import Link from '@material-ui/core/Link';

export default function MyIconButton(props){
       
    return(
        <form style={{width:'29px',height:'29px'}} className="iconacontact">
         
                 <Link href={props.linksocial}>
                    {props.icon}
                 </Link>
               

        </form>


    )
}