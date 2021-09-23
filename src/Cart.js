import React  from "react";
import { CartItem } from "./CartItem";
import './CSS/Cart.css'
export class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[],
        }
    }
   
    componentDidUpdate(prevProps,prevState){
        if(prevProps.items!==this.props.items){
            this.setState({
                items:this.props.items
            })
            
        }
        
    }
    
    render(){
        let items=this.state.items.map(ele=>{
            return <CartItem key={ele.id} src={ele.image} alt={ele.alt} title={ele.title} price={ele.price}></CartItem>
        })
        let visibility={
            'display':this.props.cartVisibility? 'inherit' : 'none'
        }
        return(
            <>
            <div className='cart' style={visibility}>
                {items}
                <p className="total">Total: ${this.props.total.toFixed(2)}</p>
            </div>
            </>
        )
    }
}