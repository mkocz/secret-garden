import { useEffect } from 'react';
import { fetchProducts, getAllProducts } from '../../redux/productsReducer';
import Hero from '../Hero/Hero';
import ProductList from '../ProductList/ProductList';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(getAllProducts);
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <Hero />
            <h2 className="text-dark my-5 ms-4">Explore our plants</h2>
            <ProductList products={products} />
        </>
    );
};

export default Home;