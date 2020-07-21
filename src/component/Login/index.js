import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import MobileTypeInput from '../../UI/MobileTypeInput';
import SubmitGradientButton from '../../UI/SubmitGradientButton'
import Logo from '../Logo'
import Error from '../../component/Error';
import * as authActions from '../../store/actions/authActions';
import { connect } from 'react-redux';

 export default class Login extends Component {

    state = {
        redirectToReferrer: false,
        email: '',
        password: '',
        isError: false,
        errorMessage: ''
    }

    textHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setError = (error, message) => {
        this.setState({
            error: error,
            errorMessage: message
        })
    }


    render() {


        return (
            <div className="LoginContainer">
                <div className="WelcomeText">
                    <h3>Login</h3>
                </div>
                <Logo style={{margin:'0 auto' ,marginTop:'center' }} />
                <div className="LoginWrapper">
                    <p></p>
                    <form onSubmit={this.loginHandler} autoComplete="off">

                        <MobileTypeInput 
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            textHandler={this.textHandler}
                            name="email"
                        />
                        <MobileTypeInput 
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            textHandler={this.textHandler}
                            name="password"
                        />

                        <SubmitGradientButton 
                            label="Login"
                            style={{marginTop: '30px'}}
                        />
                    </form>

                    

                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to="/signup">Create a new account</Link>
                    <Link to="/forget-password">Forgot Password ?</Link>
                </div>
                
                
            </div>
        );
    }
}
