import { useState, useEffect } from 'react'
import { BsPersonFill, BsKey } from 'react-icons/bs'


export default function Signup() {
    const [ errorMessage, setErrorMessage] = useState('')
    const [ errMsghide, setErrMsghide] = useState(false)
    const [ name, setName] = useState('')
    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    const [ conpassword, setConpassword] = useState('')


    useEffect(() => {
        setErrorMessage('')
    }, [name,
        username,
        password,
        conpassword])


    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3000/api/accounts/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    username,
                    password,
                    conpassword,
                }),
            })

            const data = await response.json()
            if(response.status == 201){
                console.log(data)
            } else if (response.status === 401) {
                setErrMsghide(true)
                setErrorMessage("This Is Already Taken")
                setTimeout(() => {
                    setErrMsghide(false)
                }, 2500);
            } else {
                setErrMsghide(true)
                setErrorMessage("password not match")
                setTimeout(() => {
                    setErrMsghide(false)
                }, 2500)
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <section className="singup_container container px-4 grid relative">
        <span className={`absolute ${errMsghide ? 'error_message hide_msg_login_signup' : 'error_message'}`}>{errorMessage}</span>
        <div className="item_signup self-center m-auto">
            <div className="text_signup_item py-5 text-center">
                <h1 className="italic uppercase mb-2 text-white">Signup Acount</h1>
            </div>
            <form className="form_sinup" onSubmit={handleSubmit}>
                <div className="item_form_signup grid">
                    <label className="my-1 uppercase italic text-white">Name</label>
                    <input type="username" className="text-white py-1 px-3" value={name} onChange={(e) => setName(e.target.value)} />
                    <BsPersonFill className="text-white signup_icon"/>
                </div>
                <div className="item_form_signup grid">
                    <label className="my-1 uppercase italic text-white">Username</label>
                    <input type="username" className="text-white py-1 px-3" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <BsPersonFill className="text-white signup_icon"/>
                </div>
                <div className="item_form_signup grid">
                    <label className="my-1 uppercase italic text-white">Password</label>
                    <input type="password" className="text-white py-1 px-3" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <BsKey className=" text-white signup_icon"/>
                </div>
                <div className="item_form_signup grid">
                    <label className="my-1 uppercase italic text-white">Confirm Password</label>
                    <input type="password" className="text-white py-1 px-3" value={conpassword} onChange={(e) => setConpassword(e.target.value)}/>
                    <BsKey className=" text-white signup_icon"/>
                </div>
                <div className="item_form_signup_btn m-auto text-center flex">
                    <button type="submit" className="cursor-pointer italic text-white mt-10 m-auto BTN_signup text-center">Submit</button>
                </div>

            </form>
        </div>
    </section>
    
  )
}
