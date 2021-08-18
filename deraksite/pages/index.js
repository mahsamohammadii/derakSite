import { Grid } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Articledetail from '../Components/Component/Articledetail'
import Articlepage from '../Components/Component/Articlepage'
import Contactus from '../Components/Component/Contactus'
import Header from '../Components/Component/Header'
import Homepage from '../Components/Component/Homepage'



export default function Home() {
  return (
    <Grid style={{direction:'rtl'}}>
  <Contactus/>
    </Grid>
  )
}
