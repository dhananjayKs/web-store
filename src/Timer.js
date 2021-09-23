import React from 'react';

export class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time: new Date(Date.now()).toLocaleTimeString()
        }
        this.update()
    }
    update(){
        setInterval(()=>{
            this.setState({time:new Date(Date.now()).toLocaleTimeString()})
        },1000)
    }
    render(){
        return(
            <h3>{this.state.time}</h3>
        )
    }
}