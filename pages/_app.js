import Navbar from '../components/Navbar';
import '@/styles/globals.css';
import '@/styles/blog.css';
import '@/styles/navbar.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
