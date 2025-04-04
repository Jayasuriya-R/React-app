import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem} from '../Utilities/cartSlice';


const Cart = () =>{
 
    //subscribing to our store uing selector
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch() 

    const handleClearCart = () =>{
         dispatch(clearCart())
    }

    const handleRemoveItem = () =>{
        dispatch(removeItem())
    }
     
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
           
            
               { cartItems.length == 0 ? (<h1 className='font-bold mt-15 ml-4 text-red-400'>Oops!.. Cart is empty. Hurry and add items to the cart.</h1>) :(
             <>
              <h1 className='font-bold mt-2 '>Items Added to the cart - 🛒</h1>
            <div className='flex flex-col w-2/12 ml-[63%]'>
            <button className=' border-1 rounded-[8px]  px-2 py-1 bg-black text-white font-medium cursor-pointer hover:bg-red-800' onClick={()=>handleClearCart()}>Clear-cart</button>
            <button className='px-2 py-1 mt-2 border-1 rounded-[8px] bg-black text-white font-medium cursor-pointer hover:bg-red-800' onClick={()=> handleRemoveItem()}>Remove-item</button>
            </div>
            <div className=' m-auto mt-4 p-2 border-2 rounded-2xl w-[230px] text-start relative bottom-14'>
                
             { 
                cartItems.map(
                    (x,index) => <li key={index} className='list-none
                     font-medium text-black'>{index+1} . {x.name} - ₹ {x.price}</li>
                               
                )
             }
    
             </div>

             </>
               )
        }
             </div>
    )
}

export default Cart;