import PageTitle from '../PageTitle/PageTitle';
import { decreaseQuantity, getAll, getCount, getTotalPrice, increaseQuantity, removeProduct, setComment, setQuantity } from '../../redux/cartReducer'
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Button, FormControl, Form } from 'react-bootstrap';
import {
    faPlus,
    faMinus,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { IMGS_URL } from '../../config';

const Cart = () => {
    const navigate = useNavigate()
    const products = useSelector(getAll);
    const totalQuantity = useSelector(getCount)
    const totalPrice = useSelector(getTotalPrice)
    const dispatch = useDispatch();

    const handleIncrease = (product) => dispatch(increaseQuantity(product));
    const handleDecrease = (product) => dispatch(decreaseQuantity(product));
    const handleRemove = (product) => dispatch(removeProduct(product));

    const handleSetQuantity = (e, product) => {
        dispatch(setQuantity({
            id: product.id,
            title: product.name,
            price: product.price,
            quantity: Math.max(1, Number(e.target.value)),
        }));
    };

    const handleCommentChange = (e, product) => {
        dispatch(setComment({
            id: product.id,
            comment: e.target.value,
        }));
    };

    return (
        <>
            <PageTitle>Cart</PageTitle>
            {products.length === 0 ? (
                <div className="py-2 my-3 text-center">
                    <div className="py-2 my-3 text-center">
                        Your cart is empty.
                    </div>
                    <Button variant="outline-success mt-2" onClick={() => navigate('/')}>Browse products</Button>
                </div>
            ) : (<div>
                <ListGroup className="mt-4">
                    {products.map(product => (
                        <ListGroup.Item
                            key={product.id}
                            className="py-2 my-3 border-top"
                        >
                            <div className="py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                <div className="py-3 d-flex mb-3 mb-md-0 w-50 justify-content-center justify-content-md-start ">
                                    <img
                                        src={IMGS_URL + product.images?.[0]}
                                        alt={product.title}
                                        style={{ width: '60px', height: '60px', objectFit: 'cover', marginTop: '0.5rem' }}
                                        className="me-3 rounded"
                                    />
                                    <div>
                                        <h2>  <strong className="mb-1 fs-5">{product.title}</strong>  </h2>
                                        <div> {product.price}zł</div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-3 mb-md-0" style={{ maxWidth: '180px' }}>
                                    <Button variant="outline-secondary" onClick={() => handleDecrease(product)}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>

                                    <FormControl
                                        type="number"
                                        min={1}
                                        value={product.quantity}
                                        onChange={(e) => handleSetQuantity(e, product)}
                                        className="text-center mx-2"
                                    />
                                    <Button variant="outline-secondary" onClick={() => handleIncrease(product)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </div>

                                <strong className='mb-3 mb-md-0'>{product.totalPrice} zł</strong>
                                <Button variant="secondary" onClick={() => handleRemove(product)}>
                                    <FontAwesomeIcon icon={faTrash} /> Remove
                                </Button>
                            </div>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                placeholder="Add a comment..."
                                value={product.comment || ""}
                                onChange={(e) => handleCommentChange(e, product)}
                                className="my-2"
                            />
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <div className="mt-4 text-end fs-5 fw-bold">
                    <div >Total items: {totalQuantity}</div>
                    <div>Total price: {totalPrice}zł</div>
                    <Button variant="outline-success mt-4" onClick={() => navigate('/checkout')}>Checkout</Button>
                </div>
            </div>)}
        </>
    );
};

export default Cart;