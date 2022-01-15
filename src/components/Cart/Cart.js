import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {cart} = props;
    // const totalReducer =  (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);

    let total = 0;
    for(const product of cart){
        total = total + product.price
    }
    const shipping = 15;
    const beforTax = total + shipping;
    const tax = beforTax * 5;


    return (
        <div>
                 <div className='summary'>
                         <h3>Order Summary</h3>
                         <p>Order Item : {props.cart.length}</p>
                         
                     </div>
                   <div className='item'>
                         <div >
                            <p>Items :</p>
                            <p>Price :</p>
                            <p>Shipping-Handling :</p>
                            <p>Total Before Tax :</p>
                            <p>Estimated Tax :</p>
                         </div>
                         <div>
                            <p> {cart.length}</p>
                            <p> ${total.toFixed(2)}</p>
                            <p> ${shipping}</p>
                            <p> ${beforTax.toFixed(2)}</p>
                            <p> $5%</p>
                         </div>
                     </div>
                        <div className='total'>
                            <div>
                                <h2>Total  </h2>
                            </div>
                            <div> 
                                <h2>${tax.toFixed(2)}</h2>
                            </div>
                        </div>
                        <button
                         className='confrim-button'>
                            {element} Confrim Order
                             </button>
        </div>
    );
};

export default Cart;