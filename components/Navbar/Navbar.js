import Link from 'next/link';
import common from '@/styles/common.module.css';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.Navbar__left}>
        <Link className={common.logo} href="/">
          Culili
        </Link>
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
        <Link className={common.button_outline} href="/#">
          Get Early Access
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
