import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/features/modalSlice';
import styles from './Modal.module.css';

const Modal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button onClick={handleClose}>Close</button>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </div>
    </div>
  );
};

export default Modal;
