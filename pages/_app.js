import '../styles/globals.css'
import Navbar from '../components/Navbar'
import "@fontsource/rubik-maze"
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
  
}

export default MyApp
