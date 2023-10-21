import Link from 'next/link';
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
      <div className={styles.info}>
        <div className={styles.info__socials}>
          <p className={common.bold}>Follow us on:</p>
          <div className={styles.info__social_bg}>
            <img src="/images/logo-white.png" alt="X logo" />
          </div>
        </div>
        <div className={styles.info__company}>
          <Link className={common.bold} href="/company">
            Company
          </Link>
          <Link className={common.bold} href="/careers">
            Careers
          </Link>
        </div>
      </div>
      <div className={common.line}></div>
      <div className={styles.copyright}>
        &copy; {currentYear} Culili. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
