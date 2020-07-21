import React, { Component } from 'react';
import Title from '../Title';
import { Link } from 'react-router-dom';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render(){
    return (
       <section>
           <ProductConsumer>
               {value =>{
                const {cart} = value;
                if(cart.length>0){
                    return(
                    <>
                    <Title name="your" title="cart"/>
                      <CartColumn/>
                      <CartList value={value}/>
                      <CartTotals value={value}/>
                    </>    
                    );
                }
                else{
                   return <EmptyCart/>
                }
               }}
           </ProductConsumer>

       </section>
    )
}
}