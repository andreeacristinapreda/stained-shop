import React from 'react';
import ProductItem from '../productItem/ProductItem';

function ProductList(props) {
    const { products } = props;

    return (
        <div className="row mb-4">
            {
                products.map((product) => {
                    return <ProductItem
                        {...product}
                        key={product.id}
                    />
                })
            }
        </div>
    );
}

export default ProductList;