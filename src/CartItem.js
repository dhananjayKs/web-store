import React from "react";
import './CSS/CartItem.css'
export function CartItem(props){
    return(
        <div className='cartItem'>
            <div className='cartItemImg'>
                <img src={props.src} alt={props.alt}/>
            </div>
            <div className='cartItemText'>
                <p>{props.title}</p>
                <p className="price">${props.price}</p>
            </div>
            
        </div>
    )
}