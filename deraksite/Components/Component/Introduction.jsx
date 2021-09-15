import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Image from '../Elements/image';
import Navhr from '../Elements/Navhr';
import Navlink from '../Elements/Navlink';




export default function Introduction(){
       
        return(

                <Grid  style={{direction:'rtl' , margin:'20px'}}>
     
                <Grid container spacing={3}>
                  <Grid item md={4} xs={12}>
                    
                    <Image width='100%' height='330px' src='/static/background1.jpg' alt='derak' />
                    
                  </Grid>
                  <Grid item md={8} xs={12} style={{marginTop:'2px'}} >
                   
                    <Typography  style={{color:'#013A63',margin:'40px',fontSize:'18px'}}>
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
                    </Typography>
                   <Grid className="gridbutton" style={{direction:'ltr'}}>
                    <Navlink color="#013A63" href='#' title="بیشتر بخوانید" hrColor='blue'/>
                     
                    </Grid>
                  
                  </Grid>
                 
                </Grid>
              </Grid>
        )

}