import { useEffect, useState } from 'react';
import styles from './Alert.module.scss';

export const Alert = ({ message, type = "success", visible, onClose }) => {
    const [show, setShow] = useState(false);
    const [render, setRender] = useState(visible);

    useEffect(() => {
        if (visible) {
            setShow(true);
            setRender(true);
            const timer = setTimeout(() => {
                setShow(false);
                setTimeout(() => {
                    setRender(false);
                    onClose?.();
                }, 400);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    if (!render) return null;

    const typeClasses = {
        success: "bg-success border border-success",
        error: "bg-danger border border-danger",
    };

    return (
        <div
            className={`${styles.global} ${show ? styles.show : styles.hide} p-3 text-light rounded text-center ${typeClasses[type]}`}
            role="alert"
        >
            {message}
        </div>
    );
};
