import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import './Header.css';
import {connect} from 'react-redux';

import {logoutUser} from '../../redux/user/userActions';
import {ReactComponent as Favourites} from '../../assets/icons/heart-full.svg';


function Header(props) {

    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Stained shop" className="logo"/>
                </Link>
                <div>
                    { props.user
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { props.user
                            ? <p className="logout h5" onClick={props.logout}>Log out</p>
                            : <Link to="/login" className="h5">Login</Link>
                        }
                        
                        <Link to="/favourites">
                        <Favourites className="ml-2"/>
                        </Link>

                        <Link to="/cart">
                        <ShoppingCart className="ml-2"/>
                        </Link>
                        <p className='ml-1'>{props.numberOfProducts}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state){
    return{
        numberOfProducts: state.cart.products.length,
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch){
    return{
        logout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);