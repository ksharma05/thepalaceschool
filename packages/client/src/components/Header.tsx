import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import ColorPresetSelector from './ColorPresetSelector';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'History', href: '/history' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Social Media', href: '/social-media' },
    { name: 'Academics', href: '/academics' },
    { name: 'Student Life', href: '/student-life' },
  ];

  return (
    <header className="bg-bg-primary shadow-sm border-b border-border-primary">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
          <span className="sr-only">The Palace School</span>
          <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PS</span>
          </div>
          <span className="text-xl font-bold text-text-primary">
            The Palace School
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center space-x-3">
          <ColorPresetSelector />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-secondary"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm/6 font-semibold text-text-primary hover:text-primary-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <ColorPresetSelector />
          <ThemeToggle />
          <Link
            to="/admin/login"
            className="text-sm/6 font-semibold text-text-primary hover:text-primary-600 transition-colors duration-200"
          >
            Admin <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-primary p-6 sm:max-w-sm sm:ring-1 sm:ring-border-primary">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <span className="sr-only">The Palace School</span>
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="text-xl font-bold text-text-primary">
                The Palace School
              </span>
            </Link>
            <div className="flex items-center space-x-3">
              <ColorPresetSelector />
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-text-secondary"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border-primary">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-text-primary hover:bg-surface-secondary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/admin/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-text-primary hover:bg-surface-secondary transition-colors duration-200"
                >
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
