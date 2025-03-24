import { IMG_URL } from '../Utilities/constants';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                <li><Link to="/">Home</Link> |</li>
                <li><Link to="/about">About us</Link> |</li>
                <li><Link to="/contact">Contact us</Link> |</li>
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