import React from "react";
import './CSS/Card.css'
/*
Template
<Card src='' alt='pizza' prodName='Pizza' addCart={}/>
*/
export function Card(props){
    function add(){
        let data={
            id:props.id,
            description:props.alt,
            price:props.price,
            image:props.src,
            title:props.prodName

        }
        props.addCart(data)
    }
    return(
        <div className='product'>
            <div className='imgDivStyle'>
                <img src={props.src} alt={props.alt} />
            </div>
            <p className='name'>{props.prodName}</p>
            <p onClick={add} className='button'>Add To Cart</p>
        </div>
    )
}

