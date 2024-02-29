import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Pricing from "./components/pricing/Pricing"
import Team from "./components/team/Team"
import Contact from "./components/contact/Contact"

function App() {

  return (
    <>
   <Router>
    <Navbar/>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/team' element={<Team/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes> 

  </Router> 
    </>
  )
}

export default App
