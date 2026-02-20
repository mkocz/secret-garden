import initialState from './initialState';
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) =>
    cart.products.reduce((total, product) => total + product.quantity, 0);
export const getTotalPrice = ({ cart }) =>
    cart.products.reduce((sum, product) => sum + product.totalPrice, 0);

const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const RESET_CART = createActionName('RESET_CART');
const DECREASE_QUANTITY = createActionName('DECREASE_QUANTITY');
const INCREASE_QUANTITY = createActionName('INCREASE_QUANTITY');
const SET_QUANTITY = createActionName('SET_QUANTITY');
const SET_REQUEST = createActionName('SET_REQUEST');

export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const decreaseQuantity = payload => ({ type: DECREASE_QUANTITY, payload });
export const increaseQuantity = payload => ({ type: INCREASE_QUANTITY, payload });
export const setQuantity = payload => ({ type: SET_QUANTITY, payload });
export const setRequest = payload => ({ type: SET_REQUEST, payload });
export const resetCart = () => ({ type: RESET_CART });

export const addProductAndSave = payload => (dispatch) => {
    dispatch(addProduct(payload));
    dispatch(saveCart());
};

export const removeProductAndSave = payload => (dispatch) => {
    dispatch(removeProduct(payload));
    dispatch(saveCart());
};

export const increaseQuantityAndSave = payload => (dispatch) => {
    dispatch(increaseQuantity(payload));
    dispatch(saveCart());
};

export const decreaseQuantityAndSave = payload => (dispatch) => {
    dispatch(decreaseQuantity(payload));
    dispatch(saveCart());
};

export const setQuantityAndSave = payload => (dispatch) => {
    dispatch(setQuantity(payload));
    dispatch(saveCart());
};

export const setRequestAndSave = payload => (dispatch) => {
    dispatch(setRequest(payload));
    dispatch(saveCart());
};

export const saveCart = () => (dispatch, getState) => {
    const { cart } = getState();
    localStorage.setItem('cart', JSON.stringify({
        products: cart.products
    }));
};

const cartReducer = (statePart = initialState.cart, action = {}) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const existingProduct = statePart.products.find(
                product => product.id === action.payload.id
            );
            let updatedProducts;
            if (existingProduct) {
                updatedProducts = statePart.products.map(product =>
                    product.id === action.payload.id
                        ? {
                            ...product,
                            quantity: product.quantity + action.payload.quantity,
                            totalPrice: (product.quantity + action.payload.quantity) * product.price,
                        }
                        : product
                );
            } else {
                updatedProducts = [
                    ...statePart.products,
                    {
                        ...action.payload,
                        totalPrice: action.payload.quantity * action.payload.price,
                    },
                ];
            }

            return {
                ...statePart,
                products: updatedProducts,
            };
        }
        case SET_QUANTITY: {
            const updatedProducts = statePart.products
                .map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: action.payload.quantity, totalPrice: action.payload.quantity * product.price }
                        : product
                )

            return {
                ...statePart,
                products: updatedProducts,
            };
        }
        case DECREASE_QUANTITY: {
            const updatedProducts = statePart.products
                .map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity - 1, totalPrice: (product.quantity - 1) * product.price }
                        : product
                )
                .filter(product => product.quantity > 0);

            return {
                ...statePart,
                products: updatedProducts,
            };
        }

        case INCREASE_QUANTITY: {

            const updatedProducts = statePart.products
                .map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1, totalPrice: (product.quantity + 1) * product.price }
                        : product
                )

            return {
                ...statePart,
                products: updatedProducts,
            };
        }
        case REMOVE_PRODUCT: {
            let updatedProducts = statePart.products.filter(
                product => product.id !== action.payload.id
            )
            return {
                ...statePart,
                products: updatedProducts,
            };
        }
        case RESET_CART:
            return {
                ...statePart,
                products: [],
            };
        case SET_REQUEST: {
            const updatedProducts = statePart.products.map(product =>
                product.id === action.payload.id
                    ? { ...product, specialRequest: action.payload.specialRequest }
                    : product
            );
            return {
                ...statePart,
                products: updatedProducts
            };
        }

        default:
            return statePart;
    }
}
export default cartReducer
