import {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BiMenu, BiAlignMiddle } from 'react-icons/bi'
import { useAuth } from '../context/AuthContext'


function Navbar() {
    const [ navMenu, setNavMenu ] = useState(false)
    const [ StickyNav, setStickyNav ] = useState(false)
    const { logout }  = useAuth()
    const navigate = useNavigate()

    const Login = localStorage.getItem('isLogin')
    const Role = localStorage.getItem('Role')


    const menuclickMenu = () => {
        setNavMenu(!navMenu)
    }


    // Scrool Bar
    const StickyScroll = () =>{
        if(window.scrollY >= 70)
        setStickyNav(true)
        else{
        setStickyNav(false) 
        }
    }
     
    const handleLogout = () => {
        logout()
        navigate('/')
    }
    
    
    useEffect(() => {
        window.addEventListener('scroll', StickyScroll)
    })

    
  return (
    <nav className={StickyNav? 'stikyscrool flex items-center overflow-hidden text-center absolute justify-between': 'overflow-hiddenitems-center flex text-center absolute justify-between'}>
        <div className='logo uppercase italic'>
            <a href="">GJAYZ<span> PC PARTS</span></a>
        </div>
        <ul className={navMenu? 'menuOpen':''}>
            <li>
                <Link onClick={menuclickMenu} className='mx-3' to='/'>Home</Link>
            </li>
            <li>
                <Link onClick={menuclickMenu} className='mx-3' to='/pricing'>Pricing</Link>
            </li>
            <li>
                <Link onClick={menuclickMenu} className='mx-3' to='/team'>Team</Link>
            </li>
            <li>
                <Link onClick={menuclickMenu} className='mx-3' to='/contact'>Contact</Link>
            </li>
        
          
          {Login ? (
                <li>
                  <Link onClick={menuclickMenu} className='mx-3' to='/user/dashboard'>Dashboard</Link>
                </li>
            ) : (
                <li>
                    <Link onClick={menuclickMenu} className='mx-3' to='/login'>Login</Link>
                </li>
            )}
            {Login && (
                <li onClick={menuclickMenu}>
                    <Link onClick={handleLogout} className='mx-3' to='/'>Logout</Link>
                </li>
            )}



          
           
           

           
           

        </ul>
        <div className={navMenu? 'menuHum openMenu' : 'menuHum'} >
           {navMenu?
            <BiAlignMiddle onClick={menuclickMenu}  className='cursor-pointer menubar'/>
            :
           <BiMenu onClick={menuclickMenu} className='cursor-pointer menubar' /> }
        </div>
    </nav>
  )
}

export default Navbar