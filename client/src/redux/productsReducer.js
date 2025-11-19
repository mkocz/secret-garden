import { API_URL } from '../config.js'

export const getAllProducts = (state) => state.products;

const createActionName = (actionName) => `app/cards/${actionName}`;
const GET_PRODUCT = createActionName("GET_PRODUCT");
const GET_PRODUCTS = createActionName("GET_PRODUCTS");

const getProducts = payload => ({ type: GET_PRODUCTS, payload })

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const res = await fetch(`${API_URL}api/products`);
            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Failed to fetch products');

            dispatch(getProducts(data));
        } catch (err) {
            console.error('Error fetching products:', err);
            throw err;
        }
    };
}

const productsReducer = (statePart = [], action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return [...statePart, { ...action.payload }];
        case GET_PRODUCTS:
            return [...action.payload];
        default:
            return statePart;
    }
};

export default productsReducer;