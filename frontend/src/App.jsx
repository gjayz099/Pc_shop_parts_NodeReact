import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Pricing from "./components/pricing/Pricing"

function App() {

  return (
    <>
   <Router>
    <Navbar/>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    </Routes> 

  </Router> 
    </>
  )
}

export default App
