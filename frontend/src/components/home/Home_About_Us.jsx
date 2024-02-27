import img_pic from '../assets/img/pc_img.jpg'
import { Link } from 'react-router-dom'

function Home_About_Us() {
  return (
    <section className='home_about_us grid lg:grid-cols-2 items-center grid-cols-1'>
        <div className='home_text_about_us'>
            <h1>Build In Your Own Pc Rent</h1>
            <p className='italic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
            <div className='home_text_about_us_btn'>
                <Link className='home_text_about_us_btn_link italic' to='/'>About</Link>
            </div>
        </div>
        <div className='home_img_about_us'>
            <img src={img_pic} alt="" />
        </div>
    </section>
  )
}

export default Home_About_Us