import React, {Component} from 'react';
import {storeProducts,detailProduct} from './data';

const ProductContext =React.createContext();



class ProductProvider extends Component{
state={
    products:[],
    detailProduct:detailProduct,
    cart:[],
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
};
componentDidMount(){
    this.setProducts();
}
setProducts = () =>{

    let tempProducts = [];

    storeProducts.forEach (item => {
        const singleItem = {...item} ;
        tempProducts=[...tempProducts,singleItem];      
    });
    this.setState(() => {
        return { products: tempProducts,
        };
    });
};

getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
};

handleDetail= id =>{
   const product = this.getItem(id);
   this.setState(()=>{
       return{detailProduct:product}
   })
};
addtoCart = id =>{
     let tempProducts= [...this.state.products];

     const index =tempProducts.indexOf(this.getItem(id));
     const  product = tempProducts[index];
     product.inCart =true;
     product.count =1;
     const price = product.price;
     product.total=price;
     this.setState(()=>{
         return {products :tempProducts,cart:[...this.state.cart,product]};
     },
         ()=>{
             this.addTotals();
         }
     )
};
openModal = id =>{
    const product= this.getItem(id);
    this.setState(()=> {
        return {modalProduct:product,modalOpen:true}
    })
}
closeModal = () => {
    this.setState(()=> {
        return {modalOpen:false}
    })
};
increment = (id) =>{

}
decrement = (id)=>{


}
removeItem =(id)=>{


}
clearCart =()=>{

}
addTotals =() =>{
  let subTotal =0;
  this.state.cart.map(item => (subTotal += item.total));
  const tempTax= subTotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total= subTotal + tax;
  this.setState(
      ()=> {
          return { 
              cartSubTotal: subTotal,
              cartTax:tax,
              cartTotal: total
          }

        })
}

    render(){
        return(
            <ProductContext.Provider value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addtoCart:this.addtoCart,
            openModal:this.openModal,
            closeModal:this.closeModal,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart   
            }}>
            {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer,ProductContext}