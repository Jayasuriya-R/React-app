import { IMG_URL } from '../Utilities/constants';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import useStatusCheck from '../Utilities/useStatusCheck';
import UserContext from '../Utilities/UserContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';



 const Header = () => {

    const [btnlog , setBtnlog] = useState("Login")

    const status = useStatusCheck()

    const {loggedIn} = useContext(UserContext)

    //subscribing to our store suing selector
    const cartItems = useSelector((store)=> store.cart.items);
    
    



    return (
        <div className="flex justify-between shadow-lg mt-4 bg-black text-white">
           <div className="">
            <img className="w-25"
            src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hIe7pUHuKNFAJN2-9YJX1lcZ5QXsTf6AnQx4p8SAeH3ChtNOwKX5DMA&s" />
           </div>
        <div className="flex items-center">
            
            <ul className='flex p-4 m-4'>
                <li className='px-3'><Link to="/">Home  |</Link></li>
                <li className='px-3'><Link to="/about">About us  |</Link></li>
                <li className='px-3'><Link to="/contact">Contact us  |</Link></li>
                <li className='px-3'><Link to="/grocery">Grocery  |</Link></li>
                <li className='px-3'><Link to="/cart">Cart - <span className='border-1 rounded-full w-16 h-16 bg-amber-200 text-black p-1'>{cartItems.length}</span></Link></li>
                <button className='bg-gray-300 text-black px-2 pb-1 rounded-lg min-w-[75px] cursor-pointer' onClick={() =>{
                    setBtnlog(btnlog=="login"?"logout":"login")
                }}>{btnlog}</button>
                { btnlog === "logout" &&
                <li className='px-3'>Hi {loggedIn}🙋‍♂️</li>}
            </ul>
        </div>
        </div>
    )
}
export default Header;