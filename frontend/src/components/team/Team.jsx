import All_Header from "../all_header/all_Header"
import Team_Item from "./Team_Item"
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Team() {
  return (
    <>
    <Navbar/>
    <All_Header content="My Team"/>
    <Team_Item/>
    <Footer/>
    </>
  )
}

export default Team
