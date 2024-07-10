import React, { useState } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            console.log("Already exists!");
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }
    const handleRemoveFromCart = id => {
        const remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining);
    }
    return (
        <div className="home-container">
            <div className='tshirts-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;