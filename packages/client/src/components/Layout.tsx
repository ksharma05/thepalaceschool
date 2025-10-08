import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { GSAPScrollUtils } from '../utils/gsap';

const Layout: React.FC = () => {
  useEffect(() => {
    // Initialize smooth scrolling
    GSAPScrollUtils.initSmoothScroll();
    
    // Cleanup on unmount
    return () => {
      GSAPScrollUtils.cleanup();
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="flex flex-col min-h-screen">
      <div id="smooth-wrapper-content">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
