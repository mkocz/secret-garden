import styles from './Hero.module.scss';
import { IMGS_URL } from '../../config';

const Hero = () => {

    return (
        <div className={styles.hero}
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0)), url(${IMGS_URL + 'baner/baner.jpg'})`,
            }}>
            <div className='w-75 mt-5 pt-5'>
                <h1 className={styles.title}>Welcome to the<div className='mt-2'> <strong className='text-uppercase fw-bold fs-1'>Secret Garden</strong> <span>Online Shop</span></div></h1>
                <p className={styles.subtitle}>Create your unique garden with our plants</p>
            </div>
        </div>
    );
};

export default Hero;
