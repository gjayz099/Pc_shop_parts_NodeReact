import { BsPersonFill, BsKey } from 'react-icons/bs'

function Login() {
  return (
    <section className="login_container container px-4 grid">
        <div className="item_login self-center m-auto">
            <div className="text_login_item py-5 text-center">
                <h1 className="italic uppercase mb-2 text-white">Login Acount</h1>
            </div>
            <form className="form_login">
                <div className="item_form_login grid">
                    <label className="my-1 uppercase italic text-white">Username</label>
                    <input type="username" className="text-white user_login py-1 px-3"/>
                    <BsPersonFill className="text-white login_icon"/>
                </div>
                <div className="item_form_login grid">
                    <label className="my-1 uppercase italic text-white">Password</label>
                    <input type="username" className="text-white pass_login py-1 px-3"/>
                    <BsKey className=" text-white login_icon"/>
            
                </div>
                <div className="item_form_login_btn m-auto text-center">
                    <input type="submit" value="Submit" className="cursor-pointer italic text-white mt-10 m-auto BTN_login text-center"/>
                 
                </div>
            </form>
        </div>
    </section>
  )
}

export default Login