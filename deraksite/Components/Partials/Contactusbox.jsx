import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Navlink from '../Elements/Navlink'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MyIconButton from '../Elements/MyIconbutton';
import TelegramIcon from '@material-ui/icons/Telegram';
import Basictitle from '../Elements/Basictitle';
export default function Contactusbox() {

    const wtapp=<WhatsAppIcon style={{color:'blue',justifyContent:'center',margin:'3.5px',fontSize:'25px'}}/>
    const tele=<TelegramIcon style={{color:'blue',justifyContent:'center',margin:'3.5px',fontSize:'25px'}}/>
    const insta=<InstagramIcon style={{color:'blue',justifyContent:'center',margin:'3.5px',fontSize:'25px'}}/>
   

    return (
    <Grid>
        <Basictitle/>
       <Grid style={{direction:'rtl',marginTop:'40px'}}>
          <Grid container item xs={12}>
              <Grid item xs={4}>
                  <Typography style={{fontSize:'20px' ,color:'darkblue'}}>
                      تلفن تماس
                  </Typography>
                  <Typography style={{fontSize:'18px',color:'darkblue'}}>
                      09123456789
                      <br/>
                      07131234567
                  </Typography>
              </Grid>
              <Grid item xs={4}>
                  <Navlink title="الان تماس بگیرید" href='#' hrColor="blue" color="blue"/>
              </Grid>
            </Grid> 
            <Grid>
            <Typography style={{fontSize:'20px' ,color:'#081741'}}>
                     شبکه های اجتماعی ما
                  </Typography>
                  <form>
             <MyIconButton icon={wtapp} linksocial="#"/>
             <MyIconButton icon={tele} linksocial="#"/>
             <MyIconButton icon={insta} linksocial="#"/>
                  </form>
            </Grid>
            <Grid>
                <Typography>
                    آدرس 
                    <br/>
                    شیراز-چهارراه هوابرد- نبش کوچه 24- طبقه اول واحد 3
                </Typography>
            </Grid>
       </Grid>
       </Grid>
    )
}


