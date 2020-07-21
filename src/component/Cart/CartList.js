import React, { Component } from 'react';
import Title from '../Title';
import { Link } from 'react-router-dom';
import CartColumn from './CartColumn';
import CartItem from './CartItem';

export default function CartList({value}) {
   const{cart} = value;
    return (
      <div className="container-fluid">
          {cart.map(item=>{
              return <CartItem key={item.id} item={item}
              value={value}/>
          })}


      </div>
    );
}
