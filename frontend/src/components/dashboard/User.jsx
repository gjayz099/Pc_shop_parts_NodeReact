import Navbar from '../navbar/Navbar'
import All_Header from '../all_header/all_Header'
import Footer from '../footer/Footer'
import Dashboard from './Dasboard'

const User = () => {
  return (
   <div>
    <Navbar/>
    <All_Header content="Your Dashboard"/>
    <Dashboard/>
    <Footer/>
   </div>
  )
}

export default User
