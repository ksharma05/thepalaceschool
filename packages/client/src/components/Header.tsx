import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
// import ColorPresetSelector from './ColorPresetSelector';
import schoolLogo from '../assets/WhatsApp_Image_2025-11-04_at_09.59.04-removebg-preview.png';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutDropdownItems = [
    { name: 'About Us', href: '/about' },
    { name: 'History', href: '/history' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Committees', href: '/committees' },
  ];

  // Left side navigation (3 items)
  const leftNavigation = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Social Media', href: '/social-media' },
  ];

  // Right side navigation
  const rightNavigation = [
    { name: 'Academics', href: '/academics' },
    { name: 'Student Life', href: '/student-life' },
  ];

  return (
    <header className="bg-bg-primary shadow-sm border-b border-border-primary">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        
        {/* Mobile: Logo left, menu button right */}
        <div className="flex lg:hidden items-center justify-between w-full">
          <Link to="/" className="flex items-center space-x-2">
            <span className="sr-only">The Palace School</span>
            <img 
              src={schoolLogo} 
              alt="The Palace School Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center space-x-2">
            {/* <ColorPresetSelector /> */}
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Desktop: Three-column layout with centered logo */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full">
          
          {/* Left Navigation */}
          <div className="flex items-center gap-x-6 flex-1">
            {/* About Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-sm font-medium text-text-primary hover:text-primary-600 transition-colors duration-200 uppercase tracking-wide">
                About
                <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
              </MenuButton>
              <MenuItems
                transition
                className="absolute left-0 z-50 mt-3 w-48 origin-top-left rounded-xl bg-surface-primary shadow-lg ring-1 ring-border-primary focus:outline-none transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-2">
                  {aboutDropdownItems.map((item) => (
                    <MenuItem key={item.name}>
                      {({ active }) => (
                        <Link
                          to={item.href}
                          className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide ${
                            active
                              ? 'bg-surface-secondary text-primary-600'
                              : 'text-text-primary'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            {/* Left nav items */}
            {leftNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-text-primary hover:text-primary-600 transition-colors duration-200 uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex items-center justify-center mx-8">
            <img 
              src={schoolLogo} 
              alt="The Palace School - The City Palace, Jaipur" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-x-6 flex-1 justify-end">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-text-primary hover:text-primary-600 transition-colors duration-200 uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            
            {/* <ColorPresetSelector /> */}
            <ThemeToggle />
            
            <Link
              to="/admin/login"
              className="text-sm font-medium text-text-primary hover:text-primary-600 transition-colors duration-200 uppercase tracking-wide"
            >
              Admin <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-primary p-6 sm:max-w-sm sm:ring-1 sm:ring-border-primary">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">The Palace School</span>
              <img 
                src={schoolLogo} 
                alt="The Palace School Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <div className="flex items-center space-x-2">
              {/* <ColorPresetSelector /> */}
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-text-secondary"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border-primary">
              {/* About Section in Mobile */}
              <div className="py-6">
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">About</p>
                <div className="space-y-2">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-text-primary hover:bg-surface-secondary transition-colors duration-200 uppercase tracking-wide"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Navigation in Mobile */}
              <div className="space-y-2 py-6">
                {[...leftNavigation, ...rightNavigation].map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-text-primary hover:bg-surface-secondary transition-colors duration-200 uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="py-6">
                <Link
                  to="/admin/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium text-text-primary hover:bg-surface-secondary transition-colors duration-200 uppercase tracking-wide"
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
