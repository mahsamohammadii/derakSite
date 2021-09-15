import { Grid, Typography } from '@material-ui/core'
import Image from '../Components/Elements/image'
import React from 'react'
import Typographyp from '../Components/Elements/Typographyp'
import Imagearticledetail from '../Components/Partials/Imagearticledetail'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Basictitle from '../Components/Elements/Basictitle';
import Articlebox from '../Components/Partials/Articlebox'
import Header from '../Components/Component/Header'
import Footer from '../Components/Component/Footer'
import {  makeStyles } from "@material-ui/core";
import IconButton from 'material-ui/IconButton';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({

  search: {
      height:'50px',
      border:'solid green',
      position: 'relative',
      borderRadius: '30px',
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width:'300px',
     
    },
    searchIcon: {
      margin:'2px',
      borderRadius:'20px',
      padding: theme.spacing(1, 1),
      height:'40px',
      width:'40px',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      
      color: 'inherit',
     },
     inputInput: {
       padding: theme.spacing(1, 1, 0, 0),
       // vertical padding + font size from searchIcon
       paddingLeft: `calc(1em + ${theme.spacing(8)}px)`,
       fontSize:24,
       width:'50px',
       
       [theme.breakpoints.up('xs')]: {
         width: '15ch',
       },
     },

  
}));

export default function Articledetail() {

  const classes = useStyles();
    return (
        <Grid >
            <Header/>
        <Grid container spacing={2} style={{direction:'rtl',marginTop:'10px'}}>
            <Grid item md={9} xs={12}>
            <Grid >
             <Imagearticledetail /></Grid>
             <Grid>
                 <Typographyp textcolor="#013A63" size="19px" text="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
             </Grid>
             <Grid>
                <Image width="95%" height="350" src="/static/pic8.jpg" alt="ax" border="solid 1px"/>
             </Grid>
             <Grid>
                  <Typographyp textcolor="#013A63" size="19px" text="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
             </Grid>
        </Grid>
        <Grid item md={3}>
            <Grid style={{marginBottom:'30px' ,marginTop:'30px'}}>
            <Typography style={{fontSize:'20px', color:'#013A63'}}>نوشته شده توسط</Typography>  
            <Typography style={{fontSize:'15px', color:'#013A63'}}>علی محمدی</Typography>  
            <Typography style={{fontSize:'15px', color:'#013A63'}}>فاطمه رضایی</Typography>  
            </Grid>
            <Grid style={{marginBottom:'30px' ,marginTop:'30px'}}>
            <Typography style={{fontSize:'20px', color:'#013A63'}}>پست های اخیر</Typography>  
            <Typography style={{fontSize:'15px', color:'#013A63'}}>مهندسی</Typography>  
            <Typography style={{fontSize:'15px', color:'#013A63'}}>شیرینی</Typography>  
            <Typography style={{fontSize:'15px', color:'#013A63'}}>غذا</Typography>  
            </Grid>
            <Grid style={{marginBottom:'30px' ,marginTop:'30px'}}>
            <form  noValidate autoComplete="off">
                <label >
               <Typography style={{fontSize:'20px', color:'#013A63'}}>جست و جو</Typography>      
                </label>
                
                {/* <Grid className={classes.search}>
            <div className={classes.searchIcon}>
            <IconButton
            color="inherit"
            aria-label="search icon"
             ></IconButton>
              <SearchIcon />
              
            </div>
            <InputBase
              placeholder="... جست و جو"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Grid> */}
                 
             
           </form>
            </Grid>
            <Grid style={{marginBottom:'30px' ,marginTop:'70px'}}>
               <Image width="90%" height="450" src="/static/pic16.jpg" alt="ax" />
            </Grid>
            <Grid style={{marginBottom:'30px' ,marginTop:'30px'}}>
                <Image width="90%" height="450" src="/static/pic6.jpg" alt="ax" />
            </Grid>
        </Grid>
        </Grid>

        <Grid style={{marginBottom:'40px',direction:'rtl',marginTop:'40px'}} item xs={12}>
             <Basictitle margin="30px" color="black" title="مقالات مشابه" fontsize="21px" href="#" />
           </Grid>
           <Grid container spacing={3}>
     
            <Grid item md={3} xs={12}>
              <Articlebox articlesrc="/static/pic1.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" />
            </Grid>
            <Grid item md={3} xs={12}>
              <Articlebox articlesrc="/static/pic2.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            <Grid item md={3} xs={12} >
              <Articlebox articlesrc="/static/pic3.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            <Grid item md={3} xs={12} >
              <Articlebox articlesrc="/static/pic4.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            
            </Grid>
            <Footer/>
        </Grid>
    )
}
