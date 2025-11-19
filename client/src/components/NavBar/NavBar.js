import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getCount } from "../../redux/cartReducer";

const NavBar = () => {
    const counter = useSelector(getCount)

    return (
        <nav>
            <Container>
                <div className={styles.navbar}>
                    <Link to="/" className='text-decoration-none text-success mx-3 fst-italic fs-3 fw-bold'>Secret Garden</Link>
                    <ul className="d-flex list-unstyled m-0 p-0 ">
                        <li>
                            <Link to="/" className='text-decoration-none text-dark me-3'>Home</Link>
                        </li>
                        <li>
                            <Link to="/cart" className='d-flex text-decoration-none text-dark me-2 mt-1'>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span className="mt-1 pl-1 text-base text-bold">{counter}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav >
    );
};

export default NavBar;
