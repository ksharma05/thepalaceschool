import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { GSAPScrollUtils } from '../utils/gsap';

const Layout: React.FC = () => {
  useEffect(() => {
    // Initialize GSAP smooth scrolling
    const smoother = GSAPScrollUtils.initSmoothScroll();
    
    // Cleanup on unmount
    return () => {
      if (smoother) {
        smoother.kill();
      }
      GSAPScrollUtils.cleanup();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-wrapper-content" className="flex flex-col min-h-screen">
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
