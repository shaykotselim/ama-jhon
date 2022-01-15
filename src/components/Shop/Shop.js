import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Productes from '../Productes/Productes';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
   const [cart, setCart] = useState([])
    
    useEffect(()=>{
            fetch('./Products.JSON')
            .then(res => res.json())
            .then( data => setProduct(data));
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Productes
                    key = {product.key}
                    product = {product}
                    handleAddToCart={handleAddToCart}
                    ></Productes>) 
                }
            </div>
            <div className="cart-container">
                     <Cart
                      cart={cart}
                     ></Cart>
            </div>
        </div>
    );
};

export default Shop;