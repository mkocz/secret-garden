import ProductCart from '../ProductCard/ProductCard';
import { Col, Row } from 'react-bootstrap';

const ProductList = (props) => {
    const products = props.products || [];

    return (
        <Row className="justify-content-center">
            {products.map(product =>
                <Col key={product.id} xs={12} md={6} lg={4} className="mb-4  d-flex justify-content-center">
                    <ProductCart  {...product} />
                </Col>)}
        </Row>
    );
};

export default ProductList;