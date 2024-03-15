import { useState, useEffect } from "react"
import {BiSolidStar} from 'react-icons/bi'

function Home_Ratings() {
    
    const [ratingsData, setRatingsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/api/pcparts', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer YOUR_TOKEN',
                        "X-Powered-By": "Express",
                    },

                });
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const resultdata = await response.json()
                // Ensure resultdata is an array
                if (!Array.isArray(resultdata)) {
                    throw new Error('Response data is not an array')
                }
                const filteredData = resultdata.filter(item => item.ratings === 5)
                const randomItems = [];
                const maxItems = Math.min(filteredData.length, 4);
                while (randomItems.length < maxItems) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length)
                    const randomItem = filteredData[randomIndex]
                    if (!randomItems.includes(randomItem)) {
                        randomItems.push(randomItem)
                        console.log(randomItem)
                    }
                }
                setRatingsData(randomItems)
            } catch (error) {
                console.log('Error: ', error)
            }
        }
        fetchData()
    }, []);
    



    

    return (
        <section className="home_ratings_container my-24">
            <div className="home_ratings_content mx-10 gap-20 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-center lg:mx-40 md:mx-30">
            {ratingsData.map((item, id) => {
                return(
                    <div key={id} className="home_ratings_row m-auto items-center">
                        <div className="img_home_ratings">
                            <img src={item.image} />
                        </div>
                        <div className="ratings_home_price_qty">

                        </div>
                        <div className="ratings_home flex mx-2 justify-center pt-10 pb-2">
                            {item.ratings === 5 ? (
                                <>
                                <BiSolidStar className="start_ratings"/>
                                <BiSolidStar className="start_ratings"/>
                                <BiSolidStar className="start_ratings"/>
                                <BiSolidStar className="start_ratings"/>
                                <BiSolidStar className="start_ratings"/>
                                </>
                            ): (
                                <h1></h1>
                            )}
                        </div>
                        <div className="ratings_home_avilable">
                            {item.quantity === 0 ? (
                                <h1>Is not available In The Store</h1>
                            ) : (
                                <h1>Available In The Store</h1>
                            )}
                        </div>
                        <div className="text_product_ratings">
                            <h1 className="italic">{item.productname}</h1>
                        </div>
               
                    </div>
                )          
            })}
            </div>
        </section>
        )
    }

export default Home_Ratings