import React from 'react';
import Image from 'next/image'
export default function Logo(props){

        return(

            
             <img className="logofit" src={props.logopic} alt="logo" style={{width:'100%', height: '80px'}}/>
            
        )

}