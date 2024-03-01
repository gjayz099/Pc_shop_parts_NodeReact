

function Contact_Us() {
  return (
    <section className="container mx-auto xl:px-4 lg:px-2 md:px-1 sm:px-0 px-0 py-5">
        <div className="contact_us_row container mx-auto px-24 contact_us_row grid">
            <div className="contact_us_item py-10">
                <div className="contact_us_tittle_parag">
                    <h1 className="my-2">Office Information</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing eli.</h4>
                </div>
                <div className="contact_us_items_office grid py-9">
                    <div className="contact_us_item_office">
                        <h2 className="my-2 italic py-3">OFFICE ONE</h2>
                        <h3 className="italic">Main Office</h3>
                        <h3 className="italic">+63 9345698501</h3>
                        <h3 className="italic">+63 9145885501</h3>
                        <h6 className="italic">supportpcshp@gamil.com</h6>
                    </div>
                    <div className="contact_us_item_office">
                        <h2 className="my-2 italic py-3">OFFICE TWO</h2>
                        <h3 className="italic">Main Shop</h3>
                        <h3 className="italic">+63 9535985501</h3>
                        <h3 className="italic">+63 9545995501</h3>
                        <h6 className="italic">supportpcshp@gamil.com</h6>
                    </div>
                </div>
            </div>

            <div className="contact_us_item_form py-10">
                <div className="contact_us_tittle_parag">
                    <h1 className="my-2">Contact US</h1>
                    <h4 className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
                <form className="contact_us_form grid ">
                    <input className="input_contact_us outline-none my-2 pl-2 py-2" type="text" name="firstname"  placeholder="Your name.."/>
                    <input className="input_contact_us outline-none my-2 pl-2 py-2" type="text" name="lastname" placeholder="Your last name.."/>
                    <input className="input_contact_us outline-none my-2 pl-2 py-2" type="text" name="gnail" placeholder="Your last name.."/>
                    <textarea className="input_contact_us outline-none my-2 pl-2 py-2" name="subject" cols="20" rows="5" placeholder="Write something.."></textarea>
                    <input className="submit_contact_us" type="submit" value="Submit"/>
                </form>
            </div>

        </div>
    </section>
  )
}



export default Contact_Us