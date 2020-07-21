import React,{Component} from 'react';
import Logo from '../component/Logo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaShoppingCart } from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';
import {Form,FormControl } from "react-bootstrap";

export default class Navbar extends Component {
    render(){
    return (
        <div className="MainHeader">
            <Logo />
            <div>
                <div className="SearchOption">
                    <select>
                        <option>All Categories</option>
                    </select>
                    <input type="text" />
                    <button>
                    <FaSearch/>
                    </button>
                </div>
            </div>
        <div>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                    <span className="mr-2 align-self-center">
                   <FaShoppingCart/>
                    </span>
                    </ButtonContainer>
                    </Link>
                    <Link to="/" className="mr-1">
                    <ButtonContainer>
                    <span className="mr-2">
                   <FaHome/>
                    </span>
                    </ButtonContainer>
                    </Link>
                    <Link to="/login" className="mr-1">
                    <ButtonContainer>
                    <span className="mr-2">
                   <FaUserAlt/>
                    </span>
                    </ButtonContainer>
                    </Link>
            </div>
        </div>
    );
  }
}

const ButtonContainer = styled.button`
justify content:space-between;
font-family: 'Piedra', cursive;
text-transform:capitalize;
font-size:1.6rem;
background:none;
border: solid 0.3rem black;
color:white;
border-radius:0.0rem;
padding:0.2rem 0.4rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:black ;
    color:lightgrey;
  }

`;