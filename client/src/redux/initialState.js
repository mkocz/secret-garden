const initialState = {
    products: [],
    cart: {
        products: JSON.parse(localStorage.getItem('cart'))?.products || [],
    }
};

export default initialState;
