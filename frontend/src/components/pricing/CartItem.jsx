import { useDispatch ,useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/slice/cartSlice'


const CartItem = () => {


    const dispatch = useDispatch()

    const handleSubmit = async () => {
        try {
            // const productname = cart.map(item => item.productname)
            const quantity = cart.map(item => item.quantity)
            const price = cart.map(item => item.price)
            const productname = cart.map(item => item.productname)
            const currentDate = new Date().toISOString().split('T')[0]
            const currentTime = new Date().getTime()

            const get = parseInt(localStorage.getItem('Id'), 10);

            const response = await fetch('http://localhost:3000/api/buyitems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accountId: get, price: price, productname: productname, quantity: quantity, date: currentDate, time: currentTime}),
     
            })

            if (response.ok) {
                remove()
                const res = await response.json()
                console.log(res)
                console.log('Checkout successful')
            } else {
                console.error('Failed to checkout')
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    const cart = useSelector((state) => state.cart)

    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
        })
        return totalQuantity
    }

    const remove = () =>{
        cart.forEach(item => {
            dispatch(removeItem(item.id))
        })
        
    }

    const getTotalPrice = () => {
        let totalPrice = 0
        cart.forEach(item => {
            totalPrice += item.price * item.quantity
            // console.log(totalPrice)
        });
        return totalPrice
    }
    return (
        <div className='cart_con relative'>
            <div className='tittle_cart'>
                <h1 className='text-center mb-10 italic'>CART</h1>
            </div>
            <div className="container-grid  grid grid-cols-2 gap-5">
                {cart?.map((item) => (
                    <div className='items-cart m-auto' key={item.id}>
                        <div className='item_cart_img m-auto'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='text_product'>
                            <h6 className='text-center'> {item.productname}</h6>
                        </div>
                        <div className='price_qty flex text-center self-center justify-between mx-8'>
                            <h6> &#8369; {item.price}</h6>
                                <div className='add_div flex gap-8  justify-between'>
                                    <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                                
                                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                                </div>
                            <h6> qty {item.quantity}</h6>
                        </div>
                    </div>
                ))}
            </div>


                {/* <p className="total__p">
                Total Quantity: {getTotalQuantity()}
                </p> */}
               <div className='absolute bottom-0 flex justify-between left-0 right-0 self-center text-center m-auto'>
                    <p className="total__p">
                        Total Price: &#8369; {getTotalPrice()} 
                    </p>
                    <button onClick={() =>{handleSubmit()}}  className='checkOut'>CHECK OUT</button>

           
               </div>
        </div>

        
    )
}

export default CartItem;
