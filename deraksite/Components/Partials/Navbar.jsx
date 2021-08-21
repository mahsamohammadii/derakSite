import { Grid } from '@material-ui/core';
import React from 'react';
import Navlink from '../Elements/Navlink';


export default function Navbar(){
    // const navlink=<Navlink style={{display:'flex'}}/>

    return(
         <Grid container style={{direction:'rtl'}}>

      <Navlink to="/Components/Component/Homepage.jsx" title="خانه"  hrColor="white" color="white"/>
         
    
      <Navlink title="درباره ی ما"  hrColor="white" color="white"/>
         
    
      <Navlink title="خدمات برندینگ" href='#' hrColor="white" color="white"/>
      

      <Navlink title="دوره ی برندینگ" href='#' hrColor="white" color="white"/>
         
      

      <Navlink to="/Components/" title="مقالات" href='#' hrColor="white" color="white"/>
       
      

      <Navlink title="ارتباط با ما"  href='#' hrColor="white" color="white"/>
        
      

      <Navlink title="عضویت در خبر نامه" href='#' hrColor="white" color="white"/>
       
     


        </Grid>
    )
}