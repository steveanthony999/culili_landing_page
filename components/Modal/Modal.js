import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/features/modalSlice';
import styles from './Modal.module.css';
import common from '@/styles/common.module.css';

const Modal = () => {
  const dispatch = useDispatch();

  const [isOthersChecked, setIsOthersChecked] = useState(false);

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

  const handleCheckboxChange = (e) => {
    setIsOthersChecked(e.target.checked);
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.Modal__top}>
          <div></div>
          <h2>Culili Early Access</h2>
          <button onClick={handleClose} className={common.btn}>
            X
          </button>
        </div>
        <form>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="firstName">
              First Name&nbsp;<span>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={common.input_email}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email&nbsp;<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={common.input_email}
              required
            />{' '}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="location" className={styles.label}>
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className={common.input_email}
            />{' '}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Favorite Frontend Tools</label>
            <div className={styles.checkboxGroup}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="tools"
                  value="React"
                  className={styles.inputField}
                  defaultChecked
                />{' '}
                React
              </label>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="tools"
                  value="Angular"
                  className={styles.inputField}
                />{' '}
                Angular
              </label>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="tools"
                  value="Vue.js"
                  className={styles.inputField}
                />{' '}
                Vue.js
              </label>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="tools"
                  value="others"
                  className={styles.inputField}
                  onChange={handleCheckboxChange}
                />{' '}
                Others
              </label>
            </div>
            <input
              type="text"
              placeholder="Others"
              name="otherTools"
              className={common.input_email}
              style={{ marginTop: '1rem', opacity: isOthersChecked ? 1 : 0.5 }}
              disabled={!isOthersChecked}
            />
          </div>

          <div className={styles.checkboxGroup}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="updatesOptIn"
                  defaultChecked
                  className={styles.inputField}
                />{' '}
                Opt-in for Updates
              </label>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="consentFollowUp"
                  defaultChecked
                  className={styles.inputField}
                />{' '}
                Consent to Follow-Up
              </label>
            </div>
          </div>

          <button type="submit" className={common.button_wide}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
