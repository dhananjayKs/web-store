import React from "react";
import {Card} from './Card.js'
import './CSS/Page.css'

async function getData(cat){
    let url
    if(cat===''){
        url='https://fakestoreapi.com/products'
    }else{
        url=`https://fakestoreapi.com/products/category/${encodeURIComponent(cat)}`
    }
    
    try{
        let response = await fetch(url)
        if(response.ok){
            let responseData=await response.json()
            return responseData
        }
        throw new Error(`Unable to fetch: ${response.statusText}`)
    }
    catch(e){
        console.log(e)
    }
}

export class Page extends React.Component{
    constructor(props){
        super(props)
        this.state={
            category:'',
            data:[]
        }
        
    }
    componentDidMount(){
        
        let resp=getData(this.state.category)
        
        resp.then(respData=>{
            this.setState(()=>{
                return {data:respData}
            })
            console.log(respData)
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.category!==this.props.category){
            this.setState({
                category:this.props.category
            })
            
        }
        if(prevState.category!==this.state.category){
            let resp=getData(this.state.category)
        
            resp.then(respData=>{
                this.setState(()=>{
                    return {data:respData}
                })
                console.log(respData)
            })
            
        }
        
    }
    // setProp(){
    //     this.setState((state)=>{
    //         if(this.state.category!==this.props.category){
    //             return {category:this.props.category}
    //         }
            
    //     })
    // }
    
    render(){
        console.log(`page ${this.state.category}`)
        let items=this.state.data.map(ele=>{
            return <Card addCart={this.props.addCart} key={ele.id} id={ele.id} src={ele.image} alt={ele.description} prodName={ele.title} price={ele.price}></Card>
        })
        return(
            <div className='page'>
                {items}
            </div>
        )
    }
       
}