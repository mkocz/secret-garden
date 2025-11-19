
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IMGS_URL } from '../../config';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.scss';

const ProductCard = ({ name, description, images, id, price }) => {
    const navigate = useNavigate()

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className={styles.productImage}
                src={IMGS_URL + images?.[0]}
                alt={name}
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className='text-truncate'>
                    {description}
                </Card.Text>
                <Card.Text>
                    <span className="fw-bold">price:</span> {price}zł
                </Card.Text>
                <Button variant="outline-success" onClick={() => navigate(`/products/${id}`)}>Read more</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;