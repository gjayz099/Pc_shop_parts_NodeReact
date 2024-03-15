import Home_About_Us from "./Home_About_Us"
import Home_Blog from "./Home_Blog"
import Home_Header from "./Home_Header"
import Home_Image_Conteainer from './Home_Image_Conteainer'
import Home_Service from './Home_Service'
import Home_Ratings from "./Home_Ratings"
import Footer from "../footer/Footer"
import Navbar from '../navbar/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <Home_Header/>
    <Home_About_Us/>
    <Home_Ratings/>
    <Home_Blog/>
    <Home_Image_Conteainer/>
    <Home_Service/>
    <Footer/>
    </>

  )
}

export default Home