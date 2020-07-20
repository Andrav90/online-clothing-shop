import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './FavoritesConstants';

const initialState = {
    products: []
};

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            let productInFavorites = false;
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    productInFavorites = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInFavorites) {
                return {
                    ...state,
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                }
            } else {
                return {
                    ...state,
                    products: updatedProducts
                };
            }
        case REMOVE_FROM_FAVORITES:
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return {
                ...state,
                products: filteredProducts
            };
        default:
            return state;
    };
};