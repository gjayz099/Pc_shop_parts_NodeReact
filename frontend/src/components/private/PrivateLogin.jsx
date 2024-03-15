import { Navigate } from 'react-router-dom'

const PrivateLogin = ({ children }) => {

    const Login = localStorage.getItem('isLogin')

    return (
        Login?  children :  <Navigate to='/login'/>
    )
}

export default PrivateLogin
