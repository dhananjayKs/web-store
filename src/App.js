
import React from 'react';
import './CSS/App.css';
import {Header} from './Header.js'
import {Category} from './Category.js'
import {Page} from './Page.js'
import {Cart} from './Cart'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      category:'',
      cart:[],
      total:0,
      cartVisibility:false
    }
    this.setCategory=this.setCategory.bind(this)
    this.addCart=this.addCart.bind(this)
    this.cartDisplay=this.cartDisplay.bind(this)
  }
  setCategory(e){
    // console.log(e.target.innerHTML)
    let term
    if(e.target.innerText==='All'){
      term=''
    }else{
      term=e.target.innerText
    }
    this.setState({category:term})
  }

  addCart(data){
    let arr=this.state.cart.slice()
    arr.push(data)
    this.setState({
      cart:arr
    })
    

  }
  total(){
        
    let totalp=0
    this.state.cart.forEach(ele=>{
        totalp=totalp+ele.price
        console.log('pp')
    })
    console.log(totalp)
    this.setState({total:totalp})
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.cart.toString()!==this.state.cart.toString()){
      this.total()
    }
  }

  cartDisplay(){
    this.setState({
      cartVisibility:!this.state.cartVisibility
    })
  }
  render(){
    console.log(`app ${this.state.category}`)
    console.log(this.state.cart)
    return(
      <>
        <Cart items={this.state.cart} total={this.state.total} cartVisibility={this.state.cartVisibility}></Cart>
        <Header user='Dhananjay' cartDisplay={this.cartDisplay} length={this.state.cart.length}/>
        <Category setCategory={this.setCategory} category={this.state.category}/>
        <Page category={this.state.category} addCart={this.addCart}></Page>
      </>
    )
  }
}


export default App;
