import { useState, useEffect } from "react"
import { BiSearchAlt2, BiChevronLeft , BiChevronRight } from 'react-icons/bi'
function Pricing_Item() {

  const [ dataItemMenu, setDataItemMenu ] = useState([])
  const [ collectItemPcParts, setCollectItemPcParts ] = useState([])
  const [ collectItemPcBrands, setCollectItemPcBrands ] = useState([])
  const [loading, setLoading] = useState(true)
  const [ currentPage, setCurrentPage] = useState(1)
  const  [originalData, setOriginalData] = useState([])
  const itemsPerPage = 6

  useEffect(() => {
    async function fetchData() {
      try {
          setLoading(true);
          const response = await fetch('http://localhost:3000/pcparts', {
            method: 'GET',
            headers: {
                // "X-Api-Key" : "5325325yygdfgg7532578ghtrhtr782532",
                "X-Powered-By": "Express",
                "Content-Type": "application/json; charset=utf-8"
            },
        }, 700)
        if(!response.ok){
          throw new Error('Network response was not ok')
        }
        const resultItem = await response.json()
        setDataItemMenu(resultItem)
        setLoading(false);
        setOriginalData(resultItem);
        setCollectItemPcParts([...new Set(resultItem.map((item) => item.namemodel))])

        setCollectItemPcBrands([...new Set(resultItem.map((item) => item.brandname))])

      } catch (error) {
        console.log('Error: ', error)
        setLoading(false);
      }
    }

    fetchData()
  }, [])

  const partsMenuFilter = (itemDataParts) => {
    if (itemDataParts === "ALL") {
      setLoading(true)
      setTimeout(() => { 
        setDataItemMenu(originalData)
        setLoading(false)
      }, 700);
    } else {
      const filterDataParts = originalData.filter((item) => item.namemodel === itemDataParts)
      setLoading(true)
      setTimeout(() => { 
        setDataItemMenu(filterDataParts)
        setLoading(false)
      }, 700);
    }
  }
  

  const partsMenuFilterBrand = (itemDataPartsBrand) => {
    if (itemDataPartsBrand === "ALL") {
      setLoading(true)
      setTimeout(() => { 
        setDataItemMenu(originalData);
        setLoading(false)
      }, 700);
    } else {
      const filterDatabrand = originalData.filter((item) => item.brandname === itemDataPartsBrand)
      setLoading(true)
      setTimeout(() => { 
        setDataItemMenu(filterDatabrand)
        setLoading(false)
      }, 700);
    }
  }
  
  const handleClick = (type) => {
    const totalPages = Math.ceil(dataItemMenu.length / itemsPerPage)
    if (type === 'prev') {
      setCurrentPage(currentPage => Math.max(currentPage - 1, 1))
    } else if (type === 'next') {
      setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages))
    }
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = dataItemMenu.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(dataItemMenu.length / itemsPerPage)


    return (
      <section className="pricing_shop_container xl:mx-28 lg:mx-10 mx-4 sm:mx-10">
        <div className="pricing_shop_tittle">
          <h1 className="m-auto py-16 italic">Pricing Product</h1>
        </div>

        <div className="pricing_shop_row">
            <div className="pricing_shop_items">
              <div className="pricing_shop_sidebar_section">
                <div className="search_pricing flex items-center m-auto ">
                    <input className="outline-none bg-transparent px-3 m-auto" type="search" id="movie" name="q" placeholder="Search Parts"/>
                    <BiSearchAlt2 className="search_icon opacity-70 cursor-pointer size-6 "/>
                </div>
                <div className="pricing_shop_sidebar_items">
                  <div>
                    <div className="pricing_shop_sidebar_tittle mt-5 mb-3 text-center">
                        <h1 className="italic">Categories</h1>
                      </div>
                      <div className='pricing_shop_sidebar_button'>
                        <a onClick={() => partsMenuFilter("ALL")} className=" cursor-pointer my-1" >
                          ALL
                        </a> 
                        {collectItemPcParts.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <a  onClick={() => partsMenuFilter(item)} className=" cursor-pointer my-1">
                          {item}
                        </a>
                        ))}
                      </div>
                  </div>
                  <div>
                  <div className="pricing_shop_sidebar_tittle mt-5 mb-3 text-center">
                      <h1 className="italic">Brand Parts</h1>
                    </div>
                   <div className='pricing_shop_sidebar_button'>
                    <a onClick={() => partsMenuFilterBrand("ALL")} className=" cursor-pointer my-1" >
                        ALL
                      </a> 
                      {collectItemPcBrands.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <a  onClick={() => partsMenuFilterBrand(item)} className=" cursor-pointer my-1">
                          {item}
                        </a>
                      ))}
                   </div>
                  </div>
      
                  <div>
                    <div className="pricing_shop_sidebar_tittle mt-5 mb-3">
                        <h1 className="italic text-center">Pricing</h1>
                      </div>
                    <div className='pricing_shop_sidebar_button'>
                        <a className="py-1" href="">&#8369;100 - &#8369;10,000</a>
                        <a className="py-1" href="">&#8369;10,000 - &#8369;20,000</a>
                        <a className="py-1" href="">&#8369;20,000 - &#8369;30,000</a>
                    </div>
                  </div>
          
                </div>
              </div>
            </div>
            <div className="pricing_shop_items">
              <div className="pricing_shop_menubar_section">

              {loading ? (
                  <div className="shop_pricing_loading grid">
                    <div className="loader self-center m-auto">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                  </div>
                  </div>
              ) : (
                <div className="pricing_shop_menubar_section_row grid">

          
                {displayedItems.map((item, id )=> {
                  return(
                    <div className="pricing_shop_menubar_section_item m-auto py-6" key={id}>
                      <div className="pricing_menu_img">
                        <img className="m-auto" src={item.image} alt="" />
                      </div>

                      <div className="pricing_menu_price_qty pt-6 flex justify-between mx-12">
                        <h4>QTY <span>{item.quantity}</span></h4>
                        <h4>&#8369;<span>{item.price}</span></h4>
                      </div>

                      <div className="pricing_menu_productname mx-8 my-6">
                        <h1 className="text-center">{item.productname}</h1>
                      </div>
                    </div>
                  )
                })}
              </div>
              )}
              </div>
              <div className="text-center pricing_shop_next_page items-center flex justify-center mb-10 mt-20">
              <button onClick={() => handleClick('prev')} disabled={currentPage === 1}><BiChevronLeft  className="mx-10 pricing_icon_np"/></button>
              {/* <span>{`Page ${currentPage} of ${totalPages}`}</span> */}
              <a className="mx-5">1</a>
              <a className="mx-5">2</a>
              <a className="mx-5">3</a>
              <a className="mx-5">4</a>
              <a className="mx-5">5</a>
              <button onClick={() => handleClick('next')} disabled={currentPage === totalPages}><BiChevronRight className="mx-10 pricing_icon_np"/></button>
              </div>
            </div>
        </div>
      </section>
  )
}

export default Pricing_Item