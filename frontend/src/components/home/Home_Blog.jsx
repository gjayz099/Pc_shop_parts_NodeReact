import imgBlog1 from '../assets/img/blog_img1.jpg'
import imgBlog2 from '../assets/img/blog_img2.jpg'
import imgBlog3 from '../assets/img/blog_img3.jpg'
import imgBlog4 from '../assets/img/blog_img4.jpg'

function Home_Blog() {

    const Blogdata =
    [
        {
            "id" : 1,
            "date" : "June 16",
            "host" : "Admin",
            "paragrap" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta rerum architecto fuga suscipit iusto animi!",
            "img" : imgBlog1
        },
        {
            "id" : 2,
            "date" : "January 2",
            "host" : "Admin",
            "paragrap" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta rerum architecto fuga suscipit iusto animi!",
            "img" : imgBlog2
        },
        {
            "id" : 3,
            "date" : "August 8",
            "host" : "Admin",
            "paragrap" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta rerum architecto fuga suscipit iusto animi!",
            "img" : imgBlog3
        },
        {
            "id" : 4,
            "date" : "April 6",
            "host" : "Admin",
            "paragrap" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta rerum architecto fuga suscipit iusto animi!",
            "img" : imgBlog4
        }
    ]
  return (
    <section className='home_blog_container pb-16'>
        <div className='home_blog_tittle my-20'>
            <h1 className=" text-center m-auto italic">Our Blog</h1>
        </div>
        <div className='home_blog_content lg:grid-cols-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {Blogdata.map(item => {
        return(
            <div key={item.id} className='blog-item my-5'>
                <div className='image_blog'>
                    <img src={item.img} alt="" />
                </div>
                <div className='text_blog flex justify-between mx-10 my-3'>
                    <h5>{item.date}</h5>
                    <h5 className=' text-indigo-600'>{item.host}</h5>
                </div>
                <div className='parg_blog'>
                    <p className='italic'>{item.paragrap}</p>
                </div>
            </div>
            )
        })}
        </div>

    </section>
  )
}

export default Home_Blog