import { Grid } from '@material-ui/core';
import React from 'react';
import Basictitle from '../Elements/Basictitle';
import Typographyp from '../Elements/Typographyp';
import Loginform from '../Partials/Loginform';

 export default function Login(props) {
    return (
        <Grid style={{height:'700px',}}>
            <Grid style={{marginBottom:'30px'}}>
            <Basictitle margin="10px" marginTop="25px" fontsize="25px"  color="#005091" title="درخواست وقت ملاقات و مشاوره" />
            <Typographyp style={{ opacity: '0.5'}} text="با قرار دادن اطلاعات تماس خود کارشناسان ما با شما ارتباط برقرار میکنند" size="19px"marginTop="5px" textcolor="#005091" />
       </Grid>
        <Grid container className="logingrid">
            <Loginform/>
        </Grid>
        </Grid>
    );
}
