import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi'

function Footer() {
  return (
    <section className="footer_container mt-10">
        <div className="content_footer_row">
            <div className="content_footer_item">
                <a className="logo_footer" href="">GJAYZ<span> PC PARTS</span></a>
                <div className="contact-details py-5">
                  <li className=" py-2 ">
                    Call Us:
                    <a className=" ml-2 italic" href="#">011-23456789</a>
                  </li>
                  <li>
                
                    <a className="italic" href="#">support@scd.com</a>
                  </li>
                  <div className='footer_social flex gap-5'>
                      <BiLogoFacebookSquare className='sofooter_social_item' href='#'/>
                      <BiLogoTwitter className='sofooter_social_item'/>
                      <BiLogoInstagramAlt className='sofooter_social_item'/>
                  </div>
                </div>
            </div>

            <div className="content_footer_item">
                <h4 className="footer-widget-title">Popular Category</h4>
                <div className="footer-widget mt-5">
                  <li>
                    <a className="italic" href="#">ViteJS Theme</a>
                  </li>
                  <li>
                    <a className="italic" href="#">ReactJS Template</a>
                  </li>
                  <li>
                    <a className="italic" href="#">Tailwind Css Theme</a>
                  </li>
                  <li>
                    <a className="italic" href="#">HTML5 Template</a>
                  </li>
                </div>
            </div>

            <div className="content_footer_item">
                <h4 className="footer-widget-title">Our Company</h4>
                <div className="footer-widget mt-5">
                  <li>
                    <a className="italic" href="#">About Us</a>
                  </li>
                  <li>
                    <a className="italic" href="#">How It Works</a>
                  </li>
                  <li>
                    <a className="italic" href="#">Contact Us</a>
                  </li>
                  <li>
                    <a className="italic" href="#">Plan & Pricing</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </div>
                
            </div>

            <div className="content_footer_item">
                <h4 className="footer-widget-title">Help Support</h4>
                <div className="footer-widget mt-5">
                  <li>
                    <a className="italic" href="#">Support Forum</a>
                  </li>
                  <li>
                    <a className="italic" href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a className="italic" href="#">Support Policy</a>
                  </li>
                  <li>
                    <a className="italic" href="#">FAQs</a>
                  </li>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Footer