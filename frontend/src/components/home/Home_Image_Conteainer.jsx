import { Link } from 'react-router-dom'

function Image_Home_Conteainer() {
  return (
    <section className='image_conteainer items-center m-auto'>
        <div className="content_image_conteainer text-center">
            <h1>Injoy To Build In Your PC</h1>
            <p className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati nostrum, cumque recusandae, asperiores voluptates facilis placeat molestias.</p>
            <div className="content_image_conteainer_btn mt-5">
                <Link className='btn-image_conteainer py-2 px-5' to=''>Buy Now</Link>
            </div>
        </div>
    </section>
  )
}

export default Image_Home_Conteainer