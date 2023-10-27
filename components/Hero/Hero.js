import { useState } from 'react';
import styles from './Hero.module.css';
import common from '@/styles/common.module.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__container}>
        <div className={styles.Hero__container__left}>
          <div className={styles.Hero__lead_in}>
            <p className={common.pill}>From byte to bite...</p>
          </div>
          <div className={styles.Hero__heading}>
            <h1 className={common.heading}>
              Lead the culinary{' '}
              <span className={common.heading_light}>digital</span> Renaissance.
            </h1>
          </div>
          <div className={styles.Hero__sub_heading}>
            <p className={common.paragraph}>
              Move your restaurant clients beyond common website builders and
              create unique, next-gen experiences using your favorite frontend
              frameworks.
            </p>
          </div>
          <div className={styles.Hero__cta}>
            <form onSubmit={handleFormSubmit}>
              <div className={common.inputWrapper}>
                <input
                  type="email"
                  name="Hero__cta"
                  id="Hero__cta"
                  placeholder="Email"
                  className={common.input_email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={common.button_email}>
                  Get Early Access
                </button>
              </div>
            </form>
            {status === 'success' && (
              <div className={styles.successMessage}>
                Signup successful! Check your email for further instructions.
              </div>
            )}
            {status === 'error' && (
              <div className={styles.errorMessage}>
                Signup failed. Please try again.
              </div>
            )}
          </div>
        </div>
        <div className={styles.Hero__container__right}>
          <div className={styles.Hero__image}>
            <img
              src={'/images/isodevchef.png'}
              alt="Developer working in Chef's kitchen"
            />
            <div className={styles.Hero__circle_1}></div>
            <div className={styles.Hero__circle_2}></div>
            <div className={styles.Hero__circle_3}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
