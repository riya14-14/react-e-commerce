import React, { Component } from 'react';
import Title from '../Title';
import { Link } from 'react-router-dom';
import CartColumn from './CartColumn';
import { AiFillDelete} from 'react-icons/ai'
import { FaRupeeSign } from 'react-icons/fa';

export default function CartItem({item,value}) {
    const{id,title,img,price,total,count} = item;
    const{increment,decrement,removeItem} =value;
   
    return (
      <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-10 col-lg-2">
   <img src={img} style={{width :"6rem",height: "6rem"}} className="img-fluid" alt="product"/>
       </div>
   <div className="col-10 mx-auto col-lg-2">
    <span className="d-lg-non">product :</span>
    {title}
</div>
<div className="col-10 mx-auto col-lg-2">
    <span className="d-lg-non">price :</span>
    {price}
     </div>
     <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
    <div className="d-flex justify-content-center">
        <div>
            <span className="btn btn-black mx-1" onClick={()=>decrement(id)
            }> - </span>
             <span className="btn btn-black mx-1" 
        >{count}</span>
             <span className="btn btn-black mx-1" onClick={()=>increment(id)
            }> + </span>
        </div>
    </div>
   </div>
   <div className="col-110 mx-auto col-lg-2">
      <div className="cart-icon" onClick={()=>removeItem(id)} >
        <AiFillDelete/>
      </div>
       </div>
 
      <div className="col-110 mx-auto col-lg-2">
        <strong>item total : <FaRupeeSign/> {total}</strong>

      </div>
     </div>
    );
}
