import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsModalOpen } from '../features/modalSlice';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';

const Layout = ({ children }) => {
  const isModalOpen = useSelector(selectIsModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isModalOpen]);

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Layout;
