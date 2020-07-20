import React from 'react';
import ProductItem from '../productItem/ProductItem';

function ProductList(props) {
    const { products } = props;

    return (
        <div className="row my-4">
            { !products.length 
                ? <div> 
                    <br/>
                    <p style={{marginLeft: '10px'}}>No products in this price range.</p>
                    <p style={{marginLeft: '10px'}}>Please select another filter.</p>
                  </div>
                : products.map((product) => {
                    return <ProductItem
                        {...product}
                        key={product.id}
                    />
                })
            }
        </div>
    );
};

export default ProductList;