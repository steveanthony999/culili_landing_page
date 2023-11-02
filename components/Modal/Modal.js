import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HashLoader from 'react-spinners/HashLoader';
import { closeModal, selectEmail } from '@/features/modalSlice';
import styles from './Modal.module.css';
import common from '@/styles/common.module.css';

const override = {
  display: 'block',
  margin: '0 auto',
};

const Modal = () => {
  const dispatch = useDispatch();
  const globalEmail = useSelector(selectEmail);

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOthersChecked, setIsOthersChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState(globalEmail);
  const [location, setLocation] = useState('');
  const [selectedTools, setSelectedTools] = useState({
    React: true,
    Angular: false,
    Vuejs: false,
    OtherTools: '',
  });
  const [optIns, setOptIns] = useState({
    updatesOptIn: true,
    consentFollowUp: true,
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (globalEmail) {
      setEmail(globalEmail);
    }
  }, [globalEmail]);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleOtherCheckboxChange = (e) => {
    setIsOthersChecked(e.target.checked);
    if (!e.target.checked) {
      setSelectedTools((prevState) => ({
        ...prevState,
        OtherTools: '',
      }));
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedTools((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleOptInsCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setOptIns((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (status === 'success') {
      handleClose();
      return;
    }

    setStatus('loading');

    const userData = {
      email,
      firstName,
      location,
      tools: Object.keys(selectedTools).filter(
        (tool) => selectedTools[tool] === true
      ),
      otherTools: selectedTools.OtherTools,
      updatesOptIn: optIns.updatesOptIn,
    };

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setStatus('success');
        resetForm();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setLoading(false);
  };

  const resetForm = () => {
    setFirstName('');
    setEmail('');
    setLocation('');
    setSelectedTools({
      React: true,
      Angular: false,
      Vuejs: false,
      OtherTools: '',
    });
    setOptIns({
      updatesOptIn: true,
      consentFollowUp: true,
    });
    setIsOthersChecked(false);
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

        <form onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={common.input_email}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={status === 'success' ? false : true}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={common.input_email}
            />{' '}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Favorite Frontend Tools</label>
            <div className={styles.checkboxGroup}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="React"
                  value="React"
                  className={styles.inputField}
                  checked={selectedTools.React}
                  onChange={handleCheckboxChange}
                />{' '}
                React
              </label>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="Angular"
                  value="Angular"
                  className={styles.inputField}
                  checked={selectedTools.Angular}
                  onChange={handleCheckboxChange}
                />{' '}
                Angular
              </label>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="Vuejs"
                  value="Vue.js"
                  className={styles.inputField}
                  checked={selectedTools.Vuejs}
                  onChange={handleCheckboxChange}
                />{' '}
                Vue.js
              </label>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="tools"
                  value="others"
                  className={styles.inputField}
                  onChange={handleOtherCheckboxChange}
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
              value={selectedTools.OtherTools}
              onChange={(e) =>
                setSelectedTools((prevState) => ({
                  ...prevState,
                  OtherTools: e.target.value,
                }))
              }
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
                  onChange={handleOptInsCheckboxChange}
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
                  onChange={handleOptInsCheckboxChange}
                />{' '}
                Consent to Follow-Up
              </label>
            </div>
          </div>

          <button
            type="submit"
            className={common.button_wide}
            style={{
              opacity: optIns.consentFollowUp ? 1 : 0.5,
              pointerEvents: !optIns.consentFollowUp && 'none',
            }}
            disabled={optIns.consentFollowUp ? false : true}
          >
            {status === 'success' ? (
              'Thank you for signing up!'
            ) : loading ? (
              <HashLoader
                color="#ffffff"
                loading={loading}
                size={30}
                css={override}
              />
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
        {status === 'error' && (
          <div>
            There was a problem submitting your information. Please try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
