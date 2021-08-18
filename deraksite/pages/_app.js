import '../styles/globals.css'
import MuiTheme from '../public/muiTheme'
function MyApp({ Component, pageProps }) {
  return <MuiTheme><Component {...pageProps} /></MuiTheme>
}

export default MyApp
