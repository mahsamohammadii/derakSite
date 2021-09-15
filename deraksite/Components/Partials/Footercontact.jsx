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
       margin:'2px',
       
      
    },
    gridp2:{
     textAlign:'center',
      justifyItems:'center',
      marginLeft:'-150px'
      
    }
  });


export default function Footercontact(){
    const classes = useStyles();
    const wtapp=<WhatsAppIcon style={{color:'#013A63',justifyContent:'center',margin:'4px',fontSize:'20px'}}/>
    const mail=<MailOutlineIcon style={{color:'#013A63',justifyContent:'center',margin:'4px',fontSize:'20px'}}/>
    const insta=<InstagramIcon style={{color:'#013A63',justifyContent:'center',margin:'4px',fontSize:'20px'}}/>
    const call=< CallIcon style={{color:'#013A63',justifyContent:'center',margin:'4px',fontSize:'20px'}}/>
    return(
        <Grid   style={{backgroundColor:'#013A63',width:'100%',flex:'1'}}>
          <Grid   item md={12} container style={{direction:'rtl',padding:'3px'}}>
        <Grid item md={2} className={classes.gridp}> <Typographyp text=" ارتباط سریع" color="white" size="16px" >
             
         </Typographyp></Grid> 
         <Grid style={{marginRight:'-90px'}} item md={4}>
        <form >

             <MyIconButton icon={wtapp} linksocial="#"/>
             <MyIconButton icon={mail} linksocial="#"/>
             <MyIconButton icon={insta} linksocial="#"/>
             <MyIconButton icon={call} linksocial="#"/>
             
        </form></Grid><Grid item md={4}></Grid>
        <Grid item md={2} className={classes.gridp2} style={{direction:'ltr'}}> <Typographyp text=" کلیه حقوق محفوظ است" color="white" size="16px" >
          
         </Typographyp></Grid> 
       </Grid>
        </Grid>
    )

}