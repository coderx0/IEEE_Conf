import '../styles/globals.css'
import Navbar from '../components/Navbar'
import "@fontsource/rubik-maze"

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
    <Component {...pageProps} />
  </>
  
}

export default MyApp
