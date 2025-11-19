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
const SET_COMMENT = createActionName('SET_COMMENT');

export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const decreaseQuantity = payload => ({ type: DECREASE_QUANTITY, payload });
export const increaseQuantity = payload => ({ type: INCREASE_QUANTITY, payload });
export const setQuantity = payload => ({ type: SET_QUANTITY, payload });
export const setComment = payload => ({ type: SET_COMMENT, payload });
export const resetCart = () => ({ type: RESET_CART });

const saveCartToLocalStorage = (products) => {
    localStorage.setItem('cart', JSON.stringify({ products }));
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
            saveCartToLocalStorage(updatedProducts);
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
            saveCartToLocalStorage(updatedProducts);
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
            saveCartToLocalStorage(updatedProducts);
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
            saveCartToLocalStorage(updatedProducts);
            return {
                ...statePart,
                products: updatedProducts,
            };
        }
        case REMOVE_PRODUCT: {
            let updatedProducts = statePart.products.filter(
                product => product.id !== action.payload.id
            )
            saveCartToLocalStorage(updatedProducts);
            return {
                ...statePart,
                products: updatedProducts,
            };
        }
        case RESET_CART:
            saveCartToLocalStorage([]);
            return {
                ...statePart,
                products: [],
            };
        case SET_COMMENT: {
            const updatedProducts = statePart.products.map(product =>
                product.id === action.payload.id
                    ? { ...product, comment: action.payload.comment }
                    : product
            );
            saveCartToLocalStorage(updatedProducts);
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
