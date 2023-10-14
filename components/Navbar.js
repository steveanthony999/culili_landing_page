import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="/login">
        Login
      </Link>
      <Link className="link" href="/signup">
        Sign Up
      </Link>
      <Link className="link" href="/blog">
        Blog
      </Link>
    </nav>
  );
}

export default Navbar;
