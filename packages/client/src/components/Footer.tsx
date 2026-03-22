import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import schoolLogo from '../assets/WhatsApp_Image_2025-11-04_at_09.59.04-removebg-preview.png';
import schoolNameText from '../assets/WhatsApp Image 2025-12-11 at 21.13.04-Photoroom.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const aboutUsLinks = [
    { name: 'Our Vision & Mission', href: '/about' },
    { name: 'Our School', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const quickLinks = [
    { name: 'Virtual Tour', href: '/gallery' },
    { name: 'School Campus', href: '/about' },
    { name: 'Committees', href: '/committees' },
    { name: 'Programmes', href: '/academics' },
  ];

  const academicsLinks = [
    { name: 'Pedagogy', href: '/academics' },
    { name: 'Curriculum', href: '/academics' },
    { name: 'Career Counselling', href: '/academics' },
  ];

  const beyondAcademicsLinks = [
    { name: 'Visual Arts', href: '/student-life#visual-arts' },
    { name: 'Performing Arts', href: '/student-life#performing-arts' },
    { name: 'Music', href: '/student-life#music' },
    { name: 'Health & Well-Being', href: '/student-life#health' },
    { name: 'House System', href: '/student-life#house-system' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/share/1AF8tQzQWH/?mibextid=wwXIfr', 
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' 
    },
    { 
      name: 'Twitter', 
      href: 'https://x.com/thepalaceschool?s=21', 
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' 
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/thepalaceschool?igsh=MWdidzVyYWV5NThncw%3D%3D&utm_source=qr', 
      icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/the-palace-school-the-city-palace-jaipur-a21b48374', 
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' 
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription for:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white border-t-4 border-primary-600">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* About Us Section */}
          <div>
            <h4 className="text-base font-bold text-secondary-600 mb-4 uppercase tracking-wide">About Us</h4>
            <ul className="space-y-2.5">
              {aboutUsLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-1">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-base font-bold text-secondary-600 mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-1">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Section */}
          <div>
            <h4 className="text-base font-bold text-secondary-600 mb-4 uppercase tracking-wide">Academics</h4>
            <ul className="space-y-2.5">
              {academicsLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-1">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Beyond Academics Section */}
          <div>
            <h4 className="text-base font-bold text-secondary-600 mb-4 uppercase tracking-wide">Beyond Academics</h4>
            <ul className="space-y-2.5">
              {beyondAcademicsLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-1">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-secondary-600 mb-4 uppercase tracking-wide">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">The City Palace, Jaipur-302002 (Raj.) INDIA</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <div>+91 141-4062847</div>
                  <div>+91 141-4062848</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">info@thepalaceschool.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-secondary-600 mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary-600 p-2.5 rounded-lg transition-all duration-200 group"
                    aria-label={social.name}
                  >
                    <svg
                      className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold text-secondary-600 mb-3">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for latest updates and announcements</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
              />
              <button 
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
              >
                <span>Subscribe</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src={schoolLogo} 
              alt="The Palace School" 
              className="h-20 w-auto"
            />
            <div>
              {/* <img 
                src={schoolNameText} 
                alt="The Palace School" 
                className="h-10 w-auto object-contain"
              /> */}
              {/* <p className="text-sm text-gray-600 mt-1">Excellence in Education</p> */}
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto">
            Nurturing young minds for a brighter tomorrow through excellence in education, 
            character building, and holistic development at The Palace School, City Palace, Jaipur.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary-600 text-white py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-white/90">
              &copy; {currentYear} The Palace School. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-3 md:mt-0">
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/50">|</span>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-white/50">|</span>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
