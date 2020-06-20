import React from 'react'
import Layout from '../../components/layout/Layout';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeFromCart} from '../../redux/cart/cartActions';
import {ReactComponent as Remove} from '../../assets/icons/remove.svg';
import './Cart.css';

function Cart(props) {

    const totalSum = (products) => {
        return products.reduce((acc,product) => {
            return acc + product.price * product.quantity;
        },0)
    }

    const {cartProducts, removeFromCart} = props;

    return (
        <Layout>
                <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                    {cartProducts.length
                    ?<div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Cantitate</p>
                            <p className="w-25">Total</p>
                        </div>
                       {  cartProducts.map((cartProduct) => {
                            return <div className="d-flex justify-content-between text-center" id ={cartProduct.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img className = "w-50 p-1" src={cartProduct.image} alt="Produs"/>
                                        <p className="w-50">{cartProduct.name}</p>
                                    </div>

                                    <p className="w-50">{cartProduct.price} {cartProduct.currency}</p>
                                    <p className="w-50">{cartProduct.quantity}</p>
                                    <div className="w-25 d-flex justify-content-center">
                                        <p className="w-50">{cartProduct.quantity * cartProduct.price} {cartProduct.currency}</p> 
                                        <div onClick={()=>{removeFromCart({product:{id:cartProduct.id}})}}><Remove/></div>
                                    </div>
                                </div>
                            
                        })
                    }
                                <div className="d-flex justify-content-end border-top">
                                        <div className="w-25 d-flex align-items-center justify-content-center">
                                            <p className="my-4 text-center font-weight-bold">Total de plată: </p>
                                        </div>
                                        <div className="w-25">
                                            <p className="my-4 text-center">
                                                { totalSum(cartProducts) } { cartProducts[0].currency }
                                            </p>
                                        </div>
                                    </div>
                    </div>
                    :<div className="d-flex flex-column align-items-center">
                        <p className="h3">Cosul este gol</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                     </div>
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
