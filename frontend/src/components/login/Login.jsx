import { useState, useEffect } from 'react'
import { BsPersonFill, BsKey } from 'react-icons/bs'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate  } from 'react-router-dom'



const Login = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errMsg, setErrMsg ] = useState("")
    const [ errMsghide, setErrMsghide] = useState(false)
    const navigate = useNavigate()
    const { login }  = useAuth()


    

    useEffect(() => {
        setErrMsg('')
    }, [username, password])




    const handleSubmit  = async (e) => {
        
        e.preventDefault()
        
        try {
            const response = await fetch("http://localhost:3000/api/accountadmins/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password })
                
            })
            const data = await response.json()
            if(response.status == 201){
                console.log(data)

                login( data.username)
                navigate('/user/dashboard')
                
            }else if(response.status == 404){
                setErrMsghide(true)
                setErrMsg("Login failed. Please try again later")
                console.log(data)
                setTimeout(() => {
                    setErrMsghide(false)
                }, 2000)
            }else{
                setErrMsghide(true)
                setErrMsg("Pasword and username no match")
                setTimeout(() => {
                    setErrMsghide(false)
                }, 2000)
            }
        } catch (error) {
            console.log(error)
            console.log({message: "Error Request"})
        }
    }

    return (
        <section className="login_container container px-4 grid relative">
            <span className={`absolute ${errMsghide ? 'error_message hide_msg_login_signup' : 'error_message'}`}>{errMsg}</span>
            <div className="item_login self-center m-auto">
                <div className="text_login_item py-5 text-center">
                    <h1 className="italic uppercase mb-2 text-white">Login Acount</h1>
                </div>
                <form className="form_login" onSubmit={handleSubmit}>
           
                    <div className="item_form_login grid">
                        <label className="my-1 uppercase italic text-white">Username</label>
                        <input type="username" className="text-white py-1 px-3" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <BsPersonFill className="text-white login_icon"/>
                    </div>
                    <div className="item_form_login grid">
                        <label className="my-1 uppercase italic text-white">Password</label>
                        <input type="password" className="text-white py-1 px-3" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <BsKey className=" text-white login_icon"/>
                
                    </div>
                    <div className="item_form_login_btn m-auto text-center flex">
                 
                        <button type="submit" className="cursor-pointer italic text-white mt-10 m-auto BTN_login text-center">Login</button>
                        <Link className='cursor-pointer italic text-white mt-10 m-auto BTN_login text-center' to='/signup'>Sign up</Link>
                    </div>
        
                </form>
            </div>
        </section>
    )
}

export default Login