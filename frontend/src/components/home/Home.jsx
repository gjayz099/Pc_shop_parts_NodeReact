import Home_About_Us from "./Home_About_Us"
import Home_Blog from "./Home_Blog"
import Home_Header from "./Home_Header"
import Image_Home_Conteainer from './Image_Home_Conteainer'
import Home_Service from './Home_Service'
import Home_Ratings from "./Home_Ratings"

function Home() {
  return (
    <>
    <Home_Header/>
    <Home_About_Us/>
    <Home_Ratings/>
    <Home_Blog/>
    <Image_Home_Conteainer/>
    <Home_Service/>

    </>

  )
}

export default Home