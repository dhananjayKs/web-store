import React from "react";
import './CSS/Header.css'
export function Header(props){
    
    return(
        <div className='head'>
            <p className='text'>DHA-cart</p>
            <p className='text cartBtn ' onClick={props.cartDisplay}> CART({props.length})</p>
            <p className='text userName'>{props.user}</p>
        </div>
    )
}