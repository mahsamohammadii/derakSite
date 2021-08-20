import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MyIconButton from '../Elements/MyIconbutton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import Typographyp from '../Elements/Typographyp';

const useStyles = makeStyles({
    
    gridp:{
       margin:'12px',
       
      
    },
    gridp2:{
     textAlign:'center',
      justifyItems:'center',
      
    }
  });


export default function Footercontact(){
    const classes = useStyles();
    const wtapp=<WhatsAppIcon style={{color:'blue',justifyContent:'center',margin:'3.5px',fontSize:'25px'}}/>
    const mail=<MailOutlineIcon style={{color:'blue',justifyContent:'center',margin:'3.5px',fontSize:'25px'}}/>
    const insta=<InstagramIcon style={{color:'blue',justifyContent:'center',margin:'3.5px',fontSize:'25px'}}/>
    const call=< CallIcon style={{color:'blue',justifyContent:'center',margin:'3.5px',fontSize:'25px'}}/>
    return(
        <Grid   style={{backgroundColor:'black',width:'100%'}}>
          <Grid   item md={12} container style={{direction:'rtl',padding:'3px'}}>
        <Grid item md={2} className={classes.gridp}> <Typographyp text=" ارتباط سریع" color="white" size="18px" >
             
         </Typographyp></Grid> 
         <Grid item md={7}>
        <form >

             <MyIconButton icon={wtapp} linksocial="#"/>
             <MyIconButton icon={mail} linksocial="#"/>
             <MyIconButton icon={insta} linksocial="#"/>
             <MyIconButton icon={call} linksocial="#"/>
             
        </form></Grid>
        <Grid item md={2} className={classes.gridp2}> <Typographyp text=" کلیه حقوق محفوظ است" color="white" size="18px">
          
         </Typographyp></Grid> 
       </Grid>
        </Grid>
    )

}