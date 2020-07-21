import React,{Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from "../context"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import {FaShoppingCart } from 'react-icons/fa';
import {FaRupeeSign } from 'react-icons/fa';
import {FiHeart} from 'react-icons/fi'

export default class Product extends Component {
    render(){
        const{id,title,img,price,inCart} =this.props.product;
        return (
            <>
        <ProductWrapper className="col-6 mx-auto col-md-4 col-lg-2 my-2">

          <div className="card">
              <ProductConsumer>
                  {(value) => (<div className="img-container p-6" onClick={()=>value.handleDetail(id)}
                  >
            <Link to="/details">
                <img src={img} alt="product" className="card-img-top"/>
            </Link>
            <button className="card-btn" disabled={inCart?true:false} onClick={()=> {value.addtoCart(id);
            value.openModal(id);
            }}
            >
            {inCart?(<p className="font-italic align-self-center mb-0" disabled>
                in Cart</p>):( <span className="align-self-center mb-0"><FiHeart/></span>)}
                </button>
            </div>)}
            
            </ProductConsumer>
            <div className="card-footer d-flex justify-content-between  'Cairo', sans-serif">
                <p className="align-self-center mb-0">
                    {title}
                </p>
                <h5 className="text-black mr-5 font-italic ">
                    <span className="mr-0"><FaRupeeSign/></span>
                    {price}
                </h5>
            </div>
          </div>
        </ProductWrapper>
      </>
    )
}
}

Product.propTypes= {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
    font-family: 'Ropa Sans', sans-serif;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;

}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer{
        background:rgba(247,247,247)
    }
}
.img-container{
    position:relive;
    overflow:hidden;
}


.card-btn{
    position:absolute;
    bottom:0;
    right:0;
    background:none;
    border:none;
    color:red;
    font-size:1.6rem;
    border-radius:0.5 0 0 0;
    transform:translate(100%,100%)
    transition:all 1s linear;
}
.img-contaier:hover .card-btn{
    transform:translate(0,0);
    transition:all 1s linear
}
.card-btn:hover{
    color:red;
    cursor:pointer;
}


`;