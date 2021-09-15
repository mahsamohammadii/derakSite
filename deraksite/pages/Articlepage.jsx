import { Grid } from '@material-ui/core'
import React from 'react'
import Basictitle from '../Components/Elements/Basictitle'
import Articlebox from '../Components/Partials/Articlebox'
import Header from '../Components/Component/Header'
import Footer from '../Components/Component/Footer'

export default function Articlepage() {
    return (   
         <Grid >
         <Header/>
          <Grid style={{marginBottom:'40px',direction:'rtl',marginTop:'40px'}} item xs={12}>
             <Basictitle margin="30px" color="#013A63" title="مقالات ما" fontsize="30px" href="#" />
           </Grid>
         
       <Grid container spacing={4}>
     
            <Grid item md={4} xs={12}>
              <Articlebox articlesrc="/static/pic1.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" />
            </Grid>
            <Grid item md={4} xs={12}>
              <Articlebox articlesrc="/static/pic2.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            <Grid item md={4} xs={12} >
              <Articlebox articlesrc="/static/pic3.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            <Grid item md={4} xs={12} >
              <Articlebox articlesrc="/static/pic4.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            <Grid item md={4} xs={12} >
              <Articlebox articlesrc="/static/pic5.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            <Grid item md={4} xs={12}>
              <Articlebox articlesrc="/static/pic6.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            <Grid item md={4} xs={12} >
              <Articlebox articlesrc="/static/pic7.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            <Grid item md={4} xs={12}>
              <Articlebox articlesrc="/static/pic8.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
            <Grid item md={4} xs={12}>
              <Articlebox articlesrc="/static/pic9.jpg"  titlearticle="لورم اسپورم" textarticle="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            </Grid>
       </Grid>
       <Footer/>
       </Grid>
    )
}
