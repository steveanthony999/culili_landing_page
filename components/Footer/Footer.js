import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import common from '@/styles/common.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const formRef = useRef(null);

  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (formRef.current.reportValidity()) {
      try {
        const response = await fetch('/api/send-newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        const responseText = await response.text();
        if (response.ok) {
          setMessage('Thank you for subscribing!');
          setEmail('');
        } else if (
          response.status === 400 &&
          responseText === 'Email is already subscribed'
        ) {
          setMessage('You are already subscribed.');
        } else {
          setMessage('Failed to subscribe. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('An error occurred. Please try again later.');
      }
    }
  };

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
          <form ref={formRef} onSubmit={handleSubscribe}>
            <div className={common.inputWrapper}>
              <input
                type="email"
                name="Hero__cta"
                id="Hero__cta"
                placeholder="Email"
                className={common.input_email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className={common.button_email}>
                Subscribe
              </button>
            </div>
          </form>
          <div className={styles.newsletter__message}>{message}</div>
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
      <div className={styles.Footer__links}>
        <div className={styles.links__company}>
          <Link className={common.logo} href="/">
            Culili
          </Link>
          <p>
            Made for freelance frontend developers who love modern frameworks
            like React, Angular, Vue, and more!
          </p>
          <p>
            Our aim is to provide a comprehensive backend platform for your
            restaurant clients.
          </p>
          <Link href="/mission">Read more about the Culili Mission</Link>
        </div>
        <div className={styles.links__site}>
          <div className={styles.column}>
            <h4>Product</h4>
            <br />
            <Link href="/platform">Platform</Link>
            <Link href="/themes">Themes</Link>
          </div>
          <div className={styles.column}>
            <h4>Developers</h4>
            <br />
            <Link href="/core-concepts">Core Concepts</Link>
            <Link href="/documentation">Documentation</Link>
          </div>
          <div className={styles.column}>
            <h4>Resources</h4>
            <br />
            <Link href="/blog">Blog</Link>
            <Link href="/tutorials">Tutorials</Link>
          </div>
          <div className={styles.column}>
            <h4>Support</h4>
            <br />
            <Link href="/help-center">Help Center</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/about">About Culili</Link>
            <Link href="/contact">Contact</Link>
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
