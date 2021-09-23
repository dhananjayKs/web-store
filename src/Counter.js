import React from 'react';
import Button from './Button.js'
export class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
        
    }
    decrement=()=>{
        
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <Button click={this.reset}>0</Button>
                <Button click={this.increment}>+</Button>
                <Button click={this.decrement}>-</Button>
            </div>
        )
    }
}