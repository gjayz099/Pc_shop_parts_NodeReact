import { useState, useEffect } from "react"
import {BiSolidStar} from 'react-icons/bi'

function Home_Ratings() {
    
    const [ ratingsData, setRatingsData] = useState([])


    useEffect(() => {



        async function fetchData() {
            try{
                const response = await fetch('http://localhost:3000/pcparts', {
                    method: 'GET',
                    headers: {
                        // "X-Api-Key" : "5325325yygdfgg7532578ghtrhtr782532",
                        "X-Powered-By": "Express",
                        "Content-Type": "application/json; charset=utf-8"
                    },
                })
                if(!response.ok){
                    throw new Error('Network response was not ok')
                }
                const resultdata = await response.json();
                const filteredData = resultdata.filter(item => item.ratings === 5);

                setRatingsData(filteredData);
                console.log(resultdata)
            }catch (error) {
                console.log('Error: ', error)
            }
        }
        fetchData()

    }, [])

    return (
        <section className="home_ratings_container my-24">
            <div className="home_ratings_content mx-40 gap-20 grid grid-cols-4 text-center">
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