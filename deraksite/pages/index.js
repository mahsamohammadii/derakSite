import { Grid } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Articledetail from '../Components/Component/Articledetail'
import Articlepage from '../Components/Component/Articlepage'
import Contactus from '../Components/Component/Contactus'
import Header from '../Components/Component/Header'
import Homepage from '../Components/Component/Homepage'
import Loginform from '../Components/Partials/Loginform'
import login from '../Components/Component/Login'
import Login from '../Components/Component/Login'
import Contactuspage from '../Components/Component/Contactuspage'
import { BrowserRouter } from 'react-router-dom'

export default function Home() {
  return (
    <Grid style={{direction:'rtl'}}>
  
   <BrowserRouter>
      <Homepage/>
    </BrowserRouter>,
    </Grid>
  )
}
