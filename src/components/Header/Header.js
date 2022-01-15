import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        
        <div >

            <div className='header'>
                 <img src={logo} alt="" />
            </div>
            
            <nav className='navigation'>
                <a >Shop</a> 
                <a >Order Review</a>
                <a>Manage Inventory</a>
            </nav>
            <div className='inputnav'>
                        <input className='input' placeholder='type here to search' type="text" />
                    <span className='dddd'>{element}</span>
            </div>
        
        
        </div>
    );
};

export default Header;