import Navbar from '../components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import '@/styles/globals.css';
import '@/styles/blog.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
