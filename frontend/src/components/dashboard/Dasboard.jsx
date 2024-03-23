import { useState, useEffect} from 'react'

const Dashboard = () => {


  const [buyData, setBuyData] = useState([]);
  
  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch('http://localhost:3000/api/buyitems', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer YOUR_TOKEN',
            "X-Powered-By": "Express",
          },

        })
        if(!response.ok){
          throw new Error('Network response was not ok')
        }
        const resultdata = await response.json()
        if(!Array.isArray(resultdata)){
          throw new Error('Response data is not an array')
        }
        const get = parseInt(localStorage.getItem('Id'), 10);
        const filteredDataBuy = resultdata.filter(item => item.accountId === get && item.id);
        
        setBuyData(filteredDataBuy);

      }catch (error) {
        console.log('Error: ', error)
      }
    }
    fetchData()
  }, [])

  console.log(buyData)
  return (
    <section className='container m-auto'>
      <div className=''>
          <div className='title_text'>
            <h1 className='text-center my-10 italic'>YOUR ALL ORDER</h1>
          </div>
          <div className='row-items row grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-9 gap-9 '>
              {buyData.map((item, id) => {
              return(
                  <div className='item_data' key={id}>
                    <div className='pname'>
                      <h1 className='italic'>{item.productname}</h1>
                    </div>
                    <div className='date_time flex justify-between'>
                      <h6 className='m-auto'>{item.date}</h6>
                      <h6 className='m-auto'>{item.time}</h6>
                    </div>
           
                </div>
              )
             })}
          </div>
      </div>


    </section>
  )
}

export default Dashboard
