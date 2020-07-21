import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {Switch,Route} from 'react-router-dom'
import Cart from './component/Cart/Cart';
import ProductList from './component/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./component/Details";
import Modal from './component/Modal';
import Login from './component/Login';
import Signup from './containers/Signup';
import ForgetPassword from './containers/ForgetPassword';


function App() {
  return (
  
   <>
    <Navbar/> 
    <Switch>  
      <Route exact path='/login' component={Login}/>
      <Route path="/signup" component={Signup} />
      <Route path="/forget-password" component={ForgetPassword} />
      <Route exact path='/' component={ProductList}/>
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/details' component={Details}/>'
      </Switch>
      <Modal/>
    </>
      
  );
}

export default App;
