import styles from './Footer.module.css';
import common from '@/styles/common.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.Footer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletter_circle_1}></div>
        <div className={styles.newsletter_circle_2}></div>
        <div className={styles.newsletter__heading}>
          <h1 className={common.heading_medium}>Subscribe now!</h1>
        </div>
        <div className={styles.newsletter__sub_heading}>
          <p className={common.paragraph}>
            Keep up to date with Culili, frontend development, freelancing, and
            more!
          </p>
        </div>
        <div className={styles.newsletter__form}>
          <div className={common.inputWrapper}>
            <input
              type="email"
              name="Hero__cta"
              id="Hero__cta"
              placeholder="Email"
              className={common.input_email}
            />
            <button className={common.button_email}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {currentYear} Culili. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
