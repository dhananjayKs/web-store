import React from "react";
import './CSS/Category.css'
import { CatCard } from "./CatCard";

async function getData(){
    let url='https://fakestoreapi.com/products/categories'
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
export class Category extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        let resp=getData()
        resp.then(respData=>{
            this.setState({data:respData})
            console.log(respData)
        })
    }

    render(){
        let items=this.state.data.map(ele=>{
            return <CatCard key={ele} setCategory={this.props.setCategory} category={ele} selected={this.props.category}></CatCard>
        })
        return (
            <div className='category'>
                <CatCard key='All' setCategory={this.props.setCategory} category={'All'} selected={this.props.category}/>
                {items}
            </div>
        )
    }
        
    
}