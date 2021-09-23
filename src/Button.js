import React from "react";

export default function Button(props){
    let style={
        display:'inline-block',
        width:'2rem',
        height:'2rem',
        backgroundColor:'slateblue',
        textAlign:'center',
        lineHeight:'2rem',
        color:'white',
        borderRadius:'5px',
        margin:'5px'
    }
    return(
        <p onClick={props.click} style={style}>{props.children} </p>
    )
}