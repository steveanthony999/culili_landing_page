import Link from 'next/link';
import common from '@/styles/common.module.css';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={`${styles.link} ${common.logo}`} href="/">
        Culili
      </Link>
      <Link className={styles.link} href="/blog">
        Blog
      </Link>
      <Link className={styles.link} href="/login">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
