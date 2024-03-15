import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Pricing from "./components/pricing/Pricing"
import Team from "./components/team/Team"
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import PrivateLogin from "./components/private/PrivateLogin"
import UserDashborad from "./components/dashboard/User"
import PrivateRoute from "./components/private/PrivateRoute"
import NotFound from "./components/404/NotFound"
function App() {

  
  return (
    <Router>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<PrivateRoute> 
          <Login /> 
          </PrivateRoute>} />
        <Route path='/user/dashboard' element={<PrivateLogin>
          <UserDashborad />
          </PrivateLogin>} />
        <Route path='/signup' element={<Signup />} />


        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
