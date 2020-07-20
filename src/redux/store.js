import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './cart/CartReducer';
import { userReducer } from './user/UserReducer';
import { favoritesReducer } from './favorites/FavoritesReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;