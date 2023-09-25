import React from 'react'
import Layout from '../../components/layout/Layout';
import {connect} from 'react-redux';
import {ReactComponent as Remove} from '../../assets/icons/remove.svg';
import { removeFromFavourites } from '../../redux/favourites/favouritesActions';
import {Link} from 'react-router-dom';
import {addToCart} from "../../redux/cart/cartActions";

function Favourites(props){

const {favouriteProducts, removeFromFavourites} = props;

    return(
        <Layout>
            <div className="container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
            { favouriteProducts.length 
            ?<div>
                <p>Produsele tale favorite:</p>
                <div className="d-flex justify-content-between container-min-max-width">
                
                {favouriteProducts.map((product) =>{
                    return <div className="w-50 d-flex flex-column justify-content-center align-items-center" id={product.id}>
                            <div className=" w-75 d-flex justify-content-end">
                                <div onClick={()=>{removeFromFavourites({product:{id:product.id}})}}><Remove/></div>
                            </div>
                            <img className = "w-50 p-1" src={product.image} alt="Produs"/>
                            <p className="w-50 font-weight-bold d-flex justify-content-center">{product.name}</p>
                        </div>
                
                })
                
                }

            </div>
            </div>
                
            :<div className="d-flex flex-column align-items-center">
                <p className="h3">There's nothing on your list!</p>
                <Link to="/"><button className="btn btn-outline-dark">Back to home page</button></Link>
            </div>
            }
            </div>
        </Layout>
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
          removeFromFavourites: (payload) => dispatch(removeFromFavourites(payload))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Favourites);