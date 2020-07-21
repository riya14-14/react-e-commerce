import React, { Component } from 'react';
import Title from '../Title';
import { Link } from 'react-router-dom';
import CartColumn from './CartColumn';

export default function EmptyCart() {
   
    return (
      <div className="container ml-5">
          <div className="row">
              <div className="col-10 mx-auto text-center text-title">
                 <h1>your cart is currently empty</h1>
              </div>
          </div>
      </div>
    )
}
