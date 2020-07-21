import React, { Component } from "react";
import Title from "./Title";
import { ProductContext } from "../context";
import Product from './Product'
import {storeProducts} from "../data";
import Card from '../cads/Cards';
export default class FeaturedRooms extends Component {
  static contextType = ProductContext;
  render() {
  
  
    return (
      <section className="featured-rooms">
        <Title title="trending now" />
        <div className="featured-rooms-center">
          <Card/>
        </div>
      </section>
    );
  }
}
