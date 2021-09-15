import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Navlink from '../Elements/Navlink'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MyIconButton from '../Elements/MyIconbutton';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function Contactusbox() {

    const wtapp=<WhatsAppIcon style={{color:'white',justifyContent:'center',margin:'4px',fontSize:'30px',backgroundColor:'#013A63',borderRadius:'100px',padding:'3px'}}/>
    const tele=<TelegramIcon style={{color:'white',justifyContent:'center',margin:'2.5px',fontSize:'30px',backgroundColor:'#013A63',borderRadius:'100px',padding:'3px'}}/>
    const insta=<InstagramIcon style={{color:'white',justifyContent:'center',margin:'2.5px',fontSize:'30px',backgroundColor:'#013A63',borderRadius:'100px',padding:'3px'}}/>
   

    return (
    <Grid >
        
       <Grid style={{direction:'rtl',marginTop:'40px'}}>
          <Grid container item xs={12} >
              <Grid item md={4} xs={4}>
                  <Typography style={{fontSize:'20px' ,color:'#005091'}}>
                      تلفن تماس
                  </Typography>
                  <Typography style={{fontSize:'16px',color:'#005091'}}>
                      09123456789
                      <br/>
                      07131234567
                  </Typography>
              </Grid>
              <Grid item md={4} xs={8}>
                  <Navlink style={{color:'#005091'}} title="الان تماس بگیرید" href='#' hrColor="#005091" color="#005091"/>
              </Grid>
            </Grid> 
            <hr style={{width:'500px',textAlign:'right'}}/>
            <br/>
            <Grid className="contactusvertical">
            <Typography style={{fontSize:'20px' ,color:'#005091',margin:'10px'}}>
                     شبکه های اجتماعی ما
                  </Typography>
                  <form>
                   
             <MyIconButton  icon={wtapp} linksocial="#"/>
            <MyIconButton icon={tele} linksocial="#"/>
             <MyIconButton icon={insta} linksocial="#"/>
                  </form>
            </Grid>
            <br/>
            <Grid>
                <Typography style={{fontSize:'18px' ,color:'#005091'}}>
                    آدرس 
                    <br/>
                    شیراز-چهارراه هوابرد- نبش کوچه 24- طبقه اول واحد 3
                </Typography>
            </Grid>
       </Grid>
       </Grid>
    )
}


