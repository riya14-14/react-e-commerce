import React, {Component} from 'react';
import Product from './Product'
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';
import {storeProducts} from "../data";
import Title from './Title'
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import Services from './Services';
import FeaturedRooms from './FeaturedRooms';
import styled from 'styled-components';

export default class ProductList extends Component {

    state={
        products:[storeProducts]
    }
    render(){
    return (
        <>
      <Hero>
        <Banner
          title="women"
          subtitle="your fashion starts here"
        >
          <Link to="/" className="mr-2">
            <ButtonContainer>
              show
            </ButtonContainer>
          </Link>
        </Banner>
        </Hero>
            <div className="row">
                 <ProductConsumer>
                     {value => {
                        return value.products.map(product =>{
                            return <Product key={product.id} product={product}/>
                        })
                     }}
                 </ProductConsumer>
        </div>
        <Services/>
        <FeaturedRooms/>
       </>
    )
}
}

const ButtonContainer = styled.button`
justify content:space-between;
font-family: 'Piedra', cursive;
text-transform:capitalize;
font-size:1.8rem;
background:black;
border: solid 0.5rem black;
color:white;
border-radius:0.6rem;
padding:0.3rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
  background:rgb(19, 0, 65) ;
  color:white;
  border: solid 0.5rem rgb(19, 0, 65) ;
}

`;
