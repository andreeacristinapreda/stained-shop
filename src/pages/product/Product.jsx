import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
class Product extends Component {
    constructor(){
        super();
        this.state={
            product:{}
        }
    }

    componentDidMount(){
        const productIdUrl = this.props.match.params.productId;
        const categoryValues = Object.values(products);
       
        let currentProduct;
        categoryValues.forEach((category)=>{
            const findResult = category.items.find((item)=>{
                return Number(productIdUrl) === item.id;
            })

            if (findResult !== undefined){
                currentProduct = findResult;
            }
        })

        this.setState({product: currentProduct});
    }

    render() {
        const {product} = this.state;
        return (
        <Layout>
            <div className="product-page content-min-height container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => {
                                    this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Adaugă în coș
                            </button>
                            <p><span className="font-weight-bold">Dificulate</span>: {product.difficulty}</p>
                            <p><span className="font-weight-bold">Firma</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
        </Layout>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    }
}
export default connect (null, mapDispatchToProps)(Product);
