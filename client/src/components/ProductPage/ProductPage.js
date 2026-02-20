import { useDispatch } from 'react-redux';
import { API_URL, IMGS_URL } from '../../config';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Row, Card, Button, FormControl } from 'react-bootstrap';
import {
    faPlus,
    faMinus,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { addProductAndSave } from '../../redux/cartReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(null);
    const navigate = useNavigate()

    const [product, setProduct] = useState(null)
    const { productId } = useParams()

    useEffect(() => {
        fetch(`${API_URL}api/products/${productId}`)
            .then(res => {
                if (!res.ok) throw new Error(`Server error: ${res.status}`);
                return res.json()
            })
            .then(data => {
                setProduct({
                    ...data,
                    images: Array.isArray(data.images) ? data.images : [],
                })
                setMainImage(data.images?.[0] || null);
            })
            .catch(err => {
                console.error(err);
                setProduct(null);
                alert('Could not load product');
            });
    }, [productId]);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => Math.max(1, prev - 1));

    const handleAddToCart = (e) => {
        e.preventDefault();

        dispatch(addProductAndSave({
            id: product.id,
            name: product.name,
            price: product.price,
            images: product.images,
            quantity,
        }));
        alert("Product added to the cart!");
    };

    return (
        <div>
            {product &&
                <Card className='mb-4 p-3'>
                    <Card.Body>
                        <Row>
                            <Col md={6} className="d-flex flex-column align-items-center">
                                <Card.Img
                                    variant="top"
                                    src={IMGS_URL + mainImage}
                                    className={styles.productImage}
                                />
                                <div className="d-flex flex-wrap mt-2 gap-2">
                                    {product.images.map((img, index) => (
                                        <Card.Img
                                            key={index}
                                            src={IMGS_URL + img}
                                            className={`${styles.thumbnail} ${img === mainImage ? styles.thumbnailActive : ''}`}
                                            alt={product.name}
                                            onClick={() => setMainImage(img)}
                                        />
                                    ))}
                                </div>
                            </Col>

                            <Col md={6}>
                                <Card.Title className="fw-bold ms-2 mb-4 mt-2">{product.name}</Card.Title>
                                <Card.Text className='mb-3 ms-2' >
                                    {product.description}
                                </Card.Text>
                                <Card.Text className="mb-3 mt-5 ms-2">
                                    <span className="fw-bold">Price:</span> {product.price}zł
                                </Card.Text>

                                <div className={`d-flex align-items-center mb-4 ms-2 ${styles.controls}`}>
                                    <Button variant="outline-secondary" onClick={handleDecrease}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>

                                    <FormControl
                                        type="number"
                                        min={1}
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                                        className="text-center mx-2"
                                    />

                                    <Button variant="outline-secondary" onClick={handleIncrease}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </div>

                                <Button variant="outline-success" className='ms-2' onClick={handleAddToCart}>
                                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>}
            <div className="d-flex justify-content-end">
                <Button variant="outline-success mt-2" onClick={() => navigate('/cart')}>
                    See your cart
                </Button>
            </div>
        </div >
    );
};

export default ProductPage;
