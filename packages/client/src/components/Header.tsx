import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline';
import schoolLogo from '../assets/WhatsApp_Image_2025-11-04_at_09.59.04-removebg-preview.png';
import schoolNameText from '../assets/WhatsApp Image 2025-12-11 at 21.13.04-Photoroom.png';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // About Us dropdown items
  const aboutDropdownItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Committees', href: '/committees' },
  ];

  // Beyond Academics dropdown items
  const beyondAcademicsItems = [
    { name: 'Visual Arts', href: '/student-life#visual-arts' },
    { name: 'Performing Arts', href: '/student-life#performing-arts' },
    { name: 'Sports', href: '/student-life#sports' },
    { name: 'Music', href: '/student-life#music' },
    { name: 'Health & Well-Being', href: '/student-life#health' },
  ];

  // Main navigation structure
  const mainNavigation = [
    { name: 'Academics', href: '/academics' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Admission Banner */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <span className="font-medium">📢 Admission Open for Session 2026-27</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <PhoneIcon className="h-4 w-4" />
              <span>0141-4062847, 0141-4062848</span>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Global" className="container mx-auto px-4 lg:px-8">
        {/* Mobile: Logo left, menu button right */}
        <div className="flex lg:hidden items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="sr-only">The Palace School</span>
            <img 
              src={schoolLogo} 
              alt="The Palace School Logo" 
              className="h-12 w-auto object-contain"
            />
            {/* <img 
              src={schoolNameText} 
              alt="The Palace School" 
              className="h-8 w-auto object-contain"
            /> */}
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-secondary-600 hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden lg:flex lg:items-center lg:justify-between py-4">
          {/* Logo Section - Left */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={schoolLogo} 
              alt="The Palace School Logo" 
              className="h-20 w-auto object-contain"
            />
            {/* <img 
              src={schoolNameText} 
              alt="The Palace School" 
              className="h-10 w-auto object-contain"
            /> */}
          </Link>

          {/* Navigation - Right */}
          <div className="flex items-center gap-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            >
              HOME
            </Link>

            {/* About Us Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                ABOUT US
                <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
              </MenuButton>
              <MenuItems
                transition
                className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-xl ring-1 ring-gray-200 focus:outline-none transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-2">
                  {aboutDropdownItems.map((item) => (
                    <MenuItem key={item.name}>
                      {({ active }) => (
                        <Link
                          to={item.href}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            active
                              ? 'bg-gray-50 text-primary-600'
                              : 'text-secondary-600'
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

            {/* Academics */}
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Beyond Academics Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                BEYOND ACADEMICS
                <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
              </MenuButton>
              <MenuItems
                transition
                className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-xl ring-1 ring-gray-200 focus:outline-none transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-2">
                  {beyondAcademicsItems.map((item) => (
                    <MenuItem key={item.name}>
                      {({ active }) => (
                        <Link
                          to={item.href}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            active
                              ? 'bg-gray-50 text-primary-600'
                              : 'text-secondary-600'
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

            {/* Contact Us */}
            <Link
              to="/contact"
              className="text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            >
              Contact Us
            </Link>

            {/* Admission CTA Button */}
            <Link
              to="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Admission Enquiry
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">The Palace School</span>
              <img 
                src={schoolLogo} 
                alt="The Palace School Logo" 
                className="h-16 w-auto object-contain"
              />
              {/* <img 
                src={schoolNameText} 
                alt="The Palace School" 
                className="h-8 w-auto object-contain"
              /> */}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-secondary-600 hover:bg-gray-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              {/* Home */}
              <div className="py-6">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-secondary-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Home
                </Link>
              </div>

              {/* About Section in Mobile */}
              <div className="py-6">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">About Us</p>
                <div className="space-y-1">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-secondary-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Navigation */}
              <div className="space-y-1 py-6">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-secondary-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Beyond Academics Section */}
              <div className="py-6">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Beyond Academics</p>
                <div className="space-y-1">
                  {beyondAcademicsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-secondary-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="py-6">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-secondary-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </div>
              
              {/* Admission CTA */}
              <div className="py-6">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg text-center font-semibold transition-colors"
                >
                  Admission Enquiry
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
