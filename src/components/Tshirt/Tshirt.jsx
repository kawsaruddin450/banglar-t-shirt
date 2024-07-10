import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {name, price, picture, gender} = tshirt;
    return (
        <div className='tshirt-card'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <div className="tshirt-details">
                <p>Gender: {gender}</p>
                <p>Price: <span className='tshirt-price'>${price}</span></p>
                <button onClick={() => handleAddToCart(tshirt)} className='add-cart-btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Tshirt;