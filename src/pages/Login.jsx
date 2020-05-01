import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import './Login.css'
import {connect} from 'react-redux';
import {loginUserGoogle, loginUserFacebook} from "../redux/actions/user";


class Login extends React.Component {

    componentDidUpdate(prevProps){
        if(this.props.userData !== prevProps.userData)
        this.props.history.push('/');
    }
    
    render(){
    
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5"/>
                </Link>
    
                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să te loghezi:</p>
                <button
                    className="btn btn-outline-dark d-flex align-items-center my-2 w-25"
                    onClick={() => this.props.signInWithGoogle()}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
    
                <button
                    className="btn btn-outline-dark d-flex align-items-center my-2 w-25"
                    onClick={this.props.logInWithFacebook()}
                >
                    <Facebook className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Facebook</span>
                </button> 
            </div>
        );

    }
}

function mapDispatchToProps(dispatch){
    return{
        signInWithGoogle: () => { dispatch(loginUserGoogle()) },
        logInWithFacebook: () => {dispatch(loginUserFacebook())}
    }
}

function mapStateToProps(state){
    return{
        userData: state.user.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);