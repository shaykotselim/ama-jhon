import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Productes.css';

const Productes = (props) => {
    // console.log(props.product);
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {img, name, by, price, category, stock, features} = props.product
    
    return (
        <div className='product-display'>
            <div className='image'>
                   <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <h5>By: {by}</h5>
                <h5>Price : $ {price}</h5>
                <h5>Category : {category}</h5>
                <p>Only {stock} Left in Product Order-Soon</p>
                <div className='cart-feature'>
                    <div>
                    <button
                    onClick={()=> props.handleAddToCart(props.product)}
                    className='cart-button'>{element}Add to Cart</button>
                    </div>
                    <div>
                            <h4 className = 'feature' >Features : 0{features.length} </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productes;