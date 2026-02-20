import PageTitle from '../PageTitle/PageTitle';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Button, Form, ListGroup } from 'react-bootstrap';
import { getAll, getCount, getTotalPrice, resetCart } from '../../redux/cartReducer'
import { useState } from 'react';
import { API_URL } from '../../config.js'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const products = useSelector(getAll);
    const totalQuantity = useSelector(getCount)
    const totalPrice = useSelector(getTotalPrice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            totalPrice,
            items: products.map((p) => ({
                productId: p.id,
                quantity: p.quantity,
                price: p.price,
                specialRequest: p.specialRequest|| undefined,
            })),
        };

        try {
            const res = await fetch(`${API_URL}api/orders/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Failed to send order');

            alert("Order sent!");
            dispatch(resetCart());
            navigate('/')
            return data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    return (
        <>
            <PageTitle>Checkout</PageTitle>
            <div className="container my-5">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6} className="mb-4">
                            <h4 className="mb-3">Shipping Details</h4>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address"
                                    value={formData.address}
                                    onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" name="email"
                                    value={formData.email}
                                    onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <h4 className="mb-3">Order Summary</h4>
                            <ListGroup className="mt-4">
                                {products.map(product => (
                                    <ListGroup.Item
                                        key={product.id}
                                        className="py-3 d-flex justify-content-between align-items-center"
                                    >
                                        <div>
                                            <h5 className="mb-1">{product.name}</h5>
                                            <div className="mb-1">single price: {product.price}zł</div>
                                            <div className="mb-1">number: {product.quantity}</div>
                                            {product.specialRequest && <div className="mb-1">Special request: {product.specialRequest}</div>}
                                        </div>
                                        <strong>{product.totalPrice} zł</strong>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>

                            <div className="mt-4 text-end">
                                <h5>Products number: {totalQuantity}</h5>
                                <h5>Total price: {totalPrice}zł</h5>
                                <Button type="submit" className="mt-3" variant="outline-success">Place Order</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div >
        </>
    );
};

export default Checkout;