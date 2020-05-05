import React from 'react';
import './ProductItem.css';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/cart/cartActions';
import {addToFavourites} from '../../redux/favourites/favouritesActions';
import {ReactComponent as AddToFavourites} from '../../assets/icons/heart-empty.svg';


function ProductItem(props) {
    const {id,name, price, currency, image, addToCart, addToFavourites} = props;

    return(
        <div className="product-item col-4 d-flex flex-column align-items-center">
            <div className="w-75 d-flex justify-content-end">
                    <div
                        onClick={()=>{
                            addToFavourites({
                                product: {
                                    id,
                                    name,
                                    image
                                }
                            })
                        }}
                    >
                    <AddToFavourites/>
                    </div>

            </div>
           
            <img src={image} alt="productPhoto" className="mb-2"/>
            <p className="mb-1 text-center">{ name }</p>
            <p className="text-center">{ price + currency }</p>

                <button 
                    className="btn btn-outline-dark" 
                    onClick={()=>{
                        addToCart({
                            product: {
                                id,
                                name, 
                                price,
                                currency,
                                image
                            }
                        })
                    }}
                >
                    Adauga in cos
                </button>   

            </div>
    
    );
}

function mapStateToProps(state){
    return {
        favouriteProducts: state.favourites.products
    }
}

function mapDispatchToProps(dispatch){
    return{
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavourites: (payload) => dispatch(addToFavourites(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);