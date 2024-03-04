import { useState, useEffect } from 'react'

import { BsPersonFill, BsKey } from 'react-icons/bs'


function Login() {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errMsg, setErrMsg ] = useState("")
    const [ errMsghide, setErrMsghide] = useState(false)
    // const [ isloginUser, setLoginUser] = useState(false)




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
            });
            const data = await response.json()
            if(response.status == 201){
         
                console.log(username)
                console.log(password)
                console.log(data)
                // console.log(name)
                // const name = data.name    
             
            }else if(response.status == 404){
                setErrMsghide(true)
                setErrMsg("Login failed. Please try again later")
                console.log(data)
                setTimeout(() => {
                    setErrMsghide(false);
                }, 2000)
            }else{
                setErrMsghide(true)
                setErrMsg("Pasword and username no match")
                setTimeout(() => {
                    setErrMsghide(false);
                }, 2000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="login_container container px-4 grid relative">
            <span className={`absolute ${errMsghide ? 'error_message hide_msg_login' : 'error_message'}`}>{errMsg}</span>
            <div className="item_login self-center m-auto">
                <div className="text_login_item py-5 text-center">
                    <h1 className="italic uppercase mb-2 text-white">Login Acount</h1>
                </div>
                <form className="form_login" onSubmit={handleSubmit}>
           
                    <div className="item_form_login grid">
                        <label className="my-1 uppercase italic text-white">Username</label>
                        <input type="username" className="text-white user_login py-1 px-3" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <BsPersonFill className="text-white login_icon"/>
                    </div>
                    <div className="item_form_login grid">
                        <label className="my-1 uppercase italic text-white">Password</label>
                        <input type="username" className="text-white pass_login py-1 px-3" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <BsKey className=" text-white login_icon"/>
                
                    </div>
                    <div className="item_form_login_btn m-auto text-center">
                 
                        <button type="submit" className="cursor-pointer italic text-white mt-10 m-auto BTN_login text-center">Login</button>
                    
                    </div>
        
                </form>
            </div>
        </section>
    )
}

export default Login