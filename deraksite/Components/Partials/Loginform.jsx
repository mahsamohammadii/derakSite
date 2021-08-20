import { Grid } from '@material-ui/core'
import React from 'react'
import Inputform from '../Elements/Inputform'
import Navlink from '../Elements/Navlink'

export default function Loginform() {
    return (
        <Grid>
           <Inputform height="45px" title="نام و نام خانوادگی"/> 
           <br/>
           <Inputform height="45px" title="شماره تماس"/> 
           <br/>
           <Inputform height="45px" title="آدرس ایمیل(اختیاری)"/> 
           <br/>
           <Inputform height="100px" title="سوالات خود را از ما بپرسید"/> 
           <br/>
           <Navlink title="ثبت درخواست" href='#' hrColor="blue" color="blue"/>
        </Grid>
    )
}
