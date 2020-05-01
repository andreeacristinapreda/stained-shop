import React from 'react'
import Layout from '../components/Layout';
import {connect} from 'react-redux';

import {removeFromCart} from '../redux/actions/cart';

function Cart(props) {

    const {cartProducts,id, removeFromCart} = props;

    return (
        <Layout>
                <div className="container-fluid container-min-max-width">
                    {
                        cartProducts.map((cartProduct) => {
                            return(
                                <div className = "d-flex">
                                    <p className="w-50">{cartProduct.name}</p>
                                    <p className="w-50">{cartProduct.price} {cartProduct.currency}</p>
                                    <button onClick={()=>{removeFromCart({product:{id:cartProduct.id}})}}>X</button>
                                </div>
                            );
                        })
                    }
                </div>
         </Layout>
    );
}



function mapStateToProps(state){
    return{
        cartProducts: state.cart.products
    }
}

function mapDispatchToProps(dispatch){
    return{
          removeFromCart: (payload) => dispatch(removeFromCart(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
