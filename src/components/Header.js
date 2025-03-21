import { IMG_URL } from '../Utilities/constants';
import { useState,useEffect } from 'react';

 const Header = () => {

    const [btnlog , setBtnlog] = useState("Login")

    useEffect(()=>{
        console.log("useeffect called")
    },[btnlog])

    return (
        <div className="header">
           <div className="logo-container">
            <img className="logo"
            src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hIe7pUHuKNFAJN2-9YJX1lcZ5QXsTf6AnQx4p8SAeH3ChtNOwKX5DMA&s" />
           </div>
        <div className="nav-items">
            <h3 className="app-name">QuickBites</h3>
            <ul>
                <li>Home |</li>
                <li>About us |</li>
                <li>Contact us |</li>
                <li>Cart</li>
                <button className='login-btn' onClick={() =>{
                    setBtnlog(btnlog=="login"?"logout":"login")
                }}>{btnlog}</button>
            </ul>
        </div>
        </div>
    )
}
export default Header;