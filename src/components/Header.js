import { IMG_URL } from '../Utilities/constants';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import useStatusCheck from '../Utilities/useStatusCheck';

 const Header = () => {

    const [btnlog , setBtnlog] = useState("Login")

    const status = useStatusCheck()

    useEffect(()=>{
        console.log("useeffect called")
    },[btnlog])

    return (
        <div className="flex justify-between shadow-lg mt-4 bg-black text-white">
           <div className="">
            <img className="w-25"
            src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hIe7pUHuKNFAJN2-9YJX1lcZ5QXsTf6AnQx4p8SAeH3ChtNOwKX5DMA&s" />
           </div>
        <div className="flex items-center">
            
            <ul className='flex p-4 m-4'>
                <li className='px-3'><Link to="/">Home</Link></li>
                <li className='px-3'><Link to="/about">About us</Link></li>
                <li className='px-3'><Link to="/contact">Contact us</Link></li>
                <li className='px-3'><Link to="/grocery">Grocery</Link></li>
                <li className='px-3'>Cart</li>
                <button className='bg-gray-300 text-black px-2 pb-1 rounded-lg min-w-[75px]' onClick={() =>{
                    setBtnlog(btnlog=="login"?"logout":"login")
                }}>{btnlog}</button>
            </ul>
        </div>
        </div>
    )
}
export default Header;