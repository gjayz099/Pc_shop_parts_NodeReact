import All_Header from "../all_header/all_Header"
import Pricing_Item from "./Pricing_Item"
import Footer from "../footer/Footer"
import Navbar from '../navbar/Navbar'


function Pricing() {
  return (
    <>
      <Navbar/>
      <All_Header content="Pricing Item"/>
      <Pricing_Item/>
      <Footer/>
    </>
  )
}

export default Pricing