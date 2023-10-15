import { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  if (!theme) {
    return null;
  }

  return (
    <nav className="navbar">
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="/blog">
        Blog
      </Link>
      <Link className="link" href="/login">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
