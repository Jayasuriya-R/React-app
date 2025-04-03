import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../Utilities/cartSlice';


const Cart = () =>{
 
    //subscribing to our store uing selector
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch() 

    const handleClearCart = () =>{
         dispatch(clearCart())
    }
    // console.log(cartItems)
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <h1 className='font-bold mt-2 '>Items Added to the cart - 🛒</h1>
            <button>clear-cart</button>
            {
                cartItems>0 &&
            <div className=' m-auto mt-4 p-2 border-2 border-amber-950 w-2/12 text-start'>
                
             {
                cartItems.map(
                    (x,index) => <li key={index} className='list-none'>{index+1} . {x.name} - {x.price}</li>
                               
                )
             }
    
             </div>}
             </div>
    )
}

export default Cart;