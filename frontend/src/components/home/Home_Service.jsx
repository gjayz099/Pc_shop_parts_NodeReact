import { BiDesktop, BiPackage, BiDetail } from "react-icons/bi";


function Home_Service() {


    const ServerData = [
        {
            "id": 1,
            "icon": BiDesktop,
            "name": "Buy Online",
            "parg": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur aliquid, vel rem nostrum doloribus."
        },
        {
            "id": 1,
            "icon": BiPackage,
            "name": "Fast Delivery",
            "parg": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur aliquid, vel rem nostrum doloribus."
        },
        {
            "id": 1,
            "icon": BiDetail,
            "name": "Easy To Order",
            "parg": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur aliquid, vel rem nostrum doloribus."
        }
    ]
    return (
    <section className="some_service_container pt-11">
        <div className="some_service_tittle my-10">
            <h1 className="m-auto italic">My Service</h1>
        </div>
        <div className="content_row_items grid pb-6">
            {ServerData.map(item =>{
                return(
                <div key={item.id} className="items_content_service">
    
                    <div className="icon_content_service mb-16">
                        < item.icon className="my_icon_service items-center text-center m-auto"/>
                    </div>
                    <div className="text_content_service">
                        <h1 className="text-center pb-7">{item.name}</h1>
                        <p className="text-center italic">{item.parg}</p>
                    </div>
                </div> 
                )
            })}
           
        </div>
    </section>
  )
}

export default Home_Service