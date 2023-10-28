import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { openModal } from '../../features/modalSlice';
import common from '@/styles/common.module.css';
import styles from './Navbar.module.css';

function Navbar() {
  const dispatch = useDispatch();

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="navbar"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.Navbar__left}>
        <Link className={common.logo} href="/">
          Culili
        </Link>
      </div>
      <div className={styles.Navbar__mobile_right}>
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        >
          <div />
          <div />
          <div />
        </button>
      </div>
      <div className={styles.Navbar__center}>
        <Link className={styles.link} href="/howitworks">
          How it works
        </Link>
        <Link className={styles.link} href="/roadmap">
          Roadmap
        </Link>
        <Link className={styles.link} href="/pricing">
          Pricing
        </Link>
        <Link className={styles.link} href="/blog">
          Blog
        </Link>
      </div>
      <div className={styles.Navbar__right}>
        <button className={common.button_outline} onClick={handleOpenModal}>
          Get Early Access
        </button>
      </div>
      <div className={styles.Navbar__mobile}>
        <div className={styles.Navbar__mobile_center}>
          <Link className={styles.link} href="/howitworks">
            How it works
          </Link>
          <Link className={styles.link} href="/roadmap">
            Roadmap
          </Link>
          <Link className={styles.link} href="/pricing">
            Pricing
          </Link>
          <Link className={styles.link} href="/blog">
            Blog
          </Link>
        </div>
        <div className={styles.Navbar__mobile_cta}>
          <button className={common.button_outline} onClick={handleOpenModal}>
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
