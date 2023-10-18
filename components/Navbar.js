import Link from 'next/link';

function Navbar() {
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
