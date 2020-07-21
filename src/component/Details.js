import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRupeeSign } from 'react-icons/fa';



export default class Details extends Component {
    render() {
    return (
<ProductConsumer>
  {value => {
      const{id,
        brand,
        img,
        info,
        price,
        title,
        inCart
    }= value.detailProduct;
      return (
          <div className="contaner py-5">

              <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue">

                      <h1>{title}</h1>
                  </div>
       
              
              <div className="row">
                  <div className="col-10 mx-auto col-md-8 my-4 ">
                   <img src={img} className="img-fluid " alt="product"/>   
                      </div> 
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted lt-3 mb-2">
                      made by : <span className="text-uppercase">{brand}</span>
                  </h4>
                  <h4 className="text-blue">
                      <strong>
                          price : <span><FaRupeeSign/></span>
                          {price}
                      </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold ml-3 mb-0">
                      some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                      <Link to="/">
                          <ButtonContainer>
                              back to products
                          </ButtonContainer>
                      </Link>
                      <ButtonContainer cart
                      disabled ={inCart ?true :false}
                      onClick={() =>{
                          value.addtoCart(id);
                      }}>
                          {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                  </div>
              </div>
          </div>
     </div>
      )
  }}

</ProductConsumer>

    );

   }
}

const ButtonContainer = styled.button`
font-family: 'Ropa Sans', sans-serif;
text-transform:capitalize;
font-size:1.4rem;
background:lightblue;
border:0.5rem solid var(--lightBlue);
color:${props => props.cart ? "yellow " :"blue"};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
border-color:${props => props.cart? "yellow " : "lightblue"};
cursor:pointer;lue
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:${props => props.cart ? "yellow " :"lightblue"};;
    color:blue;
}
&:focus{
    outline:none;
}

`;
