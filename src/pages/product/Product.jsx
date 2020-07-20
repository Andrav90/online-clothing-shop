import React from 'react';
import { connect } from 'react-redux';
import products from '../../utils/products.json';
import { addToCart } from '../../redux/cart/CartActions';
import { addToFavorites } from '../../redux/favorites/FavoritesActions';
import Layout from '../../components/layout/Layout';
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({product: currentProduct});
    }

    render() {
        const { product} = this.state;

        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h3 className="product-page-product-name">{product.name}</h3>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-info">{product.price} {product.currency}</p>
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
                                Add to cart
                            </button>
                            <button
                            style={{marginLeft: '20px'}}
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => {
                                    this.props.addToFavorites({
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
                                Add to favorites
                            </button>
                            <p><span className="font-weight-bold">Size</span>: {product.size}</p>
                            { product.colour ? <p><span className="font-weight-bold">Colour</span>: {product.colour}</p> : null }
                            { product.material ? <p><span className="font-weight-bold">Material</span>: {product.material}</p> : null }
                            { product.description 
                                ? 
                                <div>
                                    <p className="font-weight-bold mb-1">Description:</p>
                                    <p>{product.description}</p>
                                </div>
                                : null
                            }
                           
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </Layout>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (payload) => dispatch(addToFavorites(payload))
    };
};

export default connect(null, mapDispatchToProps)(Product);