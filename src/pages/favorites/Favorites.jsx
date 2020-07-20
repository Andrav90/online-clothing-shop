import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavorites } from '../../redux/favorites/FavoritesActions';
import Layout from '../../components/layout/Layout';
import { ReactComponent as Close} from '../../assets/icons/close.svg';
import './Favorites.css';

function Favorites(props) {
    return(
        <Layout>
            <div className="container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="favorites-headers w-25"><strong>Item</strong></p>
                            <p className="favorites-headers w-25"><strong>Price</strong></p>
                            <p className="favorites-headers w-25"><strong>Remove from favorites</strong></p>
                        </div>

                        {
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <Link to={`/product/${product.id}`}>
                                            <img src={product.image} alt="Item" className="favorites-product-image"/>
                                            <p>{ product.name }</p>
                                        </Link>
                                    </div>
                                    <div className="w-25 d-flex justify-content-center">
                                        <p className="mr-2">{ product.price } { product.currency }</p>
                                    </div>
                                    <div className="w-25 d-flex justify-content-center">
                                        <div onClick={() => props.removeFromFavorites({id: product.id})}>
                                            <Close style={{cursor: 'pointer'}} />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                      
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h4">There's nothing here!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Back to home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
};

function mapStateToProps(state) {
    return {
        products: state.favorites.products
    };
};

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);