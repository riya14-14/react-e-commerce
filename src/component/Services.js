import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: "1",
        title: "Why Us?",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: "2",
        title: "Shopping on Fashion",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: "3",
        title: "Become a Member",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },

    ]
  };
  render() {
    return (
      <section className="services">
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
        <div>
                <Link to="/Signup" className="mr-2">
                    <ButtonContainer>
                    Sign up
                    </ButtonContainer>
                    </Link>
            </div>
      </section>
      
    );
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