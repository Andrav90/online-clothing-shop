import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/cart/CartActions';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/FavoritesActions';
import { ReactComponent as EmptyCart } from '../../assets/icons/empty-cart.svg';
import { ReactComponent as EmptyHeart } from '../../assets/icons/empty-heart.svg';
import { ReactComponent as FullHeart } from '../../assets/icons/full-heart.svg';
import './ProductItem.css';

function ProductItem(props) {
    const {name, price, currency, image, id} = props;

    function isFav(id){
        for(let i=0; i < props.favorites.length; i++){
            if (props.favorites[i].id === id){
                return true;
            }
        }
        return false;
    };

    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center" style={{marginBottom: '30px', paddingLeft: '0'}}>
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2" style={{ boxShadow: 'grey 1px 2px 5px', height: '250px' }} />
                <p className="my-1 mt-2 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <div className="d-flex">
                {
                    isFav(id) 
                        ? <FullHeart className="conditional-icons" onClick={() => props.removeFromFavorites({id})} />
                        : <EmptyHeart className="conditional-icons" onClick={() => props.addToFavorites({product: {id, name, price, currency, image}})} />
                }
                <button className="btn btn-outline-dark" onClick={() => props.addToCart({product: {id, name, price, currency, image} })}>
                    <EmptyCart className="cart-icon" />
                    Add to cart
                </button>
            </div>
        </div>
    );
};

function mapStateToProps(state){
        return {
    favorites: state.favorites.products,
    cart: state.cart.products
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product)),
        removeFromFavorites: (product) => dispatch(removeFromFavorites(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);