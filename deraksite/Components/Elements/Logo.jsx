import React from 'react';
import Image from 'next/image'
export default function Logo(props){

        return(

            
             <img className="logofit" src={props.logopic} alt="logo" style={{width:'200px', height: '80px'}}/>
            
        )

}