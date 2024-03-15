
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const IsLogin = localStorage.getItem('isLogin')
  return (
    !IsLogin? children : <Navigate to='/user/dashboard'/>
  )
}

export default PrivateRoute
