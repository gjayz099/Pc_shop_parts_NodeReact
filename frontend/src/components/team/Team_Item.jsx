import profile_img1 from '../assets/img/profile_img1.jpg'
import profile_img2 from '../assets/img/profile_img2.jpg'
import profile_img3 from '../assets/img/profile_img3.jpg'
import profile_img4 from '../assets/img/profile_img4.jpg'
import { BiLogoFacebookSquare, BiLogoTwitter , BiLogoInstagramAlt } from 'react-icons/bi'

function Team_Item() {

    const Team_Data = [
        {
            "id": 1,
            "img" : profile_img1,
            "name" : "Gerald Glen Dangcalan",
            "position" : "Manager",
            "parag" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae",
            "linkFb" : "https://www.facebook.com/geraldglen.dangcalan/",
            "linkTw" : "https://twitter.com/dgeraldglen",
            "linkInta" : "fasdasdasdasdsa"
        },
        {
            "id": 2,
            "img" : profile_img2,
            "name" : "Vhina Tamayo",
            "position" : "Secretary",
            "parag" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae",
            "linkFb" : "https://www.facebook.com/geraldglen.dangcalan/",
            "linkTw" : "https://twitter.com/dgeraldglen",
            "linkInta" : "fasdasdasdasdsa"
        },
        {
            "id": 3,
            "img" : profile_img3,
            "name" : "Mary Chell Castro",
            "position" : "Sale Lady",
            "parag" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae",
            "linkFb" : "https://www.facebook.com/geraldglen.dangcalan/",
            "linkTw" : "https://twitter.com/dgeraldglen",
            "linkInta" : "fasdasdasdasdsa"
        },
        {
            "id": 4,
            "img" : profile_img4,
            "name" : "Jerry Sumaganday JR",
            "position" : "Technician",
            "parag" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae",
            "linkFb" : "https://www.facebook.com/geraldglen.dangcalan/",
            "linkTw" : "https://twitter.com/dgeraldglen",
            "linkInta" : "fasdasdasdasdsa"
        }
]

    return (
        <section className="team_section">
            <div className="team_row grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 ">
                {Team_Data.map((item, id) => {
                    return(
                    <div key={id} className="team_item py-10">
                        <div className="team_item_img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className='text_team py-10 text-center px-1'>
                            <h2 className='italic py-1'>{item.name}</h2>
                            <h5 className='italic py-2'>{item.position}</h5>
                            <p className='py-2'>{item.parag}</p>
                        </div>
                        <div className='team_socail_media flex m-auto justify-center gap-12'>
                            <a href=""><BiLogoFacebookSquare className='icon_team'/></a>
                            <a href=""><BiLogoTwitter className='icon_team'/></a>
                            <a href=""><BiLogoInstagramAlt className='icon_team'/></a>
                        </div>
                    </div>
                    )
                })  
                }

            </div>
        </section>
    )
}

export default Team_Item